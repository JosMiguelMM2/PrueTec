import "./CrearMarca.css";
import { useState } from "react";

function CrearMarca() {
  const [name, setNombre] = useState("");
  const [activo, setActivo] = useState(false);
  const [usado, setUsado] = useState(false);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { name, activo, usado };
    fetch("http://localhost:8080/tecnica", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    // Aquí puedes hacer algo con los datos, como enviarlos a un servidor
  };

  return (
    <div className="crear">
      <h2>Crear Marca</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Activo</label>
        <input
          type="checkbox"
          checked={activo}
          onChange={(e) => setActivo(e.target.checked)}
        />
        <label>Usado</label>
        <input
          type="checkbox"
          checked={usado}
          onChange={(e) => setUsado(e.target.checked)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default CrearMarca;
