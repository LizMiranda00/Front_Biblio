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
  const RegistrarCategoria=async()=>{
    await axios.post('http://192.168.1.7/app/bliblioteca/public/api/categoria',data) //con esto mando
    navigate('/Categoria/Show')
    //console.log(data);
  }
  const [data,setdata]=useState({nombre:''})
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
  return (
    <div>
     <Navegador iconos={iconos}/>
     <div class='container'>
      <div class="card w-100 m-1" >
        <div class="card-body">
          <h5 className="card-title">Registro de Categoría</h5>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="nombre" name='nombre' data={data} setData={setdata}/>
            </div>
            <button className="btn btn-primary" onClick={RegistrarCategoria}>Registrar Categoría</button>
        </div>
      </div>
     </div>
    </div>
  )
}
export default Create