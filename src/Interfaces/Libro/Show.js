import React, { useEffect, useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Show = () => {
  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/libros')
  }
  const toCreate=()=>{
    navigate('/libros/Create')
  }
  /*para obtener la lista de categorias en el card de la bd*/ 
   const [listlibro,setlistlibro]=useState([])
   const getData=async()=>{let response=await axios.get('http://192.168.100.254/app/bliblioteca/public/api/libros') 
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
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
    
  return (
  <div>
    <Navegador iconos={iconos}/>
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
           <img src={libro.imagen} class="card-img-top" alt="Imagen"></img>
          <div class="card-body">
            <h5 class="card-title text-center align-items-center" >{libro.nombre} </h5>
            <p class="card-text">Categoria: <strong>{libro.categoria.nombre}</strong></p>
            <ul class="card-text">Autores: <strong>{libro.autors.map((autor,id)=>
                <span key={id}><li class="card-text">{autor.nombre}</li></span>)}</strong>
            </ul>
            <p class="card-text">Edicion: <strong>{libro.edicion}</strong> Id:  <strong>{libro.id}</strong></p>
            <div class="card-buttons">
              <button class="card-button btn btn-primary" >Editar</button>
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