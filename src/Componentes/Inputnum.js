import React from 'react'

const Inputnum = (props) => {
  const onChange = (e) => {
   props.setData({...props.data, [props.name]: parseInt(e.target.value)})
    //console.log(props.data) IMPRIME A CADA RATO LEL NUMERO A MEDIDA QUE ANOTO
}
  return (
    <div>
       <label className='letras' >{props.carnet}</label>
       <input className='input' name={props.name} type='number' onChange={onChange} 
       defaultValue={props.value? props.value: null} /> 
    </div>
  )
}

export default Inputnum