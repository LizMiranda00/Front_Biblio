import React from 'react'

const Inputtexto = (props) => {
  return (
    <div>
       <label className='letras' >{props.letra}</label>
       <input className='input' type='text' /> 
    </div>
  )
}

export default Inputtexto