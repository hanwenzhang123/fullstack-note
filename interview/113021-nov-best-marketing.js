11/1 Kevin
Q1
Q2
Q3 prefer function or class component
Q4 TypeScript exp? What do you use it for? How do you like using it?
Q5 Event loop, setTimeout(0)?
Q6 configuring SPA, what’s code splitting? What’s it good for?

11/02 Doug
- Self intro
- More full stack backend or frontend?
- Introduce your project
- Redux mechanism?
- React lifecycle hooks
- Is react the only framework you used in previous projects
- RestFUL API call vs web socket vs long polling
- Project you worked on that makes you excited, the project you enjoyed most
- Any new technologies and upcoming technologies you know about, excited about?
- How much experience with stylesheets, CSS, or libraries like bootstrap?

11/22 Kevin
- Setter and getter, why use them
Getters and setters, also known as accessors and mutators, are used to protect your data,  particularly when creating classes. 
For each instance variable, a getter method returns its value while a setter method sets or updates its value. 

- Arrow function vs regular function

- Deep clone & shallow clone

- Write your own code of deep clone:
function copy(obj) { 
  if (!obj) { 
    return obj; 
  } 
  let v; 
  let res = Array.isArray(obj) ? [] : {};   //check if it is array
  for (const k in obj) { 
    v = obj[k];   //iterate each item in object, and store to v
    res[k] = (typeof v === "object") ? copy(v) : v;   //recursion, if v is object then copy(v), stores in res[k]
  } 
return res; 
}
const a = {a: [1,2,3]};
const b = copy(a);
console.log(JSON.stringify(a) === JSON.stringify(b)); // true
console.log(a === b); // false


//Coding Exercises
1. ES6 Operations
const testFn = (...args) => args.map((arg) => `arg: ${arg}`);
console.log(testFn (1, 2, "foo", "bar"));
console.log(testFn ());
//Answer: ['arg: 1', 'arg: 2', 'arg: foo', 'arg: bar'][]

2. Arrays
var counter = 0;
var myArray = ["California", 2, {handle: "state"}, ["Alabama", "Georgia", "Alaska"]];
for (var i = 0; i < myArray.length; i ++) {
  counter++;
}
console.log(counter);
//Answer: 4

3. ES6 Operations Spread Destructuring
const flight1 = {
  id: "UA2509",
  from: "San Francisco",
  to: "Chicago",
  startTime: "8:45am"
}
const flight2 = {
  id: "UA2510",
  from: "San Francisco",
  to: "Miami",
  startTime: "9:45am"
}
const flights = [flight1, flight2];
const delayedFlights = [...flights];

[delayedFlight1] = delayedFlights;
delayedFlight1.startTime = "9:00am" //flight1 delayed

let delayedFlight2 = {...delayedFlights[1]};
delayedFlight2.startTime = "10:30am"  //flight2 delayed

//ok so what are the final flight time?
console.log(`flight1 start time: ${flight1.startTime}, flight2 start time: ${flight2.startTime} `)

//Answer: flight1 start time: 9:00am, flight2 start time: 9:45am 

4. DOM
...
<head>
<script>
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Hello World!")
});
</script>
</head>
<body>
...
<h1>Hello!</h1>
</body>
</html>

//Answer: It will never output Hello World!
//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

5. Object Instantiation
//funcObject - object instantiation & this tests
let Circle = function (radius) {
  this.radius = radius;
  this.getArea = function() {
    return Math.PI*Math.pow(this.radius, 2);
  }
}
//Note: new in call - the new operator creates an instance of object that has a constructor created for the first time
let myCircleNew = new Circle(5); //area - 78.5 for radius 5
console.log("myCircleNew... logs");
console.log(myCircleNew.getArea()); //78.53981633974483

//Note: no new in call - no good
let myCircleDirectCall = Circle(10); //area - 314.16 for radius 10
console.log("myCircleDirectCall... logs");
console.log(myCircleDirectCall.getArea()); //Uncaught TypeError: Cannot read properties of undefined (reading 'getArea')

//Answer: myCircleNew.getArea() returns 78.5, myCircleDirectCall.getArea() fails with error

6. This references: Functions in nested Object
let getAllWidths = function() {
  var width = 100;
  function getWidth() { //getWidth() - this has nothing to refer to
    return this.width;
  }
  var topObject = {
    width: 150,
    topObjectWidth: getWidth,   //topObject.topObjectWidth() - this reference to the object that the function is a property of (left .)
    nestedObject: {
      width: 200,
      nestedObjectWidth: getWidth   //topObject.nestedObject.nestedObjectWidth() - this reference to the object that the function is a property of (left .)
    }
  }
  return getWidth() + " " + topObject.topObjectWidth() + " " + topObject.nestedObject.nestedObjectWidth();
}
console.log(getAllWidths());

