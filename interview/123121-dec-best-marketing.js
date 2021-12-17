12/15 Jianlong
project react based
unit test coverage 90%
project details
	lifecycle
react-router:
wrapper for app, then path and link
match path to component.
change the state in parent, then pass as props
Or we can do it in redux to update value
design part:
	design for comment patterns
constant: primitive, array / object / reference
apple care team. Vue.js.
 
Coding part:
Given an array of object,
Use map, filter to get specific elements as an array.

输出一个generator. (yield)
 
var countPrimes = function(n) {
    const isPrime = num => {
        if (num <= 1) {  
            return false
        }
        if (num % 2 === 0) {
            return num === 2
        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) { //小于等于
            if (num % i === 0) 
                return false
        }
        return true
    }
    let res = 
    for (let k = 0; k < n; k++) { //这里是n不是num
        if (isPrime(k))
            res.push(k)
    }
    return res
};



12/10 Jianlong - Apple
CSS:
margin collapse
highlight getElementByClass, nth-child
Javascript:
pass params to function
filter function / how about if we want to change instead of return a new arr
react:
state props different
props cannot be changed
context or redux to pass data
virtual dom: how it works. 
react lazy loading
npm start vs npm build
deployment
arr of component: missing a key
any question: samples -> about project, about team, about sprint.

Q: comparing two objects to determine if the first one contains the same properties as the second one 
  matchObject(obj1, obj2) //return Boolean


12/03 Kevin - wells fargo
Introduce yourself
Talk about your current project
Arrow function
Tell us about Redux, thunk, saga
Ways to improve web performance
Coding challenge:
1.A function taking two numbers as arguments. Return true if the sum of any digit in num1 is equal to num2. (e.x. 100365, 8 => true, because 3 + 5 = 8)
2.Use React to implement a calendar (using December 2021 as data set)
