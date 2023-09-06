import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para las rutas
import home from "../img/home.png";
import categ from "../img/1164620.png";
import usu from "../img/1769041.png";
import autors from "../img/autor.png";
import logo from "../img/logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <div>
        <img src={home} alt="home" />
        <Link to={"/Autor"}>
            <img src={autors} alt="categoria" />
        </Link>
        <Link to={"/Categoria"}>
          <label>Categoria</label>
        </Link>
        <Link to={"/Libro"}>
          <img src={categ} alt="categoria" />
        </Link>
        <img src={usu} alt="usuario" />
      </div>
      <Link to={"/login"} className="button-login">login</Link>
    </nav>
  );
}

export default Navbar;