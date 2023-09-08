import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar';
import Select from 'react-select';
import axios from 'axios';
import '../Estilos.css';

const Alquiler = () => {
  const navigate = useNavigate();
  const [librosSeleccionados, setLibrosSeleccionados] = useState([]);
  const [fechaFinal, setFechaFinal] = useState('2023-09-06');
  const [personal_id, setPersonalId] = useState('');
  const [cliente, setCliente] = useState('');
  const [opcionesLibros, setOpcionesLibros] = useState([]);
  const [opcionesClientes, setOpcionesClientes] = useState([]);

  useEffect(() => {
    // Obtener lista de libros desde tu API
    axios.get('http://192.168.1.20/app/bliblioteca/public/api/libres')
      .then((response) => {
        const librosDesdeAPI = response.data;
        const opciones = librosDesdeAPI.map((libro) => ({
          value: libro.id,
          label: libro.nombre,
        }));
        setOpcionesLibros(opciones);
      })
      .catch((error) => {
        console.error('Error al cargar la lista de libros:', error);
      });

    // Obtener lista de clientes desde tu API
    axios.get('http://192.168.1.20/app/bliblioteca/public/api/clientes')
      .then((response) => {
        const clientesDesdeAPI = response.data;
        const opciones = clientesDesdeAPI.map((cliente) => ({
          value: cliente.id,
          label: cliente.nombre,
        }));
        setOpcionesClientes(opciones);
      })
      .catch((error) => {
        console.error('Error al cargar la lista de clientes:', error);
      });
  }, []);

  const handleLibrosSeleccionados = (seleccion) => {
    const librosIds = seleccion.map((libro) => libro.value);
    setLibrosSeleccionados(librosIds);
  // Filtrar los libros seleccionados de las opciones disponibles
  setOpcionesLibros(prevOpciones => prevOpciones.filter(opcion => !librosIds.includes(opcion.value)));

  };
   
  const handleSubmit = async () => {
    try {
      const clienteId = cliente ? cliente.value : null
      const data = {
        libros: librosSeleccionados,
        fechaFinal,
        personal_id,
        cliente_id: clienteId,
      };
      const response = await axios.post('http://192.168.1.20/app/bliblioteca/public/api/prestamo', data);

      console.log(response.data);
      navigate('/Prestamo/Show');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Registrar prestamo</h1>
      <label className='letras'>Libro:</label>
      <Select
        isMulti={true}
        options={opcionesLibros}
        value={librosSeleccionados.map((libroId) => opcionesLibros.find((opcion) => opcion.value === libroId))}
        onChange={handleLibrosSeleccionados}
      />
      <label className='letras' htmlFor="start">Fecha de devolución:</label>
      <input className='input'
        type='date'
        value={fechaFinal}
        onChange={(e) => setFechaFinal(e.target.value)}
      />
      <label className='letras'>Personal_Id:</label>
      <input className='input'
        type='number'
        value={personal_id}
        onChange={(e) => setPersonalId(e.target.value)}
      />
      <label className='letras'>Cliente:</label>
      <Select 
        options={opcionesClientes}
        value={cliente}
        onChange={(e) => setCliente(e)}
      />
      <button className='button' onClick={handleSubmit}>Registrar préstamo</button>
    </div>
  );
};

export default Alquiler;