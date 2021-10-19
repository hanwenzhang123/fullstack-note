// promises - microtask
// setTimeout/setInterval - macrotasks
const timeoutId = setTimeout(() => console.log(1), 1000);
clearTimeout(timeoutId);


//event propagation
//These three phases in order are 1) the event capturing phase, 2) the target phase, and 3) the event bubbling phase.
event propagation: like a deeper ocean goes to the layer one by one
travel through the DOM tree to arrive at its target and what happens to it afterward.
//Event.stopPropagation()
prevents further propagation of the current event in the capturing and bubbling phases. 

//event bubbling vs event capturing
event bubbling: buttom to the top - like when I click the inner one, the outter one will also be clicked
event capturing: top to the botton - click outter which will the trigger the inner one. 
//event target phrase
all the listeners registered on the event target will be invoked
Both the event capture and event bubbling handlers will trigger this phase automatically as they finish and begin with the target element.

//event delegation
Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. 
That event listener analyzes bubbled events to find a match on child elements.
Instead of attaching the event listeners directly to the buttons, you delegate listening to the parent <div id="buttons"> . 
When a button is clicked, the listener of the parent element catches the bubbling event (recall the event propagation?).


//loadsh
//debounce / throtte -> web performance improvement
debounce -> search bar (auto-complete)
throttle -> scrolling / resizing page

//debounce - setTimeout, like we post comments everytime triggers a hard delay, reset the timer to 100 again
func fetchAPI ... const debouncedFunc = _.debounce(fetchAPI, 100) //shorter than a 100
onUserInput => {
  debouncedFunc()
}

//throtte - setInterval, like comments triggers 100 for the entire cycle
_.throttle(fetchAPI, 100);


//Promise - 
//main thread (console.log) > micro (promise, async) > macro (timeout, interval)

//Question 1
const myPromise = new Promise(res => res('Promise!'));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res)); // microtask
  setTimeout(() => console.log('Timeout!'), 0); // macrotask
  console.log('Last line!'); // main thread
}

funcOne();

//Output:
Last Line
Promise
Timeout


//async await == promise
//async always goes before await
async function myPro() {
  const res = await myPromise //pauses after await - after await everything can be treated as .then() in promise - Microtask
  console.log(res);
}
//VS 
myPromise.then(res => console.log(res))   //same as above


//Question 2
const myPromise = new Promise(res => res('Promise!'));
function funcOne() {
  myPromise.then(res => res).then(res => console.log(res, 1)); // microtask
  setTimeout(() => console.log('Timeout! 1'), 0); // macrotask
  console.log('Last line! 1'); // main thread
}

async function funcTwo() {
  const res = await myPromise; // pauses
  console.log(res, 2);
  setTimeout(() => console.log('Timeout! 2'), 0);
  console.log('Last line! 2');
}
funcOne();
funcTwo();


//Output:
Last Line 1
Promise 1
Promise 2
Last Line 2
Timeout 1
Timeout 2


//Error Handling
async function myPro() {
  try {
    const res = await myPromise // pauses
    console.log(res);
  } catch (err) {
    if (err )
  }
}
//VS
myPromise
  .then(res => console.log(res))
  .catch()

  
//Promise vs Async/Await
let p1 = new Promise( (resolve, reject) => {
    console.log('no resolve');
    reject('reject error')
}).then(res => {
    console.log('res 1', res);
})
.catch(err => {
    console.log('error', err);
})

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(null, (err) => console.log(err));

  
