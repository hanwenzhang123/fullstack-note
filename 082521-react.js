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
      console.log("YEA I am alive")
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


// state & props - mutable? => both immutable
// state is an object internally captured by class (in the constructor, this.state)
// props down, parent talks to child
// ?? whether child talks back to parent using props too? NO
// ->using callback 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
     const dateProp = "wed";  //props, passing down
    return {
       <div className ="App">
         <Title date={dateProp}/>     //passing a value to the child component <Title>
         <button>CCC</button>  
       </div>
     )
  }
}
function Title(props) {       //props means whatever in <Title date={dateProp}/> 
   return (
     <div>
       <h1>Happy { props.date }</h1>      //dateProp is the value, but we need the name here which is date
     </div>
     );
   }







// React.PureComponent -> performance improvement
// class wrap with purecomppnent
// function wrap with memo

// HOC -> High Order Component
// is not a component; it is a function (patttern);
// const NewComponent = someHOCLogic(App);

// connect(a, b)(OriginalComp) // use case example in React-Redux

// <NewComponent />

// function Title() {
//   return (
//     <div>
//       <h1>Happy EveryDay</h1>
//     </div>
//   );
// }
// const WrapperTitle = memo(Title);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0
//     }
//   }

//   handleClick = () => {
//     // const { number } = this.state;
//     this.setState((prevState) => {
//       return { number: prevState.number + 1 };
//     })
//     this.setState((prevState) => {
//       return { number: prevState.number + 1 };
//     })
    // setTimeout(() => {
    //   this.setState({ number: number + 1 }); // 0: 0 + 1
    //   this.setState({ number: number + 1 }); // 1: 0 + 1
    // }, 0)
    // VS
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 1 }); // 0: 0 + 1
    //   this.setState({ number: this.state.number + 1 }); // 2: 1 + 1
    // }, 0)
    
    // react will batch several setStates together to perform the state change
  // }

//   render() {
//     const { number } = this.state;
    
//     return (
//       <div className="App">
//         <WrapperTitle onClickFunc={this.handleClick} />
//         <h3>{ number }</h3>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }

// class Title extends PureComponent {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     console.log("Title rendering..");
//     return (
//       <div>
//         <h1>Happy Today {this.props.value}</h1>
//       </div>
//     );
//   }
// }

// function Title() {
//   console.log("Title rendering..");
//   return (
//     <div>
//       <h1>Happy Today</h1>
//     </div>
//   );
// }
// const WrapperTitle = memo(Title);


// export default App;
