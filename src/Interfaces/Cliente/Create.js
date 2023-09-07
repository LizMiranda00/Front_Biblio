import React, { useState } from 'react'
import '../Estilos.css'
import Inputnum from '../../Componentes/Inputnum';
import Inputtexto from '../../Componentes/Inputtexto';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Componentes/Navbar";

import axios from 'axios';
import {ipAddress} from "../../Componentes/confip";

const Create = () => {
  /*crear autor*/
  const navigate=useNavigate();
  const RegistrarCliente=async()=>{
    await axios.post(`http://${ipAddress}/app/bliblioteca/public/api/cliente`,data) //con esto mando
    navigate('/Cliente')
    //console.log(data);
  }
  const [data,setdata]=useState({ci:0,nombre:''})
  return (

    <div>
     <Navbar/>
     <div class="container d-flex justify-content-center align-items-start">
        <div class="card w-50" >
          <div class="card-body">
            <h5 className="card-title">Registro de Cliente</h5>

            <Inputnum tInput='Ci:' name='id'/*aqui pongo con nombre me esta recibienco en name*/data={data} setData={setdata}/>
            <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
            
          <button className="btn btn-primary" onClick={RegistrarCliente}>Registrar Cliente</button>
        </div>
      </div>
     </div>
     </div>
  )
}
export default Create
