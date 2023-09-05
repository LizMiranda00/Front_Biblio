import home from '../img/home.png';
import categ from '../img/1164620.png';
import usu from '../img/1769041.png';
import logo from '../img/logo.PNG';
import '../App.css';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <div className="App">
      <nav class="nav">
        <img src={home} alt="home"/>
        <Link to={"/Categoria/Show"}><img  src={categ} alt="categoria"/></Link>
        
        <img src={usu} alt="usuario"/>
    </nav>
    <main class="logo">
        <img className='log' src={logo} alt="logo"/>
    </main>
    </div>
  );
}

export default Principal;
