import { useState } from "react";


const Mensaje = ({ amigo }) => {

    const [cambiarEstado, setCambiarEstado]=useState("")

  return (
    <article>
      <p>
        <b>Hello {amigo}{cambiarEstado}!</b>
      </p>
      <button onClick={() => setCambiarEstado(" (from changed state)")}>Click me</button>
    </article>
  );
};

export default Mensaje;
