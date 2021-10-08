//Question 1
//convert a counter from class component to functional component
const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={incrementCount}>{count}</button>
        </div>
    )
}


//Question 2
//implement a divide function
function divide(a,b) {
  let count = 0;
  while (a >= b) {
    a = a-b;
    count += 1;
  }
  return count;       //return a / b;
}

assignment.log(divide(12,3));


//Question 3
//Example 1: using useEffect() for counter
import {useState, useEffect} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count+1)
    }, 1000)
  }, [count])
    
//   useEffect(() => {
//     setCount((prev) => prev + 1) 
//   })
  
  return (
      <div>
        <h1> {count} </h1>
      </div>
  )
}

export default Counter;


//Example 2: using useEffect() for counter
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;

//Example 3: using useEffect() for counter
export default function App() {
    const [counter, setCounter] = useState(0);
    const pRef = useRef(null);
    
    useEffect(() => {
        pRef.current.innerHTML = counter
    }, [counter])
    
    return (
      <div>
        <p ref={pRef}></p>
        <label>{counter}</label>
        <button onClick={() => (setCounter(counter + 1))}>+</button>
      </div>
    );
}


//Questions
Production build vs Development build
- production and development build come into the picture because of performance impact in real life deployed the application.
- Development build: for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
- Production build: runs in production mode which means this is the code running on your client machine. 
    The production build runs uglify and builds your source files into one or multiple minimized files. 

Why production build
- Production Build has ugly, minified(compressed) version of your javascript code
- this makes rendering of file on end user browser very quick and performance enhancing.
- rendering development build js files on UI will take more time as compared to production version 
- which production is very crisp, compact, compressed, uglified for better user experience and loading on UI.

What does webpack do
- Webpack is a static module front-end bundler for JavaScript applications, bundle your JavaScript files together.
— It takes all the code from your application and makes it usable in a web browser.
- It takes different dependencies, creates modules for them, and bundles the entire network up into manageable output files. 
- Great for working with Single Page Applications (SPAs)
    
How to improve react app performance
-HOC
-memo/PureComponent (shouldComponentUpdate) - lifecycle
-reduce unnecessary re-rendering

How to do responsive design
- for responsive design, change the styling once the size reaches a certain value
- <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

How to find and fix the layout bugs for responsive design for different devices

How to test App and get test coverage


How to test production build and fix bugs on production build
1. Establish a standardized process.
2. Make plans to quickly fix defects.
3. Practice time management.
4. Implement benchmarks.
5. Prioritize test code.
6. Perform chaos engineering.
7. Move fast and break things.
8. Adopt a mission-critical mentality.
9. Mature the product.


Test CSS styles
Test APIs
Front-end API errors handling
MongoDB? NodeJS? Backend?
