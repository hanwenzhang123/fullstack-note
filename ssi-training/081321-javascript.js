New Features of ES6
1. let const vs var //(let const - scope to the block) (var - value hoisting - put things on the top, scope to the function)
2. arrow function // does not have "this", "arguments"
3. template literal - //`..${}..`
4. default params
5. destructuring
6. spreading (...) /rest (...rest)
7. promises (Event loop, task scheduling)
//Closure - frequent question
//"this" in JS
8. class syntax


//Closure - a function retired by another function that still has access to its outer scope variable
function makeCounter(){
    let count = 0;      //value by the function will be saved as it will be needed by the inner function, not for garbage collection
                        //private variable for keeping data private and safe, like a secret key, only expose inner function but not the private secrete variable
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

//Stale Closure - React Hooks


//"This" in JS
//Functionality: lexical scoping with “this” keyword
//the key word "this" behaves differently in arrow functions compared to a regular function.
The “this” keyword refers to the object that the function is a property of. 
The value of “this” keyword will always depend on the object that is invoking the function.

//Lexical Scope
//Lexical Scope allows inner functions to access the scope of their outer functions, but not the other way around
//In a nested group of functions, the inner functions have access to the variables and other resources of their parent scope.
//the child's functions are lexically bound to the execution context of their parents.

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

person.fullName() //"this" refers to the left to the '.' here is the person


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

//NodeJS - point to the module.exports
console.log(this)   //this -> export module -> {}
module.exports.global="global scope";
console.log(this)   //{global: "global scope"}


//3. this IN event, this -> HTML element that received the event
<button onClick="this.style.display"="none">
    click to remove me!
</button>


// we CAN use "this" in arrow function
// this in function, this belongs to function
// "this" in arrow function, "this" DOES NOT belong to arrFunc, it is outside of the arrFunc 


//This Challenges
//name = 'A';
var obj = {
    name: "B",
    prop: {
        name: "C",
        getName: function() {
            return this.name       
        }
    }
};

const test = obj.prop.getName;      //assigning method to a variable
console.log(test());    //undefined      //test is a function
console.log(obj.prop.getName());    //"C" it will return the object owner itself


var obj = {
    name: "B",
    prop: {
        name: "C",
        getName: () => {
            return this.name       
        }
    }
};
console.log(obj.prop.getName());    //undefined
obj.getName = obj.prop.getName;
console.log(getName()); //undefined


var obj = {
    name: "B",
    prop: {
        name: "C",
        getName: () => {
            return this      
        }
    }
};
console.log(this)           //Window, {} -> this is for the outer scope, inner ones are not valid but the whole global scope
console.log(obj.prop.getName());    //Window, {} -> because NodeJS


var obj = {
    name: "B",
    prop: function () {
        return {
            name: "C",
            getName: () => {
                return this.name
            }
        }
    }
};
console.log(obj.prop().getName())   //"B" 


var obj = {
    name: "B",
    prop: {
        name: "C",
        getName: function() {
            return this.name       
        }
    }
    //implicit
//     getName: function() {
//         return this.name
//     }
};
console.log(obj.prop.getName());    //C
obj.getName = obj.prop.getName;


//7. Promise(Event-loop, task scheduling)
// use promise to handle async operation
// JS is a single-threaded language
//new feature of ES6 -> avoid callback hell - a chained nested code
//3 phrases -> pending, fulfilled, rejected

const myPro = new Promise((resolve, reject) => {    //you can change the name
    //fetching data... pending
    resolve(data);      //once resolved, rest of the part will the stopped
    reject(error);
})
//***only after the main thread is done - output order
//you do not have to chain .then() right after, you can write other codes in between
.then(  //then we do something, will return another promise
    // fullfilled
    (data) => massageMyData(data),
    // rejected
    (err) => {console.log("log", err)},
) 
//will return another promise so we can chain more then()
.then (formattedData) => {    //returned massageMyData will be saved here
    //save the formattedData to DB
})
.then()


//setTimeout
//delay the time for later to be executed
//etTimeout(callback, delay, [optionalParams])
setTimeOut(()=>console.log(123), 2000);
    
const myPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("GOT the data!");
  }, 2000);
})
// only after the main thread is done
  .then(res => console.log(`The Data is -> ${res}`))    //The Data is -> GOT THE DATA!
        

setTimeout(() => console.log("IMA setTimeout!"))    //macrotask
console.log("Main Thread"); //main thread - print out first
    

//main thread > micro > macro
setTimeout(() => console.log('IMA setTimeout!'));     //macrotask
const myPro = new Promise((resolve, reject) => {     //microtask
  resolve("IM DATA")
})
//only after the main thread
  .then( res => res + "from Michael" )
  .then( data => console.log(data) )

console.log("Main Thread"); // main thread


//Event Loop
    
    
