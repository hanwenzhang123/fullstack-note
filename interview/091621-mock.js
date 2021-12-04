//Test 1 
//var variables are function scope.
//It means they are only available inside the function they are created in, 
//or if not created inside a function, they are globally scoped. 

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));
}
console.log(i);

//3
//3
//3
//3


//Test 2
//Variables declared using the let keyword are block-scoped, 
//which means that they are available only in the block in which they were declared.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i));   //0 1 2
}
console.log(i); //ReferenceError: i is not defined



//Test 3

for (var i = 0; i < 3; i++) {
  let ii = i
  setTimeout(() => console.log(ii));  //0 1 2
}
console.log(i);   //3

//3
//0
//1
//2


//Test 4 

const creator = () => {
    return function (num) {
        return num +5
    };
}

const addFive = creator()   //return a function
// addFive(3) => 8
console.log(addFive(3));

//8


//Test 5 

// input string -> "abcabca"
// output string -> "a"

const string = "abcabca";

const input = (str) => {
    // { "a": 3, "b": 2, "c": 2 }
    const obj = {};

    for (let i=0; i<str.length; i++){
        if (obj.hasOwnProperty(str[i])) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }

    const maxValue = Math.max(...Object.values(obj));

    const key = Object.keys(obj).find(key => obj[key] === maxValue);
    return key;
};

console.log(input(string));
 
