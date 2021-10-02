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

Can I use? check if i can use the feature across the web broswer

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


https://www.tutorialspoint.com/es6/es7_newfeatures.htm
New feature of ES7
- Exponentiation Operator ** 
<script>
   let base = 2
   let exponent = 3
   console.log('using Math.pow()',Math.pow(base,exponent))
   console.log('using exponentiation operator',base**exponent)
</script>
- Array.includes(value) || Array.includes(value,start_index)

New feature of ES8
- Async and Await (pause the execution of a function till a promise is settled)
- String.padStart(targetLength [, padString]) && string_value.padEnd(targetLength [, padString])
- Trailing Commas ,, - empty value, a comma after the last item in a list, final commas, are skipped while using forEach loop.

New feature of ES9
- Asynchronous Generators and Iteration
async function* generator_name() {
   //yeild await 
}
- for await of loop
for await (variable of iterable) {
   statement
}
- Promise: finally() - executed whenever a promise is settled, regardless of its outcome. 


Lifecycle of react and vue.js
https://ash.ms/2019-02-19/vue-react-lifecycle-method-comparison/
//Component mount compared
constructor	beforeCreate	Roughly synonymous with each other. The constructor sets up the React class, whereas Vue handles the class creation for you.
	-	data	Set data. Vue recursively converts these properties into getter/setters to make them “reactive”.
	-	created	Data observation, computed properties, methods, watch/event callbacks have been set up.
	-	beforeMount	Right before the mounting begins: the render function is about to be called for the first time.
getDerivedStateFromProps	-	Invoked right before calling the render method. It should return an object to update the state, or null to update nothing.
render		render	The virtual DOM is rendered and inserted into the actual DOM.
componentDidMount	mounted	The component is now mounted. We can make any direct DOM manipulations at this point.

//Component update compared
getDerivedStateFromProps	-	Same as when mounting.
shouldComponentUpdate		-	Let React know if a component’s output is not affected by the current change in state or props. We can use this to prevent React blowing away our changes.
	-		beforeUpdate	Called when data changes, before the DOM is patched.
	render		render		The virtual DOM is rendered and patched into the actual DOM.
getSnapshotBeforeUpdate		-	Right before the most recently rendered output is committed to the DOM. Lets you save the previous state of the DOM for use after the component has updated.
componentDidUpdate	updated		After the DOM has been updated

//Component unmount compared
	-		deactivated	When using Vue keep-alive, the component is removed from the page but not destroyed so that we can load it again later without the overhead of component mount.
	-		activated	The previously deactivated component is reactivated.
componentWillUnmount	beforeDestroy	When a component is being removed from the DOM
	-		destroyed	The component is completely gone.
  
