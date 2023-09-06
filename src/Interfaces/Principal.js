
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../Componentes/Navbar";
function Principal() {
  return (
    <div className="App">
      {/**<nav class="nav">
        <div >
          <img src={home} alt="home" />
          <Link to={"/Autor"}>
            <label>Autor</label>
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
      <main class="logo">
        <img className="log" src={logo} alt="logo" />
      </main>*/}
      <Navbar />
      
    </div>
  );
}

export default Principal;
