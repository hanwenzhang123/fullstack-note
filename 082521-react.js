// Pros of React
Easy to learn -> Strong communityt supporting
VirtualDOM - Real DOM manipulation is very expensive
diffing algorithms -> reconciliation
Component-based framework -> Reusability
JSX (HTML + JS)
   - good for dev
   - efficient context switching is now avoid

// ES6 new feature <-> React?
// bind, arrow func

  
import React, { PureComponent, memo } from 'react';
import "./styles.css";

// class component or functional component
// class component -> has its own local state and lifecycle

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return {
       <div className ="App">
         <h1>Happy Wednesday</h1>
       </div>
     )
  }
}
   
//functional component -> does not above
//React 16.8 -> React Hooks
//use local state and lifecycle in functional component
 function App() {       //const App = () => {   arrow function style also works
   return (
     <div className ="App">
       <h1>Happy Wednesday</h1>
     </div>
     );
 }

export default App;
 

// Lifecycle (3 phases) - mounting, updating, unmounting
// mounting - initialize stuffs in the state in the constructor that we have over the initial render, then we call componentDidmount
// normal function
// componentDidmount -> API fetching asych (only once after the initial render)
// componentDidUpdate -> config update, changing flag for next render
// componentWillUnmount -> clean-up (removeEventLIStener removeSettimeout)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "wed"
    }
  }
   componentDidMount() {         //after the initial render then componentDidMount
      console.log("YEA I am alive")    //we can do API fetching here, like .then() .setState({data}) etc. 
   }
   componentDidUpdate() {        //we need to change some state to trigger the re-render, you do NOT set this.setState() here
      console.log("Setting some value that is irrelevant to the page")  //does not influence what we see on the page
   }
   componentWillUnmount() {   //when you kill the component, proper clean up
      console.log("BYE")
   }
  render() {
     const {date} = this.state
    return {
       <div className ="App">
         <h1>Happy Wednesday {date}</h1>      //faster than "YEA I am alive"
         <button onClick={() => this.setState({ date: "new" })}>CCC</button>  
       </div>
     )
  }
}


// state & props - mutable? => both immutable, read only
// state is an object internally captured by class (in the constructor, this.state)
// props down, parent talks to child
// ?? whether child talks back to parent using props too? NO
// ->using callback 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {         //here is the state, better not to change the old state directly
                  //setState() triggers render(), state changing is asynchronous in React
    }    //Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.
   //we would never do things like this.state.date = xxx, state is immutable, unchangeable, read only
  } //this is against the react convention and this will NOT trigger the rerender to update the UI simultaneously.
  handleClick = () => {      //setState modify this.state with its built-in logic and triggers the re-render after the state updates. 
      this.setState({number: this.state.number + 1});
   }
  render() {
    const dateProp = "wed";  //props, passing down
    return {
       <div className ="App">
         <Title date={dateProp}/>     //passing a value dateProp to the child component <Title> (customized component)
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
}                              //only parent changes props, only the parent component perform modification over the props
function Title(props) {      //props means whatever in <Title date={dateProp}/>, we treat props as read only, not changing, read only
   return (                //child's purpose is to present whatever passing down from the parent, not to change it
     <div>
       <h1>Happy { props.date }</h1>      //dateProp is the value, but we need the name here which is date
     </div>
   );
 }

//destructuring
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
    const {number} = this.state;    //this.state.number
    return {
       <div className ="App">
         <Title date={number}/>     //since destructuring, here we do {number} is good
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
}   
function Title(props) {
   const {date} = props;      //propss.date
   return (
     <div>
       <h1>Happy { date }</h1>  
     </div>
   );
 }
 
 
// React.PureComponent -> performance improvement
// with PureComponent, it already contains the logics of shouldComponentUpdate 
// to compare current props and previous props to make sure it cuts off unnecessary renders

// class wrap with purecomppnent
// function wrap with memo
 
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
class Title extends React.PureComponent {    //extends React.PureComponent, always compare the previous props and current props to determine if render
//   constructor(props) {
//     super(props);
//   }  
//   shouldComponentUpdate() {...}     //PureComponent works like containing logics with shouldComponentUpdate
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


//using memo for functional component, capitalize the first letter for customized component

function Title() {
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
         <WrapperTitle /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
} 


// HOC -> High Order Component
// is not a component; it is a function (patttern);
// a pattern where a function takes a component as an argument and returns a new component
// take in the original component, and add some decoration and modification and props to make it a new component, add more contents
// why HOC? use it for reusability
// to share common functionality between components
// same pattern but only applies to the one when we need it, and simply removes it when we do not need it

connect(a, b)(OriginalComp) // use case example in React-Redux
const NewComponent = someHOCLogic(App);
<NewComponent />
   
const NewComponent = higherOrderComponent(originalComponent)
const EnhancedComponent = higherOrderComponent(originalComponent)
const IronMan = withSuit(TonyStark)

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
   
   
//setState
- a way to properly modify local state
- triggers a re-render
- when invole previous value, we should always use a callback function is properly being handled base on the current value
//setState - Asynchronous
//react will batch several setStates together into a single update for performing the state change due to performance

function Title() {
  console.log("Title rendering"); 
  return (
     <div>
       <h1>Happy Today</h1>  
     </div>
   );
}
const WrapperTitle = memo(Title);  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      number: 0
    }
  }
   handleClick = () => {
      const {number} = this.state;
//       this.setState({number: number + 1});      //will only add once because setState is async
//       this.setState({number: number + 1});      //React will batch several setState together to perform the state change
//       this.setState({number: number + 1});      //use callback function to setState to make it correctly rendered instead of just assigning the new object
       this.setState((prevState) => {     //passing in a callback function instead of setState directly
         return { number: prevState.number + 1 };
       })
       this.setState((prevState) => {
         return { number: prevState.number + 1 };
       })
   }
  render() {
    const {number} = this.state;
    return {
       <div className ="App">
         <WrapperTitle /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>Click</button>  
       </div>
     )
  }
}   

 
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
