//Question 1
//Explain the following code
async function updateEditorClear(req, res) {
    const { user } = req;
    let updatedCampaign = await Campaign.findOneAndUpdate(
        { _id: req.params._id },
        {
            $set: {
                currentEditor: ""
            }
        },
        {
            upsert: true,
             new: true,
             useFindAndModify: false
        }
    );
    return res.json({
        campaign: updatedCampaign
    });
} catch (error) {
    let errorMessage = "Error: " + error;
    sendError(res, error, errorMessage);
    }
}
router.put(
    "/api/campaignsEditorClear/:_id",
    mustBeAuthenticated,        //auth middleware
    updateEditorClearTest
);
        

//Question 2
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


//Question 3
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


//Question 4
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
 

//Pratice Questions
Production build vs Development build
- production and development build come into the picture because of performance impact in real life deployed the application.
- Development build: for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
- Production build: runs in production mode which means this is the code running on your client machine. Production is after development, is what you see on the application.

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
- Responsinator -> See what your site looks like in different viewports with Responsinator.
- Screenfly -> Check how your website appears on different devices, including TVs, with Screenfly.
- Google DevTools Device Mode -> simulate mobile devices within the Chrome browser
- Google Resizer ->  include advice about using breakpoints, responsive grids, surface behaviours and user interface patterns
- Ghostlab -> paid-for app, test your website on a multiplicity of browsers and mobile devices simultaneously
- Browser Stack -> paid-for app, full-featured testing tools around
- CrossBrowserTesting -> all-in-one platform allows you to run parallel automated tests, compare screenshots visually, swipe and interact with your website on real-world devices, and remotely debug your code as you go.

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
//https://www.staticapps.org/articles/front-end-error-handling/
Most errors: 
- Input Errors: Information provided by the user is unacceptable for some reason. This includes errors from form validation, duplicate actions, uniqueness issues, resources not found, etc.
- Authorization Errors: A user is attempting to perform an action to which he/she does not have permission.
- Availability Errors: A resource that is needed to complete the user action is unavailable for some reason. This may be expected (scheduled maintenance) or unexpected (server crash!).
- Unexpected Errors: These are errors that likely indicate a bug in the application, such as unhandled exceptions.

When a JavaScript error occurs, usually one of three things happens, you must handle the errors yourself:
- The application keeps running, but something the user expected to happen does not happen. 
        The most common user response to this type of error is simply to try the action again (and again) hoping it will work this time.
- The application stops running but displays no sign that it has stopped. The user will retry the action (or try to perform a different one) to no avail.
- If the error happened early enough, the entire page may be prevented from being properly set up and the user will just see a white screen.

Ways to implement error handling in a JavaScript application:
You may define a global error handler that can display messages passed to it, or have each component or control handle its own errors.
User communication when an error occurs is vital. 
- Change Something, Try Again. The user has entered some kind of invalid input, but with a few changes the action might succeed.
- Try Again Later. Something has gone wrong, but it is likely to work again soon. Check back in a while, and if it is still not working contact support.
- Contact us. Something is wrong in an unexpected place. Get in touch with support as this is not likely to get better on its own.

AJAX Errors and HTTP Status Codes -> These can tell you much about what has gone wrong with a request
4XX codes (something is wrong with the request) and 5XX codes (something is wrong with the server).
400 Bad Request: This is generally an input error, the most common instance being invalid user input (such as a malformed email address).
401 Unauthorized: Use this error code when a user is either trying to access something without being logged in, or trying to access something they should not (such as another user's data or admin functionality).
403 Forbidden: The difference between this and 400 can be subtle, but a 403 error generally means that the server understood the request (it is not an input error) but will not fulfill it. An example of this might be the entry of an expired coupon code.
404 Not Found: The most well-known of all the error codes, this simply means that the requested resource could not be found (either because of a malformed URL or a deleted or moved resource).
409 Conflict: While mostly meant to refer to versioning conflicts (two users trying to write to the same resource), this can also be used to indicate uniqueness constraints (e.g. "email has already been taken").
500 Internal Server Error: This is the generic "something has gone wrong, but we do not know what error." It is the catch-all.
503 Unavailable: The server is experiencing an outage, either planned or unplanned.

Catching Errors
You can attach an error handler at a global level by using window.onerror. 
Once attached, your handler can override the default browser behavior allowing you to display information to the user as necessary.
window.onerror = function(message, url, lineNumber) {
  // detect if the error is something you know how to handle
  if (errorCanBeHandled) {
    // display an error message to the user
    displayErrorMessage(message);
    // return true to short-circuit default error behavior
    return true;
  } else {
    // run the default error handling of the browser
    return false;
  }
}
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror

The most important takeaway for error handling is that you need to do it. 
Any step towards informing the user when something goes wrong is a good one. 
Even an alert() box is better than a silent failure.

let num =prompt("insert a number greater than 30 but less than 40")
try { 
    if(isNaN(num)) throw "Not a number (☉｡☉)!" 
    else if (num>40) throw "Did you even read the instructions ಠ︵ಠ, less than 40"
    else if (num <= 30) throw "Greater than 30 (ب_ب)" 
}catch(e){
    alert(e) 
}


JavaScript Errors - Throw and Try to Catch
- The try statement lets you test a block of code for errors.
- The catch statement lets you handle the error.
- The throw statement lets you create custom errors.
- The finally statement lets you execute code, after try and catch, regardless of the result.

The throw statement throws a user-defined exception. 
Execution of the current function will stop (the statements after throw won't be executed), 
and control will be passed to the first catch block in the call stack. 
If no catch block exists among caller functions, the program will terminate

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}


The Error Object
- JavaScript has a built in error object that provides error information when an error occurs.
- The error object provides two useful properties: name and message.
- name: Sets or returns an error name
- message: Sets or returns an error message (a string)

RangeError	A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	A syntax error has occurred
TypeError	A type error has occurred
URIError	An error in encodeURI() has occurred
EvalError	An error has occurred in the global eval() function
InternalError   An error occurs internally in the JS engine, especially stack overflow

stack overflow: when it has too much data to handle and the stack grows way over its critical limit -> like recursion without an end point
