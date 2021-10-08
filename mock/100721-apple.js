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
//using useEffect()

import {useState, useEffect} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count+1)
    }, 1000)
  }, [count])
  
  return (
      <div>
        <h1> {count} </h1>
      </div>
  )
}

export default Counter;


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
