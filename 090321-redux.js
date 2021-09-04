//Redux Middleware - apply something extra in the middle, like a middle layer
//Redux Thunk
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
const store = createStore(reducer, applyMiddleware(thunk));   //explored to the whole flow


//Redux Reselector
//Redux Middleware
//Unit Test
//Webpack
//Performance 

How to you generally improve performance?
//React
  -HOC
  -memo/PureComponent (shouldComponentUpdate) - lifecycle
  -reduce unnecessary re-rendering
//Redix
  -Thunk
  -Reselector
//JS
  -Event Delegation -  allows you to avoid adding event listeners to specific nodes
//CSS
  -Animation
  -image-sprite (reduce requests)
  -image compression
//HTML
  -Empty HTML
  -Style on the top, script down/defer/async
//Webpack - https://webpack.js.org/
Webpack - bundle your styles
A bundler for front-end dev
  1. HMR(Hot Module Replacement)
    Update the page directly without a fully page reload - more efficient dev environment and will not loss the current state
  2. Tree Shaking
    Get rid of unnecessary code
    if (false) {console.log ("Never Reached")}    //dead code elimination
    const c = x + 1;
    return c;   //=> return x+1
  3. Code Splitting
    Split your modules properly according to the dependency graph
  4. Lazy Loading
- Minifier/iglifier minification - remove unnecessary code / rename to a more efficient version for machine
  const aaaaa=1;
  console.log (aaaaa);
  ===>
  const a=1; console.log(a)


question =>
1. never heard - admit it (sorry, I never used it)
2. knew a little, not in depth - yea, I knew a little bit, but I am using internal framework (I did configuration, but it has already built by the team)
3. knew it well - explain what you got
  
