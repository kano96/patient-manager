import React from "react";

function Cita({ cita, eliminarCita }) {
  return (
    <div className="cita">
      <p>
        Pet: <span>{cita.mascota}</span>
      </p>
      <p>
        Owner: <span>{cita.propietario}</span>
      </p>
      <p>
        Date: <span>{cita.fecha}</span>
      </p>
      <p>
        Time: <span>{cita.hora}</span>
      </p>
      <p>
        Simptoms: <span>{cita.sintomas}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
}

export default Cita;
