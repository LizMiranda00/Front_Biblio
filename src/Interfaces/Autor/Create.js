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
    await axios.post('http://192.168.100.5/Proyecto_biblio/bliblioteca/public/api/autor',data) //con esto mando
    navigate('/Autor/Delete')
    //console.log(data);
  }
  const [data,setdata]=useState({ci:0,nombre:''})
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
  return (
    <div>
     <Navegador iconos={iconos}/>
     <h1>Registro de autor</h1>
     <Inputnum carnet='Ci:' name='id'/*aqui pongo con nombre me esta recibienco en name*/data={data} setData={setdata}/>
    <Inputtexto letra='Nombre:'name='nombre' data={data} setData={setdata}/> 
     <button className='button' onClick={RegistrarAutor}>Registrar Autor</button>
    </div>
  )
}
export default Create