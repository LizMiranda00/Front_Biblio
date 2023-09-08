import React from 'react';

const Inputnum = (props) => {
  const onChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 8) {
      props.setData({ ...props.data, [props.name]: parseInt(inputValue, 10) });
    }
  };

  return (
    <div>
      <label className='form-label'>{props.tInput}</label>
      <input
        className='form-control'
        name={props.name}
        type='number'
        onChange={onChange}
        value={props.data[props.name] || ''}
      />
    </div>
  );
};

export default Inputnum;
