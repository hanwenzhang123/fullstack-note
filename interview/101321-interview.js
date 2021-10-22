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

Q3 asynchronous things in redux?
Q4.Explain Event loop

