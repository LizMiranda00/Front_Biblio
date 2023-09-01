import React from 'react'

const Inputtexto = (props) => {
  const onChange = (e) => {
    props.setData({...props.data, [props.name]: e.target.value})
    //console.log(data)
}
  return (
    <div>
       <label className='letras' >{props.letra}</label>
       <input className='input' type='text'name={props.name} onChange={onChange} 
       defaultValue={props.value? props.value: null}/> 
    </div>
  )
}

export default Inputtexto