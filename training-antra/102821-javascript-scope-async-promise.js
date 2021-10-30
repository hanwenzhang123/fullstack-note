//setTimeout - we have two parameter, one is callback function, one is delayed time
function foo(){ //var - function scope
  for(var i = 0; i < 5; i++){
    setTimeout(()=>{
      console.log(i); //5 5 5 5 5 
    },i * 1000)   //print out each 5 every second 
  }
}
foo()


//var - function scope
function fun(){
  var i;    //var not re-declare below, but hoisted to the top
  for( var i = 0; i < 20; i++ ){   //var is function scope, because of hoisting, i will be hoisted to the top
   if(i===0){       //closure
     setTimeout(() => {   //asynchronous function in synchronous time
       console.log(i);    //20
     },0)
   }
  }
}
// when async, call stack needs to be clear first for callback queue to push to call stack

//let - block scope
function fun(){
  for( let i = 0; i < 20; i++ ){  //each iteration will be a new block
   if(i===0){  
     setTimeout(() => {  
       console.log(i);    //0
     },0)
   }
  }
}


//async
//relationship: composition - we are call a function inside another function, compose them together
//what if we need multiple compositions? how to solve: callback, but be careful of callback hell
function doSomething1() {
  console.log("doSomething1")
}
function doSomething2() {
  console.log("doSomething2")
}
function callAfter2Seconds(){
  setTimeout(() => {
    doSomething1()    //composition
  }, 2000)
}

//callback in async functions
function doSomething1() {
  console.log("doSomething1")
}
function doSomething2() {
  console.log("doSomething2")
}
function callAfter2Seconds(callback){
  setTimeout(() => {
    callback() 
  }, 2000)
}
callAfter2Seconds(doSomething1)  //using callAfter2Seconds as higher order function
console.log("hello")    //this line will be printout first
callAfter2Seconds(doSomething2) //doSomething1 and doSomething2 will be printout at the same time

//within a callback
callAfter2Seconds(() => {
  doSomething1()   //doSomething1 be printout first 
  callAfter2Seconds(doSomething2)  //doSomething2 will be printout after 2 seconds after doSomething1
})

//callback hell - do something after something after something after something
callAfter2Seconds(() => {
  dosomething(1);
  callAfter2Seconds(() => {
    dosomething(2);
    callAfter2Seconds(() => {
      dosomething(3)
      callAfter2Seconds(() => {
        dosomething(4)
      });
    });
  });
});


//promise - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//new keyword to initialize the Promise, Promise is a class, we create a new instance of the class with new keyword
//Promise will return the datatype object, .then datatype is a function
//what is in the Promise? a callback function
//what is the parameter for Promise? resolve, reject
//3 phrases: pending, fulfill, reject

let p = new Promise ((resolve, reject) => { //p is an instance of the class itself
  setTimeout(() => {    //before resolve, pending status - Promise {<pending>}
    resolve({name: "patrick"})    //resolve value will be passed to the .then()
  }, 3000);
})
console.log(p)  //Promise {<fulfilled>: 5}
p.then((value)=>{   //.then() takes a callback function
  console.log(value);   //{name: "patrick} - value is the argument of resolve
})


//create a class Promise
//what should we pass to the callback? resolve - resolve is the function
//Promise is sync, as well as .then() is sync which returns another Promise
//setTimeout is async
class MyPromise{
  constructor(callback){
    function resolve(){
      console.log("resolve this": this) //undefined - only 
      this.PromiseState = "fulfill"   //"this" inside the consturtoc - need bind
      console.log("resolve")
    }
    resolve = resolve.bind(this)  //bind this because this keyword is currently in different scope
    this.PromiseState = "pending"   //"this" outside of the constructor - need bind
    console.log("constructor this": this)   //constructor this points the which part is invoking "this"
    callback(resolve)   //declare a function inside a function
  }
    then(onFulfillmentFunc){    //when should we call onFulfillmentFunc? after resolve
    this.onFulfillmentFunc = onFulfillmentFunc
    if(this.PromiseState === "fulfill"){
      onFulfillmentFunc(this.value);
    }
  }    
}


//create MyPromise - complete
class MyPromise{
  constructor(callback){
    this.resolve = this.resolve.bind(this);   //different scope for "this" keyword
    this.PromiseState = "pending";
    cb(resolve)
  }
  
  resolve(value) {
    this.PromiseState = "fulfill"
    this.value = value; 
    if(this.onFulfillmentFunc){ //after resolve we should call onFulfillmentFunc
      const result = this.onFulfillmentFunc(this.value);  //reset this.value each time we call Promise (think of .then() chain)
      if (result instanceof Promise){   //check if it is the return value from the previous .then()
        result.then(data => {
         this.value = data 
        })
      } else {
        this.value = result
      }
    }
  }
  
  then(onFulfillmentFunc){    //.then() returns a new Promise
    this.onFulfillmentFunc = onFulfillmentFunc
    return this;  //this is the current instance
  }
}


//Promise - for testing just change Promise to MyPromise
console.log("before")
let p = new Promise((resolve, reject) => {    //promise run sync, new Promise - initialize the Promise
  console.log("hello");
  resolve("resolve value");
});
//   setTimeout(() => {
//     resolve({name: "patrick"})
//   }, 3000);
//  })
p.then((value) => {   //only after the successful resolve
  console.log(value);
  return 5    //whatever you return from value1 will convert to Promise and pass to next .then()
}).then((value2) => {     //promise chain
  console.log(value2);      //5
})
console.log("after")
//before hello after value: {name: "patrick"}
//before hello after resolve value
   



//Promise
//promise like making commitment to something with 2 result, completed (resolved) or failed (rejected)
//good for taking something takes longer proccess, so you can do something else at the same time

let p = new Promise((resolve, reject) => {  //defind what the promise means, like the content of your commitment
  let a = 1+1
  if (a == 2) {
    resolve("Success")
  } else {
    reject("Failed")
  }
})
p.then((message) => {   //.then() is going to run the result from the promise, takes a function
  console.log("this is the then " + message)
}).catch((message) -> { //if the promise rejected, catch the error
  console.log("this is the catch " + message)
})


//Promise.all() - run every promise in parallel at the same time, no needs to worry about waiting for one before the next
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

Promise.all([ //all running at the exactly same time, and whichever finishes first, needs to wait until all finish to call .then()
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {   //will return all the messaages
  console.log(messages)
})

Promise.race([    //just like Promise.all, but it will return when the first one completes, not all of the tasks
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {    //only return a single messaage whichever resolves the first
  console.log(message)
})
  
