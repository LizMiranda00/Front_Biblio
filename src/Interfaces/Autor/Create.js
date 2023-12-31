import React, { useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import Inputnum from '../../Componentes/Inputnum';
import Inputtexto from '../../Componentes/Inputtexto';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  /*crear autor*/
  const navigate=useNavigate();
  const RegistrarAutor=async()=>{
    await axios.post('http://192.168.100.120/app/bliblioteca/public/api/autor',data) //con esto mando
    navigate('/Autor/Delete')
    //console.log(data);
  }
  const [data,setdata]=useState({ci:0,nombre:''})
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
  return (

    <div>
     <Navegador iconos={iconos}/>
     <div class="container d-flex justify-content-center align-items-start">
        <div class="card w-50" >
          <div class="card-body">
            <h5 className="card-title">Registro de Autor</h5>

            <Inputnum tInput='Ci:' name='id'/*aqui pongo con nombre me esta recibienco en name*/data={data} setData={setdata}/>
            <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
            
          <button className="btn btn-primary" onClick={RegistrarAutor}>Registrar Autor</button>
        </div>
      </div>
     </div>
     </div>
  )
}
export default Create
