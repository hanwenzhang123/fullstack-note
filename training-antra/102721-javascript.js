//reduce() - do the iteration based on the logic, eventually return the accumulator
const arr5 = arr.reduce((acc, cur, index, arrary) => {    //accumulator but not previous value
  console.log(acc, cur, index, array)
  return 5;
}, "hello")     //InitialValue to initialize the value

console.log(arr5)   //5

//hello 1 0 [1, 2, 3]
//undefined 2 1 [1, 2, 3]
//undefined 3 2 [1, 2, 3]


//reduce is designed for everything, try to use initial value all the time
//implement reduce to use map
const arr = [1, 2, 3];
const arr2 = arr.map(item => item * 2); //[2, 4, 6] 
const arr22 = arr.reduce((acc, cur,) => { //[2, 4, 6] 
  acc.push(cur*2);
  return acc;
}, []);   //initial an array, and push items to this array, [] is trusy


//can treat the initial value as 0
const arr = [1, 2, 3];
const arr2 = arr.map(item => item * 2); //[2, 4, 6] 
const arr22 = arr.reduce((acc, cur, index, array) => { //[2, 4, 6] 
  acc.push(cur*2);
  return acc;
}, []); 



//ES6
//arrow function
//var let const


//how to declare function - 3 ways
foo()   //foo - still able to print it out because of the hoisting
function foo() {    //hoisting - function keyword will hoist the entire function, hoisted to the top of the execution context
  console.log("foo")
}

console.log(foo2) //undefined - because we used var which hoisting the value
foo2()  //ReferenceError: foo2 is not defined
var foo2 = function() {   //var keyword is also doing the hoisting, but var is only hoisting the value itself, will not hoisting the whole function
  console.log("foo2")
}
console.log(foo2) //Uncaught ReferenceError: foo2 is not defined
const foo2 = function() {   //use const here, no hoisting
  console.log("foo2")
}

const foo3 = () => {
  
}


//var - also hoisting, but only the value; unless function keyword, it hoisting the whole function
//if we do console.log(xxxxx) - ReferenceError: xxxx is not defined
console.log(xxxxx)    //undefined
var xxxxx = 5;
console.log(xxxxx)    //5

//const/let - you can not access the value before its initialization
console.log(a);   // ReferenceError: a is not defined
const a = 5;    
//let can be redefined, const is constant value

//why hoisting? 
var a = 1;
console.log(a)  //1
a = 2
console.log(a)  //2
var a = 3
console.log(a)  //3

let a = 1;
console.log(a)  //1
a = 2
console.log(a)  //2
let a = 3       //Uncaught SyntaxError: Identifier 'a' has already been declared
console.log(a)


//object - pass by reference using const for its memory address
const obj = {name: "patrick"};
obj.name = 5;
obj.age = 12
console.log(obj)  //{name: 5, age: 12}
//obj itself is a reference, you can manipulate the value inside the memory address, but you can not replace that memory address
obj = {}  //TypeError: Assignment to constant variable. - you can not change the memory address after initial declaration


//scope
//inner function can access outter things, but not the other way around
function foo() {
  console.log(a); //undefined
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

