import React, { useState } from "react";

function Formulario() {
  // Create appointment state
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  //Update appointment state
  const actualizarCita = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>Create appointment</h2>

      <form action="">
        <label htmlFor="">Pet name</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Pet name"
          onChange={actualizarCita}
        />
        <label htmlFor="">Owner name</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Pet owner name"
          onChange={actualizarCita}
        />
        <label htmlFor="">Date</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarCita}
        />
        <label htmlFor="">Time</label>
        <input
          type="time"
          name="fecha"
          className="u-full-width"
          onChange={actualizarCita}
        />
        <label htmlFor="">Symptoms</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarCita}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </div>
  );
}

export default Formulario;
