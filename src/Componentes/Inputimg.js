import React from 'react';

const Inputimg = (props) => {
  const onChange = (e) => {
    const selectedFile = e.target.files[0]; // Obtener el primer archivo seleccionado
    props.setData({ ...props.data, [props.name]: selectedFile });
  };

  return (
    <div>
      <label className='form-label'>{props.tInput}</label>
      <input
        className='form-control'
        type='file'
        name={onChange}
        
      />
    </div>
  );
};

export default Inputimg;