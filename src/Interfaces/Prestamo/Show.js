import React, { useState, useEffect } from 'react';
import '../Estilos.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Navbar from "../../Componentes/Navbar";

const Show = () => {
  const navigate=useNavigate();
  const toCreate=()=>{
    navigate('/Prestamo/Alquiler')
  }
  
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
    setObservaciones('');
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
    console.log('Prestamo ID:', selectedPrestamoId);
    console.log('Libros seleccionados:', selectedLibros);

    try {
      const response = await axios.post('http://192.168.1.20/app/bliblioteca/public/api/devolucion', {
        prestamo_id: selectedPrestamoId,
        libros: selectedLibros, // Envía los IDs como un array
        observaciones: observaciones, 
      });

      if (response.status === 201) {
        const newPrestamos = prestamos.map(prestamo => {
          if (prestamo.id === selectedPrestamoId) {
            // Filtrar los libros que no se devolvieron
            prestamo.libros_no_devueltos = prestamo.libros_no_devueltos.filter(libro => !selectedLibros.includes(libro.id));
          }
          return prestamo;
        });

        setPrestamos(newPrestamos);

        closeModal();
        window.location.reload(); // Recarga la página después de la devolución
      } else {
        console.error('Error al devolver los libros:', response);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  useEffect(() => {
    axios.get('http://192.168.1.20/app/bliblioteca/public/api/prestamos')
      .then((response) => {
        const prestamosData = response.data.map((prestamo) => ({
          ...prestamo,
          libros: prestamo.libros.map((libro) => ({ id: libro.id, nombre: libro.nombre })), // Incluir el ID y el nombre del libro
        }));
        setPrestamos(prestamosData);
      })
      .catch((error) => {
        console.error('Error al obtener los préstamos:', error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <div class='container'>
      <div class='row'>
            <h1>Prestamos</h1>
          <div class='col-3'>
            <button class="card-button btn btn-primary" onClick={toCreate} >Registrar Prestamo</button> 
          </div>
      </div>
      <div className='prestamos-container'>
        {prestamos.map((prestamo, index) => (
          <div key={index} className='card'>
            <h2>Prestamo ID: {prestamo.id}</h2>
            <p>Fecha Inicial: {prestamo.fecha}</p>
            <p>Fecha de Devolución: {prestamo.fecha_devolucion}</p>
            <p>Cantidad: {prestamo.cantidad}</p>
            <p>
              Libros:
              {prestamo.libros_no_devueltos.map(libro => (
                <span key={libro.id}>
                  {libro.id} - {libro.nombre}
                  {prestamo.libros_no_devueltos.indexOf(libro) !== prestamo.libros_no_devueltos.length - 1 && ', '}
                </span>
              ))}
            </p>
            <button class="card-button btn btn-primary" onClick={() => openModal(prestamo.id)}>Devolver</button>
          </div>
        ))}
      </div>
      <Modal
        className='react-modal-content'
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel='Devolver Préstamo'
      >
         <h1 className='devolverletra'>Devolver préstamo: {selectedPrestamoId}</h1>
  {selectedPrestamoId && prestamos
    .find(prestamo => prestamo.id === selectedPrestamoId)?.libros_no_devueltos.map((libro, index) => (
      <label key={index}>
        <input
          type="checkbox"
          value={libro.id} // Cambiado a libro.id
          checked={selectedLibros.includes(libro.id)} // Cambiado a libro.id
          onChange={() => handleCheckboxChange(libro.id)} // Cambiado a libro.id
        />
        {libro.id} - {libro.nombre}
      </label>
    ))}
  <label className='devolverletra'>Observaciones:</label>
  <textarea
    value={observaciones}
    onChange={(e) => setObservaciones(e.target.value)}
  />
  <div className="button-container">
    <button onClick={handleDevolverLibros}>Devolver Libros</button>
    <button onClick={closeModal}>Cancelar</button>
  </div>
      </Modal>
      </div>
    </div>
  );
};

export default Show;
