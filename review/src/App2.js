import React from 'react';

class Person extends React.Component {
    render() {
        return (<div>
            <h1>Hello {this.props.name}! You are {this.props.age} years old.</h1>
        </div>)
    }
}


class App2 extends React.Component {
    constructor() {
        super();

        this.state = {
            name:"Warren",
            age: 33
        }
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            name: "Allison"
        });
    }
    
    render() {
        return(<div>
            <Person name={this.state.name} age={this.state.age}/>
            <button onClick={this.handleClick}>Change the name to another name!!!</button>
        </div>);
    }
}

export default App2;