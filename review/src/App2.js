import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Warren",
            age: 33
        }
    }

    render() {
        const name = "Warren";          
        return(<h1>Hello {name}!</h1>);
    }
}

export default App2;