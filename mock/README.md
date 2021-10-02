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
- [Backend](#Backend)
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
#### reverse string
```js
"i'm a lasagna hog".split("").reverse().join("");
//"goh angasal a m'i"
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
- `.forEach()`: Executes a callback for each element, Does not return a value.
- returns undefined, just iterate through the elements, does not modify the array (allow a callback function to mutate the current array).
```js
let arr = [1, 2, 3, 4, 5];
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});	// arr = [2, 4, 6, 8, 10]
```
- `.map()`: Calls the function on each element.
- returns a new array with the transformed elements, does not change the original array.
```js
let doubled = arr.map(num => {
    return num * 2;
});	// doubled = [2, 4, 6, 8, 10]
```

#### .slice() vs .splice()
- `.slice()` Doesn't modify the original array(immutable)	
- Returns the subset of original array	
- Used to pick the elements from array.
- `.splice()` Modifies the original array(mutable)
- Returns the deleted elements as array
- Used to insert or delete elements to/from array.

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
- Object Literals - `var object = {};`
- Object.create method - `var object = Object.create(null);`
- Object constructor - `var object = new Object();`
- function constructor and apply new operator to create object instances - `function Person(name){this.name=name;} var object = new Person("Sudheer");`
- Class - class Person {constructor(name) { this.name = name;} } var object = new Person("Sudheer");`

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
- if `Object.keys(obj).length` returns 0, object is null
 
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
- A reference to another object 
- Every function includes prototype object by default, and all the objects inherit the properties and methods from `Object.prototype`
- Objects created using the `new` keyword inherit from a prototype called `Object.prototype`.
- whenever we create a function，JS engine adds a prototype property inside a function
- Prototype property is an object, where we can attach methods and properties in a prototype object
- which enables all the other objects to inherit these methods and properties.

#### prototype chain
- Prototype chaining is used to build new types of objects based on existing ones. 
- If you try to call a property on an object, JavaScript will go to the prototype object and look for it, until it finds it. 
- If it doesn’t find the specific property that you’re looking for, it’ll return undefined for you. 
- Otherwise, it’ll return the specific property. 

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

#### API
- Application Programming Interface (API)
- a connection that allows two applications to talk to each other
- enabling applications to exchange data and functionality easily and securely
- Your Server -> Request through API -> Someone Else's Server -> Response through API -> Your Server

#### AJAX
- Asynchronous JavaScript And XML, making request behind the scene
- web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page
1. Read data from a web server - after a web page has loaded
2. Update a web page without reloading the page
3. Send data to a web server - in the background

#### JSON
- JavaScript Object Notation (JSON) - text-based format for representing structured data 
- commonly used for transmitting data across a network , `{}` object, `[]` array, "key" "value" pairs, seperated by `,`
- Client Browser -> Request GET -> Your Server -> Request through API (Path, Parameter) -> Someone Else's Server -> Response through API (DATA) -> Your Server -> Response POST -> Client Browser

`JSON.parse()` to convert the string into a JavaScript object
- `var obj = JSON.parse(jsonData);`

`JSON.stringify()` to convert a JavaScript object into a JSON string
- `const jsonData = JSON.stringify(obj);`

#### GET, POST, PUT, DELETE
- GET requests data from a specified resource
- POST sends data to a server to create a resource - "create new"
- PUT means "insert, replace if already exists" 
- DELETE deletes the specified resource.

#### Fetch API
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
```

Fetch Data from an API with React
- Create a React state variable to store data - useState()
- Make the API request and store the data - fetch data
- Render the returned data - useEffect()
```js
import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {		// we will use async/await to fetch this data
      const response = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await res.json();
      setBooks(data) ;		// store the data into our books variable
    }
  }, []); // <- you may need to put the setBooks function in this array

