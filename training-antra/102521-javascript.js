// coersion
const res = 1 + undefined //NaN
const res = 1 + "2"   //12
const res = "1" - 2   //-1
  
// == vs ===
const obj = {name:"patrick"}
const obj2 = new Object({name:"patrick"})    //initialize a new object
console.log(obj === obj2)   //false, point to different memory, but look the same if we do console.log(obj2, obj)

// class | prototype -> JS ES6
How to declare a class? with a "class" keyword - ES6 syntax sugar
- JS does not really have class function, but a constructor function
what is the purpose for class, why we need the class?
- help us do some patterns, for reusability
  
//ES6 syntax
class Person {    //it is called constructor function
  constructor (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
      console.log(`I am ${this.name}`)
    }
  }
//   showName(){
//     console.log(`I am ${this.name}`)
//   }
}

//ES5 syntax
function Person(name,age){
    this.name = name;
    this.age = age;
}

const p = new Person("patrick", 18);    //datatype of p is object, datatype of Person is function
const p2 = new Person("patrick", 18); 
const p3 = new Person("patrick", 18); 

p.showName();   //I am patrick
