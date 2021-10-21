10/21
Q1. Introduce yourself
Q2. Explain event loop
- The event loop is a constantly running process that monitors both the callback queue and the call stack

Q3. Getter and setter
- data encapsulation
- used to protect your data, particularly when creating classes. 
- The constructors are used to initialize the instance variable of a class or, create objects. 
- The setter/getter methods are used to assign/change and retrieve values of the instance variables of a class

Q4. How to import a function from another file
- import & export
//file1.js
let msg = "Hello World!";
const PI = 3.14; 
function addNumbers(a, b){ return a + b; }
export { msg, PI, addNumbers }; // Exporting variables and functions

//file2.js
import { msg, PI, addNumbers } from './main.js'; // Importing variables and functions
console.log(msg); // Prints: Hello World!
console.log(PI); // Prints: 3.14
console.log(addNumbers(5, 16)); // Prints: 21

Q5. Difference between arrow function and normal function. How to choose between them.
- arrow functions do not have their own this, no needs to bind its own this
- Do not have arguments
- Can’t be called with new

Q6. How to clone an object
const food = { beef: '🥩', bacon: '🥓' }
// "Spread"
{ ...food }
// "Object.assign"
Object.assign({}, food)
// "JSON"
JSON.parse(JSON.stringify(food))

Q7. Given an integer array, how to print/filter only positive numbers
const filtered = arr.filter(e => e > 0).sort();

Q8. Difference between forEach and filter
- forEach just loop over the array and executes the callback
- filter executes the callback and check its return value, filters the array based on boolean, will return an array

Q9. Given an number array, how to deduplicate


Q10. Use case of flex box and css grid
- Grid is for layout, Flexbox is for alignment
- flex: small design to implement, align elements, content-first design
- grid: complex design to implement, a gap between block elements, overlap elements, layout-first design

Q11. Pros and cons between SVG icon and icon font
- icon fonts are treated as a piece of text by the browser
- SVGs are treated as an image / graphics with built in semantic elements – like < title > and < desc > that makes it accessible to screen reader 

 
