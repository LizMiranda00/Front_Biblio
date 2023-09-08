
import "../App.css";
import { Link } from 'react-router-dom'; 
import logo from '../img/logo.png';

function Principal() {
  return (
    <div className="App">
      <Link to={"/login"} className="button-login">login</Link>
      <main class="logo">
        <img className="log" src={logo} alt="logo" />
      </main>
      
    </div>
  );
}

export default Principal;
