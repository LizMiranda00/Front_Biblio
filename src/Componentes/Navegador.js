import React from 'react'
import "../App.css"
const Navegador = (props) => {
  return (
    <nav>
        {/* recorre los elememtos de la lista que le mando/// dentro las etiquetas elemetos */}
        {props.iconos.map((icon)=>(
            <>
             <img src={icon.src} alt={icon.alt}/>
            </>
        ))}
    </nav>
  )
}

export default Navegador