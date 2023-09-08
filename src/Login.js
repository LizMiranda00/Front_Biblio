import axios from "axios";
import {ipAddress} from "./Componentes/confip";
import React, { useState } from "react";


function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      return;
    }
    setError(false);


    try {
      const response = await axios.post(
        `http://${ipAddress}/app/bliblioteca/public/api/login`,
        {
          email: email,
          password: password,
        }
      );

     
      console.log("Respuesta del servidor:", response.data);

      // Ejemplo de cómo establecer el usuario en el estado si la autenticación es exitosa
      
    setUser([email]);

    } catch (error) {
      // Manejo de errores en caso de una respuesta de error del servidor
      console.error("Error al iniciar sesión:", error);
    }
  };
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100" style={{backgroundImage: `url(${logo})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div class="card">
                  <h1 class="card-title text-center align-items-center" >Login </h1>
                  <div class="card-body">
                    <form action="" onSubmit={handleSubmit}>
                      <div class="row">
                        <p class="card-text">E-mail</p>
                        <input
                            class="form-control"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                      </div>
                      <div class="row">
                        <p class="card-text">Contraseña:</p>
                        <input
                          class="form-control"
                          type="password"
                          name="password"
                          value={password}
                          onChange={e => setPasword(e.target.value)}
                        />
                      </div>
                      
                        <div class="row mt-3">
                          	<button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {error && <p>Todos los campos son obligatorios</p>}
                  </div>
              </div>
      </div>
  );
}

export default Login;
