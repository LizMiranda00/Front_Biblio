import React, { useState } from 'react';
import Navbar from "../Componentes/Navbar";
import axios from 'axios';
import { ipAddress } from "../Componentes/confip";


import './Estilos.css';

const Regper = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState(''); // Agregado estado para el rol

  const handleRegistro = async () => {
    try {
      const response = await axios.post(`http://${ipAddress}/app/bliblioteca/public/api/personal`, {
        nombre,
        email,
        password,
        rol,
      });

      if (response.status === 201) {
        console.log('Registro exitoso');
        // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito aquí
      } else {
        console.error('Error al registrar personal:', response);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div>
       <Navbar/>
      <h1>Registro de personal</h1>
      <label className='letras'>Nombre:</label>
      <input
        type='text'
        className='input'
        placeholder='Ingrese su nombre completo'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label className='letras'>Email:</label>
      <input
        className='input'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='letras'>Password:</label>
      <input
        className='input'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className='letras'>Rol:</label>
      <select
        value={rol}
        onChange={(e) => setRol(e.target.value)}
        className='input' // Puedes aplicar el estilo que necesites
      >
        <option value='admin'>Admin</option>
        <option value='user'>User</option>
      </select>
      <button className='button' onClick={handleRegistro}>Registrar Personal</button>
    </div>
  );
};

export default Regper;
