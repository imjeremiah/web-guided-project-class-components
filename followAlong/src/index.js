import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }

  handlePurchased = (id) => {
    // A list of alll our groceries
    // BUT the clicked grocery has 'purchased' flipped
    this.setState({
      groceries: this.state.groceries.map(item => {
        if(item.id === id) {
          return({
            ...item,
            purchased: !item.purchased
          });
        } 
        return item;
      })
    });
  }

  handleAddItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      purchased:  false
    }
    this.setState({
      groceries: [...this.state.groceries, newItem]
    })
  }

  handleClear = () => {
    // filter through groceries
    // remove all groceries where purchased === true
    // set state to THAT list
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter(item => {
        return(item.purchased === false);
      })
    });
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem} />
         </div>
        <GroceryList handlePurchased={this.handlePurchased} groceries={this.state.groceries} />
        <button onClick={this.handleClear} className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);