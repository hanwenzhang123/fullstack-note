Lifting State Up vs Composition vs Inheritance
//Lifting State Up
enable children components to have better smooth communication among each other
//Composition
{props.children} - built-in method, pass down as property children
//Inheritance
not a good model to use in React


//Redux
a library for managing react
component tree talks to each other through layers, local state pass down to props
redux has a store, like a database

/*
Why we use Redux?
https://redux.js.org/
Redux - A Predictable State Container for JS Apps
Advantages:
  Avoid complicated communication for large-scale application
  Avoid excessive lifting state up in ReactJS
  Excellent tool for time-traveling debugging
  Better state management

Three Principles:
  Single source of truth - (store definition) - keep all data to the store
  State is read-only, immutable, persistent data structure
  Changes are made with pure function (reducer) -  change needs action

Action:
  An object include the action type/payload - the content you gonna use to make the change
    What you try to do? like number increase, decrease?
  Emit an action to reducer (disptach the action)

Reducer:
  Expecting all types of action as defined. 
  Pure function is static, when we do not perform the render.
  Pure function, A input -> A output a + b = c (same input with consistant output)
  Reply on the input, and local state (state at the moment)
  no side-effect, output will be predictable

Store:

Redux Flow:
User Click Btn:
ReactJS -> setState() -> local state update -> UI re-rendering -> Ta-la
ReactRedux -> emit an action (dispatch an action) -> Reducer will calculate next state 
          -> Component subscribing to the store data re-rendering

*/


//index.js
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(); //create the store

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