return (
  <div>
    <h1>Game of Thrones Books</h1>
    {books && (		{/* display books from the API */}
      <div className="books">
        {books.map((book, index) => (	 {/* loop over the books */}
          <div key={index}>
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>
    )}
  </div>
)
}
```

[[↑] Back to top](#table-of-contents)

## Backend

#### Client-Side Rendering vs Server-Side Rendering
- Client-side rendering manages the routing dynamically without refreshing the page every time a user requests a different route. 
- Your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it. 
- React uses client-side rendering.

- Server-side rendering when a user makes a request to a webpage, 
- the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. 
- The browser then construes the content and displays the page.

#### Combining Frontend Code with Backend Code or SQL
1. Setting up the database. 
2. Setting up the server. 
3. Setting up the routing. 
4. Adding data to the database. 
5. Getting data from the database. 
6. Updating data on the database.

1. Step 1: Create your Node (Express) backend
2. Step 2: Create an API Endpoint
3. Step 3: Create your React frontend
4. Step 4: Make HTTP Requests from React to Node

#### What is SQL Injection
- a code injection technique that might destroy your database (used with the goal of retrieving sensitive data)
- one of the most common web hacking techniques, it is the placement of malicious code in SQL statements via web page input.

#### How to Prevent SQL Injection Attacks
- stolen credit cards or password lists, happen through SQL injection vulnerabilities
- approach: controlling and vetting user input to watch for attack patterns
- input validation
- sanitize data by limiting special characters
- enforce prepared statements and parameterization
- use stored procedures in the database
- actively manage patches and updates
- web application firewall, raise virtual or physical firewalls

[[↑] Back to top](#table-of-contents)

## Miscellaneous

#### React 18 New Features
- Concurrency control with the Transition API,
- Automatic Batching of function calls and events to improve in-app performance, and.
- Much faster page loads for SSR with Suspense.

#### How to Share Components with Others?
shared component architecture
-  how to develop components independently but avoid the overhead of too many repositories
-  how to version, publish and manage each component individually
-  how to help others discover and adopt the components

build, distribute and collaborate over components to build multiple projects and applications
- Bit + Bit.dev - develop, build and test individual components in the library in complete isolation - https://github.com/teambit/bit 
- When you update a single components, Bit “knows” which other components depend on it, and help you update all the component that are impacted by the update.
- Lerna - manage multi-repository structure inside a single repository - https://github.com/lerna/lerna
- Multiple packages - create new Git repo for every piece of code you want to reuse
- A Single library package for many components - put a few dozen shared components in a single repo

#### What is Micro-service Architecture?
- focus on building individual services that do one thing and one thing well
- splits large applications into much smaller pieces that exist independently of each other.
- a flexible and efficient approach to designing software systems that are made up of small independent services that each have a specific and well-defined purpose.
- consider => what goes into building, deploying, and updating an enterprise application => and break that work into more manageable, efficient batches.

#### Object Oriented Programming vs Functional Programming
Functional Programming
- attempts to avoid changing state and mutable data (immutable data structure)
- the output of a function should always be the same given the same exact inputs to the function, relies on arguments of the function

Object Oriented Programming
- Group related variables and functions in a unit called objects
- Using objects to represent things you are programming about, variable as properties, function as methods
- The objects hold data about them in attributes which objects are manipulated through methods that are given to the object.

4 Pillars in OOP: Encapsulation, Abstraction, Inheritance, Polymorphism
- Encapsulation is the ability to hide variables within the class from outside access
- Abstraction shows only essential attributes and hides unnecessary information -> hiding the unnecessary details from the users
- Inheritance reduces redundant code `class Teacher extends Person { constructor(subject, grade) { super(); this.subject = subject; this.grade = grade; } }`
- Polymorphism means a single action can be performed in many forms, get rid of if else and switch, use `element.render()`

Benefits of OOP
- Encapsulation: reduce complexity + increase reusibility
- Abstraction: reduce complexity + isolate impacts of change
- Inheritance: elimate redundant code
- Polymorphism: refactor ugly switch case statement

#### The Different Kind of Frontend Frameworks, Advantage, Limitation
Pros
- easy and quick to get started
- component based reusibility
- good looking consistent UI design 
- code is reliable and tested
- help from strong community

Cons
- updates can introduce issues
- easy to get started, but require more time down the road to add features and customizations. 

- React data flows only in one way and is easy to debug.
- Angular data flows both ways and hence debugging is often difficult.
- It is different from angular,vue. The react alway passes the data to view, and to update the view, you need to use a callback to update it.


[[↑] Back to top](#table-of-contents)

## Performance

#### How do you generally improve performance?
- use uglify and minify to reduce the bundle size
- use content delivery network to improve the loading speed.
- `React.lazy` and `React.suspense` support lazy loading with webpack.
- use lazy loading to improve the page loading speed.
- use shouldComponentUpdate to improve the component’s rendering performance

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
- provide similar functionality as webpack: Gulp, Grunt, babel, parcel, browserify, npm, and requireJS.

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
- Load certain part of the comp tree only when its in use
- Split your code at logical breakpoints, and then loading it once the user has done something that requires a new block of code. 
- components inside, we can wrap the comp with lazy load to delay the loading and improve performance

#### Minification - Minifier/uglifier 
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

#### Different Kinds of Tests
- unit testing - test individual building blocks in isolation
- integration testing - test the combination of multiple building blocks
- end to end (e2e) test - test complete scenarios in your app as the user would experience them

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
  
