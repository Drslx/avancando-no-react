import React from "react";

// Destructuring em props (props), nao preicsa passar props.brand etc
// Reutilizacao de component
const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>

      <ul>
        <li style={{ color: "#000" }}>Marca: {brand}</li>
        <li style={{ color: "gray" }}>KM: {km}</li>
        <li style={{ color: "blue" }}>Cor: {color}</li>
      </ul>

      {newCar && <p>Este carro e novo!</p>}
    </div>
  );
};

export default CarDetails;
