import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para las rutas
import home from "../img/home.png";
import categ from "../img/1164620.png";
import usu from "../img/1769041.png";
import autors from "../img/autor.png";
import logo from "../img/logo.png";
import categoria from "../img/cate.png"

function Navbar() {
  return (
    <nav className="nav">
      <div>
        <img src={home} alt="home" />
        <Link to={"/Autor"}>
            <img src={autors} alt="Autor" />
        </Link>
        <Link to={"/Categoria"}>
          <img src={categoria} alt="categoria" />
        </Link>
        <Link to={"/Libro"}>
          <img src={categ} alt="libro" />
        </Link>
        <img src={usu} alt="usuario" />
      </div>
      <Link to={"/login"} className="button-login">login</Link>
    </nav>
  );
}

export default Navbar;