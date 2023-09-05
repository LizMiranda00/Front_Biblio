import React, { useEffect, useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Esto es necesario para evitar problemas de accesibilidad


const Show = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingCliente, setEditingCliente] = useState(null); // Estado para el autor que se está editando
  const [newClieName, setNewClieName] = useState(''); // Estado para el nuevo nombre del autor
  const [newClieCI, setNewClieCI] = useState(''); // Estado para el nuevo carnet del autor

 
  const openModal = (cliente) => {
    setEditingCliente(cliente); // Al hacer clic en "Editar", guarda el autor que se está editando
    setNewClieName(cliente.nombre); // Establece el nombre actual como valor inicial en el input
    setNewClieCI(cliente.id); // Establece el carnet actual como valor inicial en el input
    setModalIsOpen(true); // Abre el modal
  };

  const closeModal = () => {
    setEditingCliente(null); // Borra el autor que se está editando al cerrar el modal
    setNewClieName(''); // Restablece el estado del nombre
    setModalIsOpen(false); // Cierra el modal
     // Recarga la página después de cerrar el modal
  window.location.reload();
  };

  const navigate=useNavigate();
  const toCreate=()=>{
    navigate('/Cliente/Create')
  }
  /*para obtener la lista de categorias en el card de la bd*/ 
   const [listcliente,setlistcliente]=useState([])
   const getData=async()=>{let response=await axios.get('http://192.168.1.2/app/bliblioteca/public/api/clientes') 
   setlistcliente(response.data)
  }
  /**el get data esta obteniendo categorias y van sumando cada que se crea */
   useEffect(()=>{getData()},[])
   
   const updateClie = async () => {
    try {
      // Realiza una solicitud PUT al servidor para actualizar el nombre de la categoria
      await axios.put(`http://192.168.1.2/app/bliblioteca/public/api/cliente/${editingCliente.id}`, {
        nombre: newClieName,
      });

      // Actualiza el nombre del autor en la lista local
      const updatedClient = listcliente.map((cliente) =>
        cliente.id === editingCliente.id ? { ...cliente, nombre: newClieName } : cliente
      );
      setlistcliente(updatedClient);

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
  const filteredClient = listcliente.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );



    const iconos=[{src:home,alt:'home'},{src:categ,alt:'clientes'}] 
    
  return (
  <div>
    <Navegador iconos={iconos}/>
    <div class='container'>
      <h1>Cliente</h1>
      <div class='row'>
          <div class='col-9'>
            <input value={search} onChange={searcher}className='buscador' type='search' placeholder='Ingrese el nombre del cliente que desea buscar' />
          </div>
          <div class='col-3'>
            <button class="card-button btn btn-primary" onClick={toCreate} >Crear Cliente</button> 
          </div>
      </div>
      
      <div className='cardlist'>{filteredClient.map((cliente)=>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center align-items-center">{cliente.nombre}</h5>
            <p class="card-text">Id:  <strong>{cliente.id}</strong></p>
            <p class="card-text">Nombre: <strong>{cliente.nombre}</strong></p>
                
            <div class="card-buttons">
            <div>
      <button className='card-button btn btn-primary' onClick={() => openModal(cliente)}>Editar</button>
       {modalIsOpen && editingCliente === cliente  && (
                      <Modal
                        className='react-modal-content'
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel='Editar cliente '
                      >
                         <h1>Editar cliente </h1>
                        <label>Codigo:</label>
                        <input type='number' value={newClieCI} readOnly />
                        <label>Nombre:</label>
                        <input
                        type='text'
                        value={newClieName}
                        onChange={(e) => setNewClieName(e.target.value)}
                      />
                        <button className='card-button btn btn-primary' onClick={updateClie}>
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