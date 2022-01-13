---
title: Boilerplate Code (Note Part3)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## Frontend Miscellaneous (Note Part4)
https://github.com/hanwenzhang123/frontend-note/blob/main/04-note/README.md

## Table of Contents
- [String](#String)
- [Array](#Array)
- [Object](#Object)
- [Class](#Class)
- [JavaScript Example](#JavaScript-Example)
- [React Example](#React-Example)
- [PureComponent vs memo](#PureComponent-vs-memo)
- [React Context](#React-Context)
- [Redux Example](#Redux-Example)
- [React HOC](#React-HOC)
- [React Counter](#React-Counter)
- [React To Do List](#React-To-Do-List)
- [Redux Counter](#Redux-Counter)
- [Redux To Do List](#Redux-To-Do-List)
- [Hooks Counter](#Hooks-Counter)

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

## JavaScript Example

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
const arr22 = arr.reduce((acc, cur,) => { //[2, 4, 6] 	//reduce is designed for everything
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

## React Example

#### setTimeout example
```js
handleClick = () => {
    const { number } = this.state;
    setTimeout(() => {     //no good, synchronous
      this.setState({ number: number + 1 }); // 0: 0 + 1    //always pass the copy, always the number, 0 + 1, closure case
      this.setState({ number: number + 1 }); // 1: 0 + 1    //change back to 0 + 1, outdated value
    }, 0)

  //const { number } = this.state;   
    setTimeout(() => {     //correct value
      this.setState({ number: this.state.number + 1 }); // 0: 0 + 1
      this.setState({ number: this.state.number + 1 }); // 2: 1 + 1     //no closure, updated value
    }, 0)
  }
}
```

#### Parent-Child Example
```js
//Parent.js
import React, {useState} from 'react';
improt './Parent.css';
improt Child from './components/Child';

function Parent() {
  const [word, setWord] = useState("Parent");
  
  return(
    <div className = "parent">
      <h1>{Word}</h1>
      <Child 
        changeWord={word => setWord(word)}/>    //set the parameter word to word
    </div>
    );
}
export default Parent;

//Child.js
import React from 'react';
improt './Child.css';

function Child(props) {
  return(
    <div className = "child">
      <h1>Child</h1>
      <button onClick={()=> props.changeWord("Hello World")}>      //onClick then we want something to happen
        Click to Change the Word      //props.changeWord from parent
      </button>
    </div>
    );
}
export default Child;
```

#### Class Component Example
```js
import React from 'react';
import "./styles.css";

class App extends React.Component { //extends the component
  constructor(props) {    //we need the constructor
    super(props); // we need the super() to enable the use of 'this' in the following part
    this.state = {      //state holds very important information about "this" in the object
      name: ""      //empty here so we can update the value, or we can put the hard-coded value
    }
    // this.onClickFunc = this.onClickFunc.bind(this);   
    //bind creates a new function where this is properly referred. so now the onClickFunc below works
  }

  // class method
  // onClickFunc() {     //this function has its own this
  //   console.log(this);   //we should let know which 'this' should I point to (the provided value)
  // }  //returns undefined without the bind, print out App with the bind function

  onClickFunc = () => {   //arrow function does not have its own this, so this will survive in the whole class field
    console.log(this);    //this will properly refers to the App due to arrow function, no more binding issue, no needs to bind in the constructor now
  }

  onChangeHandler = (e) => {        // using the method setState and update the name key
    this.setState({ name: e.target.value })     //when we type in e.target.value, it overrides the name

  render() {
    const name = this.state.name
    console.log(name);
    return (
      <div>
        <div>Hello My { name }</div>
        <button onClick={this.onClickFunc}>CLICK ME!</button> 
        <input onChange={this.onChangeHandler} />
      </div>
    )   //you will never pass a function of involking form, only the definition form the the function
  }     //you also need "this" because class method belongs to the App class here; otherwise you look for scope outside of the class
}

export default App;
```

[[↑] Back to top](#table-of-contents)
 
 ## PureComponent vs memo

#### Class wrap with `React.PureComponent` for class component
```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      number: 0
    }
  }
   handleClick = () => {
      const {number} = this.state;
      this.setState({number: number + 1});
   }
  render() {
    const {number} = this.state;
    return (
       <div className ="App">
         <Title /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
} 
class Title extends React.PureComponent {  //extends React.PureComponent, always compare the previous props and current props to determine if needs re-render
//   constructor(props) {
//     super(props);
//   }  
//   shouldComponentUpdate() {...}    //PureComponent works like containing logics with shouldComponentUpdate - compare the props to see if any changes
  render() {  
     console.log("Title rendering");    //this title will only render once, considers shouldComponentUpdate, we cut out unnecessary rendering
     return (
      <div>
       <h1>Happy Today</h1>  
     </div>
    );
  }
}
export default App;
```

#### Function wrap with `memo` for functional component
```js
function Title() {		//capitalize the first letter for customized component
  console.log("Title rendering");    //only render once, considers shouldComponentUpdate
  return (
     <div>
       <h1>Happy Today</h1>  
     </div>
   );
}
const WrapperTitle = memo(Title);      //using memo and change return to the <WrapperTitle /> 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      number: 0
    }
  }
   handleClick = () => {
      const {number} = this.state;
      this.setState({number: number + 1});
   }
  render() {
    const {number} = this.state;
    return (
       <div className ="App">
         <WrapperTitle />     //here we use <WrapperTitle /> 
         <h3> {number} </h3>
         <button onClick={this.handleClick}>CCC</button>  
       </div>
     )
  }
} 
```

[[↑] Back to top](#table-of-contents)

## React Context

#### React Context API
```js
const MyContext = React.createContext();    //JSX - Capitalize
class Component
  state = {
   value: 1 
  }
  contextObj = {    //better performance
        data: this.state.value,
        onActionHandle: () => {   //with a function to pass down
         this.setState({value: 2})
        }
  }
  render() {
    return(
      <MyContext.Provider value = {this.contextObj}>    //like store={store}, better to put the object out not inside nested
        <Child>
      </MyContext.Provider>
      )
  }
//Child.js
  return(
      <MyContext.Consumer>    //function call to get the value that passed in through the provider
        {({data, onActionHandle}) => {
        return (
          <div> 
            {data} 
            <button onClick = {onActionHandler}>Click</button>          
          </div>
        )
      }}
      </MyContext.Consumer>
    )
```

[[↑] Back to top](#table-of-contents)

## Redux Example
	  
#### index.js - How to setup Redux? How do you create store?
```js
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);	//the store will be generated based on reducer that analyze behaviors and modify current local state

ReactDOM.render(     //initial render into our App 
  <Provider store={store}>   //provider to inform the whole structure, for provider layer, everything inside would be props.children
    <App />         //store is like global state, available to all children, stroe is the values in your redux store, like the data from the database
  </Provider>,     //provider is like passing down everything to the children, we pass our store down to every level via createStore(reducer)
  document.getElementById("root")
);
```

#### App.js - subscribe to the store (connect)
`ConnectedApp = connect()(App)`
```js
import React from "react";
import { connect } from "react-redux";      // HOC, connect is a function, the helper function
import * as counterActions from "./action";   //import all kind of actions we have in the action file

class App extends React.Component {
  render() {
    const { numberForApp, incHandler, decHandler } = this.props;    //get from the props, the state and dispatch we defined through connect()

    return (
      <div className="App">
        <h3>{numberForApp}</h3>       		//display value from the store
        <button onClick={incHandler}>+</button>     //using the function as click handler
        <button onClick={decHandler}>-</button>     //using the function as click handler
      </div>
    );
  }
}

const mapStateToProps = (state) => ({   //build the parameter from connect(), take the state
  numberForApp: state.counterReducer      //using the value from the store, counterReducer is the specific one from the reducer file
});

const mapDispatchToProps = (dispatch) => ({   //build the parameter from connect(), take the disptach, pass the function, disptach the action
  incHandler: () => dispatch(counterActions.incAction()),   //dispatch(actions.incAction()) - containing our action type (a payload as needed)
  decHandler: () => dispatch(counterActions.decAction())    //call the action, emit the action that we defined in the action.js
});  // action generator, directly talking to the store, if you do not need a function, just delete it, no worries about props

const ConnectedApp = connect(	//here we use the connection function, connect will create the HOC wrapper that takes the APP
  mapStateToProps,		// on value - get the value from the store, make sure the component is hook up with the store (display)
  mapDispatchToProps		// on handler/actions - the action we need (user interaction)
)(App);				//here is to connect to our App, we do not connect directly

export default ConnectedApp;
```

#### action.js 
```js
const incAction = () => {
  return {
    type: "INCREMENT"
  }
}
const decAction = () => { 
  return {
    type: "DECREMENT"
  }
}
export {    //export the actions we defined
  incAction,
  decAction 
}
```

#### reducer.js 
```js
import { combineReducers } from "redux";    //import combineReducers for the reducer file, group different reducers 

const INIT_STATE = 1;   //init value from the store
                                            
const counterReducer = (state = INIT_STATE, action) => {   //action will be emit from the action.js file, state is the current state with a default value 
  switch (action.type) {      //judged by the different types of actions
    case "INCREMENT":       //different cases, make sure matches in the action file
      return state + 1;       //return the current local state does what
    case "DECREMENT":       //tell reducer, whenever you see this case, do something
      return state - 1;       //what to do when we see the case
    default:            //always end with a default case
      return state;      //just return itself
  }
};

const rootReducer = combineReducers({     //here pass the switch case counterReducer to it, you can pass as many as you need
  counterReducer
});

export default rootReducer;
```

[[↑] Back to top](#table-of-contents)

## React HOC
ContentContainer.js 
```js
import React from "react";
import "./ContentContainer.css";

const ContentContainer = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        checked: false,
      };
    }

    handleVisibility = (e) => {
      this.setState({
        checked: !this.state.checked,
      });
    };

    render() {
      const hidden = this.state.checked === true ? "" : "hidden";
      return (
        <div>
          <span>Invisible Checkbox</span>
          <input type="checkbox" onClick={this.handleVisibility} />
          {hidden ? <OriginalComponent /> : null}
        </div>
      );
    }
  }
  return NewComponent;
};

export default ContentContainer;
```

App.js
```js
import React, { Component } from "react";
import "./App.css";

import HOCCounter from "./components/Counter/Counter";
import HOCTdList from "./components/TdList/TdList";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HOCCounter />
        <HOCTdList />
      </React.Fragment>
    );
  }
}

export default App;
```

index.js
```js
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

[[↑] Back to top](#table-of-contents)

## React Counter
Counter.js
```js
import React, { Component } from "react";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      isRunning: false,
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 };
    });
  };

  decrement = () => {
    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
  };

  incIfOdd = () => {
    if (this.state.number % 2 !== 0) {
      this.increment();
    }
  };

  asyncInc = () => {
    setTimeout(() => {
      this.increment();
    }, 1000);
  };

  reset = () => {
    this.setState({ number: 0 });
  };

  timerHandler = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  componentDidMount() {
    this.intervalID = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((prevState) => ({
          number: prevState.number + 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const { number } = this.state;
    const { increment, decrement, incIfOdd, asyncInc, reset, timerHandler } =
      this;

    return (
      <Card>
        <Count num={number} />
        <ButtonRow clickHandler={increment} value="Increment +1" />
        <ButtonRow clickHandler={decrement} value="Decrement -1" />
        <ButtonRow clickHandler={incIfOdd} value="Increment-If-Odd" />
        <ButtonRow clickHandler={asyncInc} value="Async-Inc" />
        <ButtonRow clickHandler={reset} value="Reset" />
        <ButtonRow
          clickHandler={timerHandler}
          value={this.state.isRunning ? "TIMER STOP" : "TIMER START"}
        />
      </Card>
    );
  }
}

const HOCCounter = ContentContainer(Counter);
export default HOCCounter;
```

ButtonRow.js
```js
import React from "react";

function ButtonRow(props) {
  return (
    <div className="App">
      <button onClick={props.clickHandler}>{props.value}</button>
    </div>
  );
}

export default ButtonRow;
```

Count.js
```js
import React from "react";

function Count(props) {
  const { num } = props;
  return (
    <div>
      <h1>COUNTING</h1>
      <h2>Current Count: {num}</h2>
    </div>
  );
}

export default Count;
```

[[↑] Back to top](#table-of-contents)

## React To Do List
TdList.js
```js
import React, { Component } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class TdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Study React", "Do Homework"],
    };
  }

  addItem = (inputText) => {
    const list = [...this.state.list];
    list.push(inputText);
    this.setState({ list });
  };

  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter((item, index) => index !== id);
    this.setState({ list: updatedList });
  };

  sortList = (value) => {
    const list = [...this.state.list];
    if (value === "asc") {
      const ascList = list.sort((a, b) => a.localeCompare(b));
      this.setState({ list: ascList });
    } else if (value === "desc") {
      const descList = list.sort((a, b) => b.localeCompare(a));
      this.setState({ list: descList });
    }
  };

  render() {
    const { list } = this.state;
    const { addItem, deleteItem, sortList } = this;

    return (
      <Card>
        <InputField onAdd={addItem} onSelect={sortList} />
        <ItemList onDisplay={list} onDelete={deleteItem} />
      </Card>
    );
  }
}

const HOCTdList = ContentContainer(TdList);
export default HOCTdList;
```

InputField.js
```js
import React, { Component } from "react";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleClick = () => {
    if (this.state.inputText.trim().length > 0) {
      this.props.onAdd(this.state.inputText);
    }
    this.setState({
      inputText: "",
    });
  };

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleDropdown = (event) => {
    this.props.onSelect(event.target.value);
  };

  render() {
    const { inputText } = this.state;
    const { handleChange, handleClick, handleDropdown } = this;
    return (
      <div>
        <h1> TO-DO LIST </h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Task"
          value={inputText}
        />
        <button onClick={handleClick}>ADD</button>
        <select onChange={handleDropdown}>
          <option>***sort***</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    );
  }
}

export default InputField;
```

ItemList.js
```js
import React from "react";
import Item from "./Item";

function ItemList(props) {
  if (props.onDisplay.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.onDisplay.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.onDelete} />
      ))}
    </div>
  );
}

export default ItemList;
```

Item.js
```js
import React from "react";

function Item(props) {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={() => props.onDelete(props.id)}>x</button>
      </li>
    </div>
  );
}

export default Item;
```

[[↑] Back to top](#table-of-contents)

## Redux Store
index.js
```js
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./store/reducer";
import App from "./App";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

App.js
```js
import React, { Component } from "react";
import HOCCounter from "./components/Counter/Counter";
import HOCTdList from "./components/TdList/TdList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HOCCounter />
        <HOCTdList />
      </React.Fragment>
    );
  }
}

export default App;
```

action.js
```js
//COUNTER
const incAction = () => {
  return {
    type: "INCREMENT",
  };
};
const decAction = () => {
  return {
    type: "DECREMENT",
  };
};
const oddAction = () => {
  return {
    type: "ODD",
  };
};
const resetAction = () => {
  return {
    type: "RESET",
  };
};
const timerAction = () => {
  return {
    type: "TIMER",
  };
};

let timer;
export const timerUpdate = () => (dispatch, getState) => {
    clearInterval(timer);
    timer = setInterval(() => {
        dispatch(incAction());
    }, 1000);
  }

export const timerStopUpdate = () => (dispatch, getState) =>
  clearInterval(timer);


//TO-DO LIST
const textAction = (item) => {
  return {
    type: "TEXT",
    payload: item,
  };
};

const addAction = () =>  (dispatch, getState) => {
  const inputText = getState().tdListReducer.text;
  dispatch({
  type: "ADD",
  payload: inputText, 
    })
};

const deleteAction = (id) => {
  return {
    type: "DELETE",
    payload: id
  };
};

const sortAction = (value) => {
  return {
    type: "SORT",
    payload: value,
  };
};

//Visibility
const visibilityAction = () => {
  return {
    type: "CHECK",
  };
};

export {
  incAction,
  decAction,
  oddAction,
  resetAction,
  timerAction,
  textAction,
  addAction,
  deleteAction,
  sortAction,
  visibilityAction
};
```
reducer.js
```js
import { combineReducers } from "redux";

//COUNTER
const COUNT_INIT_STATE = {
  counter: 0,
  isRunning: false,
};

const counterReducer = (state = COUNT_INIT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ODD":
      return {
        ...state,
        counter: state.counter % 2 !== 0 ? state.counter + 1 : state.counter,
      };
    case "RESET":
      return {
        ...state,
        counter: (state.counter = 0),
      };
    case "TIMER":
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    default:
      return state;
  }
};

//TO-DO LIST
const TODO_INIT_STATE = {
  todo: ["Study Redux", "Do Homework"],
  text: "",
};

const tdListReducer = (state = TODO_INIT_STATE, action) => {
  switch (action.type) {
    case "TEXT":
      return { ...state, text: action.payload };
    case "ADD":
      return {...state, todo: [...state.todo, action.payload], text: ""}; 
    case "DELETE":
      return { ...state, todo: state.todo.filter((item, index) => index !== action.payload)}
    case "SORT":
      if (action.payload === "asc") {
        const ascList = state.todo.sort((a, b) => a.localeCompare(b));
        return { ...state, todo: [...ascList]};
      } else if (action.payload === "desc") {
        const descList = state.todo.sort((a, b) => b.localeCompare(a));
        return { ...state, todo: [...descList]};
      }
      break;
    default:
      return state;
  }
};

//Visibility
const VISIBILITY_INIT_STATE = {
  checked: false,
};

const visibilityReducer = (state = VISIBILITY_INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK":
      return {
        checked: !state.checked,
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
  tdListReducer,
  visibilityReducer
});

export default rootReducer;
```

[[↑] Back to top](#table-of-contents)

## Redux Counter
Counter.js
```js
import React, { Component } from "react";

import Card from "../UI/Card";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import ContentContainer from "../HOC/ContentContainer";

class Counter extends Component {
  render() {
    return (
      <Card>
        <Count />
        <ButtonRow />
      </Card>
    );
  }
}

const HOCCounter = ContentContainer(Counter);
export default HOCCounter;
```

ButtonRow.js
```js
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function ButtonRow(props) {
  function async() {
    setTimeout(() => {
      props.incHandler();
    }, 1000);
  }

  if(props.isRunning) {
    props.timerUpdate();
  } else {
    props.timerStopUpdate();
  }

  return (
    <div className="App">
      <button onClick={props.incHandler}>Increment +1</button> <br />
      <button onClick={props.decHandler}>Decrement -1</button> <br />
      <button onClick={props.oddHandler}>Increment-If-Odd</button> <br />
      <button onClick={async}>Async-Inc</button> <br />
      <button onClick={props.resetHandler}>Reset</button> <br />
      <button onClick={props.timerHandler}>
        {props.isRunning ? "TIMER STOP" : "TIMER START"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isRunning: state.counterReducer.isRunning,
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch(actions.incAction()),
  decHandler: () => dispatch(actions.decAction()),
  oddHandler: () => dispatch(actions.oddAction()),
  resetHandler: () => dispatch(actions.resetAction()),
  timerHandler: () => dispatch(actions.timerAction()),
  timerUpdate: () => dispatch(actions.timerUpdate()),
  timerStopUpdate: () => dispatch(actions.timerStopUpdate()),
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonRow);

export default ConnectedCounter;
```

Count.js
```js
import React from "react";
import { connect } from "react-redux";

function Count(props) {
  return (
    <div>
      <h1>COUNTING</h1>
      <h2>Current Count: {props.counter}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter,
});

export default connect(mapStateToProps)(Count);
```

[[↑] Back to top](#table-of-contents)

## Redux To Do List
TdList.js
```js
import React, { Component } from "react";

import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import ContentContainer from "../HOC/ContentContainer";

class TdList extends Component {
  render() {
    return (
      <Card>
        <InputField />
        <ItemList />
      </Card>
    );
  }
}

const HOCTdList = ContentContainer(TdList);
export default HOCTdList;
```

InputField.js
```js
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

const InputField = ({ text, textHandler, addHandler, sortHandler }) => {
  const handleChange = (e) => {
    textHandler(e.target.value);
  };

  const handleAdd = (e) => {
    addHandler(e.target.value);
  };

  const handleDropdown = (e) => {
    sortHandler(e.target.value);
  };

  return (
    <div>
      <h1> TO-DO LIST </h1>
      <input
        type="text"
        value={text}
        placeholder="Enter Task"
        onChange={handleChange}
      />

      <button onClick={handleAdd}>ADD</button>
      <select onChange={handleDropdown}>
        <option>***sort***</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};
const mapStateToProps = (state) => ({
  text: state.tdListReducer.text,
});

const mapDispatchToProps = (dispatch) => ({
  textHandler: (item) => dispatch(actions.textAction(item)),
  addHandler: (todo) => dispatch(actions.addAction(todo)),
  sortHandler: (value) => dispatch(actions.sortAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
```

ItemList.js
```js
import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function ItemList(props) {
  if (props.todo.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.todo.map((item, index) => (
        <Item id={index} key={index} item={item} onDelete={props.deleteHandler}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.tdListReducer.todo,
});

const mapDispatchToProps = (dispatch) => ({
  deleteHandler: (id) => dispatch(actions.deleteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
```

Item.js
```js
import React from "react";

function Item(props) {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={() => props.onDelete(props.id)}>x</button>
      </li>
    </div>
  );
}

export default Item;
```

[[↑] Back to top](#table-of-contents)


## Hooks Counter
```js
export default function App() {
  const [time, setTime] = useState(0);
  const [show, setShow] = useState(() => initValue());

  function changeTime() {
    setShow(!show); //this.setState - async - batch multiple
    console.log(show); // show => false (delay because setSate is async)
  }

  useEffect(() => {
    let intId; //initiate the intId variable here so we can access it due to the scope if we declare the variable below
    if (show) {
      intId = setInterval(() => {
        //we can use var here if we do not initially declare the varibale
        setTime((old) => old + 1);
      }, 1000);
    }
    //clean-up the interval we have not finished at previous render before the next render
    return () => {
      clearInterval(intId);
    };
  }, [show]); //re-render based on the show value

  return (
    <div>
      Time: {time}
      <button onClick={() => changeTime()}>{show ? "Stop" : "Start"}</button>
    </div>
  );
}
```

[[↑] Back to top](#table-of-contents)
 
