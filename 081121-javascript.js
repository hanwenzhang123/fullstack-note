New Features of ES6
1. let const vs var //(let const - scope to the block) (var - value hoisting - put things on the top, scope to the function)
2. arrow function // does not have "this", "arguments"
3. template literal - //`..${}..`
4. default params
5. destructuring
6. spreading (...) /rest (...rest)
// bind apply call
// deep clone / shallow clone
7. promises
8. class syntax


IIFE
immediate invoked function expression  
execute functions immediately, as soon as they are created. we just need the function for one time.
they do not pollute the global object, and they are a simple way to isolate variables declarations.

Self-Executing Anonymous Function and contains two major parts: 
The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
The second part creates the immediately invoked function expression () through which the JavaScript engine

//Syntax
(function() {
  /* */
})()

(() => {
  /* */
})()

//Example
const secretValue = (() => {
  return "Secret"
})();
console.log(secretValue)  //Secret


//JavaScript Special
typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially


//arguments - exist in function decorations
//argument as an access to all the inputs parameters and you can access each param by its index
//in JS no rule in JS that we have to declare exactly in parameters
function f() {
  console.log(arguments);
}
f(1,2,3);   // {0: 1, 1: 2, 2: 3}

function F() {
  const f = (a, b) => {
    console.log(arguments); //using arguments within arrow function which is looking for outer scope F here
  };
  f();
}
F(1);  // {0: 1}


//default params
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


//Accessing value from object
const obj = { x:1 };
console.log(obj.x);  //1
console.log(obj["x"])  //1

const obj = { "you what":1 }; //with space
console.log(obj["you what"])  //1


//destructuring
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


//Renaming
const obj = { x: 1 };
const { x: newVariable } = obj;   //just about the syntax, change the name x to newVariable
// const newVariable = obj.x    //x as the key to get the value and stores in the variable
console.log(newVariable)  //1


//make a copy of an object - before ES6
const obj = { x: 1 };
const newObj = Obj.assign({}, obj);
console.log(newObject)    //{ x: 1 }
console.log(obj === newObject)    //false - made a copy, but they are referring to different address in the memory 

{} === {}   //false, they are referring different addresses in the memory
{} == {}  //false


//spreading (...)
const obj = { x: 1 };
const newObj = { ...obj };
console.log(newObj)    //{ x: 1 }
console.log(obj === newObj)   //false

const newObj = { ...obj, y: 2 }; // addition
const newObj = { ...obj, x: 2 }; // overwrite
console.log(newObj);  //{ x: 1, y: 2 }

const s = "Hello";
const sArr = [...s];
console.log(sArr) //["H", "e", "l", "l", "o"]
console.log(sArr.length); //5


//rest (...rest)
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

// example - a communication between components
// function func(a, b, ...rest) { 
//   return component (newa, newb, ...rest);
// }


//bind apply call
//function prototype - for propertly set up function for "this"
//assigning this keyword
function.prototype.bind/apply call
func.bind()  //not call yet
func.apply()/call()  //call it now


//bind()
//The bind() method creates a new function that, when called, has its this keyword set to the provided value.
//does not call the function, but refer to it
const module = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

console.log(module.getX());  //42 - module is the owner

const unboundGetx = module.getX;
//console.log(unbounGetX()); //undefined - can not read property X, it is not defined - TypeError
//it is like pull getX outside of the object - unboundGetx is not aware your module
- const getX = () => this.x - lost its original "this"

//bind() - take it out of the function and provide a proper "this"
const boundGetX = unboundGetX.bind(module);
//console.log(boundGetX());


//apply()/call() - same, just the different way to put in the parameter
Product.call(this, ,name, price); //call => c comma
Product.apply(this, [name, price]); //apply => a array

//call() - "this" function is called in specific within the function, calling/triggering the function
// The call() method calls a function with a given this value and arguments provided individually.
// directly triggers itself, call it right now, unlike bind, not yet to call
// func.call(thisArg, arg1, arg2, ....)
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);    //this is referring to Food object
}

const cheese = new Food("feta", 5);
console.log(cheese);  //Food {name: "feta", price: 5}

//apply()
//call() and apply() serve the exact same purpose. 
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.apply(this, [name, price]);   //with apply(), you are required to put the parameters in the []
}

const cheese = new Food("feta", 5);
console.log(cheese);  //Food {name: "feta", price: 5}


//Using ...Rest Syntax
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(...rest) {  // rest syn - for parameter and makes it dynamic
  Product.call(this, ...rest); // spreading syn
}


//Deep Clone vs Shallow Clone
// deep clone - no more contact with previous reference, they are not related, any modification would not influence original copy
// shallow clone - reuse previous reference and still have influence on original copy, more efficient as deep uses more cpu place
A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
A shallow copy means that certain (sub-)values are still connected to the original variable.

                                   
//Deep Clone - 2 ways to implement deep clone
1. third party lib => _lodash.cloneDeep()
2. JSON parse and stringify

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


//Shallow Copy
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


//using clone deep
var _ = require("lodash");
const obj = { x: { y: 1 } };
const newObj = _.cloneDeep(obj); // deep
newObj.x.y = 9;
console.log(obj); //{x: { y: 1 } - it is deep clone, no connections to each other 
console.log(newObj);  //{x: { y: 9 }

//using stringify
const obj = { x: { y: 1 } };
const newObj = JSON.parse(JSON.stringify(obj)); // deep copy
newObj.x.y = 9;
console.log(obj); //{x: { y: 1 } - it is a deep copy, independent, no connections
console.log(newObj);  //{x: { y: 9 }

//reassigning
const obj = { x: { y: 1 } };
const newObj = obj; // identical -> equality check -> true 
console.log(obj===newObj) //true, two different boxes point to the same memory
newObj.x.y = 9;
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
console.log(newObj); //{x: { y: 9 } 

//Object.assign()
const obj = { x: { y: 1 } };
const newObj = Object.assign({}, obj); // shallow
console.log(newObj === obj);  //false, creating a new container
console.log(newObj === { ...obj });   //false, just like {1:1} === {1:1} is false because they are in completely different boxes
newObj.x.y = 9;
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
console.log(newObj); //{x: { y: 9 } 
  
//spreading expression
const obj = { x: { y: 1 } };
const newObj = { ...obj };  //shallow
console.log(newObj === obj);   //false, making in a different copy but in differet memory place. 
newObj.x.y = 9;
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
console.log(newObj); //{x: { y: 9 } 
         
