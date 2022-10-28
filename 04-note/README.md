---
title: Miscellaneous (Note Part4)
---

## HTML, CSS, JavaScript (Note Part1)
https://github.com/hanwenzhang123/frontend-note/blob/main/01-note/README.md

## React, Redux (Note Part2)
https://github.com/hanwenzhang123/frontend-note/blob/main/02-note/README.md

## JS Cheatsheet (Note Part3)
https://github.com/hanwenzhang123/frontend-note/blob/main/03-note/README.md

## Boilerplate Code (Note Part5)
https://github.com/hanwenzhang123/frontend-note/blob/main/05-note/README.md

## System Design (Note Part6)
https://github.com/hanwenzhang123/frontend-note/blob/main/06-note/README.md

## Table of Contents
- [NextJS](#nextjs)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [Fullstack](#fullstack)
- [Programming](#programming)
- [Sockets](#sockets)
- [Authentication](#authentication)
- [Performance](#performance)
- [Testing](#testing)

## NextJS
#### What is Next.js
- Next.js is a React framework for production created by Vercel (A fullstack framework for ReactJS)

#### Key Features & Benefits
- server-side rendering (initial load rendered by the server, great for SEO & performance)
- file-based routing (define pages and routes with files and folders instead of code)
- fullstack capabilities (backend api code using nodeJS)
- static-site generation (pre-generate a html file)
- API routes (build your own API endpoints)
- Typescript/Sass support
- smart bundling
- route pre-fetching

#### server-side rendering
- initial load rendered by the server
- pre-render React components on server which is great for SEO & performance
- then SPA handled by React for fast interactive UI, regenerated everytime for incoming reuqest

#### static-site generation
- contain full html code that is good for seo during the build process
- pre-generate a html file that can be stored that can be served by a CDN which is faster, can be cached and reused

#### data fetching for pre-rendering
Two forms of pre-rendering: 
- static-site generation
- server-side rendering

Functions:
- `getStaticProps()` - static-site generation, fetch data during build time, faster when data not change all the time and no needs access to request object
- `getStaticPaths()` - dynamically generate paths based on the data we are fetching, can only be used with getStaticProps
- `getServerSideProps()` - server-side rendering, regenerating and fetching data for every incoming request

#### helper function
- render your page with WordPress data, retrieve all the data you need beforehand
- `getNextStaticProps` and `getNextServerSideProps`

```js
export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client
  });
}
```

#### Next.js Overview
- Routing `next/router`
- Image Optimization `next/image`
- Fast Refresh
- Static Assets `public/`
- Built-in CSS Support
- API Routes `pages/api/user.js`
- Internationalized Routing
- File-System Routing
- TypeScript Supporting
- Code Splitting & Bundling

[[↑] Back to top](#table-of-contents)


## Frontend

#### Polyfills
- A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

#### React 18 New Features
- Concurrency control with the Transition API (Concurrency is the ability to execute multiple tasks simultaneously)
- Much faster page loads for server-side rendering with Suspense API
- Automatic State Batching of function calls and events to improve in-app performance (batching: collects all and then executes them together, avoids unnecessary re-renders)
- Streaming Server Renderer, converting data from a stream into something visual. 

#### Client-side rendering
- It manages the routing dynamically without refreshing the page every time a user requests a different route. 
- Your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it. 
- React uses client-side rendering for SPA single page application.
- Benefit: response is faster (except for homepage) and the document size for SSR is always bigger

#### CSR Pros & Cons
- CSR: use CSR if site under development, dynamic
- pro: faster render after initial load, best for web apps
- cons: the initial load can require more time

#### Server-side rendering
- convert HTML files on the server into a fully rendered HTML page for the client.
- When a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then construes the content and displays the page.
- Benefit: Performance benefit (render initial views faster while CSR loads) and Consistent SEO performance

#### SSR Pros & Cons
- SSR: use SSR if a site is stable, static, SEO focused, can pay for additional services
- pros: faster page load (viewable but not interactable), better for search engines (faster indexing), better with sites that have a lot of static content (blogs)
- cons: more server requests, slower render to interact, full page reloads

#### CSR vs SSR
- SSR: server sending ready to be rendered HTML response to broswer -> browser renders the page, now viewable and browser downloads JS -> broswer execute React -> Page now interactable
- CSR: Server sending response to browser -> browser downloads JS -> browser executes React -> Page now viewable and interactable

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

#### How to Share Components with Others?
- Bit + Bit.dev - develop, build and test individual components in the library in complete isolation
- When you update a single components, Bit “knows” which other components depend on it, and help you update all the component that are impacted by the update.
- Lerna - manage multi-repository structure inside a single repository
- Multiple packages - create new Git repo for every piece of code you want to reuse
- A Single library package for many components - put a few dozen shared components in a single repo

#### React Angular Vue
- React data flows only in one way and is easy to debug.
- Angular data flows both ways and hence debugging is often difficult.
- Vue mainly uses HTML templates with some JSX, while React only uses JSX that allows you to insert HTML directly into JS code.
- React alway passes the data to view, and to update the view, you need to use a callback to update it -> different from react and angualr

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

#### Server-side Responsibility
- client: generating web pages
- server: a gateway to the data, we can provide endpoints that the client can talk to get or save various pieces of data
- server provides an API to clients, each api like buttons on a remote control, all API we set up represent the interface how we interact with TV

#### import & export
```js
//CommonJS - loads modules synchronously
const express = require('express');
module.exports = Task;

//Modern ES Modules (ESM) - loads modules asynchronous
import process from "process";
export default App;
```

#### How do you run JavaScript?
You need JS engine (V8) that implements JS runtime

#### Is Web Browser a JavaScript runtime?
A browser contains a Javascript engine (for example Chrome v8). The engine implements a Javascript runtime, which includes the call stack, heap and event loop. The browser also usually includes a set of APIs that augment the Javascript runtime and make asynchronous code execution possible. NodeJS also implements a Javascript runtime using Chrome's v8 engine as well as the Libuv library (event loop and worker threads).

#### Node.js
- JavaScript runtime environment (not programming language or a framework) built on top of libnv - a cross platform asynchronous I/O based on event loop
- One of Node core stengths: faster processing! 
- wait for events -> accept event -> dispatch event -> handlers are called
- Node is non-blocking => rather than waiting for an operation to finish, create a callback that will be invoked when the operation ends
- Node.js server runs a single threaded event loop that creates async threads that is the nature of the non-blocking IO
- Node => event driven non-blocking asynchonous code; the main event loop is single-threaded but most of the IO runs on separate threads

#### why node?
- asynchronous I/O, event-driven architecture, light-weightedness, speed, scalability, use popular language JavaScript, NPM library
- most popular for its asynchronous event-driven, non-blocking I/O processing.
- it gets most of this concurrency and asynchronism from Javascript’s single-threaded event loop model.

#### global in node
- like `window` in the broswer, but we use `global` in node repl, that has a bunch of global objects that we can use
- `global.process.argv` - return an array containing the command line arguments passed when the node process was launched
- `process.argv[2]` - when we pass `node hello.js learn` - here we get learn
- `global.console.log("Hello")`

#### Blocking vs Non-blocking
- blocking: read code line by line, read file 1 then read file 2 (we can write multi-threaded code through library to get faster processing)
- e.g. Java, choose a driver manager connect to a driver, get a connection, open that connection, prepare statement, execute, close the connection => all blocking
- non-blocking: asynchonously event driven model, you read in both files at the same time => processing code, handling things much faster
- non-blocking is good for microservices architecture, or standard web application with a node backend

#### High Level Threads
- Node under the hood is written in C++, The event loop is implemented via libuv (using C++).
- Threads run in processes, one process can have many threads in it, and as they are in same process, they share a memory space
- Events are pushed to the main thread, then worker threads process the request

#### Ruby
- Ruby is written in C, which means it ties closely with c compiler that comes with your laptop, which is sensitive to CPU command
- x86 and arm64 has different CPU command set, can compling is directly tied with your local env. variables and system libs 
- unlike java based, you have all libs in JRE (java runtime env)

#### Stream
- involve with buffer object (raw data, bits and bytes)
- Inbound stream of data is a input stream (keyboard). 
- Write out to a file, use an output stream.
- A pipe is a destination to write to (flow data from one object to another one). readStream.pipe(writableStream). 

#### Node Modules
- Event Module - emit (call) / on (listen) / removeListener (unsubscribe) - like addEventListener 
- FS - file system module, both sync and async, the data returned as a Buffer object, toString() converts the buffer to string.
- Path - path module, handling and transforming file paths
- HTTP - for creating HTTP based web applications, createServer (like building endpoints using express)
- Net - for creating TCP based server and clients (chat app) - slower but less likely to lose data packets
- dgram – for creating UDP/Datagram sockets (DatagramSockets) - faster, simpler, like for videos audios, you do not care lose data
- https – for creating TLS/SSL clients and servers

#### Basic ExpressJS Setup
```js
const NewModel = require("../models/example");

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));	// static resources

app.get("/", (req, res) => {
  let currentData = await NewModel.find({});
  res.render("homeView", { data: currentData });
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(port, () => { console.info(`Application Started.  Port: ${port}`); });

//const mongoose = require('mongoose');
//mongoose.connect('url').then(() => {app.listen(3000);}).catch(err => {console.log(err);});

```

[[↑] Back to top](#table-of-contents)


## Database

#### SQL
- SQL database stores records in tables
- relational database, more for structural data model
- records are related, enforces a strict data schema, relations are a core feature

#### NoSQL
- NoSQL database stores documents in collections
- non-relationship database, more for a flex data model
- independent documents, enforces no data schema, less focused on relations

#### SQL vs NoSQL
- MongoDB : MySQL
- Database : Database
- Collection : Table
- Document : Row
- Field: Column

#### MongoDB
- MongoDB Database contains one or more collections (A collection of BSON documents)
- Collections can contain different types of document (objects)
- Document with key value pair list of array or nested document 
- (structure can change over time, field can vary from document to document)

#### MySQL vs MongoDB
- MongoDB is faster than MySQL due to its ability to handle large amounts of unstructured data when it comes to performance and speed

#### Choose a Database
- SQL is great for shopping carts for large ecommerce site, contacts, networks
- NoSQL is great for logs, orders, survey, chat messages

#### Information Architecture
- structural design of information or content focuses on organizing, structuring, and labeling content in an effective and sustainable way

#### Basic Mongoose Setup
```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
    firstName: String,
    lastName: String,
  },{
    collection: "name",
  }
);

mongoose.createConnection("mongodb://localhost:27017/database", { useNewUrlParser: true, useUnifiedTopology: true });
const Model = mongoose.model("NewModel", newSchema);
module.exports = Model;
```

[[↑] Back to top](#table-of-contents)


## Fullstack

#### Combining Frontend Code with Backend Code or Database
1. Setting up the database. 
2. Setting up the server. 
3. Setting up the routing. 
4. Adding data to the database. 
5. Getting data from the database. 
6. Updating data on the database.

#### Connecting Node + React
1. Step 1: Create your Node (Express) backend
2. Step 2: Create an API Endpoint
3. Step 3: Create your React frontend
4. Step 4: Make HTTP Requests from React to Node

#### Two ways of connecting Node + React
1. Server Hosts Node API + React SPA
- Node (Express) API handles incoming requests
- Requests not targeting API routes, return React SPA
- Data is exchanged between React App and Node API in JSON format

2. Two Separated Servers
- Node (Express) API handles incoming requests
- React SPA served from separated static host
- Data is exchanged between React App and Node API in JSON format

#### How do we connect MongoDB to React?
- We send a HTTP request to the Node/Express backend which then in turn talks to MongoDB

#### Why do we not establish a direct connection between React.js and MongoDB?
- Due to security concerns - we would expose database credentials in code that is readable by everyone
- React.js code is frontend JavaScript code and hence accessible by every user of your website.

#### How does the Node/ Express part communicate with React?
- Node/Express is used to build a REST API to which React.js sends requests
- we provide an API to which React.js can send Http requests.

#### How many servers are typically involved in a MERN stack app?
- 3 servers: one for react.js app, one for Node/Express API, and one for the MongoDB database
- You can definitely host everything on just one or two machines. 
- Splitting it across three independent machines, offers the best performance and durability.

[[↑] Back to top](#table-of-contents)


## Programming

#### Functional Programming
- attempts to avoid changing state and mutable data (immutable data structure)
- the output of a function should always be the same given the same exact inputs to the function, relies on arguments of the function

#### Object Oriented Programming
- Class is an abstract blueprint (the source of the plan) used to instantiate more specific, concrete objects based on that blueprint. 
- Use objects to represent things you are programming about, variables as properties, and functions as methods.
- Creates an object, so the object is the implementation of the class that is physically available (someplace in the memory in the RAM is occupied for that)

#### OOP vs FP
- FP: we use FP when we expect to receive the same output when using the same input, like "functional operations"
- OOP: A class is an abstract blueprint used to create more specific, concrete objects. 
- Classes often represent broad categories, like Car or Dog that share attributes.

#### 4 Pillars in OOP: Encapsulation, Abstraction, Inheritance, Polymorphism
- Encapsulation is the ability to hide variables within the class from outside access (not effective outside of the class, not public exposed), we use getter and setter methods to access class variables, 
- Abstraction Shows only essential attributes and hides unnecessary detailed information from the users
- Inheritance: a subclass extends all properties of the parent class into itself, both child and parent classes share a set of attributes and methods
- Polymorphism means a single action can be performed in many forms without requiring more info, hiding the details in communication, and can pass “is a” test => `overloading`: methods share the same name with different parameters (occurs during compile time), `overriding`: override method in superclass by method of child class (occurs during run time)

#### Benefits of OOP
- Encapsulation: reduce complexity + increase reusibility
- Abstraction: reduce complexity + isolate impacts of change
- Inheritance: eliminate redundant code, good for reusability
- Polymorphism: code can be extended, more dynamic, refactor if else, switch case statement

#### Overriding vs Overloading
- The method has exactly the same notation as the parents that is called overriding.
- The methods have the same name but different input parameter that is called overloading

#### Programming Languages (C, C++, Java)
- compiler based
- fast execution
- slow compilation time
- platform dependent
- secured, complex & lengthy, less frequent
- computationally intensive algorithms
- independent software
- extra preparation time, but then program runs very quickly

#### Scripting Languages (Python, Perl, PowerShell)
- interpreter based
- slow execution
- fast compilation time
- platform independent
- not secured, fast & simple, easy & frequent
- configurable interface
- prototyping (based on built-in pattern)
- starts right away, let you see the results, run slowly

#### Compiled vs. Interpreted 
- Compilation - transforms your program into machine-understandable instructions. 
- Interpretation - the source code is transformed line by line; each line or statement is executed before immediately proceeding to process the next line of the source code. 
- JS is typically classified as an interpreted scripting language, so it is in a single, top-down pass. 

#### JavaScript Engine
- Engine: responsible for start-to-finish compilation and execution of our JavaScript program. 
- Compiler: handles all the dirty work of parsing and code-generation. 
- Scope Manager: collects and maintains a lookup list of all the declared variables/identifiers, and enforces a set of rules as to how these are accessible to currently executing code. 
- JS engine first parses the entire program before any of it is executed, code must first be fully parsed before any execution occurs. 

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

[[↑] Back to top](#table-of-contents)


## Authentication

#### What is Authentication
- Authentication is needed if content should be protected, not accessible by everyone. 

#### Authentication is a two-step process: 
1. Get access/permission 
- Client (browser) - Request (with user credentials) - Server - Response (yes/no). 

2. Send the request to the protected resource 
- `Server-side Sessions`: server grants your access, stores unique identifier on server, sends same identifier to the client, client sends identifier along with requests to protected resources. Backend generates the jwt token, then sends the generated token to the client, then all the following requests will contain the token.
- `Authentication Tokens`: send credentials to server, and the server validates credentials, comparing the combination to what is stored in the database, if that is valid, then the server creates a permission token, create but not store "permission" token on server (server is stateless), send token to client, client sends token along with requests to protected resources

#### Login Process
- `cookie-based server-side session`: user login -> server stores user in an unique identifier session (after validation) -> server response session ID back client -> browser puts session in cookie, save cookie on client -> browser sends requests with cookie -> check session on server -> response back client
- `token-based auth`: user login -> server creates a jwt (json web token) for user with secret -> server sends jwt back to browser -> browser puts jwt in local storage -> signed jwt header (authorization: Bearer token) validated on future requests -> server only needs to validate the jwt signature (more efficient with distributed system in cloud) -> server sends response back
- sessions managed by server, tokens managed by client

#### Cookie
- session stored in the cookie, cookie http header
- browsers will automatically send requests with session id cookies associted with a website
- cookie can be modified by the client, they can not be trusted by the server

#### JSON Web Token
- long strings which are constructed by an algorithm that encodes data into a string (with the help of a private key, only known by the server). 
- you can store tokens in the client like localStorage and sessionStorage, all the servers can recognize the token as long as same secret key on server
- jwt does not store user in the server, jwt has all the information about the user built into it
- decoded jwt: header (algorithm & token type), payload (data), verify signature

#### SQL Injection
- a type of attack where malicious user can inject (insert) SQL commands into existing SQL statement via their input to a web form or other method to send data to database

#### Prevent SQL Injection Attacks
- input validation on your front end that does not allow sequel to be to be typed in.
- sanitize data by limiting special characters
- use stored procedures in the database
- actively manage patches and updates
- web application firewall, raise virtual or physical firewalls

#### Cross Site Scripting (XXS)
- when you're trying to get act like another website, send in javascript it harms to the clients computer.
- injection attack where malicious scripts can be inserted into trusted websites. 
- The attacker is able to use a web application to send the malicious code to another web visitor. 

#### Prevent XXS Attacks
- Filter user input, do not let user put in script or sql
- Do not using innerHTML for user information (session id), instead, using innerText

#### Remote System Execution
- The ability of an attacker to remotely run operating system commands on a web server. 
- They can ask the web server to do anything that the OS can do via the command line.
- PHP has two functions to help us prevent remote system execution attempts: escapeshellcmd(), escapeshellarg()

#### Session Hijacking
- if you include session ID in URL, you do not expire it, it can be passed around
- your session becomes their session, they become you
- session needs to expires
- solution: encryption, JWT (encrypted)

#### CAPTCHAS
- ways to make sure if a user is an actual human

#### Cross-domain Issue
- A security restriction that prevents requests being made from one origin to another, like different protocol, domain, sub-domain, port. 
- It is possible to make cross-origin requests either using JSONP (if you trust the server!) or using a CORS request (Cross-Origin Resource Sharing) which both client and server must agree to.

#### Cross-Site Request Forgery (CSRF)
- an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. Anti-CSRF tokens are considered the most effective method of protecting against CSRF.

#### Auth0 
- React Authentication Library
- npm install @auth0/auth0-react

#### Overall
- Don't allow the user to input any HTML innerHtml ;
- Use UI frameworks, keep node_modules updated, and limit of usage 3rd party services;

[[↑] Back to top](#table-of-contents)


## Performance

#### The PRPL Pattern
- Push (or preload) the most important resources
- Render the initial route as soon as possible
- Pre-cache remaining assets
- Lazy load other routes and non-critical assets

#### How do you generally improve performance?
- use uglify and minify to reduce the bundle size
- use lazy loading to improve the page loading speed. 
- use content delivery network to improve the loading speed.
- `React.lazy` and `React.suspense` support lazy loading with webpack.
- `React.memo` shouldComponentUpdate logic to reduce unnecessary re-rendering, improve the component rendering performance
- Event Delegation (allows you to avoid adding event listeners to specific nodes)

#### Images
- format: if animation — use `<video>` instead gif, if high details and resolution — PNG, if geometry shapes — SVG, if text logo — use font text, if photo — JPEG
- Compression: SVG (Remove metadata attributes from SVG tag), image-sprite (reduce requests), Remove metadata attributes from SVG tag, WebP — use optimized image format for Web;
- Cache: Use CDN (content delivery network) for distributing static data;
- Lazy Load images and videos — Use `<img loading="lazy"/>` or libraries like lazysizes;

#### Link: preload, preconnect, prefetch, prerender
- preload — loads high prior sources that need to be loaded faster<link rel="preload"> ;
- preconnect — If some resources are required to accelerate handshake, use<link rel="preconnect">to reduce latency;
- prefetch — loads low prior resources and cache <link rel="prefetch">;
- dns-prefetch—reduce latency of resolving domain names before resources get requested <link rel="dns-prefetch">;
- prerender — similar to prefetch + caches whole the page <link rel="prerender"> ;

#### Dynamic Programming (Caching)
- Cache stores the function for reusibility
- Cache-Control: instruction of request and response cache;
- Redis: in-memory data structure store (server), used as a NoSQL key–value persistent database, cache, and message broker.

#### `React.lazy` and `React.suspense` 
- `.lazy()` - a built-in method that will help us with code splitting, lazyloading components based on scrolling
- `React.lazy(() => import('./pages/NewQuote'))` - dynamically import the function we pass to lazy will be executed when this new quote component is needed
- `<Suspense fallback={<Spinner />}> ... </Suspense>` - We need to wrap this around the code, where we use React lazy with a payload
- `Suspense`: maintaining a consistent UI in the face of asynchronous dependencies (not rendering a UI that’s partially complete)
- you could have suspense in individual components, having a global one is good for error handling with an ErrorBoundary.
- `useTransition`: makes a state change in memory, set state in memory while keeping your existing UI on screen

```js
import React, {Suspense} from 'react;
const ProfilePage = React.lazy(() => import('./ProfilePage')); // Lazy-loaded

const [startTransition, isPending] = useTransition({ timeoutMs: 3000 });  //the amount of time you’re willing to let the in-memory state change run, before you suspend.

// Spinner component will render if any child components of <Suspense> are suspended. Show a spinner while the profile [data fetching] is loading
<Suspense fallback={<Spinner />}> 
  <ProfilePage />
</Suspense>
```

#### Minification - Minifier/uglifier 
- make your code prettier, make it more efficient during compiling phase
- remove unnecessary code 
- rename to a more efficient version for machine
- save time onloading

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
- JS is single threaded language, but web worker allows JS running in the background threads, which are separate from the main execution thread, without affecting the performance of the page. 
- web content to run scripts in an isolated thread in the browser in parallel, completely separate thread from the thread that's running the main JS program, prevent the UI from freezing up 
- Web Workers are a web platform extension, perform heavy tasks on background - `if(window.Worker){}`, `const myWorker = new Worker('worker.js');`, `myWorker.terminate();`

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

#### Testing Process
A dev writes codes that go for code review and when it is passed it moves to QA where the tester tests the changes by deploying that branch on EOD if no issues are found we move ahead to merge the branch and prepare for release.

#### EOD
- For testing, we need EODs (Environment on Demand) to check the scenarios are working as expected.

#### Jenkins
- Jenkin is for testing 
- Go to clusters like QA, and UAT, and then select env.up to deploy a fresh EOD based on the branch we need to test.
- Suppose we have a branch on git with the latest changes and you need that branch to be tested so we deploy that branch on Jenkins and test that branch whether it has all the changes or not, if not then we fix the branch and redeploy EOD and test again if everything is working we move ahead.

#### High-level Process
- A dev write a code it goes for code review and when it is passed it moves to QA where tester test the changes by deploying that branch on EOD and if no issues are found we move ahead where we merge the branch and prepare for release 

#### Why testing?
- save time
- create reliable software
- give flexibility to developers: refactoring, collaborating, profiling (check speed)
- peace of mind

#### Different Kinds of Tests
- unit testing - test individual building blocks in isolation
- integration testing - test the combination of multiple building blocks
- end to end (e2e) test - test complete scenarios in your app as the user would experience them
- automation test (e2e) - simulating user behavior and make sure scenarios work from the point of view of an end user

#### script
- With the watch command, our test will get rerun any time the app gets updated. 
- This allows us to get instant feedback on whether our tests are passing or feeling, which makes it
```js
  "scripts": {
    "start": "nodemon app.js",
    "test": "jest",
    "test:watch": "jest --watch" 
  }
```

#### What is the coverage? 
- How complete your unit test cover all the code?
- 90% coverage (out of 100 lines, at least 90 lines are ran)
- `npm test -- --coverage` for coverage report

#### Unit Test File Example
- button.js
- button.test.js
- npm run test *.test.js

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

#### Jest Implementation
- `test("",()=>{})` - pass in test name and test function
```js
describe("Test GET", () => {
  test("It should respond with 200 success", () => {
    const response = 200;
    expect(response).toBe(200);
  });
});

test("calculate tip", ()=>{ 
  const total = calculateTip(10, 0.3)
  expect(total).toBe(13)
})

test("This should fail", ()=>{ 
  throw new Error("Failure!")
})
```


#### API Test Implementation
- npm install supertest
- need `module.exports = app;` in app.js
```js
describe("Test GET", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get('/reviews/ChIJN1t_tDeuEmsRUsoyG83frY4')
      .expect("Content-Type", /json/);
    expect(response.statusCode).toBe(200);
  });
});
```

[[↑] Back to top](#table-of-contents)
 
