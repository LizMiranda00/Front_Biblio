import React, { useEffect, useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import {ipAddress} from "../../Componentes/confip";

const Show = () => {
  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Categoria/Create')
  }
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
   
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
    
  return (
  <div>
    <Navegador iconos={iconos}/>
    <div class='container'>
      <h1>Categoria</h1>
      <div class='row'>
          <div class='col-9'>
          <input value={search} onChange={searcher} className='buscador' type='text' placeholder='Introduzca nombre del la categoria' />
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