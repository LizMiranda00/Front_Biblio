import React , {useEffect,useState}from 'react'
import home from '../../img/home.png';
import lupa from '../../img/lupa.png';
import Navegador from '../../Componentes/Navegador';

import { useNavigate } from 'react-router-dom';
import '../Estilos.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Show = () => {
  const iconos=[{src:home,alt:'home'}]

  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Categoria/Show')//Definir ruta de retorno
  }
  const toCreate=()=>{
    navigate('/Categoria/Create')//Definir ruta de retornos
  }
  
   const [listcategoria,setlistcategoria]=useState([])
   const getData=async()=>{let response=await axios.get('http://192.168.1.7/app/bliblioteca/public/api/categorias') 
   setlistcategoria(response.data)
  }
  /**el get data esta obteniendo autores y van sumando cada que se crea */
   useEffect(()=>{getData()},[])

  return (
    <div>
      <Navegador iconos={iconos}/>
      <button class="card-button btn btn-primary" onClick={toCreate} >Crear Categoria</button>
      <h1>Categorias</h1>
      <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
      <div className='cardlist'>{listcategoria.map((categoria)=>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center align-items-center">{categoria.nombre}</h5>
            <p class="card-text">Id:  <strong>{categoria.id}</strong></p>
            <p class="card-text">Nombre: <strong>{categoria.nombre}</strong></p>
            
            <div class="card-buttons">
                  <button class="card-button btn btn-primary" >Editar</button>
                  <button class="card-button btn btn-primary" onClick={backtolist} >Eliminar</button>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  ) 

}
    
/*
<div class='container'>
      <div class='row gy-3'>
        <div class='col-md-3'>
          <div class="card" >
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class='col-md-3'>
          <div class="card" >
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class='col-md-3'>
          <div class="card" >
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>





<div>
      <Navegador iconos={iconos} />
      <h1>Categorias</h1>
      <input className='buscador' type='search' placeholder='Ingrese la categoria que desea' />
      <div>
        <img className='lupa' src={lupa} alt="lupa" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {currentCategorias.map((categoria) => (
          <div className="card" key={categoria.id}>
            <h2 className="card-title">Categoria</h2>
            <p className="card-description">{categoria.nombre}</p>
            <div className="card-buttons">
              <button className="card-button">Editar</button>
              <button className="card-button">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>*/


/*
  const [categoria,setCategoria] = useState([])
  useEffect(()=>{
    getAllCategorias()
  }) 


  const getAllCategorias = async()=>{
    const response = await axios.get(`${endpoint}/Categorias`)
    setCategoria(response)
  }
  const deleteCategoria = async(id)=>{
    axios.delete(`${endpoint}/Categorias/${id}`)
    getAllCategorias()
  }


  return (
    <div>
        <Navegador iconos={iconos}/>
        <h1>Categorias</h1>
        <input className='buscador' type='search' placeholder='Ingrese la categoria que desea' />
        <div>
            <img className='lupa' src={lupa} alt="lupa"/>
        </div>
         {categoria.map((categoria)=>(
        <div class="card" key={categoria.id}>
            <h2 class="card-title">Categoria</h2>
            <p class="card-description">{categoria.nombre}</p>
            <div class="card-buttons">
               <button class="card-button" to={`/edit/${categoria.id}`}>Editar</button>
               <button class="card-button" onClick={()=>deleteCategoria(categoria.id)}>Eliminar</button>
            </div>
        </div>
        ))}            
    </div>

  )  */   

export default Show