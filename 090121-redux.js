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
  </Provider>,
  rootElement
);


//App.js
import React from "react";
// HOC - add the specific example
import { connect } from "react-redux";      //the helper function
import * as counterActions from "./action";
// actions = { .... ..... ..... }

class App extends React.Component {
  render() {
    // const { number } = this.state;
    const { numberForApp, incHandler, decHandler } = this.props;

    return (
      <div className="App">
        <h3>{numberForApp}</h3>
        <button onClick={incHandler}>+</button>
        <button onClick={decHandler}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numberForApp: state.counterReducer
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch({ type: "INCREMENT" }),
  // action generator
  decHandler: () => dispatch(counterActions.decAction())
});

// const ConnectedApp = connect(
//   mapStateToProps, // on value
//   mapDispatchToProps, // on handler/actions
// )(App)

const ReduxHOC = connect(
  mapStateToProps, // on value
  mapDispatchToProps // on handler/actions
);
const ConnectedApp = ReduxHOC(App);

export { ConnectedApp as default, App };


//action.js - defind an action
// const incAction = () => {
//   return {
//     type: "INCREMENT"
//   }
// }
// export {    //export the action we defined
//   incAction
// }

import React from "react";
// HOC - add the specific example
import { connect } from "react-redux";
import * as counterActions from "./action";
// actions = { .... ..... ..... }

class App extends React.Component {
  render() {
    // const { number } = this.state;
    const { numberForApp, incHandler, decHandler } = this.props;

    return (
      <div className="App">
        <h3>{numberForApp}</h3>
        <button onClick={incHandler}>+</button>
        <button onClick={decHandler}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numberForApp: state.counterReducer
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch({ type: "INCREMENT" }),
  // action generator
  decHandler: () => dispatch(counterActions.decAction())
});

// const ConnectedApp = connect(
//   mapStateToProps, // on value
//   mapDispatchToProps, // on handler/actions
// )(App)

const ReduxHOC = connect(
  mapStateToProps, // on value
  mapDispatchToProps // on handler/actions
);
const ConnectedApp = ReduxHOC(App);

export { ConnectedApp as default, App };


//reducer.js - reply on the input and the local state at the moment
import { combineReducers } from "redux";

const INIT_STATE = 1;   //we need an init value from the store
                                            //action will be emit from the action.js file
const counterReducer = (state = INIT_STATE, action) => {    //state is the current state with a default value 
  switch (action.type) {      //judged by the different types of actions
    case "INCREMENT":       //different cases, make sure matches in the action file
      return state + 1;       //return the current local state does what
    case "DECREMENT":
      return state - 1;
    default:            //always end with a default case
      return state;    //just return itself
  }
};

const rootReducer = combineReducers({     //using combineReducers() imported from redux and pass the switch cases counterReducer to it. 
  counterReducer
});
export default rootReducer;
 
