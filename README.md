---
title: SSI-Training-Note
---

## Table of Contents
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [React](#react)
- [Redux](#redux)
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
- a collection of images put into a single image
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
console.log(newObj); //{x: { y: 9 } 
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
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

#### Closure 
a function retured by another function that still has access to its outer scope variable
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

#### Promise(Event-loop, task scheduling)
- JS is a single-threaded language, use promise to handle async operation
- new feature of ES6 -> avoid callback hell - a chained nested code

- 3 phrases -> pending, fulfilled, rejected
- chain .then() to do something, and/or .catch() to catch error
- will return another promise so we can chain more then()
- output order - only after the main thread is done

- main thread (console.log) > micro (promise, async/await-pauses) > macro (timeout, interval)

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

#### 

[[↑] Back to top](#table-of-contents)

## Redux

#### 

[[↑] Back to top](#table-of-contents)

## Performance

#### //loadsh
debounce / throtte -> web performance improvement
- debounce -> search bar (auto-complete)
- throttle -> scrolling / resizing page

debounce - setTimeout, like we post comments everytime triggers a hard delay, reset the timer to 100 again
```js
func fetchAPI ... const debouncedFunc = _.debounce(fetchAPI, 100) //shorter than a 100
onUserInput => {
  debouncedFunc()
}
```

throtte - setInterval, like comments triggers 100 for the entire cycle `_.throttle(fetchAPI, 100)`;

[[↑] Back to top](#table-of-contents)

## Testing

#### 

[[↑] Back to top](#table-of-contents)

