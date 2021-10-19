//Lists and Keys - https://reactjs.org/docs/lists-and-keys.html
// key is unique item for sub-components, iterating through always add the key!
//   adding key is subject to the context, the current context environment is meaningful, proper context is important
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numArr: [1, 2, 3]
    };
  }
  render() {
    const { numArr } = this.state;
    return (
      <div className = "App">
      <div> Sum: 6 </div>
      { numArr.map((num, index) => ( 
        <Child key={index} num={num}  />      //here we use index as the key but better to use something more unique
       ))}                                  //we can do key like {`${index}-${num}`}
     </div>
    );
  }
}
function Child(props) {
  const {num} = props;
  return (
    <div> {num} </div>    //adding key here is no good like <div key={props.index}> {num} </div>
    );       //we do not add key to individual component, it just looks around itself, not aware of surrounding
}


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
//  Redux: state management, controlling in a single object no matter how deep you are, no needs for lifting state up
//  Redux creates a store, so sub-components can directly access values through store instead of relying parents(grandparents)
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
  
  
//update the state using setState()
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
  return (
    <div>
      <span> {num} </span>
      <button onClick={clickHandler}> + </button>
    </div>
  );
}

const Sum = (props) => {
  const { sum } = props;
  return <div> Sum: {sum} </div>;
};

export default Parent;


//Using Memo
import React, { Component, memo } from "react";
import "./styles.css";

const WrapperChild = memo(Child);

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

  tempFunc = null;
  //singleton design pattern
  makeHandler = (index) => {
    if (!this.tempFunc) this.tempFunc = () => this.onClickHandler(index);
    return this.tempFunc;
  };

  render() {
    const { numArr } = this.state;
    const sum = this.calcSum();
    return (
      <div className="App">
        <h1>Hi</h1>
        <Sum sum={sum} />
        {numArr.map((num, index) => (
          <WrapperChild
            key={index}
            num={num}
            clickHandler={this.makeHandler(index)}
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
