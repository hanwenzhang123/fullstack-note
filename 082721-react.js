//Lists and Keys 
//https://reactjs.org/docs/lists-and-keys.html
key is unique item for sub-components, iterating through always add the key!
  adding key is subject to the context, the current context environment is meaningful, proper context is important
{ numArr.map((num, index) => ( <Child key={index} num={num}  /> ))}   //here we use index as the key but better to be more unique


function Child(props) {
//   const {num, index} = props;
//   return (
//     <div key={index}> {num} </div>    //adding key here is no good
//     );       //we do not add key to individual component, it just looks around itself, not aware of surrounding
// }


//React.Fragment - Looks cleaner
function Child(props) {
  const { num } = props;
  return (
    <React.Fragment>
      <div> {num} </div>
      <button> + </button>
    </React.Fragment>
  );
}
  
  
//Lifting State Up
//sharing state is accomplished by moving it up to the closest common ancestor of the components that need it.
//by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.
//For sub-components to talk to each other through parents
//Redux: state management, controlling in a single object no matter how deep you are, no needs for lifting state up
//Redux creates a store, so sub-components can directly access values through store instead of relying parents(grandparents)
function Child(props) {
  const { num, clickHandler } = props;
  //local track of the number myself
  return (
    <div>
      <span> {num} </span>
      <button onClick={clickHandler}> + </button>
    </div>
  );
}


//SyntheticEvent -> consistency -> wrapper(basicEvent)
//because we run react in different environment, so we want consistency across multiple broswer like a wrapper
  onClickHandler = (index) => {
    console.log(index);
  };

  render() {
    const { numArr } = this.state;
    const sum = this.calcSum();
    return (
      <div className="App">
        <h1>Hi</h1>
        <Sum sum={sum} />
        {numArr.map((num, index) => (
          <Child
            key={index}
            num={num}
            clickHandler={(localParams) => this.onClickHandler(index)}
          /> //we pass (localParams) here, will be printed SyntheticEvent
        ))}
      </div>
    );
  }
  
  
//update the state
  onClickHandler = (index) => {
    const newArr = [...this.state.numArr];
    ++newArr[index];
    this.setState({ numArr: newArr }); //modify, overwrite the newArr
  };

  


//Complete Code
import React, { Component, memo } from "react";
import "./styles.css";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numArr: [1, 2, 3]
    };
  }

  calcSum = () => {
    const { numArr } = this.state;
    return numArr.reduce((x, y) => x + y, 0);
  };

  onClickHandler = (index) => {
    const newArr = [...this.state.numArr];
    ++newArr[index];
    this.setState({ numArr: newArr });
  };

  render() {
    const { numArr } = this.state;
    const sum = this.calcSum();
    return (
      <div className="App">
        <h1>Hi</h1>
        <Sum sum={sum} />
        {numArr.map((num, index) => (
          <Child
            key={index}
            num={num}
            clickHandler={() => this.onClickHandler(index)}
          />
        ))}
      </div>
    );
  }
}

function Child(props) {
  const { num, clickHandler } = props;
  console.log("Rendering Child");
  return (
    <div>
      <span> {num} </span>
      <button onClick={clickHandler}> + </button>
    </div>
  );
}

const Sum = (props) => {
  const { sum } = props;
  console.log("Rendering Sum");
  return <div> Sum: {sum} </div>;
};

export default Parent;
