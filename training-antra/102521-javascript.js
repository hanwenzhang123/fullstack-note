// coersion
const res = 1 + undefined //NaN
const res = 1 + "2"   //12
const res = "1" - 2   //-1
  
// == vs ===
const obj = {name:"patrick"}
const obj2 = new Object({name:"patrick"})    //initialize a new object
console.log(obj === obj2)   //false, point to different memory, but look the same if we do console.log(obj2, obj)


// class | prototype -> JS ES6
How to declare a class? with a "class" keyword - ES6 syntax sugar
- JS does not really have class function, but a constructor function
what is the purpose for class, why we need the class?
- help us do some patterns, for reusability
  
//ES6 syntax
class Person {    //it is called constructor function
  constructor (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
      console.log(`I am ${this.name}`)
    }
  }
//   showName(){
//     console.log(`I am ${this.name}`)
//   }
}

const p = new Person("patrick", 18);    //datatype of p is object, datatype of Person is function
const p2 = new Person("patrick", 18); 
const p3 = new Person("patrick", 18); 

p.showName();   //I am patrick


//Difference of where showName() placed in the class (inside or outside of constructor)
instance method (inside of constructor) - will use new memory address when you declare the instance
console.log(p.showName === p2.showName) //false

class/prototype method (outside of constructor)  - defined by the class itself
console.log(p.showName === p2.showName) //true

prototype chain is used to do inheritance, like hasOwnProperty(), toString(), isPropertyOf()
console.log(p3.showName)  //not invoking
console.log(p3.showName())  //invoking

//return undefined from a function without return statement
value for console.log is a function, we invoke console.log()

let res = p3.showName()
console.log(res)    //undefined - we did not return anything in the function above

function foo(){ }
let res = foo(); 
console.log(res);  //undefined - because we did not return anything inside the function

//example1
function foo() {
  let a=5;
  a++;
  function foo2(){
    console.log("hello")
  }
  return foo2();
}

let res = foo()
console.log(res)    //undefined

//example2
function foo() {
  let a=5;
  a++;
  function foo2(input){
    console.log("hi") //hi
    return input
  }
  return foo2("hello");
}

let res = foo()
console.log(res)    //hello


//example3
function getUser(){
  return {
    name: "patrick",
    hello: "welcome"
  }
}

console.log(getUser().hello)  //welcome


//ES5 syntax
function Person(name,age){
    this.name = name;
    this.age = age;
}

const p = new Person("patrick", 18); 
const p2 = new Person("patrick", 18); 
const p3 = new Person("patrick", 18); 

console.log(p.showName) //undefined - something that is not exist
p.showName(); //here we try to invoke the undefined function - TypeError: p.showName is not a function

//declare prototype method in ES5
Person.prototype.showName = function(){
  console.log(`I am ${this.name}`)
}
console.log(p.showName === p2.showName) //true - prototype method
console.log(p.showName) //(){console.log(`I am ${this.name}`)}
p.showName()  //I am patrick


function Person(name,age){
    this.name = name;
    this.age = age;
    this.showName = function(){
      console.log(`I am ${this.name}`)
  }
}

console.log(p.showName === p2.showName) //false - different memory address as instance
console.log(p.showName) //(){console.log(`I am ${this.name}`)}
p.showName()  //I am patrick


//overriding vs overloading
//overriding
function foo(){
  console.log("hello")
}
function foo(msg){    //overriding the previous foo function
  console.log(msg)  //undefined
}
foo() //undefined

//overloading
function foo(msg){    //only takes first argument pass into the foo which takes only one parameter
  console.log(msg)  //1
  return "patrick"
}
function foo(msg, msg2){  //take the first 2 arguments
  console.log(arguments)  //[1, 2, "hello", ()=>{}]
  console.log(msg)  //1 2
  return "patrick"
}
foo(1, 2, "hello", ()=>{})  //"patrick"


//Homework
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
familiar with Standard Built-in JavaScript objects
- Array   //const arr = []  //forEach is prototype - iteration  //for..of - array value //for..in - property keys of an object
- Object
- Promise

let arr = [1, 2, 3];
console.log(typeof arr) //object
console.log(Array.isArray(arr)) //true
console.log(arr instanceof Array)  //true
 
