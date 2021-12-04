11/1 Kevin
Q1
Q2
Q3 prefer function or class component
Q4 TypeScript exp? What do you use it for? How do you like using it?
Q5 Event loop, setTimeout(0)?
Q6 configuring SPA, what’s code splitting? What’s it good for?

11/02 Doug
Self intro
More full stack backend or frontend?
Introduce your project
Redux mechanism?
React lifecycle hooks
Is react the only framework you used in previous projects
RestFUL API call vs web socket vs long polling
Project you worked on that makes you excited, the project you enjoyed most
Any new technologies and upcoming technologies you know about, excited about?
How much experience with stylesheets, CSS, or libraries like bootstrap?

11/22 Kevin
Setter and getter, why use them
Arrow function vs regular function
Deep clone & shallow clone
Write your own code of deep clone:
function copy(obj) { 
if (!obj) { return obj; } 
let v; 
let res = Array.isArray(obj) ? [] : {}; 
for (const k in obj) { 
v = obj[k]; 
res[k] = (typeof v === "object") ? copy(v) : v; 
} 
return res; 
}
const a = {a: [1,2,3]};
const b = copy(a);
console.log(JSON.stringify(a) === JSON.stringify(b)); // true
console.log(a === b); // false

