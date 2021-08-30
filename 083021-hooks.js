//react hooks -> this feature helps to hook into react methodology
import React, { useState, useEffect } from "react";
import "./styles.css";

const computationInit = () => {
  console.log("Computing init");
  return 0;
};

function App() {
  //arr[0] -> state value, (0) here;  arr[1] => handler
  const [count, setCount] = useState(() => computationInit()); //callback function, only called at the initial time
  const [name, setName] = useState(""); //another local state, initial state in ()

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count Number {count}</div>
      <button onClick={() => setName("Hello")}>show name</button>
      <div>{name}</div>
    </>
  );
}

export default App;


//
function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });

  return (
    <>
      <button
        onClick={() =>
          setCount((prevState) => {
            return {
              //without ...prevState, it overwrites the object
              //...prevState first - give all the key I have then make modification to the count1
              ...prevState,
              count1: prevState.count1 + 1 //we only modify count1 without changing/overriding count2
            };
          })
        }
      >
        +
      </button>
      <div>Count 1 - {count1}</div>
      <div>Count 2 - {count2}</div>
    </>
  );
}


//useEffect()
function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });

  useEffect(() => {
    console.log("useEffect called!");
  }, [count1, count2]);
  //dependency array -> empty array <-> ComponentDidMount (no dependency, we call it after every render)
  //if only count1 is the dependency, same count1 changes when we click the button, so rendering and useEffect called will the printed out.
  //if only count2 is the dependency, same count2 never changes, we only have rendering printout in the console.

  return (
    <>
      {console.log("Rendering")}
      <button
        onClick={() =>
          setCount((prevState) => {
            return {
              ...prevState,
              count1: prevState.count1 + 1
            };
          })
        }
      >
        +
      </button>
      <div>Count 1 - {count1}</div>
      <div>Count 2 - {count2}</div>
    </>
  );
}


//shallow comparison
function App() {
  const [countObj, setCount] = useState({ count1: 1, count2: 2 });

  useEffect(() => {
    console.log("useEffect called!");
  }, [countObj]);
  //both rendering and useEffect called will be printed out in the console when we click the botton

  return (
    <>
      {console.log("Rendering")}
      <button
        onClick={() =>
          setCount((prevState) => {
            return {
              ...prevState    //complete different object
            };
          })
        }
      >
        +
      </button>
      <div>Count 1 - {countObj.count1}</div>
      <div>Count 2 - {countObj.count2}</div>
    </>
  );
}


//class-based component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(`Current value -> ${this.state.count}`);
  }

  componentDidUpdate() {
    console.log(`Current value -> ${this.state.count}`);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me!
        </button>
      </div>
    );
  }
}


