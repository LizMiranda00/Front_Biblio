import React from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import Inputnum from '../../Componentes/Inputnum';
import Inputtexto from '../../Componentes/Inputtexto';

const Create = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 

  return (
    <div>
     <Navegador iconos={iconos}/>
     <h1>Registro de autor</h1>
     <Inputnum carnet='Ci:'/>
    <Inputtexto letra='Nombre:'/> 
     <button className='button'>Registrar Autor</button>
    </div>
  )
}

export default Create