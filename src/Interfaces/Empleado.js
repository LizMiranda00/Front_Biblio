import React from 'react'
import home from '../img/home.png';
import categ from '../img/1164620.png';
import Navegador from '../Componentes/Navegador';
import Inputnum from '..//Componentes/Inputnum';
import './Estilos.css'

const Empleado = () => {
    const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}]
  return (
    <div class='container' style='background-image: url("ruta/a/tu/imagen.jpg");'/**buscar fondopara login */>
     <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                  <Navegador iconos={iconos}/>
                  <h1>Empleado</h1>
                  <div>
                    <Inputnum carnet='Ci:'/>
                    <label className='letras' >Contraseña:</label>
                    <input className='input' type='pasword' placeholder='Ingrese su contraseña' />
                  </div>
                  <button className='button'>Ingresar</button>
                </div>
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Empleado