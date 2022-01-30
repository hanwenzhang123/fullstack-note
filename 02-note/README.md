---
title: React, Redux (Note Part2)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## JS Cheatsheet (Note Part3)
https://github.com/hanwenzhang123/frontend-note/blob/main/03-note/README.md

## Miscellaneous (Note Part4)
https://github.com/hanwenzhang123/frontend-note/blob/main/04-note/README.md

## Boilerplate Code (Note Part5)
https://github.com/hanwenzhang123/frontend-note/blob/main/05-note/README.md

## Table of Contents
- [React](#react)
- [Rendering](#rendering)
- [HOC](#HOC)
- [Router](#router)
- [Lifecycle](#lifecycle)
- [Hooks](#hooks)
- [Context](#context)
- [Redux](#redux)
- [Middleware](#middleware)
- [Re-selectors](#re-selectors)

## React

#### What is React?
- A User Interface Library (for building user interfaces)
- Component Architecture (different functions control different parts of UI)
- Data Flow in React (one way top to bottom data flow, component to children)
- Component State (manage its own state and pass down to children)
- Rendering + updating user interfaces, handling userinput

#### What is Component?
- React is a component based language
- React allows you compose complex UIs from small and independent pieces of code called “components”.
- Components are like functions that return HTML elements that tells what should be rendered on the screen (via a render() function).
- Components are core UI building blocks, reusable, you can use the component across different pages, components are independent.

#### What is JSX?
- JSX stands for JavaScript XML, it allows us to write HTML in React, and it comes with the full power of JavaScript.
- JSX makes it easier to write and add HTML in React, and easily create user interfaces for your web applications.

#### What is Virtual DOM?
- Updating the virtual DOM is comparatively faster than updating the actual DOM (Real DOM manipulation is very expensive)
- When you try to update the DOM in React, The entire virtual DOM gets updated.

#### How the Virtual DOM gets updated?
- When you change something, the virtual DOM gets compared to the real DOM before any updates on the page. 
- React will figure out which objects have changed.
- Only the changed objects get updated on the real DOM. 
- Changes on the real DOM cause the screen to change.

#### Pros of React
- Easy to learn -> Strong communityt supporting
- Component-based framework -> Reusability
- VirtualDOM - Real DOM manipulation is very expensive
- Diff Algorithms (outputs the set of differences between two inputs) 
- -> reconciliation (“virtual” representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM)
- JSX (HTML + JS) - good for dev - efficient context switching is now avoid
- Focus on the view -> User Interfaces

#### state 
- state is data which you can change inside of a component to then force this component to be re-evaluated
- it is an object internally captured by class (in the constructor, this.state)

#### props 
- props is data you pass from a parent component to a child component
- props down, parent talks to child
- Can child talks back to parent using props too? NO -> using callback 

#### super(props)
- constructor(props) -> initialize an object's state in a class, called before it is mounted
- super(props) -> call the parent class constructor() of React.Component as a reference

#### Lifting State Up
- For sub-components to talk to each other through parents
- sharing state is accomplished by moving the local state up to the closest common ancestor of the components that need it.
- by lifting the state up, we make the state of the parent component as a single source of truth, and pass the data down to sub-components

#### Lifting State Up vs Composition vs Inheritance
- Lifting State Up: enable children components to have better smooth communication among each other
- Composition: {props.children} - pass down as property children, contains any child elements defined within the component
- Inheritance: not a good model to use in React

#### Stateful Component vs Stateless Component
- stateful components are keeping track of changing data
- stateless components always render the same thing, print out what is given to them via props

#### Element vs Components in React
- React Element is like HTML element, is an immutable object describes a DOM node, you can not apply any methods on it.
- React Component is a function or class that accepts an input and returns a React element.

#### Lists and Keys
- Keys help React identify which items have changed (added/removed/re-ordered). 
- To give a unique identity to every element inside the array, a key is required.
- key is unique item for iterating through sub-components, always add the key! 
- we do not add key to individual component.
- `{ this.state.numArr.map((num, index) => ( <Child key={index} num={num} /> ))}`

#### Key not using indexes
- not recommended using indexes for keys especially the order of items may change - bad design.
- If the key is an index, reordering an item changes it. 
- The component state can get mixed up and may use the old key for a different component instance.
- Also, iterating over the list when it is large causes poor performance.
- `[a:0, b:1, c:2]` -> `[d:0, a:1, b:2, c:3]` - bad
- `[d:unique key, a:0, b:1, c:2]` - good

#### SyntheticEvent 
- because we run react in different environment, so we want consistency across multiple broswer like a wrapper
- consistency -> wrapper(basicEvent)

#### createPortal()
- render children into a DOM node, behaves like a normal React child, but also includes event bubbling because in the DOM tree
- building modals, dialogs, hovercards, and tooltip. with portals, you can render a parallel react tree onto another DOM node when needed.
- `ReactDOM.createPortal(child {any renderable React child}, container {a DOM element})`

#### React.Fragment 
- looks cleaner, avoid too many `<div>`
- `<React.Fragment>...</React.Fragment>`

[[↑] Back to top](#table-of-contents)

## Rendering

#### Re-renders Situations
- The parent component re-renders, which causes all of the parent's children to try to re-render, even if the props from the parent haven't changed.
- The component calls this.setState(), which causes a state update and a re-render
- The component calls this.forceUpdate(), which causes a re-render.
- Component changed? Re-render. Parent changed? Re-render. Section of props that doesn't actually impact the view changed? Re-render.

#### What does setState do?
- setState will trigger re-rendering, and update/modify local state correctly 
- when invole previous value, we should always use a callback function to properly handle it base on the current value
```js
//react will batch several setStates together into a single update for performing the state change due to performance
//use callback function to setState to make it correctly rendered previous value instead of just assigning the new object

this.setState((prevState) => {     //passing in a callback function instead of setState directly
	return { number: prevState.number + 1 };
})
```

#### setState() behind the scene
- setState are asynchronous and are batched for performance gains -> react fiber -> then render
- fiber: reconciliation, diffing algorithms - outputs the set of differences between two inputs -> no new key no change on virtual DOM, improve web performance
- Batching: React groups multiple state updates into a single re-render for better performance.
- using setState to change a variable inside any function, instead of making a render at each setState, React collects all setStates and then executes them together.
- no matter how many setState calls you make inside a React event handler or synchronous lifecycle method, it will be batched into a single update.

#### Material UI
- A simple and customizable component library that allows us to import and use different components to create a user interface in our React application
- Saves a significant amount of time since the developers do not need to write everything from scratch.

#### CSS Module
- `import styles from "./Button.module.css";` - import CSS modules, change the css file name as well
- `<button type={props.type} className={styles.button} onClick={props.onClick}>`

#### Styled Components
- a package that helps you to build componnets which have certian styles attached to them (CSS-in-JS)
```js
import styled from "styled-components";
export const Button = styled.button`color: white;`	//using tagged template literal
```

#### Controlled Component vs Uncontrolled Component
Controlled Component
- Data is handled by a React component <-> the input's value is always driven by the React state
- state mutation has an associated handler function managing its own state, and passing the new values as props to the controlled component. 
- takes its current value through props, and parent component "controls" it by handling callbacks like onChange. 
- recommend using controlled components to implement forms
- a component that renders form elements and controls them by keeping the form data in the component's state.
- `<ControlledComp value={this.props.fromParent} onChange={this.props.handleChange} />`
```js
const { useState } from 'react';

function Controlled () {
  const [email, setEmail] = useState();
  const handleInput = (e) => setEmail(e.target.value);
  return <input type="text" value={email} onChange={handleInput} />;
}
```

Uncontrolled Component
- Data is handled by the DOM itself.
- a bit more like traditional HTML, keeps the single source of truth in the DOM,
- you query the DOM using a ref to find its current value when you need it. 
- Refs provide a way to access DOM nodes or React elements created in the render method.
```js
import React, { Component } from 'react';
export class App2 extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();	//access the input DOM node and extract its value
    }
    handleChange = (newText) => {
        console.log(newText);
    }
    render() {
        return (
          <div className="App2">
	    <input type="text"
		ref={this.input}
		onChange={(event) => this.handleChange(event.target.value)}
	    />
          </div>    
        );
    }
}
```

[[↑] Back to top](#table-of-contents)

## HOC

#### HOC -> High Order Component
- HOC is a pattern where a function takes a component as an argument and returns a new component under a certain reusing component logic pattern
- take in the original component, and add some decoration and modification and props to make it a new component, add more contents
- example: connect in React-Redux `connect(a, b)(OriginalComp)`

#### Why HOC?
- use it for reusability to share common functionality between components
- same pattern but only applies to the one when we need it, and simply removes it when we do not need it

#### HOC Example
```js
import React from "react";
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component{
    render() {
      return <OriginalComponent name="inject props"/>
    }
  }
  return NewComponent
}
export default UpdatedComponent;

import ContentContainer from "../HOC/ContentContainer";
const HOCCounter = UpdatedComponent(Counter);
export default HOCCounter;
```

[[↑] Back to top](#table-of-contents)

## Router

#### What is React Router?
- A great way to build single-page applications because you prevent a page refresh every time a link is clicked. 
- With client-side rendering, the page doesn't refresh as you navigate through the different links. 
- Multiple pages in a single page app, URL changes, visible content changes. 

#### Traditional multi-page routing
- HTML is requested & loaded; Page change = new request + response (Server-side Rendering) . 

#### Single page application 
- Only one initial HTML request & response, Page (URL) changes are then handled by client-side (React) code -> changes the visible content without fetching a new HTML file (Client-side Rendering).
- The goal is that we are able to handle different paths on our page, and load (render) different components for the different paths.

#### Link vs Route
- Link component is responsible for the transition from state to state (page to page)
- Route component is responsible to act as a switch to display certain components based on route state.

#### useParams()
- Returns an object of the params for the route rendered.
```js
// route: /user/:userName
const params = useParams();
return <h1>{params.userName}</h1>
```

#### useRouteMatch();
- attempts to match the current URL
```js
let match = useRouteMatch();
<Link to={`${match.url}/components`}>Components</Link>
<Route path={`${match.path}/:topicId`}>
```

### React Router Implementation
```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

## Lifecycle

#### Class Component vs Functional Component
- we use class component when the component has its own local state and lifecycle before React 16.8
- now we can use react hooks to perform local state and lifecycle in functional component

#### Lifecycle Effects
- Functions triggers the code when a component created, updated or removed from the page

#### Lifecycle (3 phases) - mounting, updating, unmounting
- Mounting (constructor() & render()): initialize constructor -> assigns the initial this.state, and render components -> we have over the initial render in the DOM 
- componentDidmount (initial render) -> only after the initial render then we call componentDidMount
- Update: when the component updates as a result of changed state or changed props
- componentDidUpdate (update) -> when we update, we need to change some state to trigger the re-render
- Unmounting: when the component is being removed from the DOM
- componentWillUnmount -> proper clean-up to prevent memory leak (remove eventListener, remove setTimeout)

useEffect()
- takes two parameters, 1st is callback function, 2nd is dependencies array
- the returned function will be called after component is removed
- we can do clean up in the returned function

```js
function XXX () {
  const [name, setName] = useState("");
  useEffect(() => {
	console.log("This is component did mount");
	
	return () => {
	  console.log("This is component did unmount");
	  console.log("returned function will be called on componentWillUnmount, for clean up, uunmount first then updates");
	}
  }, [])	//no dependencies here, so only the first render
  
  useEffect(() => {
	console.log("This is component did update");
  }, [name])	//will be called whenever the dependency updates
  
  return <p>This is render.</p>
}
```

#### React.PureComponent vs memo
- Same functionality, both are for performance improvement, React.memo is a higher-order component - wrapper
- With PureComponent or memo, it already contains the logics of shouldComponentUpdate  - compare the props
- To compare current props and previous props to make sure it cuts off unnecessary renders

#### Shallow Compare - React.memo()
- React.memo() does a shallow comparison of props and objects of props.
- In JavaScript, comparing objects shallowly will always return false even if they have the same values
- If you want more control and be in charge of that comparison, React.memo accepts a second argument, a comparison function. 

#### Error Boundary
- class component only, define either or both getDerivedStateFromError (render a fallback UI after an error is thrown) and componentDidCatch (log the error information) lifecycle methods
- catch JS error in their child component tree, log those errors and display a fall-back UI
- no error boundaries on: event handler, async codes, server side rendering, errors thrown in itself than children

#### Error Boundary vs Try...Catch...
- Try…catch deals with imperative code: how you do something, you can catch errors in your code.
- Error Boundaries deal with declarative code: what you do, like if there is an error, you can trigger a fallback UI

[[↑] Back to top](#table-of-contents)

## Hooks

#### What is Hooks?
- Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
- Hooks don't work inside class components. You can also create your own Hooks to reuse stateful behavior between different components.

#### useState()
- `const [state, setState] = useState(initialState)` - value and setter function
```js
const computationInit = () => return 0;

function App() {
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
```
```js
function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });

  return (
    <>
      <button
        onClick={() =>
          setCount((prevState) => {	//without ...prevState, it overwrites the object
            return {
              ...prevState,	//...prevState first - give all the key I have then make modification to the count1
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
```
#### useEffect() 
- create a side effect when something happens or dependencies change, "If some variable changes, do this". 
- `useEffect(...,[])`: componentDidMount() - called once component mounted (was evaluated and rendered)
- `useEffect(..., [someValue])`: componentDidUpdate() - called once component updated (was evaluated and rendered)
- `useEffect(() => {return () => {...}}, [])`: componentWillUnmount() - called right before component is unmounted (removed from DOM)

```js
function XXX () {
  const [name, setName] = useState("");
  
  useEffect(() => {
	console.log("This is component did mount");
	return () => {
	  console.log("This is component did unmount")'
	}
  }, [])  //empty array -> ComponentDidMount (no dependency, we call it after every render)
  	//with dependencies in the array, will be called when the value changes
  
  useEffect(() => {
	console.log("This is component did update");
  })
 
  return <p>This is render.</p>
}
```

#### useRef()
- request the DOM using a ref to find its current value when you need it (use ref to referennce element inside of your HTML)
- ref stores value persistent but does not cause your component to re-update when it is changed, whereas setState triggers re-render
- when you need to change any value, still use setState()
```js
const [name, setName] = useState('')
const inputRef = useRef()
const prevName = useRef('')
function focus(){
  inputRef.current.focus()	//inputRef.current refers to <input value>
}
useEffect(() => {
  prevName.current = name
}, [name])
return (
  <>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name}, used to be {prevName.current}. </div>
    <button onClick={focus}>Focus</button>
  </>
  )
}
```

#### useContext()
- specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component
- `export const ThemeContext = React.createContext()` initiate the context, default values, not actually in use but for auto completion
- `const [darkTheme, setDarkTheme] = useState(true)`
- `<ThemeContext.Provider value={darkTheme}>{everything has the access to the value props}</ThemeContext.Provider>`
- class: `<ThemeContext.Consumer>{value is available to the component}</ThemeContext.Consumer>`
- function: `const darkTheme = useContext(ThemeContext)` - then darkTheme is available to use in the component

#### useReducer()
- handling complex state interaction management, alternative to useState
- reducer takes 2 parameters, a function and an initial value, and returns a single value
- `const [state, dispatch] = useReducer(reducer, initialState)`	- initialState always object like `[]` `{count:0}`
- `function increment() { dispatch({ type: "increment" }) }` - dispatch the action type to reducer
- `function reducer(state, action) { return {} }` - usually be switch cases with the action.type that dispatched to reducer for changes

#### React Performance - useMemo() & useCallback()
- both to prevent unnecessary re-renders and make your code more efficient
- cache the function in functional component with a dependency array
 
###### `.useMemo()` 
- run on every render but with cached values, will only use new values when certain dependencies change.
- useMemo accepts two arguments: a function and a list of dependencies
- every time useMemo will first check if any dependencies have changed
- If not, it will return the cached return value, not calling the function. (memoize, cache, no needs to re-compute)
- If they have changed, useMemo will call the provided function again and repeat the process.
- Returns a memoized value. useMemo will remember the returned value from your function. 
```js
const doubleNumber = useMemo(() => {	//only return the value of the function
  return slowerFunction(number)
}, [number])
```

###### `.useCallback()` 
- avoiding unnecessary renders from the child, change the reference only when dependencies change
- use it when a function is a dependency of a side effect 
- just like useMemo, not going to re-run the code inside of it unless certain parameter has changed
- take a function which is useCallback returned, stores to an variable and later you can use it like `getItems(1)`
- Returns a memoized callback. useCallback will remember your actual function.
```js
const getItems = useCallback((incrementor) => {	//return us the entire function
  return [number + incrementor, number + incrementor + 1, number + incrementor + 2]
}, [number])
```

[[↑] Back to top](#table-of-contents)


## Context 

#### What is React Context?
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- With the help of context, we can get the value to the nested children directly. 
- Without Redux and React Context, we have to do lifting state up.

#### How to use Context
- `export const Context = React.createContext()` - initiate the context, default values, not actually in use but for auto completion
- class: Using `< Context.Provider value={} >` and `< Context.Consumer >` to wrap the return code
- function: Using `< Context.Provider value={} >` and use hook useContext then `const value = useContext(Context)`

#### React vs Redux
- You can have multiple contexts but only one store in Redux
- If you use React Context, it may cause Data Contamination since the Consumer looks for the nearest Provider ancestry
- defaultValue <=> bubbling - always go up to look at the closest ancestry
- In Context, GrandChild.js - Look for the Child value but not the Parent value
- we could make mistake, or not able to get value we want, since the value passing down to GrandChild, the nearest ancestry is Child

#### When will be great to use Context?
- Redux - Larger scale application
- Context - Smaller scale application

[[↑] Back to top](#table-of-contents)

## Redux

#### What is Redux?
- redux is a library for state management, it controls in a single object - store; no matter how deep you are, no needs for lifting state up
- react uses component tree talks to each other through layers, local state pass down to props
- redux creates a store, like a database, so sub-components can directly access values through store instead of relying parents(grandparents)
- subscribe to the store for retrieving information, dispatch actions if you need to change anything

#### Why we use Redux? Advantages?
- Redux - A Predictable State Container for JS Apps
- Avoid complicated communication for large-scale application
- Avoid excessive lifting state up in ReactJS
- Excellent tool for time-traveling debugging
- Better state management
  
#### Three Principles of Redux
1. Single source of truth - keep all data to the store
2. State is read-only - immutable, persistent data structure, the only way to change the state is to emit an action
3. Changes are made with pure function (reducer) -  changes need actions

#### Redux Data Flow
- store is the place we save the state
- getState is the method to get the state
- action & reducer is the method to change the mapStateToProps

#### How to setup Redux? How do you create store?
- The store will be generated based on reducer that analyze behaviors and modify current local state
- store is like global state, available to all children
- stroe is the values in your redux store, like the data from the database

```js
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);

ReactDOM.render( 
  <Provider store={store}> 
    <App />  
  </Provider>, 
  document.getElementById("root")
);
```

#### What does `<Provider>` do
- `<Provider store={store}> </Provider>`
- provider to inform the whole structure, for provider layer, everything inside would be props.children
- provider is like passing down everything to the children, we pass our store down to every level via createStore(reducer)

#### Subscribe to the store
- `import { connect } from "react-redux"`
- `ConnectedApp = connect()(App)`
```js
const ConnectedApp = connect(	//here we use the connection function, connect will create the HOC wrapper that takes the APP
  mapStateToProps,		// on value - get the value from the store, make sure the component is hook up with the store (display)
  mapDispatchToProps		// on handler/actions - the action we need (user interaction)
)(App);
```

#### Action
- define actions -> like an action generator
- An object include the action type and/or payload => the content you gonna use to make the change and dispatch action
- What you try to do? like number increase, decrease?
- disptach the action action to reducer 
- the action is going through to the reducer which analyzes the action

#### Reducer
- Expecting all types of action as defined. 
- reply on the input and the local state at the moment 
- => analyze behavior and modify current local state
- Pure function, A input -> A output a + b = c (same input with consistant output)
- Pure function is static, when we do not perform the render.
- only has one reducer function: the "root reducer" function that you will pass to createStore later on
- no side-effect, output will be predictable

#### How do you group different reducers? 
- `combineReducers({ , , , })`

#### Using `...` vs `.push()` to manipulate the store
- using `.push()` to push a new item to the state is no good in redux, since push manipulates the existing array in the existing state.
- instead, we can using the spread operator `...` to get the copy of the array, and then return the manipulated one.
- `return {...state, todo: [...state.todo, action.payload], text: ""}`

#### Using `.concat()` vs `...` to manipulate the store
- `updatedItems = state.items.concat(action.item);`
- add the item which returns a new array (in a immutable way -> good)
- do not use push which adds to the existing array

#### Redux Flow
- ReactJS -> setState() -> local state update -> UI re-rendering -> Done
- ReactRedux -> emit an action (dispatch an action) -> Reducer will calculate next state (analyze action) -> Component subscribing to the store data re-rendering
	  
[[↑] Back to top](#table-of-contents)

## Middleware

#### What is middleware?
- integrate all the different software systems and make them work together
- it provides common services and capabilities to applications outside of what is offered by the operating system
- code you can put between the framework receiving a request, and the framework generating a response. 

#### Why do we need redux middleware?
- it provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- people use Redux middleware for implementing async action calls
- if we do not use the middleware, we can only do actions when API server is not involved
- middleware allows you to call the action creators that return a function(thunk) which takes the store dispatch method as the argument
- which is afterwards used to dispatch the synchronous action after the API or side effects has been finished.

#### What is Redux-saga
- side effect management library (asynchronous things like data fetching and impure things like access browser cache).

#### How to create middleware in Redux?
- Using Redux Thunk for Redux Middleware 
- apply something extra in the middle, like a middle layer

```js
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";	//import applyMiddleware
import { Provider } from "react-redux";
import thunk from "redux-thunk";	//import thunk

import rootReducer from "./store/reducer";
import App from "./App";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)	//the middleware will expose to the whole flow, apply thunk middleware via applyMiddleware()
);

ReactDOM.render(	//store goes through the whole project, including the middleware
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

#### How to apply middleware in Redux?
action.js
- the action is going through to the reducer that analyzes the action
- The thunk middleware allows us to write functions that get `dispatch` and `getState` as arguments.
- dispatch() used to dispatch the synchronous action after the API or side effects has been finished.
- getState() gets the current state in the whole store

```js
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

const addAction = () => (dispatch, getState) => {
  const inputText = getState().tdListReducer.text;	//getState() gets the current state in the whole store
  dispatch({						//dispatch() actions
  type: "ADD",
  payload: inputText, 
    })
};

const requestDataFromServer = () => {  
  return (distpatch, getState) => {   //we return a function where the action itself which will be delying
    //apply delay or condition based on state
//     fetch(LINK)
//       .then(data => {     //use what we get to trigger another action, between that, there is condition check and proper delay, in a designed order
//         dispatch(storeData())    //storeData is defined in reducer, will take in action which we call payload, and pass down data as payload data
//     })
    //we group the logic in the action here instead of in App.js
    if (getState().someValue === 1){  //getState means getting the current state in the store we access to, what we get is the whole store object via getState()
      dispatch(someAction())
    }
  }
}
```

[[↑] Back to top](#table-of-contents)

## Re-selectors

#### Selectors & Reselect for improvement enhancement

selector
- write more reusable code of where data lives and how to derive it
- use selectors we no longer needs to destructuring the value out everytime we use it
- => the logic is more clear, straightforward, get the value from the state

```js
export const usersSelector = (state) => state.users.users	//when we use this, we no longer needs to destructuring the value out 

export const filteredUserSelector = (state) => {
  return usersSelector(state).filter((user) => {
    return user.includes(state.users.search);
  });
}

const mapStateToProps = (state) => ({ 
// users: state.users.users	//since we use selector, we do not need to type it every time we use it
  users: usersSelector(state),   //the logic more clear, straightforward, get the value from the state
  filteredUsers: filteredUserSelector(state),
});
```

re-selector 
- create selectors that are memorized and only recompute when their inputs have changed.

```js
import {createSelector} from 'reselect';	//import the library

export const usersSelector = (state) => state.users.users

export const filteredUserSelector = createSelector(	//the functions are dependencies, order is important
  state => state.users.users,
  state => state.users.search,
  (users, search) => {		//functions as arguments of the dependencies
    return users.filter((user) => {
      return user.includes(search);
    });
  }
)

const mapStateToProps = (state) => ({ 
  filteredUsers: filteredUserSelector(state),
});
```

[[↑] Back to top](#table-of-contents)

