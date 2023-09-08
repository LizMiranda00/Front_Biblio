import React, { useEffect, useState } from 'react'

import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Componentes/Navbar";

import axios from 'axios';
import {ipAddress} from "../../Componentes/confip";
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Esto es necesario para evitar problemas de accesibilidad




const Show = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingCategoria, setEditingCategoria] = useState(null); // Estado para el autor que se está editando
  const [newCateName, setNewCateName] = useState(''); // Estado para el nuevo nombre del autor
  const [newCateCI, setNewCateCI] = useState(''); // Estado para el nuevo carnet del autor

 
  const openModal = (categoria) => {
    setEditingCategoria(categoria); // Al hacer clic en "Editar", guarda el autor que se está editando
    setNewCateName(categoria.nombre); // Es estado del nombre
    setModalIsOpen(false); // Cierratablece el nombre actual como valor inicial en el input
    setNewCateCI(categoria.id); // Establece el carnet actual como valor inicial en el input
    setModalIsOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setEditingCategoria(null); // Borra el autor que se está editando al cerrar el modal
    setNewCateName(''); // Restablece el el modal
     // Recarga la página después de cerrar el modal
  window.location.reload();
  };

  const navigate=useNavigate();
  const toCreate=()=>{
    navigate('/Categoria/Create')
  }
  /*para obtener la lista de categorias en el card de la bd*/ 
   const [listcategoria,setlistcategoria]=useState([])
   const getData=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/categorias`) 

   setlistcategoria(response.data)
  }
  /**el get data esta obteniendo categorias y van sumando cada que se crea */
   useEffect(()=>{getData()},[])
  
  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convierte la entrada del usuario a minúsculas
  }
  const [search, setSearch] = useState("");
  const filteredCategorias = listcategoria.filter((Categoria) =>
  Categoria.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );
   
   const updateCate = async () => {
    try {
      // Realiza una solicitud PUT al servidor para actualizar el nombre de la categoria
      await axios.put(`http://${ipAddress}/app/bliblioteca/public/api/categoria/${editingCategoria.id}`, {
        nombre: newCateName,
      });

      // Actualiza el nombre del autor en la lista local
      const updatedCateg = listcategoria.map((categoria) =>
        categoria.id === editingCategoria.id ? { ...categoria, nombre: newCateName } : categoria
      );
      setlistcategoria(updatedCateg);

      closeModal(); 
      // Cierra el modal después de una actualización exitosa
    } catch (error) {
      console.error("Error al actualizar el autor:", error);
      // Maneja errores aquí, muestra un mensaje de error o toma otras medidas necesarias
    }
  };



    
  return (
  <div>
    <Navbar/>
    <div class='container'>
      <h1>Categoria</h1>
      <div class='row'>
          <div class='col-9'>
            <input value={search} onChange={searcher}className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
          </div>
          <div class='col-3'>
            <button class="card-button btn btn-primary" onClick={toCreate} >Crear Categoria</button> 
          </div>
      </div>
      <div className='cardlist'>{filteredCategorias.map((categoria)=>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center align-items-center">{categoria.nombre}</h5>
            <p class="card-text">Id:  <strong>{categoria.id}</strong></p>
            <p class="card-text">Nombre: <strong>{categoria.nombre}</strong></p>
            <div class="card-buttons">
            <div>
      <button className='card-button btn btn-primary' onClick={() => openModal(categoria)}>Editar</button>
       {modalIsOpen && editingCategoria === categoria  && (
                      <Modal
                        className='react-modal-content'
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel='Editar categoria '
                      >
                         <h1>Editar categoria </h1>
                        <label>Codigo:</label>
                        <input type='number' value={newCateCI} readOnly />
                        <label>Nombre:</label>
                        <input
                        type='text'
                        value={newCateName}
                        onChange={(e) => setNewCateName(e.target.value)}
                      />
                        <button className='card-button btn btn-primary' onClick={updateCate}>
                          Actualizar
                        </button>
                      </Modal>
                    )}
      </div>
   
              <button class="card-button btn btn-primary" >Eliminar</button>
            </div>
          </div>   
        </div>)}
      </div>
  </div>
    

  </div>
  )
}

export default Show