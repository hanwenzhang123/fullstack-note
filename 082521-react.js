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
   
   
//state & props mutable? => both immutable




