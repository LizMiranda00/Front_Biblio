import React, { useState, useEffect} from 'react'
import '../Estilos.css'
import Inputtexto from '../../Componentes/Inputtexto';
import Inputimage from '../../Componentes/Inputimg';
import Navbar from "../../Componentes/Navbar";

import {useNavigate } from 'react-router-dom';

import {ipAddress} from "../../Componentes/confip";
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
  const getData=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/libros`) 
  setlistlibro(response.data)
 }
 /**el get data esta obteniendo libros y van sumando cada que se crea */
  useEffect(()=>{getData()},[])
 
  /* obtener la lista de categorias en el card de la bd*/ 
  const [listcategoria,setlistcategoria]=useState([])
  const getDataCat=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/categorias`) 
  setlistcategoria(response.data)
 }
 /**el get data esta obteniendo categorias y van sumando cada que se crea */
  useEffect(()=>{getDataCat()},[])



  /*para obtener la lista de autores en el card de la bd*/ 
const [listautor,setlistautor]=useState([])
const getDataAut=async()=>{let response=await axios.get(`http://${ipAddress}/app/bliblioteca/public/api/autores`) 
setlistautor(response.data)
}
/**el get data esta obteniendo autores y van sumando cada que se crea */
useEffect(()=>{getDataAut()},[])

/**datos para el arreglo de autores */
const [data,setdata]=useState({nombre:'', edicion:'', estado:'',libre:'1',categoria_id:'1', personal_id:'1',autors:[]})

const option = listautor.map((autor) => ({
  value: autor.id,
  label: autor.nombre,
}));

const handleAutorChange = (selectedOptions) => {
  const selectedIds = selectedOptions.map((option) => option.value);
  setdata({ ...data, autors: selectedIds });
};


  
  const Registrarlibro=async()=>{
    console.log(data);
    await axios.post(`http://${ipAddress}/app/bliblioteca/public/api/libro`,data) //con esto mando
    navigate('/Libro')
    
  }
  
  const options = listautor.map((autor, id) => ({
    value: autor.id,
    label: autor.nombre,
  }));

  return(

  
    <div>
     <Navbar/>
     <div class="container d-flex justify-content-center align-items-start">
        
          <div class="card w-75" >
            <div class="card-body">
              <h5 className="card-title">Registro del Libro</h5>

              <Inputtexto tInput='Nombre:'name='nombre' data={data} setData={setdata}/> 
              <Inputtexto tInput='Edicion:'name='edicion' data={data} setData={setdata}/> 
              <Inputtexto tInput='Estado:'name='estado' data={data} setData={setdata} />
                      
              <Inputimage className='form-control' name='imagen' data={data} setData={setdata} /> 
              <div class='row'>
                <label className='form-label' >Categoria</label>
                <input  className='form-control' type='text' id='Categorias' name='categoria_id' 
                list='categoria' onChange={(e) => {
                  const [categoriaId] = e.target.value.split(',');
                  setdata({ ...data, categoria_id: categoriaId });
                }}/>
                <datalist id='categoria'> {/* Deja esta parte igual */}
                  {listcategoria.map((categoria) => (
                    <option key={categoria.id} value={[categoria.id, categoria.nombre]} /> 
                  ))}
                </datalist>
              </div>
              <div class='row'>
              <label className='form-label' >Autor/es</label>
              <Select
        isMulti
        options={option}
        onChange={handleAutorChange}
        value={option.filter((option) => data.autors.includes(option.value))}
      />
              </div>
              
            <button className="btn btn-primary" onClick={Registrarlibro}>Registrar categoria</button>
            </div>
          </div>
     </div>
     </div>
  )
}
export default Create
/**
 
 */