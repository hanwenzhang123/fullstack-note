import React, { Component } from "react";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleClick = () => {
    if (this.state.inputText.trim().length > 0) {
      this.props.onAdd(this.state.inputText);
    }
    this.setState({
      inputText: "",
    });
  };

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleDropdown = (event) => {
    this.props.onSelect(event.target.value);
  };

  render() {
    const { inputText } = this.state;
    const { handleChange, handleClick, handleDropdown } = this;
    return (
      <div>
        <h1> TO-DO LIST </h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Task"
          value={inputText}
        />
        <button onClick={handleClick}>ADD</button>
        <select onChange={handleDropdown}>
          <option>***sort***</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    );
  }
}

export default InputField;
