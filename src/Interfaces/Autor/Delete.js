import React, { useEffect, useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Delete = () => {
  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Autor/Edit')
  }
  /*para obtener la lista de autores en el card de la bd*/ 
   const [listautor,setlistautor]=useState([])
   const getData=async()=>{let response=await axios.get('http://192.168.1.7/app/bliblioteca/public/api/autores') 
   setlistautor(response.data)
  }
  /**el get data esta obteniendo autores y van sumando cada que se crea */
   useEffect(()=>{getData()},[])
   
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
  return (
    <div>
    <Navegador iconos={iconos}/>
    <h1>Autores</h1>
    <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
    <div className='cardlist'>{listautor.map((autor)=>
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
  )
}

export default Delete