const Container = ({ children, myValue}) => {
  return (
    <div>
      Container
          {children}
          
          <p>Valor : { myValue}</p>
    </div>
  );
};

export default Container;
