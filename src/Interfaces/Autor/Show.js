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
    navigate('/Autor')
  }
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
            <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
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
