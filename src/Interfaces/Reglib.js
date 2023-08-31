import React from 'react'
import './Estilos.css'
import Navegador from '../Componentes/Navegador';
import home from '../img/home.png';
import categ from '../img/1164620.png';
import Inputtexto from '../Componentes/Inputtexto';


const Reglib = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}]
  return (
    <div>
        <Navegador iconos={iconos}/>
        <h1>Registrar libro</h1>
        <Inputtexto letra='Nombre_Libro:' placeholder="Ingrese el nombre del libro"/>
        <Inputtexto letra='Autor:' placeholder='Ingrese el nombre del autor'/>
        <label className='letras'>Edicion</label>
       <input className='input' type='number'min="0" max="100"/>
       <label className='letras' for="fruits">Categoria:</label>
       <select className='input' id="categories" name="categories">
        <option value="fantasy">Fantasía</option>
        <option value="mystery">Misterio</option>
        <option value="romance">Romance</option>
        <option value="science-fiction">Ciencia Ficción</option>
        <option value="historical-fiction">Ficción Histórica</option>
    </select>
    <button className='button'>Registrar libro</button>
    </div>
  )
}

export default Reglib