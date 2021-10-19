let pets = new Set(["Cat", "Dog", "Hamster"]); // object

pets["species"] = "mammals"; // add species-mammal

//for...in, use it over Object (key: value) - enumerable property
for (let pet in pets) {
   console.log(pet); // "species"
}

// for...of ES6, use it over Array - iterable items
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}


const arr = [{x:1}, {y:2}];
for (let n of arr) {
    console.log(n);
}

{0: 1, 1: 2, 2: 3}


1. Object concept
2. different between for...in and for...of


const obj = { x: 1 };
obj['y'] = 2; // add y-2 pair to original obj
console.log(obj);


//bind apply call 

const func = () => {};

func.bind / func.apply / func.call



