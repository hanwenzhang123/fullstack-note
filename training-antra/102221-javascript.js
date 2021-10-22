//primitiva data are immutable


//reference type data you can change, function is also objects

function foo(input) {
  input = 7;
  console.log("input", input) //7
}

foo.a = 5;
console.log(foo.a) //5
