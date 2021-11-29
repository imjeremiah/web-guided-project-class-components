import React, { useState } from "react";

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
      <h1>Hello {state.name}. You are { state.age } years old.</h1>
      <p>{state.name} it's really good to meet you.</p>
      <button onClick={handleClick}>Change the name to Warren.</button>
    </div>
  );
};

export default App;