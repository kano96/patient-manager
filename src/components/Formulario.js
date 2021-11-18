import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Formulario({ crearCita }) {
  // Create appointment state
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  //errors state
  const [errors, setErrors] = useState(false);

  //Update appointment state
  const actualizarCita = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //Extract values
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Add appoinment

  const submitCita = (e) => {
    e.preventDefault();

    //Validate form
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setErrors(true);
      return;
    }
    //Delete error message in case of previuos error
    setErrors(false);

    //Assign ID
    cita.id = uuid();

    //Create appoinment
    crearCita(cita);

    //Refresh form
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div>
      <h2>Create appointment</h2>

      {errors ? <p className="alerta-error">All fields are required</p> : null}
      <form action="" onSubmit={submitCita}>
        <label htmlFor="">Pet name</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Pet name"
          onChange={actualizarCita}
          value={mascota}
        />
        <label htmlFor="">Owner name</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Pet owner name"
          onChange={actualizarCita}
          value={propietario}
        />
        <label htmlFor="">Date</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarCita}
          value={fecha}
        />
        <label htmlFor="">Time</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarCita}
          value={hora}
        />
        <label htmlFor="">Symptoms</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarCita}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </div>
  );
}

export default Formulario;
