---
title: JS Cheatsheet (Note Part3)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## Miscellaneous (Note Part4)
https://github.com/hanwenzhang123/frontend-note/blob/main/04-note/README.md

## Boilerplate Code (Note Part5)
https://github.com/hanwenzhang123/frontend-note/blob/main/05-note/README.md

## System Design (Note Part6)
https://github.com/hanwenzhang123/frontend-note/blob/main/06-note/README.md

## Table of Contents
- [String](#String)
- [Array](#Array)
- [Object](#Object)
- [Class](#Class)
- [Compare](#compare)
- [Clone](#clone)
- [API](#API)
- [GraphQL](#GraphQL)
- [Implementation](#Implementation)
- [Utilities](#Utilities)

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
.charAt() - eturns the character at a specified index in a string.
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

#### Remove Character
- substring(start, stop)
- slice(start, stop)
- substr(start,length)
- replace(old, new)

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
```js
const index = array.indexOf(element);
if (index > -1) {
  array.splice(index, 1);
}
```

#### Add Elements
- `.push()` - adds new items to the end of an array
- `.unshift()` - adds to beginning of the array
- `.arr.splice(index, 0, item)`;

#### Check if it is an array
`Array.isArray()` -  return boolean, check whether an object (or a variable) is an array or not. 

#### Get Unique Value from Array
- `const array3 = array1.filter((obj) => { return array2.indexOf(obj) == -1; });`

#### Eliminate duplicate item in Array
- `const uniqueNames = Array.from(new Set(names));` - Array.from() returns an Array object, Set returns a collection of unique items
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

#### .reduce()
```js
const sum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
```

#### Empty an array in JavaScript
- Assigning to a variable never changes the object that the variable previously had as value.
- Objects -- such as arrays -- only change when you mutate them, either through calling a method that does this, or by setting a property.

```js
//1. Assign it to an empty array
   var array1 = [1,2,3,4,5,6,7];  // Created array
   var anotherArray = array1;     // Referenced array1 by another variable
   array1 = [];                   // Empty the array, assign a new array to the variable, does not modify the array object previously assigned to array1
   document.write(anotherArray);  // Output [1,2,3,4,5,6,7]

//2. Set its length to 0
   var array1 = [1,2,3,4,5,6,7]; // Created array
   var anotherArray = array1; // Referenced array1 by another variable
   array1.length = 0; // Empty the array by setting length to 0, assignment to the length property (actually a setter) will mutate the array.
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

#### 4 ways to clone objects:
- Spread Operator - `{ ...food }`
- Object.assign - `Object.assign({}, food)`
- JSON - `JSON.parse(JSON.stringify(food))` - (cannot clone function)
- lodash - `_.cloneDeep(obj)`

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

#### Count how many keys in map
```js
let count = Object.keys(each).length;
```

#### Looking for key by value
```js
const key = Object.keys(obj).find(key => obj[key] === value);
```
```js
const getKeyByValue = (obj, value) => 
        Object.keys(obj).find(key => obj[key] === value);
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

#### what is prototype?
- JS uses prototype inheritance
- All JavaScript objects inherit the properties and methods from their prototype, like a reference to another object 
- Objects created using the `new` keyword inherit from a prototype called `Object.prototype`.

#### prototype chain
- Prototype chaining is used to build new types of objects based on existing ones
- to do inheritance, like hasOwnProperty(), toString(), isPropertyOf()

#### What is instance?
- instance is when you create something based on that class
- 
#### `new` keyword
- The `new` operator to create an instance of the class based on the prototype. 
- `new` makes the this variable point to the newly created object and returning a reference to that memory.

#### constructor
- gets called when we create an instance of a class, used to initialize the instance variable of a class or create objects
- things you want to assign to your attributes within your class
- no setter just getter for immutability

#### getter and setter
- Data encapsulation, used to protect your data, particularly when creating classes (Protect private values, for data safety)
- Setter/Getter methods are used to assign/change and retrieve values of the instance variables of a class
- When we have a private instance, we do not wanna excpose the inner variables out, we set up the getter/setter for the value access and update method. 

#### this
- it refers to the current object within its current scope

#### overriding vs overloading
- overriding: with same function name, the newly created one overriding the previous one
- overloading: depends on how many parameter set in the function, only takes the number of that arguments pass into the function

#### check type of an object
- `object instanceof constructor` -  return boolean
- `auto instanceof Car` - true/false
- `const p = new Person("patrick", 18);` - datatype of p is object, datatype of Person is function

#### access modifier
- public - (seen anywhere) can be accessed by other classes
- private - (class itself) limited the class in which it is declared
- protected - (class & subclasses) only accessible to declared class and classes that extend to that class (sub-classes)
- final - can not be overridden by a subclass
- abstract - prohibit a class from being created directly, must be extended in order to be utilized

#### static
- static can only access to static, you have to create static function to access to the static
- static is not for instance variables, can not be changed through non-static
- static is good for constances
- static belongs to the no instance of the class, , belong to the entire ecosystem, shares along with all instances

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
  getName() {		//class/prototype method - return true for ===, function built points to different address in memory
    alert(this.name);
  }
  setName(newName) {
    this.name = newName
  }
}
let user = new User("John");
user.setName("Jack");
user.getName();	 //Jack
```

[[↑] Back to top](#table-of-contents)


## Compare

#### Shallow Comparison & Deep Comparison
- Shallow compares superficially 2 operands equality — 1st level in depth only
- Deep compares the equality from all depth levels.

#### Manual comparison
```js
function isEqual(object1, object2) {
  return object1.key === object2.key;
}
```

#### Shallow equality
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

#### Deep equality
- `JSON.stringify(obj1) === JSON.stringify(obj2);` => stringify
- `_.isEqual(object1, object2)` => using lodash library
- `isDeepStrictEqual(object1, object2)` of Node built-in util module

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

[[↑] Back to top](#table-of-contents)


## Clone

#### Shallow Clone
- points to the same location in memory as source does. 
- duplicate as little as possible. 
- a copy of the collection structure, still share the individual elements
- limiting the depth of the history that is cloned from an original object

#### Deep Clone 
- points to a different location in memory, but the contents are the same.
- duplicate everything.
- no more contact with previous reference, they are not related
- any modification would not influence original copy

#### Deep Clone vs Shallow Clone
2 ways to implement deep clone
1. third party lib lodash => `_.cloneDeep()`
2. JSON parse and stringify => `const result = JSON.parse(JSON.stringify(data))`
```js
//1. Lodash
// var _ = require("lodash");
import { cloneDeep } from "lodash";
const obj = { x: 1 };
const newObj = _.cloneDeep(obj);
console.log(newObj);  //{x: 1}

//2. JSON parse and stringify 
//completely convert to a raw string and convert back, so every layer will be completely different
const newObj2 = JSON.parse(JSON.stringify(obj));
console.log(newObj2); //{x: 1}
```

Shallow Clone - reuse previous reference, certain sub-values are still connected to the original variable
- Destructuring assignment ...
```js
// value => primitive type -> Number String Boolean Null Undefined
const obj = { x: 1 } };
const newObje = {...obj}; //shallow copy
newObj.x = 9;
console.log(newObj);  //{x:9)	
console.log(obj); //{x:1)   //original object not touched, different addresses in memory

// value => non-primitive -> Object Array
//assigning everything in a different type but because the value type is different, it is an object
//there is a reference pointer points to the object
const obj = { x: { y: 1 } };  //add one more layer
const newObj = {...obj}; //shallow copy - only restirct to the shallow level
newObj.x.y = 9;
console.log(newObj); //{x: { y: 9 } - only direct properties on the object point to different address, nested properties point to the same
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
```

#### Deep Clone Implementation
- Use lodash or write a deepclone function by ourself
- JSON way cannot deep clone complex object like function, Date. Only works for simple data structure.

#### Write your own code of deep clone
```js
const deepClone = (obj) => { 
  if (!obj) return obj; 
  let value; 
  let result = Array.isArray(obj) ? [] : {};   //check if it is array
  for (const key in obj) { 
    value = obj[key];   	//iterate each item in object, and store to v
    result[key] = (typeof value === "object") ? deepClone(v) : value;   //recursion, if v is object then copy(v), stores in res[k]
  } 
return result; 
}
```
```js
//deep clone
const deepClone = (obj) => {
	if(Array.isArray(obj) || typeof obj === "object"){
		let result;
		result = Array.isArray(obj) ? [] : {};
		for(let key in obj) {
			let value = obj[key];
			result[key] = typeof value === "object" ? deepClone(value) : value;
		}
		return result;
	} else {
		return obj;
	}
}
```

[[↑] Back to top](#table-of-contents)


## API

#### API
- Application Programming Interface (API) - a connection that allows two applications to talk to each other
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

Limitation: we cannot copy the functions that are available in the target objects

#### axios
- simple one step process in response handling - only 1 promise
- `axios.get(url).then(response => console.log(response));`

#### `fetch()`
- Window Object (available from any scope), fetch used for data retrieval that uses the Promise API
- fetching a resource from the network, returning a promise which is fulfilled once the response is available
- 2-step process handing JSON data, return body with JSON content - need 2 promise

#### Fetch API
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
```

#### `fetch()` Example
```js
async function fetchMovies() {
  const response = await fetch('/movies');
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;	//404
    throw new Error(message);
  }
  const movies = await response.json();
  return movies;
}
fetchMovies().then(movies => {
  movies; // fetched movies
}).catch(error => {
  error.message; // 'An error has occurred: 404'
});
```

#### Fetch Data with React
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

#### Send Data - fetch()
- You can use fetch() to send POST requests
```js
const addProductHandler = async (productName, productPrice) => {
	try {
		const newProduct = {
			title: productName,
			price: +productPrice	//+ to convert string to number
		}
		let hasError = false;
		const response = await fetch("localhost:5000/product", {
			method: "POST",
			body: JSON.stringify(newProduct),
			headers: {		//let server know that it is json data
				"Content-Type": "application/json"
			}
		});
		if(!response.ok){
			hasError = true;
		};
		const responseData = await response.json();
		if(hasError){
			throw new Error(responseData.message);
		};
		setLoadedProducts(prevProducts => {
			return prevProducts.concat({
				...newProduct,
				id: responseData.product.id
			});
		});
	} catch (error) {
		alert(error.message || "Something went wrong")
	}
}
```

#### REST API
- A type of web services, URL is indicative of the request itself.
- setup http endpoint to allow user access and doing create/read/update/delete data in the database
- data entities lives on a bunch of URLs on a server, when a request received, the API responds with the full data payload of that entity

#### REST API Example
- `app.get('/tasks/:id', (req, res) => {})`
- Different URLs + HTTP verbs (= endpoints) for different actions

#### REST API Pros 
- request path + http method (= endpoints) identify a resource / action on the server
- API is stateless and seperate from any frontend (reusable)
- the most common type pf api because it is easy to use

#### REST API Cons
- 1. we may need multiple entities at one time, each request does not have enough data for request. 
- 2. overfetching from api when we only want a small subset of data entity

#### REST & HTTP methods
- GET - get a source from the server
- POST - post a resource to the server (create or append resource)
- PUT - put a resource onto the server (create or overwrite a resource)
- PATCH - update parts of an existing resource on the server
- DELETE - delete a resource on the sever


## GraphQL

#### What is GraphQL
- a query language allows frontend communicates with backend through API calls
- querying (reading/mutating data) exactly what you want from many resources in a single entry endpoint (request).
- you can describe your data, describe a schema for your data, requet the exact data you need
- the query have the same shape that you expect to return back from the API in JSON

#### Advantage of using GraphQL over REST
- Self-documenting APIs (just by reading its schema), Fetching nested data in a single request
- Prevent over fetching and under fetching 
- Schemas and Types: Describe our data and make it easy to discover, to understand what data is available in our API, and types ensure that the data that's being passed back and forth in our queries is valid => Heavily typed (schema based)
- Speeds up development for larger projects: As long as your data exists on the backend, you save yourself time waiting for new endpoints be created and exposed on the backend

#### Disadvantage of using GraphQL over REST
- Flexibility adds complexity: more time to do the initial setup, defind all your schemas and types for small apps may not worthy the efforts. 
- Difficult to cache: restful server can save response with expired time and return that data without having to fetch it from our database, Instead, it is just sent from the cache, which is faster and which decreases the load on our server
- Not RESTful: One endpoint return all your data

#### Overfetching vs Underfetching
- under fetching: only single endpoint not contain enough data to load the information we look for, then we need to make multiple round trips to the server and back before the page is fully loaded => we lose time making extra unnecessary round trips between the server and clients, we have to do more work querying multiple collections which slows down our page load time. 
- over fetching: we are sending unnecessary data over the network, from the server to the browser, and our front end then needs to filter the response from the server to get only the data that matters. 
- GraphQL solves solves over-fetching: We get exactly the data that we need and nothing more. This saves our bandwidth because we minimize the amount of data that we are returning from the server, and it saves us from doing extra processing work to filter this data
- GraphQL solves solves under-fetching: We no longer have to make extra round trips to the server and back, so all that time waiting for our network connection is kept to a minimum.

#### GraphQL Architecture
Regardless of what page we are loading, in graphql, we ask for all the data that we need in a query, and we pass it off to the single graphql endpoint. our graphql code then goes ahead and wraps up all the data that we need in the back end using functions that graphql calls resolvers. When all our graphical resolvers have gathered all the data that we need to respond to our query, our server sends everything back to the front end.

#### difference between REST API and GraphQL API
- REST APIs offer multiple endpoints(URL + HTTP methods), you have one endpoint that does one task when the api call got hit , it is an architectural concept for network-based software
- GraphQL provides the full capabilities of the exposed service, offers a single endpoint but expects a query string in the request body

#### GraphQL Operation Type
- query: entry point to read data, specify which endpoints we want to call, how we want the response to look
- mutation: entry point to write data, causes changes to the data available on the backend
- resolvers: write code that resolves queries, fetch the data from database, can optionally accept four positional arguments: (parent, args, context, info)

#### GraphQL Concepts
- Declaration - A GraphQL query begins with the Declaration ("query")
- Endpoint - A section of a GraphQL backend responsible for returning a specific piece of all the data available ("user")
- Fields - Properties that comprise the shape of a response ("name" and "age")
- Type - A collection of fields that make up a specific queryable object, the data that is available there

```js
query {		//operation type
  user {	//operation endpoint
    name	//requested field
     age!	//an argument is required with exclamation point
  }
}
```
```js
query($year: Int = 2000) {	//default value 2000
  randomMovieByYear( year: $year ){
    id
    title
    releaseYear
  }
}
//JSON
{
  "year": 2001		//use this one, overwrite the 2000 one
}
```
```js
query {
  movieOne: movieById(  //Alias
    movieId: "movie_0"
    ){
    ...movieDetails //fragment
  }
  movieTwo: movieById(  //Alias
    movieId: "movie_1"
  ){
   ...movieDetails  //fragment
  }
}

fragment movieDetails on Movie{
    id
    title
    tagline
    revenue
}
```

#### Mutation
```js
type Mutation {
    createMovie (
      title: String!
      tagline: String
      revenue: Int
    ): Movie
    addDirectorToMovie (
      movieId: ID!
      director: DirectorInput
    ): Movie
}
  
mutation($directorToAdd: DirectorInput!){
  addDirectorToMovie(
    movieId: "movie_0"
    director: $directorToAdd    //using the query variable with $, identify variables inside of a query
    ){			//the field we want to return followed by the endpoint
    title
    tagline
    directors{
      id
      name
    }
  }
}
```js
exports.typeDefs = gql`
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!	//Category! is the type of what we return
  }
  input AddCategoryInput {	//type for the input
    name: String!
  }
`
exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),	//const { v4: uuid } = require("uuid");
      name,
    };
    db.categories.push(newCategory);
    return newCategory;
  }
}
```
#### Apollo Server
- A state management library that allows you to write graphql queries then see the results automatically updated in your UI
- npm install apollo-server graphql
- String, Int, Float, Boolean, ID (input something inside property)	//scalar type, null included

```js
const { ApolloServer, gpl } = require("apollo-server");
const typeDefinitions = gql`	//what in our data we are going to defined, how our data is going to look
  type Query {
    hello: String	//can include null without !, it can be string or null without !
    products(filter: ProductsFilterInput): [Product!]!	//array of object in Product type
    product(id: ID!): Product	//query with variable, with !, you have to include something
  }
  
  type Product {	//object type
    id: ID!,
    price: Float!
  }
  
  input ProductsFilterInput {
    onSale: Boolean
  }
`
const resolvers = {	//functioning return the data defined in our typeDefinitions
  Query: {
    hello: () => "World!",
    products: (parent, {filter}, {products}) => {	//when we do filter
      let filteredProducts = products;
        if(filter){
          if(filter.onSale === true){
            filteredProducts = filteredProducts.filter(prod => prod.onSale;)
           }
        }
      return filteredProducts;
    },
    product: (parent, args, context) =>	return products.find(prod => prod.id === args.id);
  },
  Category: {	//relating data - pseducode
    products: (parent, args, context) => {	//using parent for the category that we call with
      const categoryId = parent.id;
      return products.find(prod => prod.categoryId === categoryId);
    }
  }
}
const server = new ApolloServer({
  typeDefinitions,
  resolvers: {		//no needs for the object if in the same file
    Query,
    Category
  },
  context: {	//globally available
    categories,
    products
  }
});
server.listen().then(({ url }) => {
  console.log("Server is ready at" + url)
})
```

[[↑] Back to top](#table-of-contents)


## Implementation

#### Implementing `Array.forEach()`
- `forEach()` - iterate the array, does not return anything
- `array.forEach(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myForEach = function(callback) {
   for (let i = 0; i < this.length; i++) { 
     callback(this[i], i, this)
   }
}
```

#### Implementing `Array.map()`
- `map()` - iterate the array, return a new array with results from the passing function
- `array.map(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myMap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
```

#### Implementing `Array.filter()`
- `filter()` - returns a new array with the elements that passed the provided test
- `array.filter(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myFilter = function (callback) {
  const filterArray = [];
  for (let index = 0; index < this.length; index++) {
    let result = callback(this[index], index, this); //result returns boolean through callback for the test
    if (result) {
      filterArray.push(this[index]);
    }
  }
  return filterArray;
};
```

#### Implementing `Array.reduce()`
- reduce() - returns a single output value which is the function's accumulated result
- array.reduce(function(total, currentValue, currentIndex, arr), initialValue) -> initialValue for accumulator
- reduce(accumulator, currentValue) -> accumulator like sum, currentValue adds to the accumulator
```js
Array.prototype.myReduce = function (callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    let currentValue = this[i];
    value = callback(value, currentValue);
  }
  return value;
};
```

#### Implementing `Array.some()`
- `some()` - check if any of the elements in the array passes a provided test, return boolean
- `array.some(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (result) {
      return true;
    }
  }
  return false;
};
```

#### Implementing `Array.every()`
- `every()` - check if every element in the array passes a provided test, return boolean
- `array.every(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (!result) {
      return false;
    }
  }
  return true;
};
```

#### Implementing `Array.find()`
- `find()` - returns the first item that matches the result that passes a test, or undefined if no matches.
- `array.find(function(currentValue, index, arr),thisValue)`
```js
Array.prototype.myFind = function(callback){
  let result
  for (let i = 0; i < this.length; i++) {
    let isFound = callback(this[i], i, this)
    if(isFound){
      result = this[i]
      break //stop the loop if find that item
    }
  }
  return result
}
```

#### Implementing `Array.findIndex()`
- `findIndex()` - return the index of the first element in the array that passes the test, return -1 if no element found
- `array.findIndex(function(currentValue, index, arr), thisValue)`
```js
Array.prototype.myFindIndex = function(array, callback) {
 for (let index = 0; index < this.length; index += 1) {
   const value = array[index];
   if (callback(value, index, array)) {
     return index;
   }
 }
 return -1;
}
```

#### Implementing `Array.includes()`
-  `includes()` - returns true if an array contains a specified element, otherwise false -> case sensitive
- `array.includes(element, start)`
```js
Array.prototype.myIncludes = function(element){
   for(let i = 0; i < this.length; i++){
      const value = this[i];
      if(element === value){
         return true;
      };
   };
   return false;
};
```

#### implement map using reduce
```js
const arr = [1, 2, 3];
const arr2 = arr.map(item => item * 2); //[2, 4, 6] 
const arr22 = arr.reduce((acc, cur) => { //[2, 4, 6] 	//reduce is designed for everything
  acc.push(cur*2);
  return acc;
}, []); 	//initial an array, and push items to this array, [] is trusy
```

#### Build an Array
```js
class NewArray {
  constructor() {
    (this.length = 0), (this.data = {});
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArray = new NewArray();
console.log(newArray);
```

#### fizzBuzz
```js
let fizzBuzz = (n) => {
   for(let i = 1; i <= n; i++){
     if(i % 3 === 0 && i % 5 === 0){  
     //Then in each iteration we will first check if the number is divisible by both 3 and 5, then print ‘FizzBuzz’.
        console.log('FizzBuzz');
	//Else if it is divisible by only 3 then print ‘Fizz’ or If it is only divisible by 5 then print ‘Buzz’
     }else if(i % 3 === 0){
        console.log('Fizz'); 
     }else if(i % 5 === 0){
        console.log('Buzz');
     }else{	//Otherwise just print the number.
        console.log(i);
     }
   }
}
```

[[↑] Back to top](#table-of-contents)
 
 
## Utilities

#### Array
```js
function first(array, n = 1) {
  if (n === 1) return array[0]
  return array.filter((_, index) => index < n)
}

function last(array, n = 1) {
  if (n === 1) return array[array.length - 1]
  return array.filter((_, index) => array.length - index <= n)
}

function sample(array) {
  return array[randomNumberBetween(0, array.length - 1)]
}

function pluck(array, key) {
  return array.map(element => element[key])
}

function groupBy(array, key) {
  return array.reduce((group, element) => {
    const keyValue = element[key]
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] }
  }, {})
}
```

#### Other
```js
function randomNumberBetween(min, max) {   //return a random integer
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(duration) {   //wait a specific time to do a task - sleep(200).then(() => {});
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}

function memoize(cb) {   //saving data and use it later on
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args) 
    if (cache.has(key)) return cache.get(key) //check if the cache has the data, if so, return it
    
    const result = cb(...args)
    cache.set(key, result)
    return result
  }
}
```

[[↑] Back to top](#table-of-contents)
