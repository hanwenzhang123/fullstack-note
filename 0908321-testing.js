//Unit Test
Have you done Unit Test?  
  Yes

What do you use for Unit Test?
  Jest: JS helper functions (logic helper)
        x => x+1 -> pure function
        test any side effect x => x+1 
        https://jestjs.io/
  Enzyme: component test
        https://enzymejs.github.io/enzyme/

What is the coverage? => 90% coverage (out of 100 lines, at least 90 lines are ran)
  How complete your unit test cover all the code

Unit Test File Example
  button.js
  button.test.js
    npm run test *.test.js

...
if (someCondition) {
  doSomething();
  ..
  ..
  ..
}

//Pseudocode below
//badge.js
export const Badge = ({
  dataId,
  value,
  classNale,
  category,
}) => (
  <span className={className} category={category} data-id={dataId}>
    {value}     //put test here
  </span>
)

//badge.test.js
import {shallow} from "enzyme";  //shallow is a wrapper, mount(another wrapper example)
import Badge from "/badge";

describe("Badge Component", () => {
  let wrapper;
  let mockFunc;
  
  beforeAll(() => {
    const component = <Badge dataId="badge" value={0} />
    wrapper = shallow(component);   //successfully inject to the wrapper
    mockFunc = jest.fn();
  })
  it("should render", () => {   //it for the small bites
    expect(wrapper).toBeDefined(); 
  })
  it("should have data id", () => {
    expect(wrapper.props()).toHaveProperty("data-id", "badge"); //toHaveProperty() passing key and it is matched to 
  })
  it("should have value as 5", () => {
    wrapper.setProps({ value: 5 })
    expect(wrapper.text()).toEqual(5);
  })
  it("should have value as 5", () => {
    //meet condition manually
    expect(mockFunc).toHaveBeenCalledWith(params)
  })
})


//React Context
https://reactjs.org/docs/context.html

What is React Context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
Without Redux and React Context, we have to do lifting state up.
With the help of context, we can get the value in the nested children directly. 

Is React Context working the same way as Redux?
You can have multiple contexts but only one store in Redux
if you use React Context, it may cause Data Contamination since the Consumer looks for the nearest Provider ancestry

When will be great to use Context? When will be great to use Context?
  Redux - Larger scale application

//Context API - Provider and Consumer
const MyContext = React.createContext();    //JSX - Capitalize
class Component
  state = {
   value: 1 
  }
  render() {
    return(
      <MyContext.Provider value = {this.state.value}>   //store={store}
        <Child>
      </MyContext.Provider>
      )
  }
//GrandChild.js
  return(
      <MyContext.Consumer>    //function call to get the value that passed in through the provider
        {(value) =< {
        return (
          <div> {value} </div>
        )
      }}
      </MyContext.Consumer>
    )
  
//Example 2
const MyContext = React.createContext();    //JSX - Capitalize
class Component
  state = {
   value: 1 
  }
  contextObj = {    //better performance
        data: this.state.value,
        onActionHandle: () => {   //with a function to pass down
         this.setState({value: 2})
        }
  }
  render() {
    return(
      <MyContext.Provider value = {this.contextObj}>    //better to put the object out not inside nested 
        <Child>
      </MyContext.Provider>
      )
  }
//GrandChild.js
  return(
      <MyContext.Consumer>    //function call to get the value that passed in through the provider
        {({data, onActionHandle}) => {
        return (
          <div> 
            {data} 
            <button onClick = {onActionHandler}>Click</button>          
          </div>
        )
      }}
      </MyContext.Consumer>
    )

//Example 3
const MyContext = React.createContext();
class Component
  state = {
   value: 1 
  }
  contextObj = {    //better performance
        data: this.state.value,
        onActionHandle: () => {
         this.setState({value: 2})
        }
  }
  render() {
    return(
      <MyContext.Provider value = {this.contextObj}> 
        <Child>
      </MyContext.Provider>
      )
  }
  
//Child
  return(
      <Provider value = {...newValue}> 
        <GrandChild>
      </Provider>
      )
//defaultValue <=> bubbling - always go up to look at the closest ancestry
  
//GrandChild.js - Look for the Child value but not the Parent value
      //we could make mistake, or not able to get value we want, since passing down the value we look for the nearest ancestry here is Child
  return(
      <MyContext.Consumer> 
        {({data, onActionHandle}) => {
        return (
          <div> 
            {data} 
            <button onClick = {onActionHandler}>Click</button>          
          </div>
        )
      }}
      </MyContext.Consumer>
    )


//Web performance monitoring statistic
//Core Web Vitals
    
//Use Internal tool to monitor the CWV
//Monitor the key metrics to know where could potentially be improved
    
// LCP largest contentful paint
  Hero image on shopping web loading time - like the main page
  (the less time the better)
// FID first input delay
  How fast can the page response to users first interaction, link, clikc, tap, select
  (the shorter the better)
// CLS cumulative layout shifting
  the moment you click the button, but a commercial ad pops up, you mistakenly clicks it and directs you to another site
  layout shifting portion measurement (unexpected)


export default function App() {
  return (
  )
}
