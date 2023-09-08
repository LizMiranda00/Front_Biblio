import React ,{useState}from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Principal from './Interfaces/Principal';
import Admi from './Interfaces/Admi';
import Empleado from './Interfaces/Empleado'
import Reglib from './Interfaces/Reglib';
import Regper from './Interfaces/Regper';
import PersonalShow from './Interfaces/PersonalShow';
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
import PrestamoAlquiler from './Interfaces/Prestamo/Alquiler';
import PrestamoShow from './Interfaces/Prestamo/Show'

const App = () => {
  const [user, setUser] = useState("");
  return (
    
      <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/Libro" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/"
          element={user ? <Principal /> : <Navigate to="/login" />}
        />
        <Route path='/' element={<Principal/>}></Route>
        
        <Route path='/Adm' element={<Admi/>}></Route>
        <Route path='/Emp' element={<Empleado/>}></Route>
        
        <Route path='/Regli' element={<Reglib/>}></Route>
        <Route path='/Regpe' element={<Regper/>}></Route>
        <Route path='/PersonalShow' element={<PersonalShow/>}></Route>

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

        <Route path='/Prestamo/Alquiler' element={<PrestamoAlquiler/>}></Route>
        <Route path='/Prestamo/Show' element={<PrestamoShow/>}></Route>
        

      </Routes>
      </BrowserRouter>

   
  )
}

export default App