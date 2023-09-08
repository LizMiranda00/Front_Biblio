import React, { useState, useEffect } from 'react';
import {ipAddress} from "../Componentes/confip";
import axios from 'axios';
import Navbar from "../Componentes/Navbar";
import './Estilos.css';
const PersonalShow = () => {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    axios.get(`http://${ipAddress}/app/bliblioteca/public/api/personals`)
      .then((response) => {
        setPersonal(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos del personal:', error);
      });
  }, []);

  return (
    
    <div>
    <Navbar />
    <h1>Personal</h1>
    <div className='card-container'>
      {personal.map((persona) => (
        <div key={persona.id} className='card'>
          <label >Nombre:</label>
          <input
            type='text'
            
            value={persona.nombre}
            readOnly
          />
          <label >Email:</label>
          <input
           
            type='email'
            value={persona.email}
            readOnly
          />
          <label >Rol:</label>
          <input
           
            type='text'
            value={persona.rol}
            readOnly
          />
        </div>
      ))}
    </div>
  </div>
)};
export default PersonalShow;
