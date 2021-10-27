---
title: Boilerplate Code (Note Part4)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## Frontend Miscellaneous (Note Part3)
https://github.com/hanwenzhang123/frontend-note/blob/main/03-note/README.md

## Table of Contents
- [JavaScript Example](#JavaScript-Example)
- [React Example](#React-Example)
- [PureComponent vs memo](#PureComponent-vs-memo)
- [React Context](#React-Context)
- [Redux Example](#Redux-Example)
- [React HOC](#React-HOC)
- [React Counter](#React-Counter)
- [React To Do List](#React-To-Do-List)
- [Redux Counter](#Redux-Counter)
- [Redux To Do List](#Redux-To-Do-List)
- [Hooks Counter](#Hooks-Counter)

## JavaScript Example

#### Implementing `Array.forEach()`
- `forEach()` - iterate the array, does not return anything
- `array.forEach(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myForEach = function(callback) {
   for (let i = 0; i < this.length; i++) { 
     callback(this[i], i, this)
   }
}
```

#### Implementing `Array.map()`
- `map()` - iterate the array, return a new array with results from the passing function
- `array.map(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myMap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
```

#### Implementing `Array.filter()`
- `filter()` - returns a new array with the elements that passed the provided test
- `array.filter(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myFilter = function (callback) {
  const filterArray = [];
  for (let index = 0; index < this.length; index++) {
    let result = callback(this[index], index, this); //result returns boolean through callback for the test
    if (result) {
      filterArray.push(this[index]);
    }
  }
  return filterArray;
};
```

#### Implementing `Array.reduce()`
//reduce() - returns a single output value which is the function's accumulated result
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue) -> initialValue for accumulator
//reduce(accumulator, currentValue) -> accumulator like sum, currentValue adds to the accumulator
```js
Array.prototype.myReduce = function (callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    let currentValue = this[i];
    value = callback(value, currentValue);
  }
  return value;
};
```

#### Implementing `Array.some()`
- `some()` - check if any of the elements in the array passes a provided test, return boolean
- `array.some(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (result) {
      return true;
    }
  }
  return false;
};
```

#### Implementing `Array.every()`
- `every()` - check if every element in the array passes a provided test, return boolean
- `array.every(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (!result) {
      return false;
    }
  }
  return true;
};
```

#### Implementing `Array.find()`
- `find()` - returns the first item that matches the result that passes a test, or undefined if no matches.
- `array.find(function(currentValue, index, arr),thisValue)`
```js
Array.prototype.myFind = function(callback){
  let result
  for (let i = 0; i < this.length; i++) {
    let isFound = callback(this[i], i, this)
    if(isFound){
      result = this[i]
      break //stop the loop if find that item
    }
  }
  return result
}
```

#### Implementing `Array.findIndex()`
- `findIndex()` - return the index of the first element in the array that passes the test, return -1 if no element found
- `array.findIndex(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myFindIndex = function(array, callback) {
 for (let index = 0; index < this.length; index += 1) {
   const value = array[index];
   if (callback(value, index, array)) {
     return index;
   }
 }
 return -1;
}
```

#### Implementing `Array.includes()`
-  `includes()` - returns true if an array contains a specified element, otherwise false -> case sensitive
- `array.includes(element, start)`
```js
Array.prototype.myIncludes = function(element){
   for(let i = 0; i < this.length; i++){
      const value = this[i];
      if(element === value){
         return true;
      };
   };
   return false;
};
```

#### Build an Array
```js
class NewArray {
  constructor() {
    (this.length = 0), (this.data = {});
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArray = new NewArray();
console.log(newArray);
```

#### fizzBuzz
```js
let fizzBuzz = (n) => {
   for(let i = 1; i <= n; i++){
     if(i % 3 === 0 && i % 5 === 0){  
     //Then in each iteration we will first check if the number is divisible by both 3 and 5, then print ‘FizzBuzz’.
        console.log('FizzBuzz');
	//Else if it is divisible by only 3 then print ‘Fizz’ or If it is only divisible by 5 then print ‘Buzz’
     }else if(i % 3 === 0){
        console.log('Fizz'); 
     }else if(i % 5 === 0){
        console.log('Buzz');
     }else{	//Otherwise just print the number.
        console.log(i);
     }
   }
}
```

[[↑] Back to top](#table-of-contents)

## React Example

#### setTimeout example
```js
handleClick = () => {
    const { number } = this.state;
    setTimeout(() => {     //no good, synchronous
      this.setState({ number: number + 1 }); // 0: 0 + 1    //always pass the copy, always the number, 0 + 1, closure case
      this.setState({ number: number + 1 }); // 1: 0 + 1    //change back to 0 + 1, outdated value
    }, 0)

  //const { number } = this.state;   
    setTimeout(() => {     //correct value
      this.setState({ number: this.state.number + 1 }); // 0: 0 + 1
      this.setState({ number: this.state.number + 1 }); // 2: 1 + 1     //no closure, updated value
    }, 0)
  }
}
```

#### Parent-Child Example
```js
//Parent.js
import React, {useState} from 'react';
improt './Parent.css';
improt Child from './components/Child';

function Parent() {
  const [word, setWord] = useState("Parent");
  
  return(
    <div className = "parent">
      <h1>{Word}</h1>
      <Child 
        changeWord={word => setWord(word)}/>    //set the parameter word to word
    </div>
    );
}
export default Parent;

//Child.js
import React from 'react';
improt './Child.css';

function Child(props) {
  return(
    <div className = "child">
      <h1>Child</h1>
      <button onClick={()=> props.changeWord("Hello World")}>      //onClick then we want something to happen
        Click to Change the Word      //props.changeWord from parent
      </button>
    </div>
    );
}
export default Child;
```

#### Class Component Example
```js
import React from 'react';
import "./styles.css";

class App extends React.Component { //extends the component
  constructor(props) {    //we need the constructor
    super(props); // we need the super() to enable the use of 'this' in the following part
    this.state = {      //state holds very important information about "this" in the object
      name: ""      //empty here so we can update the value, or we can put the hard-coded value
    }
    // this.onClickFunc = this.onClickFunc.bind(this);   
    //bind creates a new function where this is properly referred. so now the onClickFunc below works
  }

  // class method
  // onClickFunc() {     //this function has its own this
  //   console.log(this);   //we should let know which 'this' should I point to (the provided value)
  // }  //returns undefined without the bind, print out App with the bind function

  onClickFunc = () => {   //arrow function does not have its own this, so this will survive in the whole class field
    console.log(this);    //this will properly refers to the App due to arrow function, no more binding issue, no needs to bind in the constructor now
  }

  onChangeHandler = (e) => {        // using the method setState and update the name key
    this.setState({ name: e.target.value })     //when we type in e.target.value, it overrides the name

  render() {
    const name = this.state.name
    console.log(name);
    return (
      <div>
        <div>Hello My { name }</div>
        <button onClick={this.onClickFunc}>CLICK ME!</button> 
        <input onChange={this.onChangeHandler} />
      </div>
    )   //you will never pass a function of involking form, only the definition form the the function
  }     //you also need "this" because class method belongs to the App class here; otherwise you look for scope outside of the class
}

export default App;
```

[[↑] Back to top](#table-of-contents)

## PureComponent vs memo

#### Class wrap with `React.PureComponent` for class component
```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      number: 0
    }
  }
   handleClick = () => {
      const {number} = this.state;
      this.setState({number: number + 1});
   }
  render() {
    const {number} = this.state;
    return (
       <div className ="App">
         <Title /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
} 
class Title extends React.PureComponent {  //extends React.PureComponent, always compare the previous props and current props to determine if needs re-render
//   constructor(props) {
//     super(props);
//   }  
//   shouldComponentUpdate() {...}    //PureComponent works like containing logics with shouldComponentUpdate - compare the props to see if any changes
  render() {  
     console.log("Title rendering");    //this title will only render once, considers shouldComponentUpdate, we cut out unnecessary rendering
     return (
      <div>
       <h1>Happy Today</h1>  
     </div>
    );
  }
}
export default App;
```

#### Function wrap with `memo` for functional component
```js
function Title() {		//capitalize the first letter for customized component
  console.log("Title rendering");    //only render once, considers shouldComponentUpdate
  return (
     <div>
       <h1>Happy Today</h1>  
     </div>
   );
}
const WrapperTitle = memo(Title);      //using memo and change return to the <WrapperTitle /> 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      number: 0
    }
  }
   handleClick = () => {
      const {number} = this.state;
      this.setState({number: number + 1});
   }
  render() {
    const {number} = this.state;
    return (
       <div className ="App">
         <WrapperTitle />     //here we use <WrapperTitle /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
} 
```

[[↑] Back to top](#table-of-contents)

## React Context

#### React Context API
```js
const MyContext = React.createContext();    //JSX - Capitalize
class Component
  state = {
   value: 1 
  }
  contextObj = {    //better performance
        data: this.state.value,
        onActionHandle: () => {   //with a function to pass down
         this.setState({value: 2})
        }
  }
  render() {
    return(
      <MyContext.Provider value = {this.contextObj}>    //like store={store}, better to put the object out not inside nested
        <Child>
      </MyContext.Provider>
      )
  }
//Child.js
  return(
      <MyContext.Consumer>    //function call to get the value that passed in through the provider
        {({data, onActionHandle}) => {
        return (
          <div> 
            {data} 
            <button onClick = {onActionHandler}>Click</button>          
          </div>
        )
      }}
      </MyContext.Consumer>
    )
```

[[↑] Back to top](#table-of-contents)

## Redux Example
	  
#### index.js - How to setup Redux? How do you create store?
```js
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);	//the store will be generated based on reducer that analyze behaviors and modify current local state

ReactDOM.render(     //initial render into our App 
  <Provider store={store}>   //provider to inform the whole structure, for provider layer, everything inside would be props.children
    <App />         //store is like global state, available to all children, stroe is the values in your redux store, like the data from the database
  </Provider>,     //provider is like passing down everything to the children, we pass our store down to every level via createStore(reducer)
  document.getElementById("root")
);
```

#### App.js - subscribe to the store (connect)
`ConnectedApp = connect()(App)`
```js
import React from "react";
import { connect } from "react-redux";      // HOC, connect is a function, the helper function
import * as counterActions from "./action";   //import all kind of actions we have in the action file

class App extends React.Component {
  render() {
    const { numberForApp, incHandler, decHandler } = this.props;    //get from the props, the state and dispatch we defined through connect()

    return (
      <div className="App">
        <h3>{numberForApp}</h3>       		//display value from the store
        <button onClick={incHandler}>+</button>     //using the function as click handler
        <button onClick={decHandler}>-</button>     //using the function as click handler
      </div>
    );
  }
}

const mapStateToProps = (state) => ({   //build the parameter from connect(), take the state
  numberForApp: state.counterReducer      //using the value from the store, counterReducer is the specific one from the reducer file
});

const mapDispatchToProps = (dispatch) => ({   //build the parameter from connect(), take the disptach, pass the function, disptach the action
  incHandler: () => dispatch(counterActions.incAction()),   //dispatch(actions.incAction()) - containing our action type (a payload as needed)
  decHandler: () => dispatch(counterActions.decAction())    //call the action, emit the action that we defined in the action.js
});  // action generator, directly talking to the store, if you do not need a function, just delete it, no worries about props

const ConnectedApp = connect(	//here we use the connection function, connect will create the HOC wrapper that takes the APP
  mapStateToProps,		// on value - get the value from the store, make sure the component is hook up with the store (display)
  mapDispatchToProps		// on handler/actions - the action we need (user interaction)
)(App);				//here is to connect to our App, we do not connect directly

export default ConnectedApp;
```

#### action.js 
```js
const incAction = () => {
  return {
    type: "INCREMENT"
  }
}
const decAction = () => { 
  return {
    type: "DECREMENT"
  }
}
export {    //export the actions we defined
  incAction,
  decAction 
}
```

#### reducer.js 
```js
import { combineReducers } from "redux";    //import combineReducers for the reducer file, group different reducers 

const INIT_STATE = 1;   //init value from the store
                                            
const counterReducer = (state = INIT_STATE, action) => {   //action will be emit from the action.js file, state is the current state with a default value 
  switch (action.type) {      //judged by the different types of actions
    case "INCREMENT":       //different cases, make sure matches in the action file
      return state + 1;       //return the current local state does what
    case "DECREMENT":       //tell reducer, whenever you see this case, do something
      return state - 1;       //what to do when we see the case
    default:            //always end with a default case
      return state;      //just return itself
  }
};

const rootReducer = combineReducers({     //here pass the switch case counterReducer to it, you can pass as many as you need
  counterReducer
});

export default rootReducer;
```

[[↑] Back to top](#table-of-contents)

## React HOC
ContentContainer.js 
```js
import React from "react";
import "./ContentContainer.css";

const ContentContainer = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        checked: false,
      };
    }

    handleVisibility = (e) => {
      this.setState({
        checked: !this.state.checked,
      });
    };

    render() {
      const hidden = this.state.checked === true ? "" : "hidden";
      return (
        <div>
          <span>Invisible Checkbox</span>
          <input type="checkbox" onClick={this.handleVisibility} />
          {hidden ? <OriginalComponent /> : null}
        </div>
      );
    }
  }
  return NewComponent;
};

export default ContentContainer;
```

App.js
```js
import React, { Component } from "react";
import "./App.css";

import HOCCounter from "./components/Counter/Counter";
import HOCTdList from "./components/TdList/TdList";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HOCCounter />
        <HOCTdList />
      </React.Fragment>
    );
  }
}

export default App;
```

index.js
```js
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

[[↑] Back to top](#table-of-contents)

## React Counter
Counter.js
```js
import React, { Component } from "react";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      isRunning: false,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
  };

  incIfOdd = () => {
    if (this.state.number % 2 !== 0) {
      this.increment();
    }
  };

  asyncInc = () => {
    setTimeout(() => {
      this.increment();
    }, 1000);
  };

  reset = () => {
    this.setState({ number: 0 });
  };

  timerHandler = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((prevState) => ({
          number: prevState.number + 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { number } = this.state;
    const { increment, decrement, incIfOdd, asyncInc, reset, timerHandler } =
      this;

    return (
      <Card>
        <Count num={number} />
        <ButtonRow clickHandler={increment} value="Increment +1" />
        <ButtonRow clickHandler={decrement} value="Decrement -1" />
        <ButtonRow clickHandler={incIfOdd} value="Increment-If-Odd" />
        <ButtonRow clickHandler={asyncInc} value="Async-Inc" />
        <ButtonRow clickHandler={reset} value="Reset" />
        <ButtonRow
          clickHandler={timerHandler}
          value={this.state.isRunning ? "TIMER STOP" : "TIMER START"}
        />
      </Card>
    );
  }
}

const HOCCounter = ContentContainer(Counter);
export default HOCCounter;
```

ButtonRow.js
```js
import React from "react";

function ButtonRow(props) {
  return (
    <div className="App">
      <button onClick={props.clickHandler}>{props.value}</button>
    </div>
  );
}

export default ButtonRow;
```

Count.js
```js
import React from "react";

function Count(props) {
  const { num } = props;
  return (
    <div>
      <h1>COUNTING</h1>
      <h2>Current Count: {num}</h2>
    </div>
  );
}

export default Count;
```

[[↑] Back to top](#table-of-contents)

## React To Do List
TdList.js
```js
import React, { Component } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class TdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Study React", "Do Homework"],
    };
  }

  addItem = (inputText) => {
    const list = [...this.state.list];
    list.push(inputText);
    this.setState({ list });
  };

  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter((item, index) => index !== id);
    this.setState({ list: updatedList });
  };

  sortList = (value) => {
    const list = [...this.state.list];
    if (value === "asc") {
      const ascList = list.sort((a, b) => a.localeCompare(b));
      this.setState({ list: ascList });
    } else if (value === "desc") {
      const descList = list.sort((a, b) => b.localeCompare(a));
      this.setState({ list: descList });
    }
  };

  render() {
    const { list } = this.state;
    const { addItem, deleteItem, sortList } = this;

    return (
      <Card>
        <InputField onAdd={addItem} onSelect={sortList} />
        <ItemList onDisplay={list} onDelete={deleteItem} />
      </Card>
    );
  }
}

const HOCTdList = ContentContainer(TdList);
export default HOCTdList;
```

InputField.js
```js
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
```

ItemList.js
```js
import React from "react";
import Item from "./Item";

function ItemList(props) {
  if (props.onDisplay.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.onDisplay.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default ItemList;
```

Item.js
```js
import React from "react";

function Item(props) {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={() => props.onDelete(props.id)}>x</button>
      </li>
    </div>
  );
}

export default Item;
```

[[↑] Back to top](#table-of-contents)

## Redux Store
index.js
```js
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store/reducer";
import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

App.js
```js
import React, { Component } from "react";
import HOCCounter from "./components/Counter/Counter";
import HOCTdList from "./components/TdList/TdList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HOCCounter />
        <HOCTdList />
      </React.Fragment>
    );
  }
}

export default App;
```

action.js
```js
//COUNTER
const incAction = () => {
  return {
    type: "INCREMENT",
  };
};
const decAction = () => {
  return {
    type: "DECREMENT",
  };
};
const oddAction = () => {
  return {
    type: "ODD",
  };
};
const resetAction = () => {
  return {
    type: "RESET",
  };
};
const timerAction = () => {
  return {
    type: "TIMER",
  };
};

let timer;
export const timerUpdate = () => (dispatch, getState) => {
    clearInterval(timer);
    timer = setInterval(() => {
        dispatch(incAction());
    }, 1000);
  }

export const timerStopUpdate = () => (dispatch, getState) =>
  clearInterval(timer);


//TO-DO LIST
const textAction = (item) => {
  return {
    type: "TEXT",
    payload: item,
  };
};

const addAction = () =>  (dispatch, getState) => {
  const inputText = getState().tdListReducer.text;
  dispatch({
  type: "ADD",
  payload: inputText, 
    })
};

const deleteAction = (id) => {
  return {
    type: "DELETE",
    payload: id
  };
};

const sortAction = (value) => {
  return {
    type: "SORT",
    payload: value,
  };
};

//Visibility
const visibilityAction = () => {
  return {
    type: "CHECK",
  };
};

export {
  incAction,
  decAction,
  oddAction,
  resetAction,
  timerAction,
  textAction,
  addAction,
  deleteAction,
  sortAction,
  visibilityAction
};
```
reducer.js
```js
import { combineReducers } from "redux";

//COUNTER
const COUNT_INIT_STATE = {
  counter: 0,
  isRunning: false,
};

const counterReducer = (state = COUNT_INIT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ODD":
      return {
        ...state,
        counter: state.counter % 2 !== 0 ? state.counter + 1 : state.counter,
      };
    case "RESET":
      return {
        ...state,
        counter: (state.counter = 0),
      };
    case "TIMER":
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    default:
      return state;
  }
};

//TO-DO LIST
const TODO_INIT_STATE = {
  todo: ["Study Redux", "Do Homework"],
  text: "",
};

const tdListReducer = (state = TODO_INIT_STATE, action) => {
  switch (action.type) {
    case "TEXT":
      return { ...state, text: action.payload };
    case "ADD":
      return {...state, todo: [...state.todo, action.payload], text: ""}; 
    case "DELETE":
      return { ...state, todo: state.todo.filter((item, index) => index !== action.payload)}
    case "SORT":
      if (action.payload === "asc") {
        const ascList = state.todo.sort((a, b) => a.localeCompare(b));
        return { ...state, todo: [...ascList]};
      } else if (action.payload === "desc") {
        const descList = state.todo.sort((a, b) => b.localeCompare(a));
        return { ...state, todo: [...descList]};
      }
      break;
    default:
      return state;
  }
};

//Visibility
const VISIBILITY_INIT_STATE = {
  checked: false,
};

const visibilityReducer = (state = VISIBILITY_INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK":
      return {
        checked: !state.checked,
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
  tdListReducer,
  visibilityReducer
});

export default rootReducer;
```

[[↑] Back to top](#table-of-contents)

## Redux Counter
Counter.js
```js
import React, { Component } from "react";

import Card from "../UI/Card";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import ContentContainer from "../HOC/ContentContainer";

class Counter extends Component {
  render() {
    return (
      <Card>
        <Count />
        <ButtonRow />
      </Card>
    );
  }
}

const HOCCounter = ContentContainer(Counter);
export default HOCCounter;
```

ButtonRow.js
```js
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function ButtonRow(props) {
  function async() {
    setTimeout(() => {
      props.incHandler();
    }, 1000);
  }

  if(props.isRunning) {
    props.timerUpdate();
  } else {
    props.timerStopUpdate();
  }

  return (
    <div className="App">
      <button onClick={props.incHandler}>Increment +1</button> <br />
      <button onClick={props.decHandler}>Decrement -1</button> <br />
      <button onClick={props.oddHandler}>Increment-If-Odd</button> <br />
      <button onClick={async}>Async-Inc</button> <br />
      <button onClick={props.resetHandler}>Reset</button> <br />
      <button onClick={props.timerHandler}>
        {props.isRunning ? "TIMER STOP" : "TIMER START"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isRunning: state.counterReducer.isRunning,
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch(actions.incAction()),
  decHandler: () => dispatch(actions.decAction()),
  oddHandler: () => dispatch(actions.oddAction()),
  resetHandler: () => dispatch(actions.resetAction()),
  timerHandler: () => dispatch(actions.timerAction()),
  timerUpdate: () => dispatch(actions.timerUpdate()),
  timerStopUpdate: () => dispatch(actions.timerStopUpdate()),
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonRow);

export default ConnectedCounter;
```

Count.js
```js
import React from "react";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div>
      <h1>COUNTING</h1>
      <h2>Current Count: {props.counter}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter,
});

export default connect(mapStateToProps)(Count);
```

[[↑] Back to top](#table-of-contents)

## Redux To Do List
TdList.js
```js
import React, { Component } from "react";

import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class TdList extends Component {
  render() {
    return (
      <Card>
        <InputField />
        <ItemList />
      </Card>
    );
  }
}

const HOCTdList = ContentContainer(TdList);
export default HOCTdList;
```

InputField.js
```js
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

const InputField = ({ text, textHandler, addHandler, sortHandler }) => {
  const handleChange = (e) => {
    textHandler(e.target.value);
  };

  const handleAdd = (e) => {
    addHandler(e.target.value);
  };

  const handleDropdown = (e) => {
    sortHandler(e.target.value);
  };

  return (
    <div>
      <h1> TO-DO LIST </h1>
      <input
        type="text"
        value={text}
        placeholder="Enter Task"
        onChange={handleChange}
      />

      <button onClick={handleAdd}>ADD</button>
      <select onChange={handleDropdown}>
        <option>***sort***</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};
const mapStateToProps = (state) => ({
  text: state.tdListReducer.text,
});

const mapDispatchToProps = (dispatch) => ({
  textHandler: (item) => dispatch(actions.textAction(item)),
  addHandler: (todo) => dispatch(actions.addAction(todo)),
  sortHandler: (value) => dispatch(actions.sortAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
```

ItemList.js
```js
import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function ItemList(props) {
  if (props.todo.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.todo.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.deleteHandler}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.tdListReducer.todo,
});

const mapDispatchToProps = (dispatch) => ({
  deleteHandler: (id) => dispatch(actions.deleteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
```

Item.js
```js
import React from "react";

function Item(props) {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={() => props.onDelete(props.id)}>x</button>
      </li>
    </div>
  );
}

export default Item;
```

[[↑] Back to top](#table-of-contents)


## Hooks Counter
```js
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
```

[[↑] Back to top](#table-of-contents)
