import React, { useState, useEffect } from 'react';
import {ipAddress} from "../Componentes/confip";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Componentes/Navbar";
import './Estilos.css';
const PersonalShow = () => {
  const navigate=useNavigate();
  const toCreate=()=>{
    navigate('/regpe')
  }
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
    <div class='container'>
    <div class='row'>
            <h1>Personal</h1>
          <div class='col-3'>
            <button class="card-button btn btn-primary" onClick={toCreate} >Registrar Personal</button> 
          </div>
      </div>

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
  </div>
)};
export default PersonalShow;
