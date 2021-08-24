//Test Coding Question 1
//Version1
//The stale closure captures variables that have outdated values
function createIncrement() {
    let value = 0;

    function increment() {
      ++value;
      console.log(value);
    }
  
    const message = `current value: ${value}`;    //closure - a stale closure, it expires, outdated
    function log() {
      console.log(message);
    }
  
   return [increment, log];
}

const [increment, log] = createIncrement();   //destructure
increment(); // 1
increment(); // 2
log(); // current value: 0


//Version2
function createIncrement() {
    let value = 0;

    function increment() {
      ++value;
      console.log(value);
    }
  
    function log() {
      const message = `current value: ${value}`;    //within the scope, re-calculate the whole message
      console.log(message);
    }
  
   return [increment, log];
}

const [increment, log] = createIncrement();   //destructure
increment(); // 1
increment(); // 2
log(); // current value: 2


//Test Coding Question 2
const list = [
  {value: 'a', delay: 2000},
  {value: 'b', delay: 1000},
  {value: 'c', delay: 3000},
];

//We need to output ‘a’ after 2 seconds, output ‘b’ 1 second after ‘a’, and output ‘c’ 3 seconds after ‘b’

//version1
setTimeout(function(){ console.log(list[0].value) }, 2000); 
setTimeout(function(){ console.log(list[1].value) }, 1000 + 2000); 
setTimeout(function(){ console.log(list[2].value) }, 3000 + 1000 + 2000);

//version2 - recursion
function printT(list) {
  if (list.length === 1) {    //the only value in the list
    return setTimeout(() => console.log(list[0].value), list[0].delay);   //return to kill the recursion
  }         //when we perform recursion, make sure to cover the edge correctly

  setTimeout(() => {
    console.log(list[0].value);
    printT( list.slice(1) );    //make it recursive
  }, list[0].delay)
}

printT(list);


//React Intro Demo

https://reactjs.org/docs/hello-world.html
https://reactjs.org/tutorial/tutorial.html
https://codesandbox.io/s/new
https://www.w3schools.com/react/default.asp

//What Is React?
React is a JavaScript library for building user interfaces, it is a frontend framework. 
It lets you compose complex UIs from small and isolated pieces of code called “components”.

//What is Component?
React is a component based language.
Components are like functions that return HTML elements via a render() function.
Components are reusable, you can use the component across different pages

//What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

// Pros of React
VirtualDOM
JSX (HTML + JS)
   - good for dev
   - efficient context switching is now avoid
Reusability

// ES6 new feature <-> React?
// bind, arrow func
//arrow function with this keyword, so it will lexically go up a scope

// class component or functional component

import React from 'react';
import "./styles.css";

class App extends React.Component { //extends the component
  constructor(props) {    //we need the constructor
    super(props); // we need the super() to enable the use of 'this' in the following part
    this.state = {
      name: ""
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

  onChangeHandler = (e) => {
    this.setState({ name: e.target.value }) // CORRECT

    // what does setState do?
    // 1. update my(component) local state Correctly
    // 2. setState then will trigger re-rendering!
  }

  //render function return is for whatever the user will see
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
 
