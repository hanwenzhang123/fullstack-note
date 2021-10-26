//inheritance - ES6 constructor function
class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName(){
    console.log(`I am ${this.name}`)
  }
}

class Employee extends Person{    //extends keyword for inherit from the parent class
  constructor(name, age, company) {
    super(name, age)    //super() works as helping you to invoke the parent function
    this.company = company;
  }
  showCompany(){
    console.log(`I am working at %{this.company}`)
  }
}

const e = new Employee("patrick", 18, "Antra Inc");
e.showName()  //I am patrick


//inheritance - ES5 - What really happens in JavaScript prototype
function Person(name, age) {
    this.name = name;   //this keyword inside the function depends on which invoke the function, you do not know this until you invoke it
    this.age = age;
}

Person.prototype.showName = function(){
  console.log(`I am ${this.name}`)
}

function Employee(name, age, company){    //bind call apply - control this in function, this depends on the which invoke the function
  Person.prototype.constructor.call(this, name, age);   //works as super() in ES6
  this.company = company    //assign this company to company
}

//JS is using prototype chain to do the inheritance - Object.create() create a new object, a new memory to avoid infinite loop
Employee.prototype = Object.create(Person.prototype)  //works as extends in ES6, extends the prototype from another function
console.log(Employee.prototype) //Person{}
Employee.prototype.constructor = Employee;    //still need to get the constructor back after creating the new object otherwise overriding
Employee.prototype.showCompany = function(){
    console.log(`I am working at ${this.company}`)
}
console.log(Employee.prototype) //Person{constructor: ƒ, showCompany: ƒ}
//object with constructor and something else (the function we created in the object)

const e = new Employee("patrick", 18, "Antra Inc");
e.showName()  //I am patrick


//Array
let arr = [1, 2, 3];  //[2, 4, 6]
function multiplyByTwo(arr){
  let res = [];
  arr.forEach((item, index) => {  //here forEach is the higher order function of the callback function
    res.push(item * 2)
  })  
  return res;
}
console.log(multiplyByTwo(arr)) //[2, 4, 6]

//callback -  function passed into another function as an argument
//higher order function - a function that accepts another function as an argument
function foo2() {}
function foo(callback) {}
foo(foo2)   //foo is higher order function while foo2 is the callback function


//use prototype to declare an Array method
let arr = [1, 2, 3];  //[2, 4, 6]
let arr2 = [2, 4, 6]; //[4, 8, 12]
Array.prototype.myforEach = function(callbackFn) { 
   return 5;    //does not matter what we return, forEach itself does not return anything
}
function multiplyByTwo(arr){
  let res = [];
  arr.myforEach((item, index) => {  //without the Array.prototype.myforEach above, it will be TypeError - it is not a function
    res.push(item * 2)
  })  
  return res;
}
console.log(multiplyByTwo(arr2)) //[]


//Build your own forEach function
let arr = [1, 2, 3];  //[2, 4, 6]
let arr2 = [2, 4, 6]; //[4, 8, 12]

let forEachResult = arr.forEach((item) => {item * 3})   //forEach returns undefined, you can use forEach to override the original array
console.log(forEachResult)  //undefined

Array.prototype.myforEach = function(callbackFn) {
   console.log("this", this)  //[2, 4, 6], this related to the array we pass in
   for (let i = 0; i < this.length; i++) {    //every() some() help you break the iteration, otherwise, you can not break the iteration
     callbackFn(this[i], i, this)   //item 2 index 0 array (3) [2, 4, 6]; item 4 index 1 array (3) [2, 4, 6]; item 6 index 2 array (3) [2, 4, 6]
   }
}
function multiplyByTwo(arr){
  let res = [];
  arr.myforEach((item, index, array) => { 
    console.log("item", item, "index", index, "array", array)
    res.push(item * 2)
  })  
  return res;
}
console.log(multiplyByTwo(arr2)) //[4, 8, 12]


// homework 
// filter | reduce | map | some | every 
// create your own methods using Array.prototype
 
