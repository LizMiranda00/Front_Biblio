import React from 'react';
import { Link } from 'react-router-dom'; 
import categ from "../img/1164620.png";
import usu from "../img/1769041.png";
import autors from "../img/autor.png";
import categoria from "../img/cate.png"
import prestar from "../img/pedir-prestado.png";
import devolucion from "../img/registro.png";
import regper from "../img/anadir-amigo.png";
import personal from "../img/asistencia-social.png";
import login from "../img/home.png";
function Navbar() {
  return (
    <nav className="nav">
      <div>
      <Link to={"/login"}>
            <img src={login} alt="inicio secion" />
        </Link>
        <Link to={"/Autor"}>
            <img src={autors} alt="Autor" />
        </Link>
        <Link to={"/Categoria"}>
          <img src={categoria} alt="categoria" />
        </Link>
        <Link to={"/Libro"}>
          <img src={categ} alt="libro" />
        </Link>
        <Link to={"/Cliente"}>
          <img src={usu} alt="usuario" />
        </Link>
        <Link to={'/Prestamo/Show'}>
          <img src={devolucion} alt="devolver" />
        </Link>
        <Link to={'/PersonalShow'}>
          <img src={personal} alt="ver"/>
        </Link>
      </div>
      
    </nav>
  );
}

export default Navbar;