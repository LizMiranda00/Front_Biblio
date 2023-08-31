import React from 'react'
import home from '../img/home.png';
import categ from '../img/1164620.png';
import Navegador from '../Componentes/Navegador';
import Inputtexto from '../Componentes/Inputtexto';
import Inputnum from '..//Componentes/Inputnum';
import './Estilos.css';
const Prestamo = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}]
  return (
    <div>
        <Navegador iconos={iconos}/>
        <h1>Prestamo</h1>
        <div className='formu'>
        <Inputtexto  letra='Nombre y apellido:' placeholder='Ingrese su nombre y apellido' />
        <Inputnum carnet='Ci:'/>
        <label className='letras' for="start">Fecha Inicial:</label>
        <input className='input' type="date" id="start" name="trip-start" value="2023-08-29" min="2023-08-29" max="2024-12-31" /> <br></br>
        <label className='letras' for="start">Fecha Final:</label>
        <input className='input' type="date" id="start" name="trip-start" value="2023-08-29" min="2023-08-29" max="2024-12-31" />
        </div>
        <button className='button'>Registrar prestamo</button>


        

    </div>
  )
}

export default Prestamo