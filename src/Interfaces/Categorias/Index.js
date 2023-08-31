import React from 'react';
import home from '../../img/home.jpg';
import lupa from '../../img/lupa.png';
import share from '../../img/share.jpg';
import Navegador from '../../Componentes/Navegador';
import '../Estilos.css'

const Index = () => {
    const iconos=[{src:home,alt:'home'}]

  return (
    <div>
        <Navegador iconos={iconos}/>
        
        <h1>Libros</h1>
        {/*luego implementar*/}
        <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
         <div>
            <img className='lupa' src={lupa} alt="lupa"/>
         </div>
            <div class= "table">

            </div>
            <div class="card">
                 <h2 class="card-title">Título de la Tarjeta</h2>
                 <img className='card-image' src={share} alt="fuerza de shesid"/>
                 <p class="card-description">Descripción de la tarjeta.</p>
                 <div class="card-buttons">
                <button class="card-button">Editar</button>
                <button class="card-button">Eliminar</button>
                <button class="card-button">Prestar</button>
            </div>
        </div>
        

    </div>
    
  )
}

export default Index