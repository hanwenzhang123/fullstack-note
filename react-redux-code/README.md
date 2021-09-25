---
title: SSI-Training-Note (Part1)
---

## SSI-Training-Note (Part1)
https://github.com/hanwenzhang123/SSI-training-note/blob/main/README.md

## SSI-Training-Note (Part2)
https://github.com/hanwenzhang123/SSI-training-note/blob/main/mock/README.md

## Table of Contents
- [React Example](#react-example)
- [PureComponent vs memo](#PureComponent-vs-memo)
- [React Context](#React-Context)
- [Redux Example](#redux-example)

## React Example

#### setState Example
```js
//setState - Asynchronous
//react will batch several setStates together into a single update for performing the state change due to performance
//use callback function to setState to make it correctly rendered instead of just assigning the new object

this.setState((prevState) => {     //passing in a callback function instead of setState directly
	return { number: prevState.number + 1 };
})
```

```js
//setTimeout example
handleClick = () => {
    const { number } = this.state;
    setTimeout(() => {     //no good, synchronous
      this.setState({ number: number + 1 }); // 0: 0 + 1    //always pass the copy, always the number, 0 + 1, closure case
      this.setState({ number: number + 1 }); // 1: 0 + 1    //change back to 0 + 1, outdated value
    }, 0)
    V.S.
  //const { number } = this.state;   
    setTimeout(() => {     //correct value
      this.setState({ number: this.state.number + 1 }); // 0: 0 + 1
      this.setState({ number: this.state.number + 1 }); // 2: 1 + 1     //no closure, updated value
    }, 0)
  }
}
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

#### to-do list example
using `.push()` to push a new item to the state is no good in redux, since push manipulates the existing array in the existing state.

instead, we can using the spread operator `...` to get the copy of the array, and then return the manipulated one.

```js
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
```

[[↑] Back to top](#table-of-contents)
