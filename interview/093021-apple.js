What’s your most confident technique or language skill
  - JavaScript and its library React and Redux

Which version of react?
When did you start using react? What was the version of react?
  - I started React 15.3 - React.PureComponent (7/30/2016)
  - React 16.8 - hooks (2/16/2019)
  - React 18 - newest - concurrent rendering (Concurrency is the ability to execute multiple tasks simultaneously)
    - Automatic state batching
    - Transition APIs/Suspense API
    - Streaming server renderer

Most recent project, describe the feature/component you’ve been working on
- Listing, Data Visualization

How did you do mapping? 
When you hover, where does the data come from?
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      });
  }

  render() {
    const { items } = this.state;
    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
}

Why do I need Keys in React Lists? 
- Keys help React identify which items have changed, are added, or are removed. 
- Keys should be given to the elements inside the array to give the elements a stable identity, a key is required. 
- Each item in the array has an id associated with it. Hence, this is the id that is assigned as a key for each item.
- not recommended using indexes for keys especially the order of items may change - bad design.

How can I check if i can use the feature across the web broswer?
What do you do to ensure the cross browser functionality?
- Cross Browser Compatibility Testing
- CrossBrowserTesting, LambdaTest, BrowserStack
- Can I use - https://caniuse.com/

Last most class component you have checked for cross browser compatibility?
- CSS, for instance: animation
- https://www.w3schools.com/cssref/css3_browsersupport.asp

Talk about your dropbox project？
- Detail about dropbox project?
- Loading, web performance

Any experience with React Native? Did you use in the dropbox project?
- The project involves React Native but I focused on React UI on the web

What is react memo? How does it speed up the process? 
- contains the logics of shouldComponentUpdate to compare current props and previous props to make sure it cuts off unnecessary renders
- React renders the component and memoizes the result
- Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering.
	
When you call react memo, does the result store somewhere in the browser? 
- the result of the function wrapped in React.memo is saved in memory and returns the cached result if it is being called with the same input again. 
- Since it is used for pure functions: If the arguments do not change, the result does not change either.
- React.memo explicitly caches the function, which means that it stores the result (VDOM) in memory.
  
Anything you want to share working with dropbox?
- Team Culture
  
What did you do at Nike?
- Web performance for large volume of trafficking
  
What do you know about lazy loading. Give me an example, when did you use it on Nike.com. How did you implement it? 
- use lazy loading to improve the page loading speed
- React.lazy() and React.suspense() support lazy loading with webpack.
  
What is OOP vs functional programming in JS?
Example when did you use OOP and when did you use functional programming?
- OOP: using objects to represent things you are programming about
	- A class is an abstract blueprint used to create more specific, concrete objects. 
	- Classes often represent broad categories, like Car or Dog that share attributes.
- FP: avoid changing state and mutable data
	- the output of a function should always be the same, given the same exact inputs to the function.
	- we use FP when we expect to receive the same output when using the same input, like "functional operations"

What is prototype?
- A reference to another object
- every function includes prototype object that enables all the other objects to inherit these methods and properties
  
What is promise?
- JS is a single-threaded language, use promise to handle async operation
  
Why do we need Redux?
- Better state management 
- Avoid complicated communication (excessive lifting state up, passing props down)
  
If you start a small project, do you use redux or not?
- No, Redux is recommended for large scale applications

What happen when you call setState, why the page rerender? 
- setState will trigger re-rendering, and update/modify local state correctly
  
What’s the underlying logic of setState?
- this.setState(newState) -> newState saves to pending -> batch update?  (batch compares and renders)
	-> Y save to dirtyComponent -> N iterate dirtyComponent, use updateComponent, update pending state or props
- setState may be asynchronous uses dirtyComponents_queue -> react fiber -> then render
- fiber: reconciliation, diffing algorithms - outputs the set of differences between two inputs
- set same keys in the list -> pass to fiber -> benefit from diffing -> no new key no change on virtual DOM, improve web performance
  
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
  
