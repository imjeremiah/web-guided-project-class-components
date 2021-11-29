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
        return(<div>
            <h1>Hello {this.state.name}! You are {this.state.age} years old.</h1>
            <button onClick={()=> {
                this.setState({
                    ...this.state,
                    name: "Allison"
                });
            }}>Change the name to another name!!!</button>
        </div>);
    }
}

export default App2;