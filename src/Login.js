import axios from "axios";
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
        "http://192.168.1.2/app/bliblioteca/public/api/login",
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
    <div class="container d-flex justify-content-center align-items-center w-100" style='background-image: url("../");'>
      <div class="row" >
              <div class="card">
                  <h1>Login</h1>
                  <div class="card-body">
                    <form action="" onSubmit={handleSubmit}>
                      <div class="row">
                        <p class="card-text"><strong>E-mail</strong></p>
                        <input
                            class="form-group"
                            type="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                      </div>
                      <div class="row">
                        <p class="card-text"><strong>Contraseña:</strong></p>
                        <input
                          class="form-group"
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
   </div>
  );
}

export default Login;
