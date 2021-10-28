//reduce() - do the iteration based on the logic, eventually return the accumulator
const arr = [1, 2, 3];
const arr5 = arr.reduce((acc, cur, index, arr) => {    //accumulator but not previous value
  console.log(acc, cur, index, arr)
//   return 5;
}, "hello")     //InitialValue to initialize the value

console.log(arr5)   //5

//hello 1 0 [1, 2, 3]
//undefined 2 1 [1, 2, 3]
//undefined 3 2 [1, 2, 3]


//with a return value
const arr = [1, 2, 3];
const arr5 = arr.reduce((acc, cur, index, arr) => {    //accumulator but not previous value
  console.log(acc, cur, index, arr) 
  return 5;
}, "hello")     //InitialValue to initialize the value

console.log(arr5)   //5

// hello 1 0 [1, 2, 3]
// 5 2 1 [1, 2, 3]
// 5 3 2 [1, 2, 3]
// 5


//reduce is designed for everything, use initial value all the time
//implement map using reduce
const arr = [1, 2, 3];
const arr2 = arr.map(item => item * 2); //[2, 4, 6] 
const arr22 = arr.reduce((acc, cur,) => { //[2, 4, 6] 
  acc.push(cur*2);
  return acc;
}, []);   //initial an array, and push items to this array, [] is trusy


//can treat the initial value as 0
const arr = [1, 2, 3];
const arr2 = arr.map(item => item * 2);   //[2, 4, 6]
const arr22 = arr.reduce((acc, cur, index, array) => {    //[]
  console.log(acc, cur, "index: ", index, array)
  return acc;   //return accumulator but not push anything to it
}, []); 
//[] 1 index: 0 [1, 2, 3]
//[] 2 index: 1 [1, 2, 3]
//[] 3 index: 2 [1, 2, 3]


//ES6
//arrow function
//var let const


//how to declare function - 3 ways
foo()   //foo - still able to print it out because of the hoisting
function foo() {    //hoisting - function keyword will hoist the entire function, hoisted to the top of the execution context
  console.log("foo")
}

console.log(foo2) //undefined - because we used var which hoisting the value
foo2()  //ReferenceError: foo2 is not defined, var does not hoisting the whole function, so you can not invoke it
var foo2 = function() {   //var keyword is also doing the hoisting, but var is only hoisting the value itself, will not hoisting the whole function
  console.log("foo2")
}
console.log(foo2) //Uncaught ReferenceError: foo2 is not defined
const foo2 = function() {   //use const here, no hoisting
  console.log("foo2")
}

console.log(foo3) //ReferenceError: foo3 is not defined - let/const(no hoisting)
foo3()  //ReferenceError: foo3 is not defined
const foo3 = () => {    //ES6 - arrow function syntax
  console.log("foo3")
}


//var - also hoisting, but only the value; unlike with function keyword, which hoisting the whole function
//if we do console.log(xxxxx) - ReferenceError: xxxx is not defined
console.log(xxxxx)    //undefined
var xxxxx = 5;
console.log(xxxxx)    //5

//const/let - you can not access the value before its initialization
console.log(a);   // ReferenceError: a is not defined
const a = 5;    
//let can be redefined, const is constant value

//why hoisting? moved to the top of their scope regardless of whether their scope is global or local (no matter where functions and variables are declared)
var a = 1;
console.log(a)  //1
a = 2           //using var, you can re-assign the value
console.log(a)  //2
var a = 3       //using var, you can re-declare the variable
console.log(a)  //3

let a = 1;
console.log(a)  //1
a = 2           //using let, you can not re-assign the value
console.log(a)  //2
let a = 3       //Uncaught SyntaxError: Identifier 'a' has already been declared
console.log(a)  //using let, you can not re-declare the variable


//object - pass by reference, using const for storing its memory address
//you can manipulate the value, but the pointing address of the value is unchangable
const obj = {name: "patrick"};
obj.name = 5;
obj.age = 12
console.log(obj)  //{name: 5, age: 12}
obj = {}  //TypeError: Assignment to constant variable - because const, you can not directly reassign its value

//obj itself is a reference, you can manipulate the value inside the memory address, but you can not change the memory address after initial declaration
let obj2 = {name: "patrick"};
obj2 = {} 
console.log(obj2)   //{} - reassign the value but not the memory address


//scope
//inner function can access outter things, but not the other way around
function foo() {
  console.log(a); //undefined - var hoisting its value
  var a = 5;
  console.log(a)  //5
  function foo2() {
    var b = 3;
  }
  foo2()
  console.log(b)  //ReferenceError: b is not defined - due to function scope
}
foo()
console.log(a)  //ReferenceError: a is not defined - due to function scope

//block scope within {}

