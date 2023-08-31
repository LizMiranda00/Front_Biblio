import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prestamo from './Interfaces/Prestamo';
import Principal from './Interfaces/Principal';
import Admi from './Interfaces/Admi';
import Empleado from './Interfaces/Empleado'
import Categorias from './Interfaces/Categorias';
import Reglib from './Interfaces/Reglib';
import Regper from './Interfaces/Regper';
import AutorCreate from './Interfaces/Autor/Create';
import AutorEdit from './Interfaces/Autor/Edit';

const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
         {/* <Route path='/ruta del navegador' element={el archivo .js o interfas que quiero utilizar}></Route> */}
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/Presta' element={<Prestamo/>}></Route>
        <Route path='/Adm' element={<Admi/>}></Route>
        <Route path='/Emp' element={<Empleado/>}></Route>
        <Route path='/Cat' element={<Categorias/>}></Route>
        <Route path='/Regli' element={<Reglib/>}></Route>
        <Route path='/Regpe' element={<Regper/>}></Route>
        <Route path='/Autor/Create' element={<AutorCreate/>}></Route>
        <Route path='/Autor/Edit' element={<AutorEdit/>}></Route>

        
        

      </Routes>
      </BrowserRouter>

   
  )
}

export default App