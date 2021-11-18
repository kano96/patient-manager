import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import PropTypes from "prop-types";

function App() {
  //appointments in local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //list of appointments
  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  //add new appointment
  const createAppointment = (cita) => {
    setCitas([...citas, cita]);
  };

  //delete appointment
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };
  //conditional message
  const title =
    citas.length === 0
      ? "There are no appointments"
      : "Manage your Appointments";

  return (
    <div className="App">
      <h1 style={{ marginBottom: "0px" }}>Patient Manager</h1>
      <p className="created">
        Crafted by{" "}
        <a href="https://www.linkedin.com/in/kevintorres96/">Kevin Torres</a>
      </p>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {citas.map((cita) => (
              <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default App;
