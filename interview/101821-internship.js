//Q1
module.exports = {
 solution: function(S) {
   let correctness;
   const array = S.split("-");
   const firstWord = array[0];
   const secondWord = array[1];
   const firstThreeLetter = firstWord.slice(firstWord.length-3);
   const secondThreeLetter = secondWord.slice(secondWord.length-3);

   if(firstThreeLetter === secondThreeLetter) {
     correctness = true;
   } else {
     correctness = false;
   }
   return correctness;
 }
};

//Q2
module.exports = {
 solution: function(N) {
   const numberArray = Array.from(N.toString()).map(Number);
   const sortedArray = numberArray.sort().reverse();
   const firstThreeNum = sortedArray.slice(0,3)
   const largestInt = Number(firstThreeNum.join(""));
   return largestInt;
 }
};


//Interview - Antra 10/7/2021
//Introduce past projects
//Promise
const promise = new Promise(function(resolve, reject) {
  return setTimeout(() => resolve("done"), 3000);
});

promise.then((resolve) => {console.log(resolve)});


//string "hello world" to "Hello World"
//no space "hi" to "Hi"
name.charAt(0).toUpperCase() + name.slice(1)

//with space using function
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {		// Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 		// Directly return the joined string
}

//CSS position
//CSS flexbox
 
