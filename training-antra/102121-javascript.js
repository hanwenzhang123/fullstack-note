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
 
