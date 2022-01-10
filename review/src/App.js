import React, { useState } from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}. You are {props.age} years old.</h1>
      <h2>{props.name} is a great name! Never change it {props.name}.</h2>
    </div>
  )
}

const App = () => {
  const [state, setState] = useState({
    name: 'Jeremiah',
    age: 37
  });


  const handleClick = () => {
    setState({
      ...state,
      name: 'Cheryl',
      age: 35,
    })
  }

  return (
    <div>
      <Person name={state.name} age={state.age}/>
      <button onClick={handleClick}>Change to something else!!!</button>
    </div>
  );
};

export default App;