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
// Array.isArray (a method to check if a variable is an array)
// Bracket Access - starts from 0 index
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

## Object
#### Four ways to create an object:
- Object Literals
- New operator or constructor
- Object.create method
- Class

## API
#### What is the difference between GET and POST?
- GET requests data from a specified resource
- POST sends data to a server to create/update a resource
