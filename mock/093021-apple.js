What’s your most confident technique or language skill
  - JavaScript and its library 

Which version of react?
When did you start using react? What was the version of react?
  - I started React 15.3 - React.PureComponent (7/30/2016)
  - React 16.8 - hooks (2/16/2019)
  - React 18 - newest - concurrent rendering (Concurrency is the ability to execute multiple tasks simultaneously)
    - Automatic state batching
    - Transition APIs/Suspense API
    - Streaming server renderer

Most recent project, describe the feature/component you’ve been working on

How did you do mapping? 
  
When you hover, where does the data come from?

Do you know how to use …? Kind of data manipulation tool

What do you do to ensure the cross browser functionality

Last most class component you have checked for cross browser compatibility

Anything you want to emphasize on your Zillow project? Why do you leave?
  
Talk about your dropbox project？

Any experience with React Native? Did you use in the dropbox project?
  
Detail about dropbox project

What is react memo? How does it speed up the process? 
- contains the logics of shouldComponentUpdate to compare current props and previous props to make sure it cuts off unnecessary renders
- React renders the component and memoizes the result
- Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.
	
When you call react memo, does the result store somewhere in the browser? 
- the result of the function wrapped in React.memo is saved in memory and returns the cached result if it is being called with the same input again. 
- Since it is used for pure functions: If the arguments do not change, the result does not change either.
- React.memo explicitly caches the function, which means that it stores the result (VDOM) in memory.
  
Anything you want to share working with dropbox?
  
What did you do at Nike?
  
What do you know about lazy loading. Give me an example, when did you use it on Nike.com. How did you implement it? 
  
What is OOP vs functional programming in JS

Example when did you use OOP and when did you use functional programming

What is prototype?
- A reference to another object, every function includes prototype object that enables all the other objects to inherit these methods and properties
  
What is promise?
- JS is a single-threaded language, use promise to handle async operation
  
Why do we need Redux?
- Better state management 
- Avoid complicated communication (excessive lifting state up, passing props down)
  
If you start a small project, do you use redux or not?
- No, Redux is recommended for large scale applications

What happen when you call setState, why the page rerender? 
  
What’s the underlying logic of setState?
  
Element vs component?
- Element is is an immutable object describes a DOM node like HTML elements
- Component is a function or class that accepts an input and returns a React element.

  
Use Vue.js?
Lifecycle of react and vue.js
Roles had worked in different teams, solution to some problems that encountered in projects
Only use webpack?
New feature of ES7, use sass?
Talk about your experience/solution to deal with different tools without just using webpack.
Ownership of the whole project????

Sass experience?
Experience of delivering new feature and service
How to commit, integration and deploy
Who design and manage the build pipeline
How collaborate and avoid duplicate work
 
Update Only What’s Needed -> only update the needed observable
Eliminate Duplicate Rendering with key in list
Virtual Scrolling

 
use Auto CI/CD tool or platform to auto deploy  the library, like Jenkins / github actions


 
How do you think about separating things into components?
How do you design component
shallow compare vs deep compare
React.memo() does a shallow comparison of props and objects of props.

