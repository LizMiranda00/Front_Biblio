import React from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import Inputnum from '../../Componentes/Inputnum';
import Inputtexto from '../../Componentes/Inputtexto';

const Edit = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 

  return (
    <div>
     <Navegador iconos={iconos}/>
     <h1>Editar autor</h1>
     <Inputnum carnet='Ci:'/>
    <Inputtexto letra='Nombre:'/> 
     <button className='button'>Actualizar</button>
    </div>
  )
}

export default Edit