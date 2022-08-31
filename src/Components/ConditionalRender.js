import { useState } from "react";

// Renderizacao condicional no state
const ConditionalRender = () => {
  const [x] = useState(false);
  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora e falso</p> }
    </div>
  );
};

export default ConditionalRender;
