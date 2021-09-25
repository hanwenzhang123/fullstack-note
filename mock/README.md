---
title: SSI-Training-Note (Part2)
---

## SSI-Training-Note (Part1)
https://github.com/hanwenzhang123/SSI-training-note/blob/main/README.md

## SSI-Training-Note (Part3)
https://github.com/hanwenzhang123/SSI-training-note/blob/main/react-redux-code/README.md

## Table of Contents
- [String](#String)
- [Array](#Array)
- [Object](#Object)
- [Class](#Class)
- [API](#API)
- [Miscellaneous](#miscellaneous)
- [Performance](#performance)
- [Testing](#testing)

## String

#### String Methods
```js
.split() - splits a string into an array of substrings, and returns the new array - string.split(separator, limit)
.slice() - extracts parts of a string and returns the extracted parts in a new string - string.slice(start, end)
.replace() - returns a new string where the specified values are replaced - string.replace(searchvalue, newvalue)
.substring() - extracts characters between "start" and "end", not including "end"
.includes() - case sensitive, returns true if a string contains a specified string, otherwise false.
.startsWith() - returns true if a string begins with a specified string, otherwise false.
.trim() - removes whitespace from both sides of a string.
string.length - The length property returns the length of a string.
```

[[↑] Back to top](#table-of-contents)

## Array

#### Array Methods
```js
.push() method - add something to the end of the array
.pop() method - remove and return the most recently added items to the array
.shift() method - 'pop' something from the beginning
.unshift() method - add to beginning of the array
.indexOf() method - the index method of the element, returns '-1' if no element matches
.includes() method - boolean value, check if a value is in array
.reverse() method - does not make a new copy but the array itself, not return anything, reverse in place
.join() - specify what you would like to join in between of each element in the arrary
.concat() - return one array with all values as element
.filter() - creates a new array with all elements that pass the test
.forEach() - executes a provided function once for each array element (just iterate through it)
.map() - returns a new array with the transformed elements, does not change the original array.
.slice() - subtract a portion of the array, like a big sandwich cutting the portion, it creates a new array
.splice(start, deleteCount, items) - removing or replacing existing elements, it returns a new array with removed elements
arr.length = 0 - empty the array
```
#### Remove Elements
- `.pop()` - Removes from the End of an Array
- `.shift()` - Removes from the beginning of an Array
- `.splice()` - removes from a specific Array index
- `.filter()` - allows you to programatically remove elements from an Array

#### Add Elements
- `.push()` - adds new items to the end of an array
- `.unshift()` - adds to beginning of the array
- `.arr.splice(index, 0, item)`;

#### Check if it is an array
`Array.isArray()` -  return boolean, check whether an object (or a variable) is an array or not. 

#### .map() vs .forEach()
- `.forEach()`: returns undefined, does not modify the array, it just iterates over it (allow a callback function to mutate the current array).
```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
// arr = [2, 4, 6, 8, 10]
```
- `.map()`: returns a new array with the transformed elements, does not change the original array.
```js
let doubled = arr.map(num => {
    return num * 2;
});
// doubled = [2, 4, 6, 8, 10]
```

#### Empty an array in JavaScript
```js
//1. Assign it to an empty array
   var array1 = [1,2,3,4,5,6,7];  // Created array
   var anotherArray = array1;     // Referenced array1 by another variable
   array1 = [];                   // Empty the array
   document.write(anotherArray);  // Output [1,2,3,4,5,6,7]

//2. Set its length to 0
   var array1 = [1,2,3,4,5,6,7]; // Created array
   var anotherArray = array1; // Referenced array1 by another variable
   array1.length = 0; // Empty the array by setting length to 0
   console.log(anotherArray); // Output []
   
//3. Use Array.prototype.splice() - splice(start, deleteCount)
   var array1 = [1,2,3,4,5,6,7]; // Created array
   var anotherArray = array1; // Referenced array1 by another variable
   array1.splice(0, array1.length); // Empty the array by setting length to 0
   console.log(anotherArray); // Output []

//4. Use Array.prototype.pop()
while(a.length > 0) {
    a.pop();
}
```

#### Math in Array
javascript array does not have Math Method - it expects distinct variables
```js
Math.max(1, 2, 3)    // 3
Math.min(1, 2, 3)    // 1
const nums = [1, 2, 3]
Math.min(nums)    // NaN
Math.max(nums)    // NaN

//apply()
var nums = [1, 2, 3]
Math.min.apply(Math, nums)    // 1
Math.max.apply(Math, nums)    // 3
Math.min.apply(null, nums)    // 1    //this assigns to null
Math.max.apply(null, nums)    // 3

//destructuring
const nums = [1, 2, 3]
Math.min(...nums)    // 1
Math.max(...nums)    // 3
```

[[↑] Back to top](#table-of-contents)

## Object

#### Object Methods
https://medium.com/youstart-labs/javascript-object-methods-every-developer-should-know-c68c132a658
```js
Object.keys() - Returns an array containing the names of all of the given object's own enumerable string properties.
Object.values() - Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
Object.entries() - Returns an array containing all of the key value pairs of a given object's own enumerable string properties.
Object.create() - creates a new object using an existing object as the prototype of the newly created object `let createObj = Object.create(obj)`
Object.freeze() -  freezes the object for any further changes (key or values) `let frozenObject = Object.freeze(person)`
Object.prototype.hasOwnProperty() - returns a boolean indicating whether the object has the specified property as its own property.
Object.assign() - shallow copy - `Object.assign({}, obj)`
JSON.parse() & JSON.stringify() - deep copy
```

#### 4 ways to create an object:
https://dzone.com/articles/easy-javascript-part-13-four-ways-to-create-object
- Object Literals
- New operator or constructor
- Object.create method
- Class

#### 3 ways to clone objects:
- Spread Operator - `{ ...food }`
- Object.assign - `Object.assign({}, food)`
- JSON - `JSON.parse(JSON.stringify(food))`

#### Check if it is an object
`typeof yourVariable === 'object'`

#### Different between for...in and for...of
- for...in, use it over Object (key: value) - enumerable property 
- for...of, ES6, use it over Array - iterable items

#### Accessing value from object
```js
const obj = { x:1 };
console.log(obj.x);  //1
console.log(obj["x"])  //1

const obj = { "you what":1 }; //with space
console.log(obj["you what"])  //1
```

#### Check if JavaScript Object is empty
```js
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
```

#### Clear a JavaScript Object
```js
for (const prop of Object.getOwnPropertyNames(obj)) {
  delete obj[prop];
}
```
```js
function emptyObject(obj) {
  Object.keys(obj).forEach(k => delete obj[k])
}
```

[[↑] Back to top](#table-of-contents)

## Class

#### check if the type of an object at run time. 
`object instanceof constructor` -  return boolean

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);	// true
console.log(auto instanceof Object);	// true
```

#### what is prototype
- an object that is associated with every functions and objects by default 
- the mechanism by which JavaScript objects inherit features from one another.
- All JavaScript objects inherit properties and methods from a prototype.
- Where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. 
- Every function includes prototype object by default.

#### prototype chain
- All the objects inherit the properties and methods from `Object.prototype`.
- Objects created using the `new` keyword inherit from a prototype called `Object.prototype`.

#### `new` keyword
- The `new` operator to create an instance of the class based on the prototype. 
- `new` makes the this variable point to the newly created object.
- it instantiates a class by allocating memory for a new object and returning a reference to that memory.

#### ES6 Class Syntax
```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

let user = new User("John");
user.sayHi();
```

[[↑] Back to top](#table-of-contents)

## API

#### Do you know AJAX, JavaScript and JSON

#### GET, POST, PUT, DELETE
- GET requests data from a specified resource
- POST sends data to a server to create a resource - "create new"
- PUT means "insert, replace if already exists" 
- DELETE deletes the specified resource.

#### Client-Side Rendering vs Server-Side Rendering

#### Object Oriented Programming vs Functional Programming

#### Object Oriented Programing vs Processing Programing

#### Combining frontend code with backend code or SQL

#### What is SQL Injection and how do you avoid it?

[[↑] Back to top](#table-of-contents)

## Miscellaneous

#### React 18 New Features
- Concurrency control with the Transition API,
- Automatic Batching of function calls and events to improve in-app performance, and.
- Much faster page loads for SSR with Suspense.

#### how to share components with others or other teams

#### if two projects/fields using same components in the same library, how to design and use it with other teams

#### What's difference between element and components in React

#### how to see the different kind of front-end frameworks, the advantage/limitation

[[↑] Back to top](#table-of-contents)

## Performance

#### How do you generally improve performance?
React
  -HOC
  -memo/PureComponent (shouldComponentUpdate) - lifecycle
  -reduce unnecessary re-rendering
  
Redux
  -Thunk
  -Re-selector
  
JS
  -Event Delegation (allows you to avoid adding event listeners to specific nodes)
  
CSS
  -Animation
  -image-sprite (reduce requests)
  -image compression
  
HTML
  -Empty HTML
  -Style on the top, script down/defer/async

#### Webpack 
- A module bundler for front-end dev applications -> bundle your styles
- Webpack gives you control over how to treat different assets it encounters
- Webpack recursively builds every module in your application, then packs all those modules into a small number of bundles.
- Similar bundler: Gulp or Grunt task runners

HMR(Hot Module Replacement)
- Update the page directly without a fully page reload - more efficient dev environment and will not loss the current state

Tree Shaking
- Get rid of unnecessary code
```js
if (false) {console.log ("Never Reached")}    //dead code elimination
const c = x + 1;
return c;   //=> return x+1
```

Code Splitting
- Split your modules properly according to the dependency graph

Lazy Loading
- Split your code at logical breakpoints, and then loading it once the user has done something that requires a new block of code. 


####  Minification - Minifier/uglifier 
- make your code prettier, make it more efficient during compiling phase
- remove unnecessary code 
- rename to a more efficient version for machine
- save time onloading

```js
  const aaaaa=1;
  console.log (aaaaa);
  // ===>
  const a=1; console.log(a)
```

#### loadsh
Debounce and throttle are techniques to control how many times we allow a function to be executed over time 
- debounce -> search bar (auto-complete)
- throttle -> scrolling / resizing page
- debounce / throtte -> web performance improvement -> control the number of times the function will be called

debounce 
- setTimeout
- like a search bar, you enter text, once yoou finish, wait for the timer done, it will send the request only one time to UI after the time period
- like we post comments everytime triggers a hard delay, then reset the timer to 100 again
- “group” multiple sequential calls in a single one.

```js
func fetchAPI ... const debouncedFunc = _.debounce(fetchAPI, 100) //shorter than a 100
onUserInput => {
  debouncedFunc()
}
```

throtte 
- setInterval
- like resizing page, you send requests to the UI with a timer interval, will be sent no matter how many requests within the time period
- like comments triggers 100 for the entire cycle 
- `_.throttle(fetchAPI, 100)`;

[[↑] Back to top](#table-of-contents)

## Testing

#### Have you done Unit Test?  
Yes, doing unit testing to ensure correctness of any codebase. 

#### What do you use for Unit Test?
Jest
- JS helper functions (logic helper)
- `x => x+1` -> pure function
- test any side effect `x => x+1`
	
Enzyme: 
- component test

#### Jest - Snapshot Testing
- useful tool whenever you want to make sure your UI does not change unexpectedly
- A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test.
- The test will fail if the two snapshots do not match

#### What is the coverage? 
How complete your unit test cover all the code
- 90% coverage (out of 100 lines, at least 90 lines are ran)

#### Unit Test File Example
- button.js
- button.test.js
- npm run test *.test.js

[[↑] Back to top](#table-of-contents)
 

