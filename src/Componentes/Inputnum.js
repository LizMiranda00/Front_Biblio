import React from 'react'

const Inputnum = (props) => {
  return (
    <div>
       <label className='letras' >{props.carnet}</label>
       <input className='input' type='number' placeholder='Ingrese su numero de Ci' /> 
    </div>
  )
}

export default Inputnum