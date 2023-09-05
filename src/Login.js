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
        "http://192.168.1.6/app/bliblioteca/public/api/login",
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
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" >
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Contraseña:
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPasword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </div>
  );
}

export default Login;
