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

## Table of Contents
- [String](#String)
- [Array](#Array)
- [Object](#Object)
- [Class](#Class)
- [Implementation](#Implementation)

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
 
