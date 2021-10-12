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
Responsinator -> See what your site looks like in different viewports with Responsinator.
Screenfly -> Check how your website appears on different devices, including TVs, with Screenfly.
Google DevTools Device Mode -> simulate mobile devices within the Chrome browser
Google Resizer ->  include advice about using breakpoints, responsive grids, surface behaviours and user interface patterns
Ghostlab -> paid-for app, test your website on a multiplicity of browsers and mobile devices simultaneously
Browser Stack -> paid-for app, full-featured testing tools around
CrossBrowserTesting -> all-in-one platform allows you to run parallel automated tests, compare screenshots visually, swipe and interact with your website on real-world devices, and remotely debug your code as you go.

How to test App and get test coverage
Step 1) The total lines of code in the piece of software quality you are testing.
Step 2) The number of lines of code all test cases currently execute.

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
- You could use Selenium, which is a web testing framework. This way you could assert what styles are to be applied to elements in the DOM etc
- Automatic CSS testing is the most reliable way of detecting breaking changes after a CMS update, or after updating plug-ins and themes. 
    - Syntax checking
    - CSS Lint
        - $ npm install -g csslint
        - $ csslint [site folder]/styles/*.css
    - Image diffs
    - PhantomCSS
- If you are using Google Chrome, navigate to File > View> Developer > Developer Tools.

Test APIs
- API testing is a software testing practice that tests the APIs directly — from their functionality, reliability, performance, to security.
- RapidAPI.  collaborate on APIs using RapidAPI for teams with external and internal APIs.
- REST-assured. REST-assured is considered as one of the best tools for testing APIs in Java. 
- Postman. offers a web version as well as a desktop app, and can also be used for testing API services. 
- SOAPUI is not just a functional Api Testing tool but also lets us perform non-functional testing such as performance and security test.

Front-end API errors handling
https://www.staticapps.org/articles/front-end-error-handling/



MongoDB? NodeJS? Backend?
 
