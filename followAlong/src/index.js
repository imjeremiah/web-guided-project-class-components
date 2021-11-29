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

  handleToggle = () => {
    //Clear Purchased
    //1. Get a button press response.
    //2. set a new state and retain old state
    //3. make groceries contain all groceries where purchased === false
    //4. profit
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter(item => {
        return (!item.purchased);
      })
    });
  }

  handleAddItem = (item)=> {
    //Add Item
    //1. get button click
    //2. set and retain our state
    //3. change groceries to include a new item

    const newItem = {
      name: item,
      id: Date.now,
      purchased: false
    };

    this.setState({
      ...this.state,
      groceries: [...this.state.groceries, newItem]
    });
  }

  handleToggleItem = (item)=> {
    //Toggle Item
    //1. get button click
    //2. set and retain our state
    //3. change groceries to be same before BUT our clicked item has purchased flipped
    console.log("clicked item: ", item.name);
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem}/>
         </div>
        <GroceryList handleToggleItem={this.handleToggleItem} groceries={this.state.groceries} />
        <button onClick={this.handleToggle} className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);