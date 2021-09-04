//Middleware -  integrate all the different software systems and make them work together
//It provides common services and capabilities to applications outside of what's offered by the operating system

//Redux Middleware - apply something extra in the middle, like a middle layer
//Redux Thunk

//index.js
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));   //explored to the whole flow


//App.js
import React from "react";
import { connect } from "react-redux"; 
import * as counterActions from "./action";

class App extends React.Component {
  render() {
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
  decHandler: () => dispatch(counterActions.decAction()) 
  request: () => dispatch({type:"REQUEST"});    //add this one new
});

const ConnectedApp = connect( 
  mapStateToProps,
  mapDispatchToProps, 
)(App)

export default ConnectedApp


//action.js
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
const requestDataFromServer = () => {   //add this one new
}
export {
  incAction,
  decAction 
}
//The action is going through to the reducer to analyze the action
//if we do not use the middleware, we can only do something to the action when API server involves


//reducer.js
import { combineReducers } from "redux";

const INIT_STATE = 1;   

const counterReducer = (state = INIT_STATE, action) => { 
  switch (action.type) { 
    case "INCREMENT":  
      return state + 1; 
    case "DECREMENT":  
      return state - 1; 
    default:
      return state; 
  }
};

const requestReducer = (state = INIT_STATE, action) => {    //add this one new
  switch (action.type) {
    case "REQUEST":
      return {}
    default:
      return state;
  }
};

const rootReducer = combineReducers({   
  counterReducer
});
export default rootReducer;


//Redux Reselector
//Redux Middleware
//Unit Test
//Webpack
//Performance 

How to you generally improve performance?
//React
  -HOC
  -memo/PureComponent (shouldComponentUpdate) - lifecycle
  -reduce unnecessary re-rendering
//Redix
  -Thunk
  -Reselector
//JS
  -Event Delegation -  allows you to avoid adding event listeners to specific nodes
//CSS
  -Animation
  -image-sprite (reduce requests)
  -image compression
//HTML
  -Empty HTML
  -Style on the top, script down/defer/async
//Webpack - https://webpack.js.org/
Webpack - bundle your styles
A bundler for front-end dev
  1. HMR(Hot Module Replacement)
    Update the page directly without a fully page reload - more efficient dev environment and will not loss the current state
  2. Tree Shaking
    Get rid of unnecessary code
    if (false) {console.log ("Never Reached")}    //dead code elimination
    const c = x + 1;
    return c;   //=> return x+1
  3. Code Splitting
    Split your modules properly according to the dependency graph
  4. Lazy Loading
    splitting your code at logical breakpoints, and then loading it once the user has done something that requires a new block of code. 
- Minifier/iglifier minification - remove unnecessary code / rename to a more efficient version for machine
  const aaaaa=1;
  console.log (aaaaa);
  ===>
  const a=1; console.log(a)


question =>
1. never heard - admit it (sorry, I never used it)
2. knew a little, not in depth - yea, I knew a little bit, but I am using internal framework (I did configuration, but it has already built by the team)
3. knew it well - explain what you got
  
