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
Production build vs dev build
Why production build
What does webpack do
How to improve react app performance
How to do responsive design
How to find and fix the layout bugs for responsive design for different devices
How to test App and get test coverage
How to test production build and fix bugs on production build
Test CSS styles
Test APIs
Front-end API errors handling
MongoDB? NodeJS? Backend?
