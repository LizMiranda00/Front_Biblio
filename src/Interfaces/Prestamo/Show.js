import React, { useState, useEffect } from 'react';
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css';
import axios from 'axios';
import Modal from 'react-modal';

const iconos = [{ src: home, alt: 'home' }, { src: categ, alt: 'clientes' }];

const Show = () => {
  const [prestamos, setPrestamos] = useState([]);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrestamoId, setSelectedPrestamoId] = useState(null);
  const [selectedLibros, setSelectedLibros] = useState([]);
 
  const [observaciones, setObservaciones] = useState(''); 
  const openModal = (prestamoId) => {
    setSelectedPrestamoId(prestamoId);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setSelectedPrestamoId(null);
    setSelectedLibros([]);
    setModalOpen(false);
  };
  
  const handleCheckboxChange = (libro) => {
    setSelectedLibros(prev => {
      if (prev.includes(libro)) {
        return prev.filter(item => item !== libro);
      } else {
        return [...prev, libro];
      }
    });
  };
  
  const handleDevolverLibros = async () => {
    try {
      // Aquí puedes enviar los libros seleccionados al servidor
      const response = await axios.post('http://192.168.100.5/bliblioteca/public/api/devolucion', {
        prestamo_id: selectedPrestamoId,
        libros: selectedLibros,
        observaciones: observaciones, 
      });

      // Lógica para manejar la respuesta de la API
      console.log(response.data);

      // Finalmente, cierra el modal
      closeModal();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
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
           <button onClick={() => openModal(prestamo.id)}>Devolver</button>
          </div>
        ))}
 </div>
<Modal
        className='react-modal-content'
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel='Devolver Préstamo'
      >
        <h1>Devolver Préstamo ID: {selectedPrestamoId}</h1>
        {prestamos
          .find(prestamo => prestamo.id === selectedPrestamoId)
          .libros.map((libro, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={libro}
                checked={selectedLibros.includes(libro)}
                onChange={() => handleCheckboxChange(libro)}
              />
              {libro}
            </label>
          ))}
           <label className='letras'>Observaciones:</label>
        <textarea
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        />
        <button onClick={handleDevolverLibros}>Devolver Libros</button>
        <button onClick={closeModal}>Cancelar</button>
      </Modal>



     
    </div>
  );
};

export default Show;
