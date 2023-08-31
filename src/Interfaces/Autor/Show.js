import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";

const endpoint = "http://192.168.1.7:8000/api";

function Show() {
  const [autors, setAutors] = useState([]);
  useEffect(() => {
    getAllAutors();
  }, []);
  const getAllAutors = async () => {
    const response = await axios.get(`${endpoint}/autores`);
    setAutors(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <h1>Autores</h1>
      <table>
        <thead>
          <tr>
            <th>Ci</th>
            <th>NOmbre</th>
            <th>Libros</th>
          </tr>
        </thead>
        <tbody>
          {autors.map((autor) => (
            <tr key={autor.id}>
              <td>{autor.id}</td>
              <td>{autor.nombre}</td>
              <td>
                {autor.libros && autor.libros.length > 0 ? (
                  autor.libros.map((libro, index) => (
                    <span key={libro.id}>
                      {libro.nombre}
                      {index !== autor.libros.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>No hay libros</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Show;
