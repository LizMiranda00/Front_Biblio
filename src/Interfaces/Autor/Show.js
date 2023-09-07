import React, { useEffect, useState } from 'react'
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Componentes/Navbar";

import axios from 'axios';
import { ipAddress } from "../../Componentes/confip";

import Modal from 'react-modal';

Modal.setAppElement('#root'); // Esto es necesario para evitar problemas de accesibilidad

const Show = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingAutor, setEditingAutor] = useState(null); // Estado para el autor que se está editando
  const [newAuthorName, setNewAuthorName] = useState(''); // Estado para el nuevo nombre del autor
  const [newAuthorCI, setNewAuthorCI] = useState(''); // Estado para el nuevo carnet del autor

 
  const openModal = (autor) => {
    setEditingAutor(autor); // Al hacer clic en "Editar", guarda el autor que se está editando
    setNewAuthorName(autor.nombre); // Establece el nombre actual como valor inicial en el input
    setNewAuthorCI(autor.id); // Establece el carnet actual como valor inicial en el input
    setModalIsOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setEditingAutor(null); // Borra el autor que se está editando al cerrar el modal
    setNewAuthorName(''); // Restablece el estado del nombre
    setModalIsOpen(false); // Cierra el modal
     // Recarga la página después de cerrar el modal
  window.location.reload();
  };

  const navigate=useNavigate();
  const toCreate=()=>{
    navigate('/Autor/Create')
  }
  /*para obtener la lista de autores en el card de la bd*/ 
  const [listautor,setlistautor]=useState([])
  const getData=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/autores`) 
  setlistautor(response.data)
 }
 /**el get data esta obteniendo autores y van sumando cada que se crea */
  useEffect(()=>{getData()},[])
  
  const updateAuthor = async () => {
    try {
      // Realiza una solicitud PUT al servidor para actualizar el nombre del autor
      await axios.put(`http://${ipAddress}/app/bliblioteca/public/api/autor/${editingAutor.id}`, {
        nombre: newAuthorName,
      });

      // Actualiza el nombre del autor en la lista local
      const updatedAuthors = listautor.map((autor) =>
        autor.id === editingAutor.id ? { ...autor, nombre: newAuthorName } : autor
      );
      setlistautor(updatedAuthors);

      closeModal(); 
      // Cierra el modal después de una actualización exitosa
    } catch (error) {
      console.error("Error al actualizar el autor:", error);
      // Maneja errores aquí, muestra un mensaje de error o toma otras medidas necesarias
    }
  };

  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convierte la entrada del usuario a minúsculas
  }
  const [search, setSearch] = useState("");
  const filteredAuthors = listautor.filter((autor) =>
    autor.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );



  return (
  <div>
    <Navbar/>
    <div class='container'>
      <h1>Autor</h1>
      <div class='row'>
          <div class='col-9'>
          <input value={search} onChange={searcher} className='buscador' type='text' placeholder='Introduzca nombre del autor' />
          </div>
          <div class='col-3'>
            <button class="card-button btn btn-primary" onClick={toCreate} >Crear Autor</button> 
          </div>
      </div>
      
      <div className='cardlist'>{filteredAuthors.map((autor)=>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center align-items-center">{autor.nombre}</h5>
            <p class="card-text">Id:  <strong>{autor.id}</strong></p>
            <p class="card-text">Nombre: <strong>{autor.nombre}</strong></p>
            
    <div class="card-buttons">

      <div>
      <button className='card-button btn btn-primary' onClick={() => openModal(autor)}>Editar</button>
       {modalIsOpen && editingAutor === autor && (
                      <Modal
                        className='react-modal-content'
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel='Editar autor'
                      >
                         <h1>Editar autor</h1>
                        <label>Ci:</label>
                        <input type='number' value={newAuthorCI} readOnly />
                        <label>Nombre:</label>
                        <input
                        type='text'
                        value={newAuthorName}
                        onChange={(e) => setNewAuthorName(e.target.value)}
                      />
                        <button className='card-button btn btn-primary' onClick={updateAuthor}>
                          Actualizar
                        </button>
                      </Modal>
                    )}
      </div>
      
      <button class="card-button btn btn-primary"  >Eliminar</button>
    </div>
          </div>   
        </div>)}
      </div>
  </div>
    

  </div>
  )
}

export default Show
