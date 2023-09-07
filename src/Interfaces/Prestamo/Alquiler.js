import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Añade esta línea
// ... (resto de tus importaciones)
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css';
import Select from 'react-select';
import axios from 'axios';

const iconos = [{ src: home, alt: 'home' }, { src: categ, alt: 'prestamo' }];

const Alquiler = () => {
  const navigate = useNavigate(); // Obtén la función de navegación
  const [librosSeleccionados, setLibrosSeleccionados] = useState([]);
  const [fechaFinal, setFechaFinal] = useState('2023-09-06');
  const [personal_id, setPersonalId] = useState('');
  const [cliente, setCliente] = useState('');
  const [opcionesLibros, setOpcionesLibros] = useState([]);
  const [opcionesClientes, setOpcionesClientes] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET para obtener la lista de libros desde tu API
    axios.get('http://192.168.100.5/bliblioteca/public/api/libros')
      .then((response) => {
        const librosDesdeAPI = response.data; // Suponiendo que la respuesta contiene un array de libros
        // Mapear los datos de libros para adaptarlos a las opciones necesarias para react-select
        const opciones = librosDesdeAPI.map((libro) => ({
          value: libro.id, // Suponiendo que cada libro tiene un ID único en la base de datos
          label: libro.nombre, // Suponiendo que hay un campo "nombre" en tus registros de libros
        }));
        setOpcionesLibros(opciones);
      })
      .catch((error) => {
        console.error('Error al cargar la lista de libros:', error);
      });

    // Realizar una solicitud GET para obtener la lista de clientes desde tu API
    axios.get('http://192.168.100.5/bliblioteca/public/api/clientes')
      .then((response) => {
        const clientesDesdeAPI = response.data; // Suponiendo que la respuesta contiene un array de clientes
        // Mapear los datos de clientes para adaptarlos a las opciones necesarias para react-select
        const opciones = clientesDesdeAPI.map((cliente) => ({
          value: cliente.id, // Suponiendo que cada cliente tiene un ID único en la base de datos
          label: cliente.nombre, // Suponiendo que hay un campo "nombre" en tus registros de clientes
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
  };

  const handleSubmit = async () => {
    try {
      // Extraer el ID del cliente seleccionado
      const clienteId = cliente ? cliente.value : null
      const data = {
        libros: librosSeleccionados,
        fechaFinal,
        personal_id,
        cliente_id: clienteId, // Enviar solo el ID del cliente
      };
      console.log('Datos a enviar al servidor:', data);
      // Realiza una solicitud POST a la API
      const response = await axios.post('http://192.168.100.5/bliblioteca/public/api/prestamo', data);

      // Lógica para manejar la respuesta de la API
      console.log(response.data);
       // Redirige al usuario después de registrar el préstamo
       navigate('/Prestamo/Show');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div>
      <Navegador iconos={iconos} />
      <h1>Registro de prestamos</h1>
      <label className='letras'>Libro:</label>
      <Select
  isMulti={true} // Configura isMulti en true para permitir selección múltiple
  options={opcionesLibros}
  value={librosSeleccionados.map((libroId) => opcionesLibros.find((opcion) => opcion.value === libroId))} // Mapea los IDs a objetos de opciones
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
      <button className='button' onClick={handleSubmit}>Registrar prestamo</button>
    </div>
  );
};

export default Alquiler;