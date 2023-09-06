import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prestamo from './Interfaces/Prestamo';
import Principal from './Interfaces/Principal';
import Admi from './Interfaces/Admi';
import Empleado from './Interfaces/Empleado'
import Reglib from './Interfaces/Reglib';
import Regper from './Interfaces/Regper';
import AutorShow from './Interfaces/Autor/Show';
import AutorCreate from './Interfaces/Autor/Create';
import AutorDelete from './Interfaces/Autor/Delete';
import CategoriaShow from './Interfaces/Categoria/Show'
import CategoriaCreate from './Interfaces/Categoria/Create'
import LibroShow from './Interfaces/Libro/Show'
import LibroCreate from './Interfaces/Libro/Create'
import Login from './Login'
import ClienteCreate from './Interfaces/Cliente/Create';
import ClienteShow from './Interfaces/Cliente/Show';

const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
         {/* <Route path='/ruta del navegador' element={el archivo .js o interfas que quiero utilizar}></Route> */}
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/Presta' element={<Prestamo/>}></Route>
        <Route path='/Adm' element={<Admi/>}></Route>
        <Route path='/Emp' element={<Empleado/>}></Route>
        
        <Route path='/Regli' element={<Reglib/>}></Route>
        <Route path='/Regpe' element={<Regper/>}></Route>

        <Route path='/Autor' element={<AutorShow/>}></Route>
        <Route path='/Autor/Create' element={<AutorCreate/>}></Route>
        <Route path='/Autor/Delete' element={<AutorDelete/>}></Route>

        <Route path='/Categoria' element={<CategoriaShow/>}></Route>
        <Route path='/Categoria/Create' element={<CategoriaCreate/>}></Route>
        
        <Route path='/Libro' element={<LibroShow/>}></Route>
        <Route path='/Libro/Create' element={<LibroCreate/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        
        <Route path='/Cliente/Create' element={<ClienteCreate/>}></Route>
        <Route path='/Cliente' element={<ClienteShow/>}></Route>
      
      </Routes>
      </BrowserRouter>

   
  )
}

export default App