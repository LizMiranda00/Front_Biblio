import React, { useState} from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import Inputtexto from '../../Componentes/Inputtexto';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  /*crear autor*/
  const navigate=useNavigate();
  const RegistrarCategoria=async()=>{
    await axios.post('http://192.168.1.2/app/bliblioteca/public/api/categoria ',data) //con esto mando
    navigate('/Categoria/Show')
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
             <h5 className="card-title">Registro Categoria</h5>
 
             
             <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
             
           <button className="btn btn-primary" onClick={RegistrarCategoria}>Registrar Categoria</button>
         </div>
       </div>
      </div>
      </div>
  )
}
export default Create
