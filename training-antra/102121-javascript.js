Resources: 
- JavaScript tutorial: https://www.w3schools.com/js/
- ES6: https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/
- Data Structure in JavaScript: https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c
- Event loop: https://flaviocopes.com/javascript-event-loop/

Key Points:
- What is coercion in JavaScript
- What is Scope in JavaScript
- Explain equality in JavaScript
- Null / Undefined in JavaScript
- What is strict mode in JavaScript
- What is a Polyfill
- Var / let / const
- Explain event bubbling and how one may prevent it.
- How to empty an array in JavaScript
- How to check if an object is an array
- How would you use a closure to create a private counter
- Add(5)(10)(8) // return 23
- Callback function example
- How to iterating over object properties and array items?
- Why we need to avoid touching global scope and how to avoid it.
- DOM event DOMContentLoaded
- Deep Copy in js
- ES5 vs ES6
- Undefined vs not defined
- Rest operator vs spread operator
- What is currrying in js
- What is high order function

Notes:
JS vs ECMAScript vs node
ECMAScript – syntax standard
JavaScript – ECMAScript + web API 
Node – ECMAScript + node API
Primitive type data is pass by value (making a copy)
String, number, Boolean, undefined
Non-primitive type data is pass by reference (pointing to the address)
Objects, function
Deep copy vs shallow copy 
Shallow copy – Makes a copy and points to the same memory address
Deep copy – Makes a copy with a different memory address
Class key in ES6
The Object.keys() method returns an array of a given object's own enumerable property names
Constructor function in ES5
The constructor method is a special method of a class for creating and initializing an object instance of that class.

JS coercion
Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.
JS Scope
The scope is an important concept that manages the availability of variables
Block (let/const)
Function (local scope)
Global (variables outside functions)
JS equality
“==” compares value
“===” compares value and type
Null vs undefined
Undefined – variable is declared but not given a value; Type undefined
Null is an assignment value meaning no value; Type object
What is strict mode in JS?
With strict mode, you cannot, for example, use undeclared variables.
What is polyfill?
A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers.
Var/let/const
Var – pre ES6 for declaring variables
Const/let – ES6 syntax
Let – able to reassign variable value
Const – variable value will not be reassigned
Explain event bubbling and how one may prevent it.
Event Bubbling is the event starts from the deepest element or target element to its parents, then all its ancestors which are on the way to bottom to top. At present, all the modern browsers have event bubbling as the default way of event flow.
If you want to stop the event bubbling, this can be achieved by the use of the event.stopPropagation() method. If you want to stop the event flow from event target to top element in DOM, event.stopPropagation() method stops the event to travel to the bottom to top.
How to empty an array in JavaScript
Assign it to an empty array
Setting the length of the array to zero
Remove each element in the array with pop() method
How to check if an object is an array
You can use typeof (console.log(typeof arr))
Or you can use Array.isArray(arr)
How would you use a closure to create a private counter?
How would you use a closure to create a private counter
You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.


Call back function example:
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

How to iterating over object properties and array items?
The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

Why we need to avoid touching global scope and how to avoid it?
The primary reason why global variables are discouraged in javascript is because, in javascript all code share a single global namespace, also javascript has implied global variables ie. variables which are not explicitly declared in local scope are automatically added to global namespace. Relying too much on global variables can result in collisions between various scripts on the same page
One way to reduce global variables is to use the YUI module pattern. The basic idea is to wrap all your code in a function that returns an object which contains functions that needs to be accessed outside your module and assign the return value to a single global variable.

DOM event DOMContentLoaded
The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
Undefined vs not defined
If the variable name which is being accessed doesn’t exist in memory space then it would be not defined
if exists in memory space but hasn’t been assigned any value till now, then it would be undefined.
What is currrying in js?
currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument
What is high order function?
In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
What is hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top.
Rest operator vs spread operator
Rest- The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array.

Spread - The spread operator (...) helps you expand iterables into individual elements.



//JavaScript
NODE, Javascript, EcmaScript(ES5, ES6, ES7...)
EcmaScript = Sytanx standard
Javacirpt =  EcmaScript + webAPI
NODE = EcmaScript + NODEAPI

//Primative Type 
let num =5; // number
console.log(typeof num)     //number
let str = 'abc';
console.log(typeof str)     //string
let b = true;
console.log(typeof b)       //boolean
let und = undefined;
console.log(typeof und)     //undefined
let n = null;
console.log(typeof n);      //object - how JS was originally built


// Pass by Value (just the value itself)
let c = 10;
let d = c;
d = 5;
console.log('d',d) // 5

foo(c);
console.log("c",c) // 10 - not changing its value

function foo(input){
    input = 7;     //input makes a copy of the value, not the location
    console.log("input",input) // 7
}


// object data type : object | function
function foo(){

}
console.log(typeof foo);    //function
let obj = {}
console.log(typeof obj);    //object 
let arr = []
console.log(typeof arr);    //object 


//Pass by Reference (point to the memory location of the value)
let obj = {name:'patrick'}

foo(obj);
console.log(obj)    //{name:'changed'}

function foo(input){
    input.name = 'changed'
    console.log(input)    //{name:'changed'}
}
 

// deepcopy, shallow copy
// class key in ES6 and constructor function in ES5
 
