import React, { useState, useEffect } from 'react';
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css';
import axios from 'axios';

const iconos = [{ src: home, alt: 'home' }, { src: categ, alt: 'clientes' }];

const Show = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET para obtener la lista de préstamos desde tu API
    axios.get('http://192.168.100.5/bliblioteca/public/api/prestamos')
      .then((response) => {
        // Mapea los datos de préstamos y extrae solo los nombres de los libros
        const prestamosData = response.data.map((prestamo) => ({
          ...prestamo,
          libros: prestamo.libros.map((libro) => libro.nombre), // Extraer los nombres de los libros
        }));
        setPrestamos(prestamosData); // Actualiza el estado prestamos con los datos mapeados
      })
      .catch((error) => {
        console.error('Error al obtener los préstamos:', error);
      });
  }, []);

  return (
    <div>
      <Navegador iconos={iconos} />
      <h1>Registro de Préstamos</h1>
      
      <div className='prestamos-container'>
        {prestamos.map((prestamo, index) => (
          <div key={index} className='card'>
            <h2>Prestamo ID: {prestamo.id}</h2>
            <p>Fecha Inicial: {prestamo.fecha}</p>
            <p>Fecha de Devolución: {prestamo.fecha_devolucion}</p>
            <p>Cantidad: {prestamo.cantidad}</p>
            <p>Libros: {prestamo.libros.join(', ')}</p> {/* Mostrar los nombres de los libros separados por comas */}
           <button>Devolver</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
