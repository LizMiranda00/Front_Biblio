import React, { useEffect, useState } from 'react'


import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Componentes/Navbar";

import {ipAddress} from "../../Componentes/confip";
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Show = () => {
  /** Modals a editar */
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [editingLibro, setEditingLibro] =useState(null);
  const [newLibId,setNewLibId] = useState('');
  const [newLibName, setNewLibName] =useState('');
  const [newLibEdicion, setNewLibEdicion] = useState('');
  const [newLibEstado,setNewLibEstado] = useState('');

  const openModal = (libro) =>{
    	setEditingLibro(libro);
      setNewLibId(libro.id);
      setNewLibName(libro.nombre);
      setNewLibEdicion(libro.edicion);
      setNewLibEstado(libro.estado);
      setModalIsOpen(true);
  };

  const closeModal = ()=>{
    setEditingLibro(null);
    setNewLibName('');
    setNewLibEdicion('');
    setNewLibEstado('');
    setModalIsOpen(false)
    window.location.reload();
  };


  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Libro')
  }
  const toCreate=()=>{
    navigate('/Libro/Create')
  }
  /*para obtener la lista de categorias en el card de la bd*/ 
   const [listlibro,setlistlibro]=useState([])
   const getData=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/libros`) 
   setlistlibro(response.data)
  }
  /**el get data esta obteniendo categorias y van sumando cada que se crea */
   useEffect(()=>{getData()},[])

   
  
  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convierte la entrada del usuario a minúsculas
  }

  const [search, setSearch] = useState("");
  const filteredLibros = listlibro.filter((libro) =>
    libro.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );
    
  const updateLib = async () => {
    try {
      await axios.put(`http://${ipAddress}/app/bliblioteca/public/api/categoria/${editingLibro.id}`,{
        nombre: newLibName,
        estado: newLibEstado,
        edicion: newLibEdicion,
      })

      const updatedLib = listlibro.map((libro)=>
        libro.id === editingLibro.id ? {...libro, 
          nombre: newLibName,
          estado: newLibEstado,
          edicion: newLibEdicion
      } : libro
      );
      setlistlibro(updatedLib);

      closeModal();
    } catch (error) {
      console.error("Error al actulizar el libro:", error);
    }
  };

  return (
  <div>
    <Navbar/>
    <div class='container'>
      <h1>Libros</h1>
      <div class='row'>
          <div class='col-9'>
          <input value={search} onChange={searcher} className='buscador' type='text' placeholder='Introduzca nombre del libro' />
          </div>
          <div class='col-3'>
            <button class="card-button btn btn-primary" onClick={toCreate} >Agregar Libro</button> 
          </div>
      </div>
      
      <div className='cardlist'>{filteredLibros.map((libro)=>
        <div class={`card ${libro.libre === 1 ? 'bg-success' : 'bg-danger'}`}>
          <div class="card-body">
            <h5 class="card-title text-center align-items-center" >{libro.nombre} </h5>
            <p class="card-text">Categoria: <strong>{libro.categoria.nombre}</strong></p>
            <ul class="card-text">Autores: <strong>{libro.autors.map((autor,id)=>
                <span key={id}><li class="card-text">{autor.nombre}</li></span>)}</strong>
            </ul>
            <p class="card-text">Edicion: <strong>{libro.edicion}</strong> Id:  <strong>{libro.id}</strong></p>
            <div class="card-buttons">
            <button className='card-button btn btn-primary' onClick={() => openModal(libro)}>Editar</button>
            {modalIsOpen && editingLibro === libro &&(
              <Modal
                className='react-modal-content'
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Editar libro'
              >
                <h1>Editar categoria </h1>
                <label>Codigo:</label>
                <input type='number' value={newLibId} readOnly/>
                <label>Nombre:</label>
                <input
                  type='text'
                  value={newLibName}
                  onChange={(e) => setNewLibName(e.target.value)}
                />
                <label>Estado:</label>
                <input
                  type='text'
                  value={newLibEstado}
                  onChange={(e) => setNewLibEstado(e.target.value)}
                />
                <label>Edicion:</label>
                <input
                  type='text'
                  value={newLibEdicion}
                  onChange={(e) => setNewLibEdicion(e.target.value)}
                />
                <button className='card-button btn btn-primary' onClick={updateLib}>
                  Actualizar</button>

              </Modal>
            )}


              <button class="card-button btn btn-primary" onClick={backtolist} >Eliminar</button>
            </div>
          </div>   
        </div>)}
      </div>
  </div>
    

  </div>
  )
}

export default Show