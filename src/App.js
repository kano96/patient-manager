import React, { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //list of appointments
  const [citas, setCitas] = useState([]);

  //add new appointment
  const createAppointment = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <div className="App">
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={createAppointment} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
