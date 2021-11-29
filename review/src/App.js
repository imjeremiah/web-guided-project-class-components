import React, { useState } from "react";

const Person = (props) => {
  return (<div>
    <h1>Hello {props.name}. You are { props.age } years old.</h1>
    <p>{props.name} it's really good to meet you.</p>
  </div>);
}

const App = () => {
  const [state, setState ] = useState({
    name: "Allison",
    age: 33
  });

  const handleClick = () => {
    setState({
      ...state,
      name: "Warren"
    });
  }

  return (
    <div>
      <Person name={state.name} age={state.age}/>
      <button onClick={handleClick}>Change the name to Warren.</button>
    </div>
  );
};

export default App;