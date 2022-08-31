import "./App.css";

// Import assets
import Chameleon from "./assets/chameleon-gc.jpg";
import ConditionalRender from "./Components/ConditionalRender";

// Import states
import { useState } from "react";

// Import components
import ListeRender from "./Components/ListeRender";
import ManegeData from "./Components/ManegeData";
import ShowUserName from "./Components/ShowUserName";
import CarDetails from "./Components/CarDetails";

function App() {
  // Props com variavel
  const name = "Douglas";
  // Props com state
  const [userName] = useState("Thaty");

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/*  <ManegeData />
      <ListeRender />
      <ConditionalRender /> */}
      {/*  <ShowUserName name="Thaty" /> */}
      {/* <ShowUserName name={name} /> */}
      <ShowUserName name={userName} />
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false} />
      <CarDetails brand="BMW" km={3300} color="Branco" newCar={false} />
      <CarDetails brand="Ford" km={0} color="Preto" newCar={true} />
      {/* Display: none na class img-wrapper */}
      <div className="img-wraper">
        {/* Images em public */}
        <img src="/images/chameleon.jpg" alt="" />

        {/* Images em assets */}
        <img src={Chameleon} alt="" />
      </div>
    </div>
  );
}

export default App;
