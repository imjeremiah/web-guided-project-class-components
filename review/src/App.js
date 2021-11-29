import React, { useState } from "react";

const App = () => {
  const [state, setState ] = useState({
    name: "Allion",
    age: 33
  });
  
  // const [name, setName ] = useState("Allison");
  // const [age, setAge ] = useState(33);

  return (
    <div>
      <h1>Hello {name}. You are { age } years old.</h1>
      <button onClick={()=> {
        setName("Warren");
      }}>Change the name to Warren.</button>
    </div>
  );
};

export default App;