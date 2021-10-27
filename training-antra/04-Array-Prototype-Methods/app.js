// Build Your Own Array Prototype Methods
// Array.prototype.map
// Array.prototype.filter
// Array.prototype.reduce
// Array.prototype.some
// Array.prototype.every

//forEach() - iterate the array, does not return anything
//array.forEach(function(currentValue, index, arr), thisValue)
Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

//map() - iterate the array, return a new array with results from the passing function
//array.map(function(currentValue, index, arr), thisValue)
Array.prototype.myMap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

//filter() - returns a new array with the elements that passed the provided test
//array.filter(function(currentValue, index, arr), thisValue)
Array.prototype.myFilter = function (callback) {
  const filterArray = [];
  for (let index = 0; index < this.length; index++) {
    let result = callback(this[index], index, this); //result returns boolean through callback for the test
    if (result) {
      filterArray.push(this[index]);
    }
  }
  return filterArray;
};

//reduce() - returns a single output value which is the function's accumulated result
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue) -> initialValue for accumulator
//reduce(accumulator, currentValue) -> accumulator like sum, currentValue adds to the accumulator
Array.prototype.myReduce = function (callback, initialValue) {
  let value = initialValue;

  for (let i = 0; i < this.length; i++) {
    let currentValue = this[i];
    value = callback(value, currentValue);
  }

  return value;
};

//some() - check if any of the elements in the array passes a provided test, return boolean
//array.some(function(currentValue, index, arr), thisValue)
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (result) {
      return true;
    }
  }
  return false;
};

//every() - check if every element in the array passes a provided test, return boolean
//array.every(function(currentValue, index, arr), thisValue)
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let result = callback(this[i], i, this);
    if (!result) {
      return false;
    }
  }
  return true;
};
