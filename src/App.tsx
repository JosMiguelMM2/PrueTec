import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CrearMarca from "./components/Crearmarca/CrearMarca";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="prin">
        <nav className="navegation">
          <h1>Prueba Tecnica usando React</h1>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Grilla />} />
        <Route path="/crear" element={<CrearMarca />} />
      </Routes>
    </BrowserRouter>
  );
}

export function Grilla() {
  type DataType = {
    name: string;
    activo: boolean;
    usado: boolean;
  };
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/tecnica")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="dtabla">
      <Link to="/crear" className="boton">
        + Crear marca
      </Link>

      <table className="tabla">
        <thead>
          <tr className="cabecera">
            <th className="celda">Nombre</th>
            <th className="celda">Activo</th>
            <th className="celda">Usado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="celda">{item.name}</td>
              <td className="celda">{item.activo ? "Si" : "No"}</td>
              <td className="celda">{item.usado ? "Si" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
