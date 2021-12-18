---
title: Frontend Miscellaneous (Note Part3)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## Boilerplate Code (Note Part4)
https://github.com/hanwenzhang123/frontend-note/blob/main/04-note/README.md

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
.split() - splits a string into an array of substrings, and returns the new array - `string.split(separator, limit)`
.slice() - extracts parts of a string and returns the extracted parts in a new string - `string.slice(start, end)`
.replace() - returns a new string where the specified values are replaced, case sensitive - `string.replace(searchvalue, newvalue)`
.substr() - returns a portion of the string, extracts length characters from a str, counting from the start index - `substr(start, length)`
.substring() - extracts characters between "start" and "end", not including "end" - `substring(indexStart, indexEnd)`
.includes() - case sensitive, returns true if a string contains a specified string, otherwise false.
.startsWith() - returns true if a string begins with a specified string, otherwise false.
.trim() - removes whitespace from both sides of a string.
string.length - The length property returns the length of a string.
```
#### Reverse String
```js
"i'm a lasagna hog".split("").reverse().join("");
//"goh angasal a m'i"
```

#### Remove Repeat Characters
```js
"Hello World".split('').filter((word, index, string) => string.indexOf(word) === index).join("")
```

#### Sentence Capitalization
```js
name.charAt(0).toUpperCase() + name.slice(1)
```
```js
function capitalize(str) {
  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
```

#### Sorting
- `x.sort(function(a, b){return a - b});` -> numeric sort
- `x.sort(function(a, b){return b - a});` -> numeric descending sort
- `x.sort(function(a, b){return 0.5 - Math.random()});` -> random order sort

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
.substr(start,length) - if you know the length of characters to be extracted 
.substring(start,end) - if you know the index(the position) on which you'll stop (but NOT include)
.slice(start,end) - subtract a portion of the array, like a big sandwich cutting the portion, it creates a new array
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

#### Eliminate duplicate item in Array
- `const uniqueNames = Array.from(new Set(names));` Array.from() returns an Array object, Set returns a collection of unique items
- `const uniqueNames = names.filter((elem, pos) => names.indexOf(elem) == pos);`

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

#### Check Array Overlapping
```js
const filteredArray = array1.filter(value => array2.includes(value));

var filteredArray = array1.filter(function(n) {
    return array2.indexOf(n) !== -1;
});
```

#### Check Object Array Overlapping
```js
let deleting = array1.filter(
    item1 =>
      !array2.some(item2 => {
        return (
          item2.value === item1.value &&
          item2.selected === item1.selected
        );
      })
  );

  if (deleting.length > 0) {
    for (let { value } of deleting) {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i].value === value) {
          array1.splice(i, 1);
        }
      }
    }
  }
  // let overlapping = embedded.filter(item1 =>
  //   setting.some(item2 => {
  //     return (
  //       item2.value === item1.value &&
  //       item2.selected === item1.selected
  //     );
  //   })
  // );
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

#### Empty/Clear a JavaScript Object
- `delete` operator allows you to remove a property from an object.
- `delete thisIsObject[key];`
```js
function emptyObject(obj) {
  Object.keys(obj).forEach(k => delete obj[k])
}
```
```js
for (const prop of Object.getOwnPropertyNames(obj)) {
  delete obj[prop];
}
```

#### Compare Objects
Referential equality
- The strict equality operator ===
- The loose equality operator ==
- Object.is(obj1, obj2) - return boolean

Manual comparison
```js
function isEqual(object1, object2) {
  return object1.key === object2.key;
}
```

Shallow equality
```js
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
```

Deep equality
- `isDeepStrictEqual(object1, object2)` of Node built-in util module
- `_.isEqual(object1, object2)` of lodash library.
```js
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}
```

#### Eliminate duplicate keys in Object
```js
let map = {};
array.map(element => {
 if(!map(element.id)){
  map[element.id] = element;
}
})
```
```js
// initialize a Set object that holds unique values.
const uniqueValuesSet = new Set();

const arr = [{ name: "John Doe" }, { name: "John Doe" }, { name: "Lily Roy" }];

const filteredArr = arr.filter((obj) => {
  // check if name property value is already in the set, return boolean
  const isPresentInSet = uniqueValuesSet.has(obj.name);

  // add name property value to Set
  uniqueValuesSet.add(obj.name);

  // if boolean true is returned the filter method keeps the array element and filter out the element is false is returned.
  return !isPresentInSet;
});

console.log(filteredArr);
```

