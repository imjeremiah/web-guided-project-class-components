import React, { useState } from "react";

const App = () => {
  const [name, setName ] = useState("Allison");
  const [age, setAge ] = useState(33);

  return (
    <div>
      <h1>Hello {name}. You are { age } years old.</h1>
      <button>Change the name to Allison.</button>
    </div>
  );
};

export default App;