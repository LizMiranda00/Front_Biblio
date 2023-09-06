import React, {useEffect, useState} from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import Inputtexto from '../../Componentes/Inputtexto';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { ipAddress } from "../../Componentes/confip";

const Create = () => {
  /*crear autor*/
  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Categoria')
  }
  /*para obtener la lista de categorias en el card de la bd*/ 
  const [listcategoria,setlistcategoria]=useState([])
  const getData=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/categorias`) 
  setlistcategoria(response.data)
 }
 /**el get data esta obteniendo categorias y van sumando cada que se crea */
  useEffect(()=>{getData()},[])
  
   const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
   

  const RegistrarCategoria=async()=>{
    await axios.post(`http://${ipAddress}/app/bliblioteca/public/api/categoria`,data) //con esto mando
    navigate('/Categoria/')
    //console.log(data);
  }
  const [data,setdata]=useState({ci:0,nombre:''})
  

  
    return (

    <div>
     <Navegador iconos={iconos}/>
     <div class="container ">
        <h1>Categoria</h1>
        <div class='row justify-content-center' className='Buscador'>
          <div class='cl-12 '>
          <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
          </div>    
        </div>
        <div class='row justify-content-center'>
        <div class="col-12">
          <div class="card w-50" >
            <div class="card-body">
              <h5 className="card-title">Registro de Categoria</h5>
              <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
              <button className="btn btn-primary" onClick={RegistrarCategoria}>Registrar Categoria</button>
            </div>
          </div>
          </div>
        </div>
        <div class='row'>
          <div class="col-12">
            <div className='cardlist'>{listcategoria.map((categoria)=>
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
      </div>
      </div>
  )
}
export default Create