[[↑] Back to top](#table-of-contents)

## Class

#### What is class?
- help us do some patterns, for reusability, declare with a "class" keyword and constructor function (ES6)

#### what is prototype
- All JavaScript objects inherit the properties and methods from their prototype, like a reference to another object 
- Objects created using the `new` keyword inherit from a prototype called `Object.prototype`.

#### prototype chain
- Prototype chaining is used to build new types of objects based on existing ones
- to do inheritance, like hasOwnProperty(), toString(), isPropertyOf()

#### check type of an object
- `object instanceof constructor` -  return boolean
- `auto instanceof Car` - true/false
- `const p = new Person("patrick", 18);` - datatype of p is object, datatype of Person is function

#### `new` keyword
- The `new` operator to create an instance of the class based on the prototype. 
- `new` makes the this variable point to the newly created object and returning a reference to that memory.

#### getter and setter
- data encapsulation, used to protect your data, particularly when creating classes. 
- The constructors are used to initialize the instance variable of a class or, create objects. 
- The setter/getter methods are used to assign/change and retrieve values of the instance variables of a class
- When we have a private instance, we do not wanna excpose the innter variables out, we set up the getter/setter for the value access and update method. 
- Protect private values field, data safety

#### overriding vs overloading
- overriding: with same function name, the newly created one overriding the previous one
- overloading: depends on how many parameter set in the function, only takes the number of that arguments pass into the function

#### ES5 Class Syntax
```js
function Person(name,age){
    this.name = name;
    this.showName = function(){		//constructor function - return false for ===, function built points to different address in memory
      console.log(`I am ${this.name}`)
  }
}
Person.prototype.showName = function(){		//class/prototype method - return true for ===
  console.log(`I am ${this.name}`)
}
```

#### ES6 Class Syntax
```js
class User {
  constructor(name) {	
    this.name = name;
    this.showName = function() {	//constructor function - return false for ===, function built points to different address in memory
      console.log(`I am ${this.name}`)
    }
  }
  sayHi() {		//class/prototype method - return true for ===, function built points to different address in memory
    alert(this.name);
  }
}
let user = new User("John");
user.sayHi();
```

[[↑] Back to top](#table-of-contents)

## API

#### API
- Application Programming Interface (API) - a connection that allows two applications to talk to each other
- enabling applications to exchange data and functionality easily and securely
- Your Server -> Request through API -> Someone Else's Server -> Response through API -> Your Server

#### REST API
- use/setup http endpoint to allow us access and doing create/read/update/delete data in the database
- `app.get('/tasks/:id', (req, res) => {}`

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

Limitation: we cannot copy the functions that are available in the target objects

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

#### npm
- npm init: create a package.json file
- npm start: start a package, start local server
- npm install: installs dependencies
- npm run dev: start off the development server like using nodemon if downloaded
- npm run build: runs the build field from the package.json scripts field.

#### Combining Frontend Code with Backend Code or SQL
1. Setting up the database. 
2. Setting up the server. 
3. Setting up the routing. 
4. Adding data to the database. 
5. Getting data from the database. 
6. Updating data on the database.

Node.js
1. Step 1: Create your Node (Express) backend
2. Step 2: Create an API Endpoint
3. Step 3: Create your React frontend
4. Step 4: Make HTTP Requests from React to Node

#### Database
- SQL is relational database
- MongoDB db is nosql database
- SQL is more for structural data model
- NoSQL data is more for a flex data model

#### MongoDB vs MySQL
- In terms of performance, MongoDB is faster than MySQL due to its ability to handle large amounts of unstructured data when it comes to speed.

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
- Concurrency control with the Transition API (Concurrency is the ability to execute multiple tasks simultaneously)
- Much faster page loads for server-side rendering with Suspense API
- Automatic State Batching of function calls and events to improve in-app performance (batching: collects all and then executes them together, avoids unnecessary re-renders)
- Streaming Server Renderer, converting data from a stream into something visual. 

#### Client-Side Rendering vs Server-Side Rendering
Client-side rendering
- It manages the routing dynamically without refreshing the page every time a user requests a different route. 
- Your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it. 
- React uses client-side rendering.

Server-side rendering
- convert HTML files on the server into a fully rendered HTML page for the client.
- When a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then construes the content and displays the page.

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

Examples
- FP: we use FP when we expect to receive the same output when using the same input, like "functional operations"
- OOP: A class is an abstract blueprint used to create more specific, concrete objects. 
- Classes often represent broad categories, like Car or Dog that share attributes.

4 Pillars in OOP: Encapsulation, Abstraction, Inheritance, Polymorphism
- Encapsulation is the ability to hide variables within the class from outside access
- Abstraction shows only essential attributes and hides unnecessary information -> hiding the unnecessary details from the users
- Inheritance
-  reduces redundant code `class Teacher extends Person { constructor(subject, grade) { super(); this.subject = subject; this.grade = grade; } }`
- Polymorphism means a single action can be performed in many forms, get rid of if else and switch, use `element.render()`

Benefits of OOP
- Encapsulation: reduce complexity + increase reusibility
- Abstraction: reduce complexity + isolate impacts of change
- Inheritance: elimate redundant code
- Polymorphism: refactor ugly switch case statement

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

#### React Angular Vue
- React data flows only in one way and is easy to debug.
- Angular data flows both ways and hence debugging is often difficult.
- Vue mainly uses HTML templates with some JSX, while React only uses JSX that allows you to insert HTML directly into JS code.
- React alway passes the data to view, and to update the view, you need to use a callback to update it -> different from react and angualr

[[↑] Back to top](#table-of-contents)

## Authentication

#### What is Authentication
- Authentication is needed if content should be protected, not accessible by everyone. 

#### Authentication is a two-step process: 
1. Get access/permission 
- Client (browser) - Request (with user credentials) - 
- Server - Response (yes/no). 
2. Send the request to the protected resource 
- Server-side Sessions: server grants your access, stores unique identifier on server, sends same identifier to the client, client sends identifier along with requests to protected resources. Backend generates the jwt token, then sends the generated token to the client, then all the following requests will contain the token.
- Authentication Tokens: send credentials to server, and the server validates credentials, comparing the combination to what is stored in the database, if that is valid, then the server creates a permission token, create but not store "permission" token on server (server is stateless), send token to client, client sends token along with requests to protected resources


## Performance

#### How do you generally improve performance?
- use uglify and minify to reduce the bundle size
- use lazy loading to improve the page loading speed.
- `React.lazy` and `React.suspense` support lazy loading with webpack.
- use content delivery network to improve the loading speed.
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

#### What is Webpack 
- A static module bundler for front-end development for JS applications -> bundle your styles (bundle your JavaScript files together)
— It takes all the code from your application and makes it usable in a web browser.
- It takes different dependencies, creates modules for them, and bundles the entire network up into manageable output files. 
- Great for working with Single Page Applications (SPAs)
- Provide similar functionality: Gulp, Grunt, babel, parcel, browserify, npm, and requireJS.

#### Webpack Examples
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
- Load certain part of the component tree only when its in use.
- Split your code at logical breakpoints, and then loading it once the user has done something that requires a new block of code. 
- Wrap the component inside with lazy load to delay the loading and improve performance

#### `React.lazy` and `React.suspense` 
Both support lazy loading with webpack.
- `.lazy()` - a built-in method that will help us with code splitting.
- React.lazy(() => import('./pages/NewQuote')) - the function we pass to lazy will be executed by React when this new quote component is needed.
- `<Suspense> ... </Suspense>` - We need to wrap this around the code, where we use React lazy.

#### loadsh
Debounce and throttle are techniques to control how many times we allow a function to be executed over time 
- debounce -> search bar (auto-complete)
- throttle -> scrolling / resizing page
- debounce / throtte -> web performance improvement -> control the number of times the function will be called

debounce 
- setTimeout
- continuously execute when event change ends, only execute once after event change stop
- like a search bar, you enter text, once yoou finish, wait for the timer done, it will send the request only one time to UI after the time period
- “group” multiple sequential calls in a single one, only send the final one
- `const debouncedFunc = _.debounce(fetchAPI, 100); onUserInput => { debouncedFunc() }` - shorter than a 100 

throtte 
- setInterval
- continuously execute when event change happens
- like resizing page, you send requests to the UI with a timer interval, will be sent no matter how many requests within the time period
- `_.throttle(fetchAPI, 100)`;

#### Production build vs Development build
- production and development build come into the picture because of performance impact in real life deployed the application.
- Development build: for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
- Production build: runs in production mode which means this is the code running on your client machine. 
- The production build runs uglify and builds your source files into one or multiple minimized files. 

#### Why production build
- Production Build has ugly, minified(compressed) version of your javascript code
- this makes rendering of file on end user browser very quick and performance enhancing.
- rendering development build js files on UI will take more time as compared to production version 
- which production is very crisp, compact, compressed, uglified for better user experience and loading on UI.

#### Virtual Scrolling
- While the user is scrolling the table, the Grid requests and displays only the visible pages.
- Import component. Import VirtualScroll from "react-dynamic-virtual-scroll". Add component as follows in your render method: 
- `<VirtualScroll className="List" minItemHeight={40} totalLength={100} renderItem={(rowIndex) => { return ( <div className="List-item"> <h3>List item: {rowIndex}</h3> </div> ); }} />`

#### Web Workers
- JS scripts running in the background threads, which are separate from the main execution thread, without affecting the performance of the page.
- web content to run scripts in an isolated thread in the browser in parallel, prevent the UI from freezing up
- `var myWorker = new Worker('worker.js');`, `myWorker.terminate();`

[[↑] Back to top](#table-of-contents)

## Testing

#### Testing
- UI tests that are always running inside a browser or a browser like environment
- Purpose: doing testing to ensure correctness of any codebase

#### Different Kinds of Tests
- unit testing - test individual building blocks in isolation
- integration testing - test the combination of multiple building blocks
- end to end (e2e) test - test complete scenarios in your app as the user would experience them
- automation test (e2e) - simulating user behavior and make sure scenarios work from the point of view of an end user

#### What do you use for Unit Test?
Jest
- JS helper functions (logic helper)
- `x => x+1` -> pure function
- test any side effect `x => x+1`
	
Enzyme: 
- component test, render our components in a test component
- then use expect methods that we want to test whatever is rendered

#### Jest - Snapshot Testing
- useful tool whenever you want to make sure your UI does not change unexpectedly
- A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test.
- The test will fail if the two snapshots do not match
- `npm test -- --coverage` for coverage report

#### What is the coverage? 
How complete your unit test cover all the code
- 90% coverage (out of 100 lines, at least 90 lines are ran)

#### Unit Test File Example
- button.js
- button.test.js
- npm run test *.test.js

[[↑] Back to top](#table-of-contents)
  
  
