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
      <button onClick={handleClick}>Change the name to Warren.</button>
    </div>
  );
};

export default App;