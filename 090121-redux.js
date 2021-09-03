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
  
How do you group different reducers?
- combineReducers()

Store:

Redux Flow:
User Click Btn:
ReactJS -> setState() -> local state update -> UI re-rendering -> Ta-la
ReactRedux -> emit an action (dispatch an action) -> Reducer will calculate next state 
          -> Component subscribing to the store data re-rendering
*/


//index,js - where to setup Redux
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);   //create the store through createStore() which imported from redux, the store will be generated based on reducer

const rootElement = document.getElementById("root");
ReactDOM.render(      //provider to inform the whole structure, for provider layer, everything inside would be props.children
  <Provider store={store}>    //provider is like passing down everything to the children
    <App />         //store is like global state, available to all children, stroe is the values in your redux store are, like the data from the database
  </Provider>,    //initial render into our App
  rootElement
);


//App.js
import React from "react";
// HOC - add the specific example
import { connect } from "react-redux";      //the helper function, connect is a function
import * as counterActions from "./action";   //import all kind of actions we have in the action file
// actions = { .... ..... ..... }   //include everything

class App extends React.Component {
  render() {
    // const { number } = this.state;     //we do not have it anymore
    const { numberForApp, incHandler, decHandler } = this.props;    //get from the props, the state and dispatch we defined through connect()

    return (
      <div className="App">
        <h3>{numberForApp}</h3>       //display
        <button onClick={incHandler}>+</button>     //using the function as clikc handler
        <button onClick={decHandler}>-</button>     //using the function as clikc handler
      </div>
    );
  }
}

const mapStateToProps = (state) => ({   //build the parameter from connect(), we take the state
  numberForApp: state.counterReducer      //using the value from the store, counterReducer is for the specific one from the reducer file
});

const mapDispatchToProps = (dispatch) => ({   //build the parameter from connect(), we take the disptach, we pass the function, we disptach the action
  // action generator, directly talking to the store, if you do not need a function, just delete it, no worries about props
  incHandler: () => dispatch({ type: "INCREMENT" }),    //dispatch(actions.incAction()) - containing our action type (a payload)
  decHandler: () => dispatch(counterActions.decAction())    //call the action
});

// ConnectedApp = connect()(App)
// const ConnectedApp = connect(    //connect() takes 2 parameter - mapStateToProps and mapDispatchToProps
//   mapStateToProps, // on value
//   mapDispatchToProps, // on handler/actions
// )(App)

const ReduxHOC = connect(      //here we use the connection function, connect will create the HOC wrapper that takes the APP
  mapStateToProps, // on value - get the value from the store, make sure the component is hook up with the store (display)
  mapDispatchToProps // on handler/actions - the action we need (user interaction)
);
const ConnectedApp = ReduxHOC(App);   //here is to connect to our App, we do not connect directly

export { ConnectedApp as default, App };  //export default ConnectedApp


//action.js - define actions
const incAction = () => {
  return {
    type: "INCREMENT"
  }
}
const decAction = () => {   //add a new action
  return {
    type: "DECREMENT"
  }
}
export {    //export the actions we defined
  incAction,
  decAction 
}


//reducer.js - reply on the input and the local state at the moment
import { combineReducers } from "redux";    //import combineReducers for the reducer file, group different reducers when we have a lot of reducers

const INIT_STATE = 1;   //we need an init value from the store
                                            //action will be emit from the action.js file
const counterReducer = (state = INIT_STATE, action) => {    //state is the current state with a default value 
  switch (action.type) {      //judged by the different types of actions
    case "INCREMENT":       //different cases, make sure matches in the action file
      return state + 1;       //return the current local state does what
    case "DECREMENT":       //tell reducer, whenever you see this case, do something
      return state - 1;       //what to do when see the case
    default:            //always end with a default case
      return state;    //just return itself
  }
};

const rootReducer = combineReducers({     //using combineReducers() imported from redux, here pass the switch cases counterReducer to it, but you can pass more 
  counterReducer
});
export default rootReducer;
 
