import React, {useEffect, useState} from 'react'
import '../Estilos.css'
import Inputtexto from '../../Componentes/Inputtexto';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Componentes/Navbar";

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
  const getData=async()=>{let response=await axios.get(`http://${ipAddress}/bliblioteca/public/api/categorias`) 
  setlistcategoria(response.data)
 }
 /**el get data esta obteniendo categorias y van sumando cada que se crea */
  useEffect(()=>{getData()},[])
   
   

  const RegistrarCategoria=async()=>{
    await axios.post(`http://${ipAddress}/bliblioteca/public/api/categoria`,data) //con esto mando
    navigate('/Categoria/')
    //console.log(data);
  }
  const [data,setdata]=useState({ci:0,nombre:''})
  

  
    return (

    <div>
     <Navbar/>
     <div class="container d-flex justify-content-center align-items-start">
        <div class='row justify-content-center'>
        <div class="col-12">
          <div class="card w-100" >
            <div class="card-body">
              <h5 className="card-title">Registro de Categoria</h5>
              <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
              <button className="btn btn-primary" onClick={RegistrarCategoria}>Registrar Categoria</button>
            </div>
          </div>
          </div>
        </div>
        
      </div>
      </div>
  )
}
export default Create