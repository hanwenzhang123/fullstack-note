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


//...prevState - modify selected key-value in the object
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
  }, [countObj]);   //for the dependency array, the hook will provide a shallow comparison of your previous value and current one
  //both rendering and useEffect called will be printed out in the console when we click the botton

  return (
    <>
      {console.log("Rendering")}
      <button 
        onClick={() =>
          setCount((prevState) => {
            return {      //returning an object of previous state
              ...prevState    //complete different object, a shallow copy
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


//class-based component - same as below function component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {   //initial render
    console.log(`Current value -> ${this.state.count}`);
  }

  componentDidUpdate() {    //when we update
    console.log(`Current value -> ${this.state.count}`);
  }

//   componentWillUnmount() {}

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

/*
Current value -> 0 
Current value -> 1 
Current value -> 2 
Current value -> 3 
Current value -> 4 
Current value -> 5 
*/


//function component - same as above class-based component
//more cleaner using useEffect()
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Current Value -> ${count}`);   //state change here instead of we do componentDidUpdate() since it lives in a different life cycle
  }, [count]);   //we looking at the count as dependency, React hooks enable usage based on what it is related, instead of lifecycle

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count - {count}</div>
    </>
  );
}

export default App;

/*
Current value -> 0 
Current value -> 1 
Current value -> 2 
Current value -> 3 
Current value -> 4 
Current value -> 5 
*/


//more dependency example
const Hello = () => {
  useEffect(() => {
    console.log("Hello updating");
  });   //here we pass no dependency, so every time we click, we print out both "Hello updating" and `Current Value -> ${count}`

  return <div>Hello Monday</div>;
};

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Current Value -> ${count}`);
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count - {count}</div>
      <Hello />
    </>
  );
}


//prevent re-render (use memo to cut off re-render)
import React, { useState, useEffect, memo } from "react";
import "./styles.css";

const Hello = () => {
  useEffect(() => {
    console.log("Hello updating");    //no props no state change, so it will only print out once when it initially rendered
  });

  return <div>Hello Monday</div>;
};

const MemoHello = memo(Hello);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Current Value -> ${count}`);
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>Count - {count}</div>
      <MemoHello />
    </>
  );
}

export default App;

/*
Hello updating 
Current Value -> 0 
Current Value -> 1 
Current Value -> 2 
Current Value -> 3 
Current Value -> 4 
Current Value -> 5 
*/


//return in useEffect() - unmounting, clean up previous render
const Hello = () => {
  useEffect(() => {
    console.log("Hello updating");
    //clean up logic in return, based on component unmount, clean up previous render
    return () => {
      console.log("unmounting!"); //unmounting print out when the component no longer in the life span
    };
  }, []);

  return <div>Hello Monday</div>;
};

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // console.log(`Current Value -> ${count}`);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          setShow(!show);
        }}
      >
        +
      </button>
      <div>Count - {count}</div>
      {show && <Hello />}
    </>
  );
}

/*
Hello updating 
unmounting! 
Hello updating 
unmounting! 
Hello updating 
unmounting! 
Hello updating 
unmounting! 
*/


//useEffect() example
const initValue = () => {
  console.log("Called"); //will only called once initially when just rendered
  return false;
};

export default function App() {
  const [time, setTime] = useState(0);
  const [show, setShow] = useState(() => initValue());

  function changeTime() {
    setShow(!show); //this.setState - async - batch multiple
    console.log(show); // show => false (delay because setSate is async)
  }

  useEffect(() => {
    let intId; //initiate the intId variable here so we can access it due to the scope if we declare the variable below
    if (show) {
      intId = setInterval(() => {
        //we can use var here if we do not initially declare the varibale
        setTime((old) => old + 1);
      }, 1000);
    }
    //clean-up the interval we have not finished at previous render before the next render
    return () => {
      clearInterval(intId);
    };
  }, [show]); //re-render based on the show value

  return (
    <div>
      Time: {time}
      <button onClick={() => changeTime()}>{show ? "Stop" : "Start"}</button>
    </div>
  );
}
 
