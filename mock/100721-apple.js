//Question 1
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
