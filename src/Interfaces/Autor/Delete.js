import React, { useEffect, useState } from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Delete = () => {
  const navigate = useNavigate();
  const backtolist = () => {
    navigate('/Autor/Edit')
  }
  /*para obtener la lista de autores en el card de la bd*/
  const [listautor, setlistautor] = useState([])
  const [search, setSearch] = useState("");
  const getData = async () => {
    let response = await axios.get('http://192.168.1.7/app/bliblioteca/public/api/autores')
    setlistautor(response.data)
  } 
  /**el get data esta obteniendo autores y van sumando cada que se crea */
  useEffect(() => { getData() }, [])


  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convierte la entrada del usuario a minúsculas
  }

  const filteredAuthors = listautor.filter((autor) =>
    autor.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );


  const iconos = [{ src: home, alt: 'home' }, { src: categ, alt: 'categorias' }]
  return (
    <div>
      <Navegador iconos={iconos} />
      <h1>Autores</h1>
        <input value={search} onChange={searcher} className='buscador' type='text' placeholder='search' />
     
      <div className='cardlist'>{filteredAuthors.map((autor) => <div class="card">
        <label className='letraAutor'>Nombre:</label>
        <input className='autorinput' type='text' value={autor.nombre} /> <br></br>
        <label className='letraAutor'>Ci:</label>
        <input className='autorinput' type='number' value={autor.id} />
        <div class="card-buttons">
          <button class="card-button" onClick={backtolist}  >Editar</button>
          <button class="card-button" >Eliminar</button>

        </div>

      </div>)}
      </div>

    </div>
  )
}

export default Delete