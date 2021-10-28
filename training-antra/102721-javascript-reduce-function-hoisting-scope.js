//filter()
- something about "truthy/falsy" - coersion - trying to convert everything to boolean
- do not change original array, creates new array //as well as .map()
- Array is truthy, Object is truthy

//reduce() - do the iteration based on the logic, eventually return the accumulator
//array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue) - we need initial value for accumulator
const arr = [1, 2, 3];
const arr5 = arr.reduce((acc, cur, index, arr) => {    //think it as of accumulator, better than as of previous value
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

//hoisting - during declaration phase (before execution phase), var & func are moved/hoisted to top, but var won't be initialized.

//var - hoisting, but only the value; unlike with function keyword, which hoisting the whole function
//if we do console.log(xxxxx) - ReferenceError: xxxx is not defined
console.log(xxxxx)    //undefined
var xxxxx = 5;
console.log(xxxxx)    //5

//const/let - you can not access the value before its initialization
console.log(a);   // ReferenceError: a is not defined
const a = 5;    
//let can be redefined, const is constant value

//why hoisting? 
//moved to the top of their scope regardless of whether their scope is global or local 
//no matter where functions and variables are declared, you can reassign and redeclare the variable later on
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
obj2 = {}   // a new copy for obj2, different memory address
console.log(obj2)   //{} - reassign the value with a different memory address


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



//Homework - Scope & Closure
function foo(){ //var - function scope
  for(var i = 0; i < 5; i++){   //JS will keep running the function, not wait for the timer to expire
    setTimeout(()=>{  //so it would be too late for setTimeout to catch the current i when execute, but the reference to the memory of i
      console.log(i); //5 5 5 5 5  -  remember the reference to i, not the value to i
    },i)  //i refers to the same memory location
  }
}
foo()

function foo(){   //const/let - block scope - receive new copy each time
  for(let i = 0; i < 5; i++){ //i has a new copy variable for each iteration due to block scope
    setTimeout(()=>{  //each time function called, reference to a different memory location due to separate copy of i in the scope
      console.log(i); //0 1 2 3 4 - a fresh new copy of i that binds to the function and send it
    },i)    //closure  - a function with lexical environment
  }
}
foo()

for (var i = 1; i <= 5; i++) {		//var makes i stays in the function scope
    (function(index) {	//wraps the function call in another function, so inner function gets local copy of outer function arguement
        setTimeout(function() { alert(index); }, i * 1000);	//0 1 2 3 4 - having a copy of i in it each time iterate through
    })(i);	//using a self-invoking function, IIFE, each iteration created a new scope for each iteration
}

function x(){
  for (var i = 1; i <= 5; i++) {
    function close(x) { //get a new copy of x each time the function get called
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);   //new copy of i - passing i as argument pass to the parameter
  }
}

//Event Loop - How event loop works?
callstack & promise & async/await
- event loop on every iteration looks if there is something in the callstack, executes it
- setTimeout - callback function is put into Message Queue, once nothng is in the callstack, it picks up things in the Message Queue
- promises & async/await - right after call stack & before Message Queue
  
