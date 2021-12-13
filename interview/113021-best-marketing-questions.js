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

8. Event Propagation - Bubbling and Capture
<!DOCTYPE html>
<html>
  <body>
    <div id="bubbleDiv">
      <h2>Bubble event propagation</h2>
      <ul id="bubbleList">
        <li id="bubbleItem"><a id="bubbleLink">Bubble Item</a></li>
      </ul>
    </div>
    <div id="captureDiv">
      <h2>Capture event propagation</h2>
      <ul id="captureList">
        <li id="captureItem"><a id="capttureLink">Capture Item</a></li>
      </ul>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>

function showElement(){
  alert(this.id);
}
let el;
//bubble listeners - (buttom to top)
el = document.getElementById("bubbleList");
el.addEventListener("click", showElement, false)
el = document.getElementById("bubbleItem");
el.addEventListener("click", showElement, false)
el = document.getElementById("bubbleLink");
el.addEventListener("click", showElement, false)
//capture listeners (top to buttom)
el = document.getElementById("captureList");
el.addEventListener("click", showElement, true)
el = document.getElementById("captureItem");
el.addEventListener("click", showElement, true)
el = document.getElementById("captureLink");
el.addEventListener("click", showElement, true)

//Answer: bubbleLink, bubbleItem, bubbleList; captureList, captureItem, captureLink

9. addEventListener
<html>
  <body>
  <div id="page">
    <h2> Event Listener Test </h2>
    <ul>
      <li id="item1">Item1 - event listener with function spec</li>
      <li id="item2">Item2 - event listener with anonymous function</li>
    </ul>
  </div>
  <!-- reference to JavaScript code below via script tag -->
  </body>
<html>
        
var item1El = document.getElementById("item1");
var item2El = document.getElementById("item2");

function showMsg(e) {
  alert(this.id + ": " + this.textContent);
}

item1El.addEventListener("click", showMsg, false);
item2El.addEventListener("click", function(e) {   //TypeError: Cannot read properties of undefined (reading 'id')
  showMsg(e);
}, false);

//Answer: item1 click displays alert: "Item1 - event listener with function spec".
//item2 click causes error since anaymous function are not supported in AddEventListener call.

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
    console.log(this);    //print out the object that "this" is a property of (left side to the .)
  }
  nestedArrowFullName() {
    //test this reference in arow function within regular function
    const fullName = () => this.lastName + ", " + this.firstName;
    return fullName()
  }
}
const pWilliam = new Person("William", "Shakespear");
const pMarie = new Person("Marie", "Shakespear");
const bindFn = topFullName.bind(pMarie);  //will be executed when we call it

//Access function in multiple ways
console.log(topFullName() + "; " + topFullName.call(pWilliam) + "; " + bindFn() + "; " + pWilliam.nestedArrowFullName.call(pMarie));  //what inside .call() will be the object property

console.log(topFullName()) //undefined, undefined
console.log(topFullName.call(pWilliam)) //Shakespear, William
console.log(bindFn()) //Shakespear, Marie
console.log(pWilliam.nestedArrowFullName()) //Shakespear, William
console.log(pWilliam.nestedArrowFullName.call(pMarie))  //Shakespear, Marie

//Answer: undefined, undefined; Shakespear, William; Shakespear, Marie; Shakespear, Marie

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
 
