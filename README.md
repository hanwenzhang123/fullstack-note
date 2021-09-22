---
title: SSI-Training-Note
---

## Table of Contents
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [ES6](#ES6)
- [JS Methods](#JS-Methods)
- [React](#react)
- [Hooks](#hooks)
- [Redux](#redux)
- [Middleware](#middleware)
- [Performance](#performance)
- [Testing](#testing)

## HTML

#### What does a DOCTYPE do?
- when we have a doctype, it is an "information" to the browser about what document type to expect. 
- Not case-sensitive.

#### href & target in `<a>` tag.
- `_blank` (new tab) and `_self` (current tab)
- `<a href=“https://www.youtube.com/” target="_blank"></a>`

#### why using semantic tags?
- we want to know what does it exactly means in the HTML, we can know it directly by its name 
- `<div>` is too broad, we do not know what does it mean. 
- semantic elements carry accessibility by itself, proper reading
  
#### web a11y 
- computer accessibility, for people with disability using screen reader 
- mac machine, window, 3rd party tool, it will read out the web contents for you
- you want to have your website good with accessibility features

#### div and span
- `<div>` - anything can be putting within a div, it is a block element
- `<span>` - like a div but only for inline container, which div is block level element

#### Video and Audio Tag
- the text between the tags only appears when audio is not working
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

#### What is the `<meta>` tag in the head tag? Why do we need it?
- `<meta>` - metadata about an HTML document, is data (information) about data. 
- `<meta>` tags always go inside the `<head>` element, and are used to specify character set, page description, keywords, author, and viewport settings.
- `<meta>` is important for SEO (search engine optimization). we do not visually see any of the code in the browser, but the browser will analyze the information.

#### Difference between `<script>`, `<script async>` and `<script defer>`.
- `<script>` - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.
- `<script async>` - in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes)
- `<script defer>` - in parallel to HTML parsing and executed when the page has finished parsing, ensuring that the HTML is fully parsed before executing. There's not much difference in putting a normal `<script>` at the end of `<body>`.

#### Difference between a cookie, sessionStorage and localStorage
- `cookie` - primarily for server-side, stores data has to be sent back to server, expiration can be set from either server-side or client-side when manually set
- `sessionStorage` - client side, use when you need to store somthing temporary, will only be accessible while the window is open, expires when tab closes
- `localStorage` - store data on the client computer, save key/value pairs in web browser, store data with no expiration date, last until the user deletes it

[[↑] Back to top](#table-of-contents)

## CSS

#### selector
- id #
- class .

#### Three ways to insert CSS
- external CSS (better choice, a separate css file)
- internal CSS (putting css directly in the html page)
- inline CSS (not recommended)

#### The CSS Box Model
- margin, border, padding, content
- goes from outside to the inside

#### margin
- 4 value order: top right bottom left 
- 3 value order: top left&right bottom
- 2 value order: top&bottom left&right

#### what is margin collapse?
- Top and bottom margins collapse into a single margin when it comes in contact with one another
- take the greater value, only top and bottom margins!

#### box-sizing property
- `content-box`: using content as the basis, default, only care about your content
- `border-box`: using border as the basis, like when we put a padding

#### display
- 'block' - full width, force a line break
- 'inline' - just for inline, you can set margin and padding left-right, but not top-bottom, no width and height
- 'inline-block' - allow elements to sit to left & right, top & bottom margins and padding, height and width

#### position
- `static` - default, follow the flow
- `relative` - almost same as static, but you can change the position relatively to the docs (its normal position), can even overflow
- `absolute` - other elements render as this absolute element does not even exist, relative to the nearest positioned ancestor 
- `fixed` - fixed based on the doc and always stick to where it is
- `sticky` - combination of relative and relative stick to the position based on the users scroll position

#### Difference Between Relative and Absolute
- `position: relative` - starts from where the element would be in the normal document flow
- `position: absolute` - removed from the normal document flow, placed in an exact location where you tell it to go on the page, relative to the nearest positioned ancestor 

#### media queries
- for responsive design, change the styling once the size reaches a certain value

#### combinators
- descendant selector (space) - all elements that are descendants of a specified element.
- child selector (>) - all elements that are the children of a specified element
- adjacent sibling selector (+) - immediate, an element that is directly after another specific element
- general sibling selector (~) - all elements that are next siblings of a specific element

#### pseudo-class
- class like specific state, this sentence is like when this happens, under what kind of condition
- `a:hover` - mouse over; `a:visited/:focus` - visited, mouse focused
- `:nth-child()` - pseudo-class, value like odd, even, a specific number etc

#### pseudo-element
- referring specific for that element
- `p::first-line/::last-letter`
- `::after/::before`

#### invisible from the page
- `display:none` - does not occupy space or consume clicks, hide the whole element and remove that from layout, gone from the DOM tree, disappear from UI
- `visibility:hidden` - occupies space, but does not consumes clicks, hides an element but take up the same space as before
- `opacity:0` - occupies space and consumes clicks, create transparency or fade effect

#### center both vertically and horizontally using flexbox
- `display: flex`
- `justify-content: center` - horizontally or vertically depends on the main axis
- `align-items: center` - center in the middle

#### what is image sprite?
- a collection of images put into a single image -> (reduce requests)
- a way to reduce the number of HTTP requests made for image resources, by combining images in a single file
- A web page with many images can take a long time to load and generates multiple server requests, using image sprites will reduce the number of server requests

[[↑] Back to top](#table-of-contents)

## JavaScript

#### What is V8?
Internal JavaScript engine built in Chrome.

#### "use strict" Mode
It gives you less tolerate to errors, put on top of your program

#### data type
primitive data types, variable stores the values
```js
let a = 1; //number
a= "hello" //string
a = true // boolean
a = undefined // let a;
a = null; // let a = null;
```

non-primitive, object points to a reference, not the value itself
```js
a = {} // object
arr = [] // object (array)
function(){}  //function - object
```

#### concat
```js
//automatically convert to string; number + -> concat
console.log(1+"2")     //12
console.log(2+"1")     //21
console.log(1+2+"1")    //31

//no concat, will automatically convert to math operation
console.log(5-"2")  //3
console.log(5-"a") //NaN
//Not a number, invalid operation, no ascii code in JS
```

#### dynamic casting
```js
console.log(typeof Boolean(1)) //boolean
let a = 1
console.log(typeof !a) //boolean, check the 2nd value
console.log(!1) //false
let a = 1
console.log(typeof !!a) //true, !! - double negation
let a = 0
console.log(typeof !!a)  //false, boolean will be false
!!""    //false, nothing in there
!!" " //true, there is a space, it is not empty
!!{}    //true - it is object, empty box but there is something

=   assign
==   same value
===   same type same value, everything equals
null == false    //false
undefined == false  //false
null == undefined   //true
null === undefined  //false
console.log()    //undefined

|| or
&& and
! not
console.log(1 || 0)    //1
console.log(1 && 0)    //0
console.log(1 || 2 || 3) //1 - OR - looking for the first TRUCY value, otherwise return last element
console.log(1 && 2 && 3) //3 - AND - looking for the first FALSY value, if not any, return last element
```

[[↑] Back to top](#table-of-contents)

### ES6

#### New Features of ES6
1. let const vs var 
2. arrow function
3. template literal 
4. default params
5. destructuring
6. spreading (...) /rest (...rest)
7. promises
8. class syntax

#### Difference between var and let/const 
- var - value hoisting, put things on the top, scope to the function
- let/const - not accessible before the line we declare them, scope to the block
```js
console.log(a);    //undefined - variable exist, not able to access to the value
var a = 1;
console.log(b);   //referenceError - b is not exist, temporal dead zone
let b = 1;
```
- var - old time, issue with variable hoisting
- let - we can still re-assign value
- const - no re-assign value allowed, good with objects because we are not changing pointer

#### Describe arrow function
- simple syntax, less code
- does not have its own "this" to be referred to the current object
- does not need to bind functions
- does not have "arguments" which access to all the inputs parameters
```js
var obj = {
	name: "mic",
	getName: function(){
		return this.name    //"this" belongs to the obj that calls the function
	}
};
console.log(obj.getName())    //mic

var obj = {
	name: "mic",
	getName: () => {    
		return this.name    //arrow function does not have its own "this", "this" here means the Window    
	}
};
console.log(obj.getName())    //undefined
```

#### default params
```js
const genParam = () => {
  console.log("Called");
  return 5;
};

function f(x, y = genParam()) {
  console.log(x, y);
}

f(1); //Called  1, 5
f(1,  9); //1, 9
f(1, undefined);  //Called  1, 5 - no difference from f(1);
f(1, null); //1, null - null considered to be a valid input
```

#### destructuring
```js
const obj = { x: 1 };
const { x: otherX } = obj;  //re-naming, will be stored in the new name
console.log(otherX)   //1
//console.log(x)   //no good, referenceError, x is not defined.

//in array, order matters
const arr = [1, 2];
let [z, q] = arr;
console.log(q, z);  //2 1
[q, z] = [z, q];
console.log(q, z);  //1 2 - reassign the value

//Re-naming
const obj = { x: 1 };
const { x: newVariable } = obj;   //just about the syntax, change the name x to newVariable
// const newVariable = obj.x    //x as the key to get the value and stores in the variable
console.log(newVariable)  //1
```

#### spreading (...)
```js
const obj = { x: 1 };
const newObj = { ...obj };
console.log(newObj)    //{ x: 1 }
console.log(obj === newObj)   //false - shallow clone

const newObj = { ...obj, y: 2 }; // addition
const newObj = { ...obj, x: 2 }; // overwrite

const s = "Hello";
const sArr = [...s];
console.log(sArr) //["H", "e", "l", "l", "o"]
console.log(sArr.length); //5
```

#### rest (...rest)
```js
function func(a) {
  console.log(a); //1
}
func(1);

function func(a, ...rest) {   //rest element must be the last parameter
  console.log(rest); //[2, 3, 4, 5, 6, 7]
}
func(1, 2, 3, 4, 5, 6, 7);

function func(a, b, ...rest) {
  console.log(rest); //[3, 4, 5, 6, 7]
  console.log(arguments[0]); //1 - arguments is for everything in the params, it returns array like object, but does not carry any array methods
}
func(1, 2, 3, 4, 5, 6, 7);
```

#### bind vs apply vs call
`bind()`
- The bind() method creates a new function used to provide a proper "this" reference to the function
- it returns a new bound function, does not call the function, but refer to it that you can execute later

`apply()/call()`
- same, just the different way to put in the parameter: call => comma; apply => array
- directly triggers itself, call it right now, unlike bind, not yet to call

#### "this" keyword
- refers to the object that the function is a property of. 
- the value will always depend on the object that is invoking the function.

the key word "this" behaves differently in arrow functions compared to a regular function.
- "this" in function, this belongs to function
- "this" in arrow function, "this" DOES NOT belong to arrFunc, it is outside of the arrFunc 
```js
//1. this IN method, this -> object owner
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`     //just like ${person.firstName} ${person.lastName}, this -> object owner
    },
    
//     fullName: () => {        //"this" has nothing to do with the scope where the function is created, it has to do with how the function is executed
//         console.log(this);  // "this" refers to Window, if we do person.fullName() which means Window.fullName() - it will be undefined
//         return `${this.firstName} ${this.lastName}`
//     },       //when we are using arrow function, "this" will be jumping out to the original block which will be global scope
    
    shoutName: function () {
        setTimeout(() => { 
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);       //"this" refers to the person Object
            console.log(this.fullName())
        }, 3000)
        
//     shoutName: function () {
//         setTimeout(function () => {      //we have to use arrow function here instead
//             console.log(this);       // "this" refers to Window object here
//             console.log(this.fullName())     //this.fullName is not a function - it has to do with the execution context
//         }, 3000)        
    }
}
person.fullName()   //"this" refers to the left to the '.' here is the person

//2. this IN function, this -> global on browser -> Window
function a() {
    console.log(this)   //Window, this -> global
}
a()     //Window
console.log(this)      //Window

//2.1 this IN function, strick mode, this -> undefined
function a() {
    "use strict"
    console.log(this) 
}
a();   //undefined

//3. this IN event, this -> HTML element that received the event
<button onClick="this.style.display"="none">
    click to remove me!
</button>
```

#### Promise(Event-loop, task scheduling)
- JS is a single-threaded language, use promise to handle async operation
- new feature of ES6 -> avoid callback hell - a chained nested code

- 3 phrases -> pending, fulfilled, rejected
- chain .then() to do something, and/or .catch() to catch error
- will return another promise so we can chain more then()
- output order - only after the main thread is done

- main thread (console.log) > micro (promise, async/await-pauses) > macro (timeout, interval)

[[↑] Back to top](#table-of-contents)

### JS Methods

#### function declaration vs function expression in JS
```js
myF()
function myF(){
	console.log("My Function")    //it is okay to under the function declaration using keyword function
}
myF()
const myF = function(){
	console.log("My Function")  //ReferenceError, no good with function expression, can not access function initialization, myF() failed directly
}
myF()
var myF = function(){
	console.log("My Function")  //TypeError, no good, myF is not a function, var myF = undefined;
	//when you try to execute myF(), it is good, it is there, but it triggers the function which is undefined, that it breaks the rule. 
}
```

#### IIFE - immediate invoked function expression 
runs as soon as it is defined, invoke immediately
variables declared in the function expression will not be available outside the function

contains two major parts: 
1. function expression within the Grouping Operator () 
2. immediately invoke the function ()

```js
(function() {
  /* */
})()

(() => {
  /* */
})()
```

#### Math in Array
javascript array does not have Math Method - it expects distinct variables
```js
Math.max(1, 2, 3)    // 3
Math.min(1, 2, 3)    // 1
const nums = [1, 2, 3]
Math.min(nums)    // NaN
Math.max(nums)    // NaN

//apply()
var nums = [1, 2, 3]
Math.min.apply(Math, nums)    // 1
Math.max.apply(Math, nums)    // 3
Math.min.apply(null, nums)    // 1    //this assigns to null
Math.max.apply(null, nums)    // 3

//destructuring
const nums = [1, 2, 3]
Math.min(...nums)    // 1
Math.max(...nums)    // 3
```

#### .map() vs .forEach()
- `.forEach()`: returns undefined, does not modify the array, it just iterates over it (allow a callback function to mutate the current array).
```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
// arr = [2, 4, 6, 8, 10]
```
- `.map()`: returns a new array with the transformed elements, does not change the original array.
```js
let doubled = arr.map(num => {
    return num * 2;
});
// doubled = [2, 4, 6, 8, 10]
```

#### Closure 
- a function retured by another function that still has access to its outer scope variable
- used to enable data privacy.
```js
function makeCounter(){
    let count = 0;      //private variable for keeping data private and safe
    			//value by the function will be saved as it will be needed by the inner function, not for garbage collection
    return function(){
        count++
        return count;
    };
}

const counterFunc = makeCounter();
console.log(counterFunc()); //1
console.log(counterFunc()); //2
console.log(counterFunc()); //3

const newFunc = makeCounter();  //a new function, variabel value start over
console.log(newFunc());  //1
console.log(newFunc());  //2
```

#### Callbacks
- a function passed into another function as an argument to be executed later after another function has finished executing
- it is a great way to handle something after something else has been completed.

#### Different between for...in and for...of
- for...in, use it over Object (key: value) - enumerable property 
- for...of, ES6, use it over Array - iterable items

#### Objects
Accessing value from object
```js
const obj = { x:1 };
console.log(obj.x);  //1
console.log(obj["x"])  //1

const obj = { "you what":1 }; //with space
console.log(obj["you what"])  //1
```
- Object.entries(): Returns an array containing all of the key value pairs of a given object's own enumerable string properties.
- Object.keys(): Returns an array containing the names of all of the given object's own enumerable string properties.
- Object.values(): Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
- Object.prototype.hasOwnProperty(): returns a boolean indicating whether the object has the specified property as its own property.

#### check if JavaScript Object is empty
```js
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
```

#### clear a JavaScript Object
```js
for (const prop of Object.getOwnPropertyNames(obj)) {
  delete obj[prop];
}
```
```js
function emptyObject(obj) {
  Object.keys(obj).forEach(k => delete obj[k])
}
```

#### empty an array in JavaScript
```js
//1. Assign it to an empty array
   var array1 = [1,2,3,4,5,6,7];  // Created array
   var anotherArray = array1;     // Referenced array1 by another variable
   array1 = [];                   // Empty the array
   document.write(anotherArray);  // Output [1,2,3,4,5,6,7]

//2. Set its length to 0
   var array1 = [1,2,3,4,5,6,7]; // Created array
   var anotherArray = array1; // Referenced array1 by another variable
   array1.length = 0; // Empty the array by setting length to 0
   console.log(anotherArray); // Output []
   
//3. Use Array.prototype.splice() - splice(start, deleteCount)
   var array1 = [1,2,3,4,5,6,7]; // Created array
   var anotherArray = array1; // Referenced array1 by another variable
   array1.splice(0, array1.length); // Empty the array by setting length to 0
   console.log(anotherArray); // Output []

//4. Use Array.prototype.pop()
while(a.length > 0) {
    a.pop();
}
```

#### check if it is an array
`Array.isArray()` -  return boolean, check whether an object (or a variable) is an array or not. 

#### check if it is an object
`typeof yourVariable === 'object'`

#### check if the type of an object at run time. 
`object instanceof constructor` -  return boolean

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);	// true
console.log(auto instanceof Object);	// true
```

#### Deep Clone vs Shallow Clone
Deep Clone - no more contact with previous reference, they are not related, any modification would not influence original copy

2 ways to implement deep clone
1. third party lib => _lodash.cloneDeep()
2. JSON parse and stringify
```js
//1. Lodash
// var _ = require("lodash");
import { cloneDeep } from "lodash";
const obj = { x: 1 };
const newObj = _.cloneDeep(obj);
console.log(newObj);  //{x: 1}

//2. JSON parse and stringify 
//completely convert to a raw string and convert back, so every layer will be completely different
const newObj2 = JSON.parse(JSON.stringify(obj));
console.log(newObj2); //{x: 1}
```

Shallow Clone - reuse previous reference, certain (sub-)values are still connected to the original variable
```js
// value => primitive type -> Number String Boolean Null Undefined
const obj = { x: 1 } };
const newObje = {...obj}; //shallow copy
newObj.x = 9;
console.log(newObj);  //{x:9)	
console.log(obj); //{x:1)   //original object not touched, different addresses in memory

// value => non-primitive -> Object Array
//assigning everything in a different type but because the value type is different, it is an object
//there is a reference pointer points to the object
const obj = { x: { y: 1 } };  //add one more layer
const newObj = {...obj}; //shallow copy - only restirct to the shallow level
newObj.x.y = 9;
console.log(newObj); //{x: { y: 9 } - only direct properties on the object point to different address, nested properties point to the same
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
```

#### event propagation
- like a deeper ocean goes to the layer one by one travel through the DOM tree to arrive at its target and what happens to it afterward
- Event.stopPropagation() - prevents further propagation of the current event in the capturing and bubbling phases. 

Three phases in order are:
1. the event capturing phase - top to the botton - click outter which will trigger the inner one. 
2. the target phase - all the listeners registered on the event target will be invoked
3. the event bubbling phase - buttom to the top -  click the inner one, the outter one will also be clicked

#### event delegation
- Allow you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. 
- That event listener analyzes bubbled events to find a match on child elements.
- Instead of attaching the event listeners directly to the buttons, you delegate listening to the parent `<div id="buttons">`. 
- When a button is clicked, the listener of the parent element catches the bubbling event (recall the event propagation).

[[↑] Back to top](#table-of-contents)

## React

#### What is React?
- React is a JavaScript library for building user interfaces, it is a frontend framework. 
- It lets you compose complex UIs from small and independent pieces of code called “components”.

#### What is Component?
- React is a component based language.
- Components are like functions that return HTML elements that tells what should be rendered on the screen (via a render() function).
- Components are reusable, you can use the component across different pages.
- We are building components that each only cares about one thing.

#### What is JSX?
- JSX stands for JavaScript XML, it allows us to write HTML in React, and it comes with the full power of JavaScript.
- JSX makes it easier to write and add HTML in React, and easily create user interfaces for your web applications.

#### What is Virtual DOM?
- Updating the virtual DOM is comparatively faster than updating the actual DOM (Real DOM manipulation is very expensive)
- When you try to update the DOM in React, The entire virtual DOM gets updated.
- The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
- The changed objects only get updated on the real DOM. Changes on the real DOM cause the screen to change.

#### Pros of React
- Easy to learn -> Strong communityt supporting
- VirtualDOM - Real DOM manipulation is very expensive
- diffing algorithms -> reconciliation (“virtual” representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM)
- Component-based framework -> Reusability
- JSX (HTML + JS) - good for dev - efficient context switching is now avoid

#### state & props
- mutable? => both immutable, read only
- state is an object internally captured by class (in the constructor, this.state)
- props down, parent talks to child
- ?? whether child talks back to parent using props too? NO
- -> using callback 

#### React.Fragment 
- Looks cleaner, avoid too many `<div>`
- `<React.Fragment>...</React.Fragment>`

#### Lists and Keys
- key is unique item for iterating through sub-components, always add the key! 
- we do not add key to individual component.
- `{ this.state.numArr.map((num, index) => ( <Child key={index} num={num} /> ))}`

#### Lifting State Up
- sharing state is accomplished by moving the local state up to the closest common ancestor of the components that need it.
- by lifting the state up, we make the state of the parent component as a single source of truth, and pass the data in the parent to its children.
- For sub-components to talk to each other through parents

#### Lifting State Up vs Composition vs Inheritance
- Lifting State Up: enable children components to have better smooth communication among each other
- Composition: {props.children} - built-in method, pass down as property children
- Inheritance: not a good model to use in React

#### SyntheticEvent 
- because we run react in different environment, so we want consistency across multiple broswer like a wrapper
- consistency -> wrapper(basicEvent)

#### what does setState do?
1. update my(component) local state Correctly (a way to properly modify local state)
2. setState then will trigger re-rendering (triggers a re-render)
3. when invole previous value, we should always use a callback function is properly being handled base on the current value

```js
//setState - Asynchronous
//react will batch several setStates together into a single update for performing the state change due to performance
//use callback function to setState to make it correctly rendered instead of just assigning the new object

this.setState((prevState) => {     //passing in a callback function instead of setState directly
	return { number: prevState.number + 1 };
})
```

```js
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
```

#### class component example
```js
import React from 'react';
import "./styles.css";

class App extends React.Component { //extends the component
  constructor(props) {    //we need the constructor
    super(props); // we need the super() to enable the use of 'this' in the following part
    this.state = {      //state holds very important information about "this" in the object
      name: ""      //empty here so we can update the value, or we can put the hard-coded value
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

  onChangeHandler = (e) => {        // using the method setState and update the name key
    this.setState({ name: e.target.value })     //when we type in e.target.value, it overrides the name

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
```

#### destructuring in React component
```js
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
```

[[↑] Back to top](#table-of-contents)

### Lifecycle

#### class component vs functional component
- we use class component when the component has its own local state and lifecycle before React 16.8
- now we can use react hooks to perform local state and lifecycle in functional component

#### Lifecycle (3 phases) - mounting, updating, unmounting
- mounting (constructor) - initialize stuffs in the state in the constructor that we have over the initial render, then we call componentDidmount
- componentDidmount -> initial render, only after the initial render then componentDidMount, API fetching asych like .then() .setState({data}) etc 
- componentDidUpdate -> when we update, we need to change some state to trigger the re-render, config update, changing flag for next render
- componentWillUnmount -> proper clean-up to prevent memory leak (remove eventListener, remove setTimeout)


#### React.PureComponent vs memo -> performance improvement
- with PureComponent or memo, it already contains the logics of shouldComponentUpdate  - compare the props
- to compare current props and previous props to make sure it cuts off unnecessary renders

class wrap with `PureComponent`
```js
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
class Title extends React.PureComponent {  //extends React.PureComponent, always compare the previous props and current props to determine if needs re-render
//   constructor(props) {
//     super(props);
//   }  
//   shouldComponentUpdate() {...}    //PureComponent works like containing logics with shouldComponentUpdate - compare the props to see if any changes
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
```

function wrap with `memo` for functional component, capitalize the first letter for customized component
```js
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
         <WrapperTitle />     //here we use <WrapperTitle /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
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
- use it for reusability
- to share common functionality between components
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

#### controlled component vs uncontrolled component
Controlled Component
- takes its current value through props and parent component "controls" it by handling callbacks like onChange. 
- every state mutation will have an associated handler function managing its own state and passing the new values as props to the controlled component. 
- recommend using controlled components to implement forms
- a component that renders form elements and controls them by keeping the form data in the component's state.
- data is handled by a React component <-> the input's value is always driven by the React state
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
- let the component itself manage the value, stores its own state internally
- you query the DOM using a ref to find its current value when you need it. 
- Refs provide a way to access DOM nodes or React elements created in the render method.
- a bit more like traditional HTML, keeps the single source of truth in the DOM,
- data is handled by the DOM itself.
```js
import React, { Component } from 'react';

class App2 extends Component {
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
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        ref={this.input}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </div>
            </div>
            
        );
    }
}
export default App2;
```

[[↑] Back to top](#table-of-contents)

## Hooks

#### What is Hooks?
- React features that help you to "hook into" react methodology
- Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
- Hooks don't work inside classes — they let you use React without classes. 
- You can also create your own Hooks to reuse stateful behavior between different components.

#### useState()
```js
const computationInit = () => {
  console.log("Computing init");
  return 0;
};

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
//...prevState - modify selected key-value in the object
function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });

  return (
    <>
      <button
        onClick={() =>
          setCount((prevState) => {	//without ...prevState, it overwrites the object
            return {
              ...prevState,		//...prevState first - give all the key I have then make modification to the count1
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
- componentDidMount() - called once component mounted (was evaluated and rendered) - `useEffect(...,[])`
- componentDidUpdate() - called once component updated (was evaluated and rendered) - `useEffect(..., [someValue])`
- componentWillUnmount() - called right before component is unmounted (removed from DOM) - `useEffect(() => {return () => {...}}, [])`

```js
function App() {
  const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });

  useEffect(() => {
    console.log("useEffect called!");
  }, [count1, count2]);
  //dependency array -> empty array <-> ComponentDidMount (no dependency, we call it after every render)
  //if only count1 is the dependency, same count1 changes when we click the button, so rendering and useEffect called will the printed out.
  //if only count2 is the dependency, same count2 never changes, we only have rendering printout in the console.

  return (
    <>
      {console.log("Rendering")}
      <button
        onClick={() =>
          setCount((prevState) => {
            return {
              ...prevState,
              count1: prevState.count1 + 1
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

#### What is React Context?
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- With the help of context, we can get the value to the nested children directly. 
- Without Redux and React Context, we have to do lifting state up.

#### Is React Context working the same way as Redux?
- You can have multiple contexts but only one store in Redux
- If you use React Context, it may cause Data Contamination since the Consumer looks for the nearest Provider ancestry
- defaultValue <=> bubbling - always go up to look at the closest ancestry
- In Context, GrandChild.js - Look for the Child value but not the Parent value
- we could make mistake, or not able to get value we want, since the value passing down to GrandChild, the nearest ancestry is Child

#### When will be great to use Context? When will be great to use Context?
- Redux - Larger scale application
- Context - Smaller scale application

#### Context API Example - Provider and Consumer
```js
const MyContext = React.createContext();    //JSX - Capitalize
class Component
  state = {
   value: 1 
  }
  contextObj = {    //better performance
        data: this.state.value,
        onActionHandle: () => {   //with a function to pass down
         this.setState({value: 2})
        }
  }
  render() {
    return(
      <MyContext.Provider value = {this.contextObj}>    //like store={store}, better to put the object out not inside nested
        <Child>
      </MyContext.Provider>
      )
  }
//Child.js
  return(
      <MyContext.Consumer>    //function call to get the value that passed in through the provider
        {({data, onActionHandle}) => {
        return (
          <div> 
            {data} 
            <button onClick = {onActionHandler}>Click</button>          
          </div>
        )
      }}
      </MyContext.Consumer>
    )
```

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

#### Action
- An object include the action type and/or payload - the content you gonna use to make the change
- What you try to do? like number increase, decrease?
- Emit an action to reducer (disptach the action)

#### Reducer
- Expecting all types of action as defined. 
- Pure function is static, when we do not perform the render.
- Pure function, A input -> A output a + b = c (same input with consistant output)
- Reply on the input, and local state (state at the moment)
- no side-effect, output will be predictable

#### Redux Flow
- ReactJS -> setState() -> local state update -> UI re-rendering -> Done
- ReactRedux -> emit an action (dispatch an action) -> Reducer will calculate next state (analyze action)
          -> Component subscribing to the store data re-rendering
	  
#### index,js - How to setup Redux? How do you create store?
```js
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);	//the store will be generated based on reducer that analyze behaviors and modify current local state

ReactDOM.render(     //initial render into our App 
  <Provider store={store}>   //provider to inform the whole structure, for provider layer, everything inside would be props.children
    <App />         //store is like global state, available to all children, stroe is the values in your redux store, like the data from the database
  </Provider>,     //provider is like passing down everything to the children, we pass our store down to every level via createStore(reducer)
  document.getElementById("root")
);
```

#### App.js - subscribe to the store (connect)
`ConnectedApp = connect()(App)`
```js
import React from "react";
import { connect } from "react-redux";      // HOC, connect is a function, the helper function
import * as counterActions from "./action";   //import all kind of actions we have in the action file

class App extends React.Component {
  render() {
    const { numberForApp, incHandler, decHandler } = this.props;    //get from the props, the state and dispatch we defined through connect()

    return (
      <div className="App">
        <h3>{numberForApp}</h3>       		//display value from the store
        <button onClick={incHandler}>+</button>     //using the function as click handler
        <button onClick={decHandler}>-</button>     //using the function as click handler
      </div>
    );
  }
}

const mapStateToProps = (state) => ({   //build the parameter from connect(), take the state
  numberForApp: state.counterReducer      //using the value from the store, counterReducer is the specific one from the reducer file
});

const mapDispatchToProps = (dispatch) => ({   //build the parameter from connect(), take the disptach, pass the function, disptach the action
  incHandler: () => dispatch(counterActions.incAction()),   //dispatch(actions.incAction()) - containing our action type (a payload as needed)
  decHandler: () => dispatch(counterActions.decAction())    //call the action, emit the action that we defined in the action.js
});  // action generator, directly talking to the store, if you do not need a function, just delete it, no worries about props

const ConnectedApp = connect(	//here we use the connection function, connect will create the HOC wrapper that takes the APP
  mapStateToProps,		// on value - get the value from the store, make sure the component is hook up with the store (display)
  mapDispatchToProps		// on handler/actions - the action we need (user interaction)
)(App);				//here is to connect to our App, we do not connect directly

export default ConnectedApp;
```

#### action.js 
- define actions -> like an action generator
- include action type and/or payload (the content used to make change and dispatch action)
- the action is going through to the reducer which analyzes the action
 
```js
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
export {    //export the actions we defined
  incAction,
  decAction 
}
```

#### reducer.js 
- reply on the input and the local state at the moment
- analyze behavior and modify current local state

How do you group different reducers? 
- combineReducers()

```js
import { combineReducers } from "redux";    //import combineReducers for the reducer file, group different reducers 

const INIT_STATE = 1;   //init value from the store
                                            
const counterReducer = (state = INIT_STATE, action) => {   //action will be emit from the action.js file, state is the current state with a default value 
  switch (action.type) {      //judged by the different types of actions
    case "INCREMENT":       //different cases, make sure matches in the action file
      return state + 1;       //return the current local state does what
    case "DECREMENT":       //tell reducer, whenever you see this case, do something
      return state - 1;       //what to do when we see the case
    default:            //always end with a default case
      return state;      //just return itself
  }
};

const rootReducer = combineReducers({     //here pass the switch case counterReducer to it, you can pass as many as you need
  counterReducer
});

export default rootReducer;
```

#### to-do list example
using `.push()` to push a new item to the state is no good in redux, since push manipulates the existing array in the existing state.

instead, we can using the spread operator `...` to get the copy of the array, and then return the manipulated one.

```js
const TODO_INIT_STATE = {
  todo: ["Study Redux", "Do Homework"],
  text: "",
};

const tdListReducer = (state = TODO_INIT_STATE, action) => {
  switch (action.type) {
    case "TEXT":
      return { ...state, text: action.payload };
    case "ADD":
      return {...state, todo: [...state.todo, action.payload], text: ""}; 
    case "DELETE":
      return { ...state, todo: state.todo.filter((item, index) => index !== action.payload)}
    case "SORT":
      if (action.payload === "asc") {
        const ascList = state.todo.sort((a, b) => a.localeCompare(b));
        return { ...state, todo: [...ascList]};
      } else if (action.payload === "desc") {
        const descList = state.todo.sort((a, b) => b.localeCompare(a));
        return { ...state, todo: [...descList]};
      }
      break;
    default:
      return state;
  }
};
```

[[↑] Back to top](#table-of-contents)

## Middleware

#### What is middleware?
- integrate all the different software systems and make them work together
- it provides common services and capabilities to applications outside of what is offered by the operating system
- code you can put between the framework receiving a request, and the framework generating a response. 

#### why do we need redux middleware?
- it provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- people use Redux middleware for implementing async action calls
- if we do not use the middleware, we can only do actions when API server is not involved
- middleware allows you to call the action creators that return a function(thunk) which takes the store dispatch method as the argument
- which is afterwards used to dispatch the synchronous action after the API or side effects has been finished.

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

## Performance

#### How do you generally improve performance?
React
  -HOC
  -memo/PureComponent (shouldComponentUpdate) - lifecycle
  -reduce unnecessary re-rendering
  
Redux
  -Thunk
  -Re-selector
  
JS
  -Event Delegation (allows you to avoid adding event listeners to specific nodes)
  
CSS
  -Animation
  -image-sprite (reduce requests)
  -image compression
  
HTML
  -Empty HTML
  -Style on the top, script down/defer/async

#### Webpack - A bundler for front-end dev -> bundle your styles
HMR(Hot Module Replacement)
- Update the page directly without a fully page reload - more efficient dev environment and will not loss the current state

Tree Shaking
- Get rid of unnecessary code
```js
if (false) {console.log ("Never Reached")}    //dead code elimination
const c = x + 1;
return c;   //=> return x+1
```

Code Splitting
- Split your modules properly according to the dependency graph

Lazy Loading
- splitting your code at logical breakpoints, and then loading it once the user has done something that requires a new block of code. 

Minifier/uglifier minification 
- remove unnecessary code 
- rename to a more efficient version for machine
```js
  const aaaaa=1;
  console.log (aaaaa);
  // ===>
  const a=1; console.log(a)
```

#### loadsh
Debounce and throttle are techniques to control how many times we allow a function to be executed over time 
- debounce -> search bar (auto-complete)
- throttle -> scrolling / resizing page
- debounce / throtte -> web performance improvement -> control the number of times the function will be called

debounce 
- setTimeout
- like a search bar, you enter text, once yoou finish, wait for the timer done, it will send the request only one time to UI after the time period
- like we post comments everytime triggers a hard delay, then reset the timer to 100 again
- “group” multiple sequential calls in a single one.

```js
func fetchAPI ... const debouncedFunc = _.debounce(fetchAPI, 100) //shorter than a 100
onUserInput => {
  debouncedFunc()
}
```

throtte 
- setInterval
- like resizing page, you send requests to the UI with a timer interval, will be sent no matter how many requests within the time period
- like comments triggers 100 for the entire cycle 
- `_.throttle(fetchAPI, 100)`;

#### React Redux - Selectors & Reselect for improvement enhancement

selector
- write more reusable code
- encapsulate knowledge of where data lives and how to derive it
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
- implements functions memorization pattern (caching), memorization comes with cost
- create selectors that are memoized and only recompute when their inputs have changed.
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

## Testing

#### Have you done Unit Test?  
Yes

#### What do you use for Unit Test?
Jest
- JS helper functions (logic helper)
- `x => x+1` -> pure function
- test any side effect `x => x+1`
	
Enzyme: 
- component test

#### What is the coverage? 
How complete your unit test cover all the code
- 90% coverage (out of 100 lines, at least 90 lines are ran)

#### Unit Test File Example
- button.js
- button.test.js
- npm run test *.test.js

[[↑] Back to top](#table-of-contents)
 
