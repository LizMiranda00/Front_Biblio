import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Prestamo from "./Interfaces/Prestamo";
import Principal from "./Interfaces/Principal";
import Admi from "./Interfaces/Admi";
import Empleado from "./Interfaces/Empleado";
import Categorias from "./Interfaces/Categorias";
import Reglib from "./Interfaces/Reglib";
import Regper from "./Interfaces/Regper";
import AutorCreate from "./Interfaces/Autor/Create";
import AutorEdit from "./Interfaces/Autor/Edit";
import AutorDelete from "./Interfaces/Autor/Delete";
import CategoriaShow from "./Interfaces/Categoria/Show";
import CategoriaCreate from "./Interfaces/Categoria/Create";
import CategoriaEdit from "./Interfaces/Categoria/Edit";
import Login from "./Login";
const App = () => {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route
          path="/"
          element={user ? <Principal /> : <Navigate to="/login" />}
        />

        <Route path="/Presta" element={<Prestamo />}></Route>
        <Route path="/Adm" element={<Admi />}></Route>
        <Route path="/Emp" element={<Empleado />}></Route>
        <Route path="/Cat" element={<Categorias />}></Route>
        <Route path="/Regli" element={<Reglib />}></Route>
        <Route path="/Regpe" element={<Regper />}></Route>
        <Route path="/Autor/Create" element={<AutorCreate />}></Route>
        <Route path="/Autor/Edit" element={<AutorEdit />}></Route>
        <Route path="/Autor/Delete" element={<AutorDelete />}></Route>
        <Route path="/Categoria/Create" element={<CategoriaCreate />}></Route>
        <Route path="/Categoria/Show" element={<CategoriaShow />}></Route>
        <Route path="/Categoria/Edit" element={<CategoriaEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
