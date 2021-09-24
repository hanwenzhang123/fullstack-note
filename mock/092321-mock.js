//Example 1 - Currying

// addNumber(1,2,3) = 6

const addNumber = (a) => (b) => (c) => a+b+c;
const addNumber = (a) => (b) => (c) => ({
    a+b+c;
  })
const addNumber = (a) => (b) => (c) => {
    return a+b+c;
  }

const a = x => x+1
const a = x => a+b+c
const a = x => ({ x:1 })
const a = x => ({ object })

// WRONG => function body 
// const a = x => { object }
// const addNumber = (a) => (b) => (c) => {
//     a+b+c
// }


//Example 2 
import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryInfo: "",
      numberInput: "",
      areaCode: {
        China: "+86",
        USA: "+1",
        Japan: "+81"
      }
    };
  }

  changeNumber = (event) => {
    this.setState({ numberInput: event.target.value });
  };

  changeDropDown = (event) => {
    const input = event.target.value;
    let sliceNumberInput = this.state.numberInput;
    let sliceAreaCode= this.state.areaCode[input];

    this.setState({ countryInfo: input });
    
    if (this.state.numberInput[0] === "+") {
      sliceNumberInput = sliceNumberInput.slice(3)
    }

    this.setState((prevState) => {
      return {
        numberInput: prevState.areaCode[input] + sliceNumberInput
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.countryInfo} {this.state.numberInput}
        </h1>
        <select onChange={this.changeDropDown}>
          <option>***Select a Country***</option>
          <option value="China">China</option>
          <option value="USA">USA</option>
          <option value="Japan">JAPAN</option>
        </select>
        <input
          type="text"
          placeholder="Enter a Number"
          value={this.state.numberInput}
          onChange={this.changeNumber}
        />
      </div>
    );
  }
}

export default App;
