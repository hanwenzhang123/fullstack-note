//10/13/2021
Q1：There are two div siblings in HTML, both of them have “height 50px、width 50px、margin 50px” styles. What do they look like

Q2：There’s a JS array filled with many random number. How to remove all even numbers. 
arr.filter(number => number % 2 !== 0);

Does ‘filter’ method return a new array or the existing array. 
  -> creates a new array with all elements that pass the test

If I don’t use filter, how to remove the numbers in place
function remove_odd_numbers2(arr){
    var rv = [];
    for (var i = 0; i < arr.length; i++) {
        if (! (arr[i] % 2)) {
            rv.push(arr[i]);
        }
    }
    return rv;
}

Q3：There’s a JS function taking three parameters. Say I mistakenly passed only the first two parameters when calling it. What would happen?
  if it is number, I only passed 2 numbers to the parameter as arguments, it will return NaN.
  if it is string, the last part returns as undefined. 
  if we have default parameter set advance, it works as normally

Q4：Difference between state and props. 
If I have a parent, a child and a grandchild component, can I pass the state and callback function from Parent down to the GrandChild? 
  -> using props to child and grandchild
Is there any upper bound on the layers for passing down things? 
  -> Context API and Redux
When you pass the callback to the child, do you still need to pass it to the grandchild, in order for it to use the callback? 
  -> yes, pass down to every layer
  
Q5：React router：When you define a react router, you’d specify a component for a path. Can you pass props to the component?
  - we can create routes by wrapping with a component, so that we can easily pass props to the desired component 
<Route path="/">
    <Home name="Sai" />
</Route>
  
Q6：You know “npm start”, when you’re done developing, what would you do or someone else is going to take care of your code? 
  
  Difference between npm start and npm build? 
  
  When you run build, say it creates a dist directory. When you run the server, do you need to dist only, or you have to get the source code?
  
  npm start - just start the app
  npm build - more like deploy your app to the server
  
Q7：Say you are working on production and find an issue, how do you debug?
- Recognize that a bug exists. (understand the stack trace)
- Isolate the source of the bug. (Make Good Use of Breakpoints)
- Identify the cause of the bug.
- Determine a fix for the bug.
- Apply the fix and test it.
  
Q8：Your react component renders a list of data with thousands of items. 
When you tick the checkbox attached to any data item, the page respond slowly. 
Is the issue caused by the data consuming a lot of memory, or by the DOM render. How do you solve the issue.


10/22
Highlight all the even elements (pseudo element)
Remove all the even numbers from array
State & Props
VirtualDom
How to resolve page slow loading caused by numerous requests
Difference between npm start & build? (didn’t hear the Question clearly)
What part is required for the server part of the application


10/26
Ecosystem Immutable JS

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

 
Q3 asynchronous things in redux?

 
 10/26 - Judy
Click and scrolling stuck whats the solution?
What’s the reason causing the stuck, dom or rendering
Application build, steps to have the application run?
Render on DOM, cause issue - JS single thread, cause threading issue
Deployment?? - Webpack config, dockerfile
npm build - deploy project on web
File type other than .js .css
React library, internal library?
 
10/26 - Doug
Margin collapse - display as the larger one
Only Even number - filter - const oddArr2 = filter(arr, num => num % 2 === 0);
Using splice to change array - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
State vs props - State and props are immutable, props pass value from parent to children
Child to parent - use callback
React Route
npm start - start local server
npm production? 
Debounce and throttle
