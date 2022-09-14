const UserDetails = ({ nome, idade, profissão}) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissão}</li>
      </ul>
      
      {idade >= 18 ? <p>Pode tirar carteira de habilitação</p> : <p>Menor de idade</p>}
    </div>
  );
};

export default UserDetails;
