import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  // Constructor with state

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form
  handleClick = (e)=> {
    e.preventDefault();

    this.props.handleAddItem("trees");
  }
  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChange} type="text" name="item" />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default ListForm;