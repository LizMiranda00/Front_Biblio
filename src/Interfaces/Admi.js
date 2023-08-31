import React from 'react'
import home from '../img/home.png';
import categ from '../img/1164620.png';
import Navegador from '../Componentes/Navegador';
import Inputnum from '..//Componentes/Inputnum';
import './Estilos.css'

const Admi = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}]
  return (
    <div>
        <Navegador iconos={iconos}/>
        <h1>Administrador</h1>
        <div>
        <Inputnum carnet='Ci:'/>
        <label className='letras' >Contraseña:</label>
        <input className='input' type='pasword' placeholder='Ingrese su contraseña' />
        </div>
        <button className='button'>Ingresar</button>
    </div>
  )
}

export default Admi