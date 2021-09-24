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
- pop - Removes from the End of an Array
- shift - Removes from the beginning of an Array
- splice - removes from a specific Array index
- filter - allows you to programatically remove elements from an Array

#### Add Elements
- push() method adds new items to the end of an array
- unshift() method adds to beginning of the array
- arr.splice(index, 0, item);

#### check if it is an array
`Array.isArray()` -  return boolean, check whether an object (or a variable) is an array or not. 

#### empty an array in JavaScript
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

## Object
#### 4 ways to create an object:
- Object Literals
- New operator or constructor
- Object.create method
- Class

#### 3 ways to clone objects:
- Spread Operator - `{ ...food }`
- Object.assign - `Object.assign({}, food)`
- JSON - `JSON.parse(JSON.stringify(food))`

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
- Object.entries(): Returns an array containing all of the key value pairs of a given object's own enumerable string properties.
- Object.keys(): Returns an array containing the names of all of the given object's own enumerable string properties.
- Object.values(): Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
- Object.prototype.hasOwnProperty(): returns a boolean indicating whether the object has the specified property as its own property.

#### check if JavaScript Object is empty
```js
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
```

#### clear a JavaScript Object
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

#### check if it is an object
`typeof yourVariable === 'object'`

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

## API
#### What is the difference between GET and POST?
- GET requests data from a specified resource
- POST sends data to a server to create/update a resource


#### client-side rendering vs server-side rendering

#### object oriented programming vs functional programming
