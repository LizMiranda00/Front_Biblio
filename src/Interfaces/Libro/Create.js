import React, { useState, useEffect} from 'react'
import Navegador from '../../Componentes/Navegador';
import home from '../../img/home.png';
import categ from '../../img/1164620.png';
import '../Estilos.css'
import Inputtexto from '../../Componentes/Inputtexto';
import { Await, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

const Create = () => {
  /*crear autor*/
  const navigate=useNavigate();
  const backtolist=()=>{
    navigate('/Libros')
  }
  /*para obtener la lista de libros en el card de la bd*/ 
  const [listlibro,setlistlibro]=useState([])
  const getData=async()=>{let response=await axios.get('http://192.168.1.2/app/bliblioteca/public/api/libros') 
  setlistlibro(response.data)
 }
 /**el get data esta obteniendo libros y van sumando cada que se crea */
  useEffect(()=>{getData()},[])
 
  /* obtener la lista de categorias en el card de la bd*/ 
  const [listcategoria,setlistcategoria]=useState([])
  const getDataCat=async()=>{let response=await axios.get('http://192.168.1.2/app/bliblioteca/public/api/categorias') 
  setlistcategoria(response.data)
 }
 /**el get data esta obteniendo categorias y van sumando cada que se crea */
  useEffect(()=>{getDataCat()},[])

  /* obtener la lista de personal para el select de la bd*/ 
  const [listpersonal, setlistpersonal]=useState([])
  const getDataPer=async()=>{let response=await axios.get('http://192.168.1.2/app/bliblioteca/public/api/personals')
  setlistpersonal(response.data)
}
/**el get data esta obteniendo personal para el select de la BD*/
useEffect(()=>{getDataPer()},[])


  /*para obtener la lista de autores en el card de la bd*/ 
const [listautor,setlistautor]=useState([])
const getDataAut=async()=>{let response=await axios.get('http://192.168.1.2/app/bliblioteca/public/api/autores') 
setlistautor(response.data)
}
/**el get data esta obteniendo autores y van sumando cada que se crea */
useEffect(()=>{getDataAut()},[])

/** */


  /*
  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convierte la entrada del usuario a minúsculas
  }
  const [search, setSearch] = useState("");
  const filteredLibros = listlibro.filter((libro) =>
    libro.nombre.toLowerCase().includes(search) // Filtrar por la propiedad correcta del autor
  );*/
  const [data,setdata]=useState({ci:0,nombre:''})
   const iconos=[{src:home,alt:'home'},{src:categ,alt:'categorias'}] 
   

  const Registrarlibro=async()=>{
    await axios.post('http://192.168.1.2/app/bliblioteca/public/api/libro',data) //con esto mando
    navigate('/Libros')
    //console.log(data);
  }
  
  const options = listautor.map((autor, id) => ({
    value: autor.id,
    label: autor.nombre,
  }));

  const optionsCat = listcategoria.map((categoria) => ({
    value: categoria.id,
    label: categoria.nombre,
    busc: categoria.id,
  }));

  return(

  
    <div>
     <Navegador iconos={iconos}/>
     <div class="container ">
        <h1>Libros</h1>
        <div class='row justify-content-center' className='Buscador'>
          <div class='cl-12 '>
          <input className='buscador' type='search' placeholder='Ingrese la categoria o autor del libro que desea' />
          </div>    
        </div>
        <div class='row justify-content-center'>
        <div class="col-12">
          <div class="card w-50" >
            <div class="card-body">
              <h5 className="card-title">Registro de Categoria</h5>

              <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
              <Inputtexto tInput='Edicion:'name='nombre' data={data} setData={setdata}/> 
              <Inputtexto tInput='Estado:'name='nombre' data={data} setData={setdata} />
                      
              <input type='file' name='imagen' data={data} setData={setdata}/>  
              <div class='row'>
              <label className='form-label' >Categoria</label>
              <input type='text' id='categoria' name='categoria' value={listcategoria.name} list='categorias' data={data} setData={setdata} onChange={(e) => {
    console.log('Valor del input:', e.target.dato, e.target.value);}}/>
              
                <datalist id='categorias' >
                  {optionsCat.map((option)=>(
                    <option key={option.value} value={[option.value, option.label]}/>
                  ))}
                </datalist>
              </div>
              <div class='row'>
                  <label className='form-label' >Personal</label>
                  <input type='text' id='personal' name='personal' value={listpersonal.name} list='Personal' data={data} setData={setdata} onChange={(e) => {
    console.log('Valor del input:', e.target.key, e.target.value);}}/>
                  <datalist id='Personal'>
                    {listpersonal.map((personal,id)=>(
                        <option key={personal.id} value={personal.nombre} data-id={personal.id}/>
                  ))}
              </datalist>
              </div>
              <label data={data} setData={setdata}></label>
              <label className='form-label' >Autor/es</label>
            <Select isMulti options={options} />
            
            <button className="btn btn-primary" onClick={Registrarlibro}>Registrar categoria</button>
            </div>
          </div>
          </div>
        </div>
     </div>
     </div>
  )
}
export default Create
/**
 *               
              <ul class="card-text">Categoria: <strong>{listcategoria.map((autor,id)=>
                        <span key={id}><li class="card-text">{autor.nombre}</li></span>)}</strong>
              </ul>
 * <div class='row'>
          <div class="col-12">
          <div className='cardlist'>{filteredLibros.map((libro)=>
            <div class={`card ${libro.libre === 1 ? 'bg-success' : 'bg-danger'}`}>
                <img src={libro.imagen} class="card-img-top" alt="Imagen"></img>
                <div class="card-body">
                    <h5 class="card-title text-center align-items-center">{libro.nombre} </h5>
                    <p class="card-text">Categoria: <strong>{libro.categoria.nombre}</strong></p>
                    <ul class="card-text">Autores: <strong>{libro.autors.map((autor,id)=>
                        <span key={id}><li class="card-text">{autor.nombre}</li></span>)}</strong>
                    </ul>
                    <p class="card-text">Edicion: <strong>{libro.edicion}</strong> Id:  <strong>{libro.id}</strong></p>
                    <div class="card-buttons">
                    <button class="card-button btn btn-primary" >Editar</button>
                    <button class="card-button btn btn-primary" onClick={backtolist} >Eliminar</button>
                    </div>
                </div>   
            </div>)}
          </div>
          </div>
        </div>
 */