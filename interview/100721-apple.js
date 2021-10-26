//Question 1
//Explain the following code
async function updateEditorClear(req, res) {
    const { user } = req;
    let updatedCampaign = await Campaign.findOneAndUpdate(
        { _id: req.params._id },
        {
            $set: {
                currentEditor: ""
            }
        },
        {
            upsert: true,
             new: true,
             useFindAndModify: false
        }
    );
    return res.json({
        campaign: updatedCampaign
    });
} catch (error) {
    let errorMessage = "Error: " + error;
    sendError(res, error, errorMessage);
    }
}
router.put(
    "/api/campaignsEditorClear/:_id",
    mustBeAuthenticated,        //auth middleware
    updateEditorClearTest
);
        

//Question 2
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


//Question 3
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


//Question 4
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
 
