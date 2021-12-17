Please briefly answer the following questions in English.

1. What are the advantages of React Native over native IOS and Android?
React Native is available for both IOS and Android devices. 

2. Lifecycle of React Native components
 (3 phases) - mounting, updating, unmounting

3. What is the function of useState() under Hook?
const [state, setState] = useState(“initial value”)

4. The similarities and differences between props and state
both are immutable, read only. 
state is an object internally captured by class (in the constructor, this.state). 
props down, parent talks to child

5. what method would call during the update and end of Hook? 
useEffect(() => {}, []);

6. If you use the props.children.map function of reactJS to traverse, you will receive an exception prompt. Why? How should it be traversed?
you need to key each item an unique key when using map()

7. Please describe the process of Redux state management
redux is a library for state management, it controls in a single object - store; no matter how deep you are, no needs for lifting state up

8. Please describe the mechanism of loading bundles
use lazy loading to improve the page loading speed.

9. Why did the data not trigger render when you dispatch an object into Redux action? How to fix it?
need to trigger reducer, use destructuring to check object

10. Flex layout
With a parent element set to flex, all direct child elements in the container automatically become flexible items.

10.1. What is the purpose of specifying flex Direction in the component style ?
-  all flex items in one direction, row or column

10.2. What is the purpose of specifying justify Content in the component style?
- layout based on main axis

10.3 The style of two sub-components arranged horizontally even, and the style of two sub-components vertically centered 
display: flex;
justify-content: center;
align-items: center;

11. What is the biggest difference between synchronous action and asynchronous action in Redux
can use thunk to accomplish asynchronous action in redux

12. The principle of React PureComponent
performance improvement, to compare current props and previous props to make sure it cuts off unnecessary renders

13. What does ReactNative use to call native (IOS/Android) methods?
bridge

14. In JS, how to empty an array?
array.length = 0;
array.splice(0, array.length);

15. In JS, how to check if it is an array?
Array.isArray() - return boolean, check whether an object (or a variable) is an array or not.

16. What is the biggest difference between JS =>function and general function?
arrow function does not have its own this to be referred to the current object

17. In JS, how to understand the use of Await/Promise ?
JavaScript is a single threaded language so we can use await/promise to do asynchronous tasks.

18. Please use a most simple JS code to define 4x5 String arrays
const example = [
    [‘a’, ‘b’, ‘c’, ‘d’],
    [‘e’, ‘f’, ‘g’, ‘h’],
    ['i’, ‘j’, ‘k’, ‘l’],
    [‘m’, ‘n’, ‘o’, ‘p’],
    [‘q’, ‘r’, ‘s’, ‘t’]
];
example[4][3]	//t

19.Please use the simplest way to convert the characters below and remove the repeat characters.  “Hello world”
"Hello World".split('').filter((word, index, string) => string.indexOf(word) === index).join("")

20. Please use JS to write a code to make  [1,2,3,4,5,6,7,8,9,10] to [[2,4,6,8,10] ,[1,3,5,7,9]].
const number =  [1,2,3,4,5,6,7,8,9,10];
function doubleArray(array){
const arr1 = [];
const arr2 = [];
const temp = [];
for (let num of array) {
   if(num % 2 == 0) {
      arr2.push(num)
   } else {
      arr1.push(num)
   }
}
temp.push(arr1, arr2);
return temp;
}
doubleArray(number)

21. Please use JS to write a code to deepMerge two objects.
