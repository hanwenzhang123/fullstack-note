---
title: Frontend Miscellaneous (Note Part4)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## JS Cheatsheet (Note Part3)
https://github.com/hanwenzhang123/frontend-note/blob/main/03-note/README.md

## Boilerplate Code (Note Part5)
https://github.com/hanwenzhang123/frontend-note/blob/main/05-note/README.md

## Table of Contents
- [Frontend](#frontend)
- [Backend](#backend)
- [Clone](#Clone)
- [OOP](#OOP)
- [API](#API)
- [System Design](#system-design)
- [Sockets](#Sockets)
- [Authentication](#authentication)
- [Performance](#performance)
- [Testing](#testing)
- [SDLC](#SDLC)

## Frontend

#### React 18 New Features
- Concurrency control with the Transition API (Concurrency is the ability to execute multiple tasks simultaneously)
- Much faster page loads for server-side rendering with Suspense API
- Automatic State Batching of function calls and events to improve in-app performance (batching: collects all and then executes them together, avoids unnecessary re-renders)
- Streaming Server Renderer, converting data from a stream into something visual. 

#### Client-Side Rendering vs Server-Side Rendering
Client-side rendering
- It manages the routing dynamically without refreshing the page every time a user requests a different route. 
- Your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it. 
- React uses client-side rendering.

Server-side rendering
- convert HTML files on the server into a fully rendered HTML page for the client.
- When a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then construes the content and displays the page.

#### The Different Kind of Frontend Frameworks, Advantage, Limitation
Pros
- easy and quick to get started
- component based reusibility
- good looking consistent UI design 
- code is reliable and tested
- help from strong community

Cons
- updates can introduce issues
- easy to get started, but require more time down the road to add features and customizations. 

#### React Angular Vue
- React data flows only in one way and is easy to debug.
- Angular data flows both ways and hence debugging is often difficult.
- Vue mainly uses HTML templates with some JSX, while React only uses JSX that allows you to insert HTML directly into JS code.
- React alway passes the data to view, and to update the view, you need to use a callback to update it -> different from react and angualr

#### How to Share Components with Others?
shared component architecture
-  how to develop components independently but avoid the overhead of too many repositories
-  how to version, publish and manage each component individually
-  how to help others discover and adopt the components

build, distribute and collaborate over components to build multiple projects and applications
- Bit + Bit.dev - develop, build and test individual components in the library in complete isolation - https://github.com/teambit/bit 
- When you update a single components, Bit “knows” which other components depend on it, and help you update all the component that are impacted by the update.
- Lerna - manage multi-repository structure inside a single repository - https://github.com/lerna/lerna
- Multiple packages - create new Git repo for every piece of code you want to reuse
- A Single library package for many components - put a few dozen shared components in a single repo

[[↑] Back to top](#table-of-contents)


## Backend

#### npm
- npm init: create a package.json file
- npm start: start a package, start local server, start the development server environment
- npm install: install dependencies
- npm run dev: start off the development server like using nodemon if downloaded
- npm run build: bundles the app into static files for production, build application, minify all our files and gives us a production version of our application that we are deploy to a server somewhere and access on the internet. Runs the build field from the package.json scripts field.
- npm test: start the test runner
- npm run eject: removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can not go back.

#### Basic ExpressJS Setup
```js
var express = require('express');
var router = express.Router();
let dbConfig = require('../databaseForClickMap/db');	//Database
require('dotenv').config();		//Loads environment variables from .env file.
router.post('/api/analytics/campaign_count', (req, res, next) => {
  try {
	let redis = dbConfig.redis();		//redis - caching - improve performance
	let vertica = dbConfig.vertica();	//SQL database management system
  } catch(e) {}
})
module.exports = router;
```

#### Combining Frontend Code with Backend Code or SQL
1. Setting up the database. 
2. Setting up the server. 
3. Setting up the routing. 
4. Adding data to the database. 
5. Getting data from the database. 
6. Updating data on the database.

Node.js
1. Step 1: Create your Node (Express) backend
2. Step 2: Create an API Endpoint
3. Step 3: Create your React frontend
4. Step 4: Make HTTP Requests from React to Node

#### Database
- SQL is relational database
- MongoDB db is nosql database
- SQL is more for structural data model
- NoSQL data is more for a flex data model

#### SQL DMS
- SingleStore - distributed, relational, SQL database management system
- Vertica - analytic oftware, SQL database management system

#### MongoDB vs MySQL
- In terms of performance, MongoDB is faster than MySQL due to its ability to handle large amounts of unstructured data when it comes to speed.

#### What is SQL Injection
- a code injection technique that might destroy your database (used with the goal of retrieving sensitive data)
- one of the most common web hacking techniques, it is the placement of malicious code in SQL statements via web page input.

#### How to Prevent SQL Injection Attacks
- stolen credit cards or password lists, happen through SQL injection vulnerabilities
- approach: controlling and vetting user input to watch for attack patterns
- input validation
- sanitize data by limiting special characters
- enforce prepared statements and parameterization
- use stored procedures in the database
- actively manage patches and updates
- web application firewall, raise virtual or physical firewalls

[[↑] Back to top](#table-of-contents)


## Clone

#### Shallow Comparison & Deep Comparison
- Shallow strategy compares superficially 2 operands equality — 1st level in depth only,
- Deep strategy compares the equality from all depth levels.

#### Deep Clone vs Shallow Clone
Deep Clone - no more contact with previous reference, they are not related, any modification would not influence original copy

2 ways to implement deep clone
1. third party lib => _lodash.cloneDeep()
2. JSON parse and stringify
```js
//1. Lodash
// var _ = require("lodash");
import { cloneDeep } from "lodash";
const obj = { x: 1 };
const newObj = _.cloneDeep(obj);
console.log(newObj);  //{x: 1}

//2. JSON parse and stringify 
//completely convert to a raw string and convert back, so every layer will be completely different
const newObj2 = JSON.parse(JSON.stringify(obj));
console.log(newObj2); //{x: 1}
```

Shallow Clone - reuse previous reference, certain sub-values are still connected to the original variable
- Destructuring assignment ...
```js
// value => primitive type -> Number String Boolean Null Undefined
const obj = { x: 1 } };
const newObje = {...obj}; //shallow copy
newObj.x = 9;
console.log(newObj);  //{x:9)	
console.log(obj); //{x:1)   //original object not touched, different addresses in memory

// value => non-primitive -> Object Array
//assigning everything in a different type but because the value type is different, it is an object
//there is a reference pointer points to the object
const obj = { x: { y: 1 } };  //add one more layer
const newObj = {...obj}; //shallow copy - only restirct to the shallow level
newObj.x.y = 9;
console.log(newObj); //{x: { y: 9 } - only direct properties on the object point to different address, nested properties point to the same
console.log(obj);  //{x: { y: 9 } - also change to 9, both get update
```

#### Write your own code of deep clone
```js
function copy(obj) { 
  if (!obj) return obj; 
  let v; 
  let res = Array.isArray(obj) ? [] : {};   //check if it is array
  for (const k in obj) { 
    v = obj[k];   	//iterate each item in object, and store to v
    res[k] = (typeof v === "object") ? copy(v) : v;   //recursion, if v is object then copy(v), stores in res[k]
  } 
return res; 
}
```


## OOP

#### Object Oriented Programming vs Functional Programming
Functional Programming
- attempts to avoid changing state and mutable data (immutable data structure)
- the output of a function should always be the same given the same exact inputs to the function, relies on arguments of the function

Object Oriented Programming
- Group related variables and functions in a unit called objects
- Using objects to represent things you are programming about, variable as properties, function as methods
- The objects hold data about them in attributes which objects are manipulated through methods that are given to the object.

Examples
- FP: we use FP when we expect to receive the same output when using the same input, like "functional operations"
- OOP: A class is an abstract blueprint used to create more specific, concrete objects. 
- Classes often represent broad categories, like Car or Dog that share attributes.

4 Pillars in OOP: Encapsulation, Abstraction, Inheritance, Polymorphism
- Encapsulation is the ability to hide variables within the class from outside access
- Abstraction shows only essential attributes and hides unnecessary information -> hiding the unnecessary details from the users
- Inheritance
-  reduces redundant code `class Teacher extends Person { constructor(subject, grade) { super(); this.subject = subject; this.grade = grade; } }`
- Polymorphism means a single action can be performed in many forms, get rid of if else and switch, use `element.render()`

Benefits of OOP
- Encapsulation: reduce complexity + increase reusibility
- Abstraction: reduce complexity + isolate impacts of change
- Inheritance: elimate redundant code
- Polymorphism: refactor ugly switch case statement

[[↑] Back to top](#table-of-contents)


## API

#### API
- Application Programming Interface (API) - a connection that allows two applications to talk to each other
- enabling applications to exchange data and functionality easily and securely
- Your Server -> Request through API -> Someone Else's Server -> Response through API -> Your Server

#### REST API
- use/setup http endpoint to allow us access and doing create/read/update/delete data in the database
- `app.get('/tasks/:id', (req, res) => {}`

#### AJAX
- Asynchronous JavaScript And XML, making request behind the scene
- web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page
1. Read data from a web server - after a web page has loaded
2. Update a web page without reloading the page
3. Send data to a web server - in the background

#### JSON
- JavaScript Object Notation (JSON) - text-based format for representing structured data 
- commonly used for transmitting data across a network , `{}` object, `[]` array, "key" "value" pairs, seperated by `,`
- Client Browser -> Request GET -> Your Server -> Request through API (Path, Parameter) -> Someone Else's Server -> Response through API (DATA) -> Your Server -> Response POST -> Client Browser

`JSON.parse()` to convert the string into a JavaScript object
- `var obj = JSON.parse(jsonData);`

`JSON.stringify()` to convert a JavaScript object into a JSON string
- `const jsonData = JSON.stringify(obj);`

Limitation: we cannot copy the functions that are available in the target objects

#### Fetch API
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
```

Fetch Data from an API with React
- Create a React state variable to store data - useState()
- Make the API request and store the data - fetch data
- Render the returned data - useEffect()
```js
import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {		// we will use async/await to fetch this data
      const response = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await res.json();
      setBooks(data) ;		// store the data into our books variable
    }
  }, []); // <- you may need to put the setBooks function in this array

return (
  <div>
    <h1>Game of Thrones Books</h1>
    {books && (		{/* display books from the API */}
      <div className="books">
        {books.map((book, index) => (	 {/* loop over the books */}
          <div key={index}>
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>
    )}
  </div>
)
}
```

[[↑] Back to top](#table-of-contents)


## System Design
https://github.com/hanwenzhang123/interview-note/blob/main/coding-interview/28-design-question.js

#### Design Patterns
- Singleton Pattern: ensures only a single instance of an object exists within a system at any given time
- Micro-services: focuses on building small independent services that perform a single task well.
- Pipeline design patterns: set of automated processes and tools that allows both developers and operations professionals to work together to build and deploy code to a production environment for CI/CD in a deployable state at any point.
- Model-View-Controller (MVC): how the code should be organized and how the different parts of an application are separated for proper readability and debugging. Model is the data and the database. View is the user interface and what the user sees. Controller is the main link between Model and View.

#### Component File Structure
- For the file structure, you can group files and split components by features or routes in the source code, or by the types
- view components (display information and emit user input via callbacks that forwards data from child to parent)
- control components (store state related to partial input that keeps track of actions the user has taken, lifecycle, ref to DOM)
- controllers (business logic doesn’t need to be placed in React components, redux store)
- container components (HOC, APP, Redux connect)
- In the source folder, you can have components, assets (pictures), store (context), routes, server (api, socket.io), and more as needed, but try to avoid too much nesting. 
- In the components folder, you can have sub-components for each feature present in the App like UI, card (props.children), styled components (.style.js) and utils file.

#### Micro-services Architecture
- building many individual different services that each do a single task and do one thing well
- splits large applications into much smaller pieces that exist independently of each other.
- like one server for chat server, one for caching, one do node.js only, one do Golang for concurrent task, one for message board
- a flexible and efficient approach to designing software systems that are made up of small independent services that each have a specific and well-defined purpose.
- consider => what goes into building, deploying, and updating an enterprise application => and break that work into more manageable, efficient batches.

#### What is Docker?
- Docker scales (structures) your apps very easily, comes with a whole set of tools for deploying across many clusters you can take your instances each micro-services that you have in each container (it contains your app in a certain space), and then allocate many machines to them.
- You can specify how many of the resources of each machine you want, specify rules about how they should scale, what should happen if they crash, make everything scalable

[[↑] Back to top](#table-of-contents)


## Sockets

#### What is socket?
- A socket is one endpoint of a two way communication link between two programs running on the network (think of chat apps)
- A socket consists of the IP address of a system and the port number of a program within the system. 
- The IP address corresponds to the system and the port number corresponds to the program where the data needs to be sent

#### What is WebSockets? 
- Web Socket, establishing a real time wwo way communication between the client and server (via TCP/IP). 
- persistent bi-directional connection between a client and server that provides a two-way full-duplex interactive communications channel that operates over HTTP through a single TCP/IP socket connection. 
- Unlike HTTP, where you have to constantly request updates, with websockets, updates are sent immediately when they are available.

#### Why WebSockets? 
- For instance, when data is changing constantly, you can refresh the broswer every few minutes to send the HTTP request, or use setInterval every few seconds to pull the server for the new data, but these are not ideal for real-time data, like a chat application.

#### How WebSockets work?
- Client sends the HTTP request to the server to ask for open the connection, if the server agrees, it will send the 101 switching protocols response, where tcp/ip connection is locked open, allowing bi-directional messages to pass messages between the two parties, the connection stays open until one connection drops. 
- Full-duplex connection, a tele-communication term that defines how a phone line works that two parties can send messages and talk at the same time. 

#### WebSockets Implementation
```js
//server
const WebSocket = require("ws")
const server = new WebSocket.Server({port: "8080"})	//implement a server in port 8080
server.on("connection", socket => {	//connection from the client, then web socket object as a call back
	socket.on("message", message => {	//incoming messages, callback to listen to the message
		socket.send(`Hello ${message}`)		//send the message back to the client
	})
})

//app
const server = new WebSocket.Server('ws://localhost:8080');
socket.onmessage = ({ data }) => {	//listen for messages
	console.log("Message from server ", data);
}
document.querySelector("button").onclick = () => {
	socket.send("hello")
}
```

#### What is socket.io? 
- A library built on top of Web Socket for client server communication, send and receive data in real time.
- enables real time, bi-directional, event-based communication between web clients (runs in the browser) and servers (node.js).

#### Why socket.io?
- WebSockets do not emit to all clients (broadcast the message to multiple users simultaneously)
- For example, group chat room where multiple users passing messages back and forth

#### Real-time Features
- Firebase: APIs + server + NoSQL database, connect to WebSocket, we can store and sync the data between our users in real-time, each message is a document in the firebase database along with timestamp and user id
- Apollo GraphQL: implementation of GraphQL that can transfer data between the cloud (server) to the UI of your app
- Pusher: real-time bi-directional hosted APIs

#### socket.io Implementation
```js
//server
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) =>     {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );

//app - <script src="https://cdn.socket.io/socket.io-3.0.0.js"></script>
const socket = io('ws://localhost:8080');

socket.on('message', text => {	//listen to the incoming message 
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)
});

document.querySelector('button').onclick = () => {	//send out text
    const text = document.querySelector('input').value;
    socket.emit('message', text)
}
```


## Authentication

#### What is Authentication
- Authentication is needed if content should be protected, not accessible by everyone. 

#### Authentication is a two-step process: 
1. Get access/permission 
- Client (browser) - Request (with user credentials) - Server - Response (yes/no). 

2. Send the request to the protected resource 
- Server-side Sessions: server grants your access, stores unique identifier on server, sends same identifier to the client, client sends identifier along with requests to protected resources. Backend generates the jwt token, then sends the generated token to the client, then all the following requests will contain the token.
- Authentication Tokens: send credentials to server, and the server validates credentials, comparing the combination to what is stored in the database, if that is valid, then the server creates a permission token, create but not store "permission" token on server (server is stateless), send token to client, client sends token along with requests to protected resources

#### JSON Web Token
- When working with "Authentication Tokens", tokens are typically created in the "JSON Web Token" format
- Those "tokens" are just long strings which are constructed by an algorithm that encodes data into a string (with the help of a private key, only known by the server). 
- You can store tokens in localStorage and sessionStorage. 

#### Cross-domain Issue
- A security restriction that prevents requests being made from one origin to another, like different protocol, domain, sub-domain, port. 
- It is possible to make cross-origin requests either using JSONP (if you trust the server!) or using a CORS request (Cross-Origin Resource Sharing) which both client and server must agree to.

#### Cross-Site Request Forgery
- an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. Anti-CSRF tokens are considered the most effective method of protecting against CSRF.

#### Auth0 
- React Authentication Library
- npm install @auth0/auth0-react
```js
//Configure the Auth0Provider component
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="YOUR_DOMAIN"
    clientId="YOUR_CLIENT_ID"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

//Login
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
```

[[↑] Back to top](#table-of-contents)

## Performance

#### How do you generally improve performance?
- use uglify and minify to reduce the bundle size
- use lazy loading to improve the page loading speed.
- `React.lazy` and `React.suspense` support lazy loading with webpack.
- use content delivery network to improve the loading speed.
- use shouldComponentUpdate to improve the component’s rendering performance

React
-HOC
-memo/PureComponent (shouldComponentUpdate) - lifecycle
-reduce unnecessary re-rendering
  
Redux
-Thunk
-Re-selector
  
JS
-Event Delegation (allows you to avoid adding event listeners to specific nodes)

CSS
-Animation
-image-sprite (reduce requests)
-image compression
  
HTML
-Empty HTML
-Style on the top, script down/defer/async

Dynamic Programming (Caching)
- Cache stores the function for reusibility
- Redis: in-memory data structure store (server), used as a NoSQL key–value persistent database, cache, and message broker.

#### Minification - Minifier/uglifier 
- make your code prettier, make it more efficient during compiling phase
- remove unnecessary code 
- rename to a more efficient version for machine
- save time onloading

```js
  const aaaaa=1;
  console.log (aaaaa);
  // ===>
  const a=1; console.log(a)
```

#### What is Webpack 
- A static module bundler for front-end development for JS applications -> bundle your styles (bundle your JavaScript files together)
— It takes all the code from your application and makes it usable in a web browser.
- It takes different dependencies, creates modules for them, and bundles the entire network up into manageable output files. 
- Great for working with Single Page Applications (SPAs)
- Provide similar functionality: Gulp, Grunt, babel, parcel, browserify, npm, and requireJS.

#### Webpack Examples
HMR(Hot Module Replacement)
- Update the page directly without a fully page reload - more efficient dev environment and will not loss the current state

Tree Shaking
- Get rid of unnecessary code
```js
if (false) {console.log ("Never Reached")}    //dead code elimination
const c = x + 1;
return c;   //=> return x+1
```

Code Splitting
- Split your modules properly according to the dependency graph

Lazy Loading
- Load certain part of the component tree only when its in use.
- Split your code at logical breakpoints, and then loading it once the user has done something that requires a new block of code. 
- Wrap the component inside with lazy load to delay the loading and improve performance

#### `React.lazy` and `React.suspense` 
Both support lazy loading with webpack.
- `.lazy()` - a built-in method that will help us with code splitting.
- React.lazy(() => import('./pages/NewQuote')) - the function we pass to lazy will be executed by React when this new quote component is needed.
- `<Suspense> ... </Suspense>` - We need to wrap this around the code, where we use React lazy.

#### loadsh
Debounce and throttle are techniques to control how many times we allow a function to be executed over time 
- debounce -> search bar (auto-complete)
- throttle -> scrolling / resizing page
- debounce / throtte -> web performance improvement -> control the number of times the function will be called

debounce 
- setTimeout
- continuously execute when event change ends, only execute once after event change stop
- like a search bar, you enter text, once yoou finish, wait for the timer done, it will send the request only one time to UI after the time period
- “group” multiple sequential calls in a single one, only send the final one
- `const debouncedFunc = _.debounce(fetchAPI, 100); onUserInput => { debouncedFunc() }` - shorter than a 100 

throtte 
- setInterval
- continuously execute when event change happens
- like resizing page, you send requests to the UI with a timer interval, will be sent no matter how many requests within the time period
- `_.throttle(fetchAPI, 100)`;

#### Virtual Scrolling
- While the user is scrolling the table, the Grid requests and displays only the visible pages.
- Import component. Import VirtualScroll from "react-dynamic-virtual-scroll". Add component as follows in your render method: 
- `<VirtualScroll className="List" minItemHeight={40} totalLength={100} renderItem={(rowIndex) => { return ( <div className="List-item"> <h3>List item: {rowIndex}</h3> </div> ); }} />`

#### Web Workers
- JS scripts running in the background threads, which are separate from the main execution thread, without affecting the performance of the page.
- web content to run scripts in an isolated thread in the browser in parallel, prevent the UI from freezing up
- `var myWorker = new Worker('worker.js');`, `myWorker.terminate();`

#### Production Build vs Development Build
- production and development build come into the picture because of performance impact in real life deployed the application.
- Development build: for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.
- Production build: runs in production mode which means this is the code running on your client machine. 
- The production build runs uglify and builds your source files into one or multiple minimized files. 

#### Why Production Build
- Production Build has ugly, minified(compressed) version of your javascript code
- this makes rendering of file on end user browser very quick and performance enhancing.
- rendering development build js files on UI will take more time as compared to production version 
- which production is very crisp, compact, compressed, uglified for better user experience and loading on UI.

[[↑] Back to top](#table-of-contents)

## Testing

#### Testing
- UI tests that are always running inside a browser or a browser like environment
- Purpose: doing testing to ensure correctness of any codebase

#### Different Kinds of Tests
- unit testing - test individual building blocks in isolation
- integration testing - test the combination of multiple building blocks
- end to end (e2e) test - test complete scenarios in your app as the user would experience them
- automation test (e2e) - simulating user behavior and make sure scenarios work from the point of view of an end user

#### What do you use for Unit Test?
Jest
- JS helper functions (logic helper)
- `x => x+1` -> pure function
- test any side effect `x => x+1`
	
Enzyme: 
- component test, render our components in a test component
- then use expect methods that we want to test whatever is rendered

#### Jest - Snapshot Testing
- useful tool whenever you want to make sure your UI does not change unexpectedly
- A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test.
- The test will fail if the two snapshots do not match
- `npm test -- --coverage` for coverage report

#### What is the coverage? 
How complete your unit test cover all the code
- 90% coverage (out of 100 lines, at least 90 lines are ran)

#### Unit Test File Example
- button.js
- button.test.js
- npm run test *.test.js

[[↑] Back to top](#table-of-contents)
  
## SDLC

#### What is SDLC?
- Software Development Lifecycle
- Requirement Analysis, Planning, Design, Build, Document, Test, Deploy, Maintain.

#### Planning
- During the planning phase, the team creates personas and determines the cost and resources required for implementing the requirements. 
- We also take the design plan seriously. Then we follow best practices in software development, code review, code style, good documentation, use automation tools, use linting tools, meaningful variable names, and more.

#### Deployment
- Before deployment, we would make sure the  application was ready for delivery, and make sure it passed all the required tests. 
- In terms of how we deliver new features, we have a devops developer dedicated to it with all the CI/CD work, managing the pipeline.

#### Agile
- We have 8 people in the team including 1 product owner and 1 scrum master. My role is the Frontend Developer focuses on building user interfaces. 
- The workflow is attending daily stand-ups, weekly sprint planning, working on the ticket that has been assigned to me, as well as attending other scrum meetings like retrospective, review, backlog refinemen
- We do an average 2-3 week development sprint cycle, plus 1 week for scoping that looks for feartures we want, and we generally keep a 3 months (quarterly) release cycle.

#### CI/CD
- Pipeline design patterns for CI/CD deployable state at any point (.circleci - config.yml)
- Use an auto CI/CD tool or platform to auto deploy, the library like Jenkins / TravisCI / GitHub actions. 
- CI - developers integrate code into a shared repository and all tests are passed and compatible with the rest, each change is small and easy to debug. code PR - tests - build - merge - acceptance test - manual/auto - deploy. 
- CD - keep your code base deployable at any point. Teams produce software in short cycles and in a sustainable way, all types of code changes are automatically prepared for a release to production. 

[[↑] Back to top](#table-of-contents)
 
