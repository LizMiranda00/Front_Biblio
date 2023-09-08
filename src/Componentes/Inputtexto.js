import React from 'react';

const Inputtexto = (props) => {
  const onChange = (e) => {
    let inputValue = e.target.value;

    // Limitar a 250 caracteres
    if (inputValue.length > 250) {
      inputValue = inputValue.slice(0, 250);
    }

    // Remover caracteres especiales
    inputValue = inputValue.replace(/[^\w\s]/gi, '');

    props.setData({ ...props.data, [props.name]: inputValue });
  };

  return (
    <div>
      <label className='form-label'>{props.tInput}</label>
      <input
        className='form-control'
        type='text'
        name={props.name}
        onChange={onChange}
        value={props.data[props.name] || ''}
      />
    </div>
  );
};

export default Inputtexto;
