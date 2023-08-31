import React from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';


const Delete = () => {
  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Autor/Edit')
  }
 
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
  return (
    <div>
    <Navegador iconos={iconos}/>
    <h1>Autores</h1>
    <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
    <div class="card">
      <label className='letraAutor'>Nombre:</label>
      <input className='autorinput' type='text'/> <br></br>
      <label className='letraAutor'>Ci:</label>
      <input className='autorinput' type='number'/>
       <div class="card-buttons">
            <button class="card-button" onClick={backtolist}>Editar</button>
            <button class="card-button" >Eliminar</button>
            
       </div> <br></br>
       <textarea></textarea>
    </div>

    </div>
  )
}

export default Delete