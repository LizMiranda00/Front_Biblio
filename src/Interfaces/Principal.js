
import "../App.css";
import Navbar from "../Componentes/Navbar";
import logo from '../img/logo.PNG';
function Principal() {
  return (
    <div className="App">
      <Navbar />
      <main class="logo">
        <img className="log" src={logo} alt="logo" />
      </main>
      
    </div>
  );
}

export default Principal;
