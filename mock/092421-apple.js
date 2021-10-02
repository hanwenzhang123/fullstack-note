Introduce last project
=== vs ==
PBV vs PBR
Iterate Object keys
Functional component vs Class-based component
Why hooks
useEffect
State props
Enclosure bar foo
Counter+1 component
Components separation
Sass experience
Web worker
Jest snapshot testing
React18 new feature


//Clean up function => Just like componentWillUnmount
useEffect(() => {
  const eventId = document.addEventListener()
  return () =>  {
	  elem.removeEventlistener(eventId)   //clearTimeout（）
}
  
/*
create a simple hello name functional component where name is stored in state
capture all the class based lifecycle as much as possible
console.log("this is component did mount")
console.log("this is component did unmount")
console.log("this is component did update")
*/
const ComponentUpdateExample = () => {
  const [value, setValue] = useState(true);
  
  const handleToggle = () => setValue(!value);

  useEffect(() => {
      // This gets called after every render, on mount by default, (the first one, and every one after that)
      // Side-effect logic gets executed any update happens to the component
      console.log("this is component did mount");
    
      if (value) {
      // ONLY trigger when a certain state or prop values gets updated
      // Side-effect logic gets executed when values in array only get updated
      console.log("this is component did update");
    }

      // If you want to implement componentWillUnmount,
      // return a function from here, and React will call it prior to unmounting.
      return () => console.log("this is component did unmount");
    }, [value])
  
  return (
    <>
      <input type={value ? "true" : "false"} />
      <button onClick={handleToggle}>Toggle True/False</button>
    </>
  );
}
  

//Cooding 
//Question 1
var array = [];

for (var i=0; i<3; i++) {
  array.push(()=>i);
}

var newArray = array.map(el=>el());

console.log(newArray);    //3 3 3


//Question 2
var array = [];

for (let i=0; i<3; i++) {
  array.push(()=>i);
}

var newArray = array.map(el=>el());

console.log(newArray);    //0 1 2


//Question 3
var count = 10;
function edit(){
  count = 20;
  return;
  var count = function(){}
  }
edit();
console.log(count);   //10
//count is defined in the function with variable hoisting, so the count outside the function won't be changed


//Question 4
let count = 10;
function edit(){
  count = 20;
  return;
  let count = function(){}
  }
edit();
console.log(count);   //ReferenceError: Cannot access 'count' before initialization


//Question 5
function foo(){
  console.log(a);   //2, in foo, there is no definition of a, so it will look for in global scope that defined below
}
function bar(){
  var a = 3;
  foo();
}
var a = 2;
bar();

//var is function scope, var has variable hositing


//Question 6
function foo(){
  setTimeout(foo, 0); //will there by any stackover error?
}
//no, it will execute infinitely, but no stack overflow
//because it will be excuted through the event loop
//we call the foo()
//the foo calls setTimeout
//setTimeout will be called in web API
//Then, another foo wil be put in callback queue


//Question 7
//Object Iteration
obj = {
  name: "Helen",
  city: "San Jose",
};

Obj.keys(obj)
Obj.values(obj)
Obj.entries(obj)

  
//Question 8
//React Component Design - Components separation
ImageGallery -> left part
ProductDetail -> right
    - ColorPicker
    - SizePicker

this.setState 

//Question 9
//Counter - Increment + 1
import react, { Component } from "react";

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            number: 0 
        }
    }

    increment = () => {
        this.setState((preState) => {
            return {number: prevState.number + 1}
        })
    }

    render() {
        return (
            <h1>{this.state.number}</h1>
            <buttom onClick={this.increment}>Increment</buttom>
        )
    }
}

export default Counter;

//Question 10
//Create a simple hello functional component where name is stored in state
//Capture all the class-based life cycle as much as possible
  
