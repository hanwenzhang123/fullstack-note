https://javascript.info/
https://developer.mozilla.org/en-US/
https://github.com/lydiahallie/javascript-questions

Arrow functions, the basics
https://javascript.info/arrow-functions-basics
JavaScript Hoisting
https://www.w3schools.com/js/js_hoisting.asp
//var  a - variable already exist
//undefined, it is not able to access to the value
//hoisting, limited to the current scope, initialized
console.log(a);    
var a = 1;
//system crash, ReferenceError, b is not exist
//let and const do not initialize, they are not accessible before the line we declare them
//this is called temporal dead zone
console.log(b);  
let b = 1;

What is V8?
V8 – in Chrome and Opera.
Internal building engine to handle JavaScript.

"use strict" Mode
It gives you less tolerate to errors, put on top of your program

New Features of ES6 - very common JS question

var const let 
var - old time, issue with variable hoisting
let - we can still re-assign value
let a=1
a=2 //ok
const - no re-assign value allowed
const with array - good, because it is not changing pointer to another thing, as long as arr still pointing to it, it is good, we are not changing its value
const b=1
b=2 //no good
const arr =[1, 2, 3];
arr.push(4)    //this is good 
arr.pop();

primitive data types, variable stores the values
let a = 1; //number
a= "hello" //string
a = true // boolean
a = undefined // let a;
a = null; // let a = null;

//object points to a reference, not the value itself
a= {} //object
arr = []//array - object

console.log(1+"2")     //12
console.log(2+"1")     //21
console.log(1+2+"1")    //31
//automatically convert to string
//number + -> concat

console.log(5-"2")  //3
//no concat, will automatically convert to math operation
console.log(5-"a") //NaN
//Not a number, invalid operation, no ascii code in JS

dynamic casting
console.log(typeof Boolean(1)) //boolean
let a = 1
console.log(typeof !a) //boolean, check the 2nd value
console.log(!1) //false
let a = 1
console.log(typeof !!a) //true, !! - double negation
let a = 0
console.log(typeof !!a)  //false, boolean will be false
!!""    //false, nothing in there
!!" " //true, there is a space, it is not empty
!!{}    //true - it is object, empty box but there is something

= assign
== same value
===same type same value, everything equals
null == false    //false
undefined == false //false
null == undefined //true
null === undefined //false
console.log()    //undefined

|| or
&& and
! not
console.log(1 || 0)    //1
console.log(1 && 0)    //0
console.log(1 || 2 || 3) //1 - OR - looking for the first TRUCY value, otherwise return last element
console.log(1 && 2 && 3) //3 - AND - looking for the first FALSY value, if not any, return last element

console.log (age>18 ? "Adult" : "Teen")
//if else, one line statement

let age = 19;
let status;
if (age>18) {
    status = "adult"
}
let isSomethingFlag = age > 18;
status = isSomethingFlag && "adult"  
console.log(status)    //adult
//if it is true then return the value “adult"

nullish coalescing operator - ??
https://javascript.info/nullish-coalescing-operator

if, switch, loops

arrow function - new features of ES6
- simple syntax, less code
- do not have to bind function
- arrow function does not have "this" within it to be referred to the current object
- does not have "arguments" (keyword)
function myFunc(){
	console.log(i)
}
let myFunc =() => {
	console.log(i)
}

let myFunc =(i) => {
	console.log(i)
}
let myFunc =i => console.log(1)

let myFunc =(i) => {
	return i;        //return value
}
let myFunc =i => i

//return object - need() to hand {} or needs return
let myFunc = () => ({x: 1})        //{x: 1}
let myFunc = () => {return {x: 1}}        //{x: 1}

var obj = {
	name: "mic",
	getName: function(){
		return this.name
	}
};
console.log(obj.getName())    //mic

var obj = {
	name: "mic",
	getName: () => {    //arrow function no use for "this"
		return this.name           //not working        
	}
};
console.log(obj.getName())    //undefined

argument keyword
can not use arrow function as well like "this"

function declaration vs function expression in JS
myF()
function myF(){
	console.log("My Function")    
	//it is okay to under the function declaration
}
myF()
const myF = function(){
	console.log("My Function")
	//no good with function expression, ReferenceError, can not access function initialization, myF() failed directly
}
myF()
var myF = function(){
	console.log("My Function")
	//TypeError, no good, myF is not a function
	//var myF = undefined;
	//when you try to execute myF(), it is good, it is there, but it triggers the function which is undefined, that it breaks the rule. 
}
