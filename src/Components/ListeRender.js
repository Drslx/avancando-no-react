import { useState } from "react";

function ListeRender() {
  const [list] = useState(["JavaScript", "React"]);

  // Exemplo de uso de id
  const [users, setUsers] = useState([
    { id: 1, name: "Douglas", age: 35 },
    { id: 2, name: "Thaty", age: 27 },
    { id: 3, name: "Thaty", age: 27 },

  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    // funcao para deletar
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
}

export default ListeRender;
