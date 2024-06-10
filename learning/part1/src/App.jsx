const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hallo {props.name}</p>
    </div>
  );
};

const App = () => {
  const name = "Janis";
  const age = "12";
  return (
    <>
      <p>Begrusungen</p>
      <Hello name={name} age={age} />
      <Hello name="Zimmerman" age="70" />
    </>
  );
};

export default App;
