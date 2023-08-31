import React from 'react'
import home from '../img/home.png';
import categ from '../img/1164620.png';
import Navegador from '../Componentes/Navegador';
import Inputtexto from '../Componentes/Inputtexto';
import Inputnum from '../Componentes/Inputnum';
import './Estilos.css'
const Regper = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}]
  return (
    <div>
        <Navegador iconos={iconos}/>
        <h1>Registro de personal</h1>
        <Inputnum carnet='Ci:'/>
        <Inputtexto letra='Nombre:' placeholder='Ingrese su nombre completo'/>
         <label className='letras'>E-mail:</label>
         <input className='input' type='email' />
         <label className='letras'>Contraseña:</label>
         <input className='input'/>
         <Inputtexto letra='Cargo'/>
         <button className='button'>Registrar Personal</button>
    </div>
  )
}

export default Regper