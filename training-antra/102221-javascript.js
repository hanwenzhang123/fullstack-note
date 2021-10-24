//primitiva data are immutable, they cannot be altered.


// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ


- the variable may be reassigned a new value but the existing value can not be changed 
- in the ways that objects, arrays, and functions can be altered.


//reference type data you can change, function is also objects

function foo(input) {
  input = 7;
  console.log("input", input) //7
}

foo.a = 5;
console.log(foo.a) //5

 
