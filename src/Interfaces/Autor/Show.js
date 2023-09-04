import React, { useEffect, useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import Inputnum from '../../Componentes/Inputnum';
import Inputtexto from '../../Componentes/Inputtexto';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Esto es necesario para evitar problemas de accesibilidad




const Show = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [editingAutor, setEditingAutor] = useState(null); // Agrega un estado para controlar el autor que se está editando

  const openModal = (autor) => {
    setEditingAutor(autor); // Al hacer clic en "Editar", guarda el autor que se está editando
    setModalIsOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setEditingAutor(null); // Borra el autor que se está editando al cerrar el modal
    setModalIsOpen(false); // Cierra el modal
  };

  const navigate=useNavigate();
 /**  const backtolist=()=>{
    navigate('/Autor')
  }*/
  const toCreate=()=>{
    navigate('/Autor/Create')
  }
  /*para obtener la lista de autores en el card de la bd*/ 
  const [listautor,setlistautor]=useState([])
  const getData=async()=>{let response=await axios.get('http://192.168.1.6/app/bliblioteca/public/api/autores') 
  setlistautor(response.data)
 }
 /**el get data esta obteniendo autores y van sumando cada que se crea */
  useEffect(()=>{getData()},[])
  

  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convierte la entrada del usuario a minúsculas
  }
  const [search, setSearch] = useState("");
  const filteredAuthors = listautor.filter((autor) =>
    autor.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );


   const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 

  return (
  <div>
    <Navegador iconos={iconos}/>
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
                        <Inputnum carnet='Ci:' />
                        <label>Nombre:</label>
                        <Inputtexto letra='Nombre:' />
                        <button className='card-button btn btn-primary' onClick={closeModal}>Actualizar</button>
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
