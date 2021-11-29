import React from 'react';

class App2 extends React.Component {
    const name = "Warren";
    render() {
        
        console.log("here");            
        return(<h1>Hello {name}!</h1>);
    }
}

export default App2;