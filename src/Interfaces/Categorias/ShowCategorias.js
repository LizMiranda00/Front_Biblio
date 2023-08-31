import React , {useEffect,useState}from 'react'
import home from '../../img/home.png';
import lupa from '../../img/lupa.png';
import Navegador from '../../Componentes/Navegador';
import '../Estilos.css'
import axios from 'axios'

const endpoint ='http://Localhost:8000/bliblioteca'
const ShowCategorias = () => {

  const iconos=[{src:home,alt:'home'}]

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

  
)       
}

export default ShowCategorias