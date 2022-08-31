// rafce
// Hoocks useState
import { useState } from "react";

const ManegeData = () => {
  let someData = 10;

  const [number, setNumber] = useState(15);
  return (
    <div>
      <div>
        <p style={{ color: "red" }}>Valor:{someData} </p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
      </div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManegeData;
