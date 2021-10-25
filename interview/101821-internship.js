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