//Answer: undefined 150 200

7. Object Literal and Closures
//objLiteral and closures
let myLiteralObj = {
  age: 20,
  setAge: (newAge) => {
    this.age = newAge;
  },
  getAge: () => this.age,
  getSeniorStatusThroDirectAccess: function () {
   if(this.age > 55) //note direct attribute access
     return "Senior";
   else
     return ("Not Senior")
  },
  getSeniorStatusThroGetter: function () {
   if(this.getAge() > 55) //note access via getter
     return "Senior";
   else
     return ("Not Senior")
  },
}
myLiteralObj.setAge(57); //we set the age through setter for data protection
console.log("DirectAccess: " + myLiteralObj.getSeniorStatusThroDirectAccess());
console.log("Through Getter: " + myLiteralObj.getSeniorStatusThroGetter());

//Answer: Output is "DirectAccess: Not Senior" followed by "Through Getter: Senior"

8.

//Answer: 

9.

//Answer: 

10. This references: Bind, Call, Arrow Functions
function topFullName() {
  return this.lastName + ", " + this.firstName;
}
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = topFullName;
  }
  printThis() {
    console.log(this);
  }
  nestedArrowFullName() {
    //test this reference in arow function within regular function
    const fullName = () => this.lastName + ", " + this.firstName;
    return fullName()
  }
}
const pWilliam = new Person("William", "Shakespear");
const pMarie = new Person("Marie", "Shakespear");
const bindFn = topFullName.bind(pMarie);

//Access function in multiple ways
console.log(topFullName() + "; " + topFullName.call(pWilliam) + "; " + bindFn() + "; " + pWilliam.nestedArrowFullName.call(pMarie));

//Answer: 


11. Promises and Then: Timing
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(0).then(()=>console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1);

//Answer: 1234
//main thread (console.log) > micro (promise, async/await-pauses) > macro (timeout, interval)

12. setTimeout and Promise throw error
function timeoutPromise(ms) {
  return new Promise((resolve) => {
    console.log("Creating promise for " + ms + " ms call");
    setTimeout(() => {
      resolve(ms);
      console.log("Promise resolved in setTimeout in " + ms + " ms");
    }, ms);
  })
}
timeoutPromise(1000)
.then((ms) => {
  console.log("In the beginning of then block")
  throw "forcing error in then block";
  console.log("At end of then block")
})
.catch((error) => console.log(error))
.finally(() => console.log("in finally section"));

//Answer: Creating promise for 1000 ms call, Promise resolved in setTimeout in 1000 ms, In the beginning of then block, forcing error in then block (catch error), in finally section

13. setTimeout and Async Await
function timeoutPromise(ms) {
  return new Promise((resolve) => {
    console.log("Creating promise for " + ms + " ms call");
    setTimeout(() => {
      resolve(ms);
      console.log("Promise resolved in setTimeout in " + ms + " ms");
    }, ms);
  })
}
async function timeoutTest(){
  const promise2000 = timeoutPromise(2000);
  const promise1000 = timeoutPromise(1000);
  
  await promise2000;
  await promise1000;
}
timeoutTest();

//Answer: Creating promise for 2000 ms call, Creating promise for 1000 ms call, Promise resolved in setTimeout in 1000 ms, Promise resolved in setTimeout in 2000 ms 

14. Function definition & invocation
foo = 1;
(function(){
  foo = 2;
})();
var x = function(){
  foo = 3
};
(function(){
  foo=4;
})();
console.log(foo)

//Answer: 4

15. This references: Functions & Arrow Functions in nested object
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function(){
    return this.lastName + ", " + this.firstName;   //John Doe
  },
  arrowFullName: () => this.lastName + ", " + this.firstName,   //undefined, undefined (arrow function does not have its own this)
  printThis: function(){
    console.log(this);  //the person object
  },
  nestedArrowFullName: function() {
    //Test this reference in arrow function within regular function
    const nestedArrowFn = () => this.lastName + ", " + this.firstName;  //John Doe
    return nestedArrowFn();
  },
}

console.log("fullName(): " + person.fullName());
console.log("arrowFullName(): " + person.arrowFullName());
console.log("nestedArrowFullName(): " + person.nestedArrowFullName());

//Answer: fullName(): Doe John, arrowFullName(): undefined, undefined, nestedArrowFullName(): John Doe
