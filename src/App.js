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
import Fragment from "./Components/Fragment";
import Container from "./Components/Container";
import ExecFunction from "./Components/ExecFunction";
import Message from "./Components/Message";
import ChangeMsgState from "./Components/ChangeMsgState";
import UserDetails from "./Components/UserDetails";

function App() {
  // Props com variavel
  const name = "Douglas";

  // Props com state
  const [userName] = useState("Thaty");

  // Renderizacap de lista em componente
  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Amarela",
      newCar: true,
      km: 0,
    },

    {
      id: 2,
      brand: "RedBull",
      color: "Roxa",
      newCar: false,
      km: 10030,
    },

    {
      id: 3,
      brand: "Mercedes",
      color: "Prata",
      newCar: false,
      km: 3310,
    },
  ];

  const persons = [
    {
      id: 1,
      nome: "Douglas",
      idade: 35,
      profissão: "Dev",
    },
    {
      id: 2,
      nome: "Thaty",
      idade: 27,
      profissão: "Contadora",
    },
    {
      id: 3,
      nome: "Fred",
      idade: 1.5,
      profissão: "Dormir",
    },
    {
      id: 4,
      nome: "Kruegue",
      idade: 0.6,
      profissão: "Cargar",
    },
  ];
  function showMessage() {
    console.log("Evento do componente pai!");
  }

  /* Elevacao state */
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/*  <ManegeData />
      <ListeRender />
      <ConditionalRender /> */}
      {/*  <ShowUserName name="Thaty" /> */}
      {/* <ShowUserName name={name} /> */}
      <ShowUserName name={userName} />
      {/*  <CarDetails brand="VW" km={1000} color="Azul" newCar={false} />
      <CarDetails brand="BMW" km={3300} color="Branco" newCar={false} />
      <CarDetails brand="Ford" km={0} color="Preto" newCar={true} /> */}

      {/* Metodo de loop para renderizar varias vezes o component */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {persons.map((person) => (
        <UserDetails
          key={person.id}
          nome={person.nome}
          idade={person.idade}
          profissão={person.profissão}
          idadeMaior={person.idadeMaior}
        />
      ))}
      {/* Display: none na class img-wrapper */}
      {/*   <div className="img-wraper"> */}
      {/* Images em public */}
      {/*    <img src="/images/chameleon.jpg" alt="" /> */}

      {/* Images em assets */}
      {/*     <img src={Chameleon} alt="" />
      </div>
 */}
      {/*       <Fragment /> */}

      {/* Children */}
      {/*   <Container myValue="Teste">
        <p>conteudo</p>
      </Container> */}

      {/* Funcao em props  */}
      {/*  <ExecFunction myFunction={showMessage} /> */}

      {/* State lift */}
      <Message msg={message} />
      <ChangeMsgState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
