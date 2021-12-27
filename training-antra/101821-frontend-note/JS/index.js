// NODE, Javascript, EcmaScript(ES5, ES6, ES7...)
// EcmaScript = Sytanx standard
// Javacirpt =  EcmaScript + webAPI
// NODE = EcmaScript + NODEAPI

// primative type
// let num =5; // number

// console.log(typeof num)
// let str = 'abc';
// str[0] = 'x';
// console.log(str[0])
// console.log(typeof str)
// let b = true;
// console.log(typeof b)
// let und = undefined;
// console.log(typeof und)
// let n = null;
// console.log(typeof n);

// let c = 10;
// let d = c;
// d = 5;
// console.log('d',d) // 5
// foo(c);

// console.log("c",c) // 10

// function foo(input){
//     input = 7;
//     console.log("input",input) // 7
// }
// foo.a =5;
// console.log(foo.a);

/// object data type : object | function
// function foo(){

// }
// console.log(typeof foo);
// let obj = {}
// console.log(typeof obj);
// let arr = []
// console.log(typeof arr);

// let obj = {name:'patrick'}

// foo(obj);
// console.log(obj) // {name:'patrick'}
// function foo(input){
//     input = {name:'changed'}
//     console.log(input) // {name:'changed'}
// }

// deepcopy, shallow copy
// class key in ES6 and constructor function in ES5

/// coersion | == vs ===
// const res = 1 + undefined;
// const res= "1" - 3;
// console.log(res)

// console.log("2" === 2);
// console.log("2" == 2);
// const a = {name:'patrick'};
// const b = {name:'patrick'};
// console.log(a == b)
// console.log(a === b)

// const obj = {name:'patrick'}
// const obj2 = new Object({name:'patrick'})
// console.log(obj2,obj)

// class | prototype
// // ES6
// class Person {
//   constructor(name, age) {
//     this.pname = name;
//     this.age = age;
//     // this.showName = function () {
//     //   console.log(`I am ${this.pname}`);
//     // };
//   }
//   showName(){
//       console.log(`I am ${this.pname}`)
//   }
// }
// class Employee extends Person {
//   constructor(name, age , company) {
//     super(name,age)
//     this.company = company
//   }
//   showCompany(){
//     console.log(`I am working at ${this.company}`)

//   }
// }

// function Person(name, age) {
//   this.pname = name;
//   this.age = age;
// }
// Person.prototype.showName = function () {
//   console.log(`I am ${this.pname}`);
// };

// function Employee(name, age, company) {
//   Person.prototype.constructor.call(this, name, age); // super in ES6
//   this.company = company;
// }
// Employee.prototype = Object.create(Person.prototype)
// console.log("Employee.prototype",Employee.prototype)
// Employee.prototype.constructor=Employee;
// Employee.prototype.showCompany = function () {
//   console.log(`I am working at ${this.company}`);
// };

// const e = new Employee('patrick', 18, 'Antra Inc');
// //e.showName()
// console.log(e);

// const p = new Person('patrick', 18);
// const p2 = new Person('patrick', 18);
// const p3 = new Person('patrick', 18);

// console.log(p.showName === p2.showName)
// console.log(p.showName);
//  p.showName();
// p.toString = 5;
// console.log(p)
// console.log(p.toString)

//console.log("res",p3.showName(p2.showName()));
// function foo(){
//   let a = 5;
//   a++;
//   function foo2(input){
//     console.log('hello')
//     return input
//   }
//   return foo2("hello");
// }
// console.log(res)

//  function getUser(){
//    return {
//      name:'patrick',
//      hello:"welcome"
//    }
//  }

//  console.log(getUser().hello)

// function foo(){
//   console.log('hello')
// }
// function foo(msg,msg2){
//   console.log(arguments)
//   console.log(msg,msg2) /// output
//   return 'patrick'
// }

// foo(undefined,undefined,"hello",()=>{});

// let arr = [1, 2, 3]; // [2 ,4 ,6]
// let arr2 = [2, 4, 6]; // [4,8,12]

// Array.prototype.filter
// Array.prototype.map
// Array.prototype.reduce
// Array.prototype.some
// Array.prototype.every

// Array.prototype.myforEach = function (callbackFn) {
//   for (let i = 0; i < this.length; i++) {
//     callbackFn(this[i], i, this);
//   }
// };

// function multiplyByTwo(arr) {
//   let res = [];
//   arr.myforEach((item, index, array) => {
//     console.log('item', item, 'index', index, 'array', array);
//     res.push(item * 2);
//   });
//   return res;
// }
// console.log(multiplyByTwo(arr2));

// const arr = [1,2,3];

// const arr2 = arr.map(item=>item*2);
// const arr22 = arr.reduce((acc,cur,index,array)=>{
//   console.log(acc,cur,"index:",index, array)
//    //  acc.push(cur*2);
//    return acc;
// },[])

// //console.log(arr22,arr2)

// //console.log(arr2);
// const arr3 = arr.filter(item=>{
//   return item % 2 ===0
// });
// //console.log(arr3);

// const arr5 = arr.reduce((acc, cur, index, array)=>{
//   acc = acc + cur
//   return acc
// },0)

// console.log(arr5)

// ES6
// arrow function
// hoisting
// let const var
//console.log(foo)

// function foo(){
//   console.log('foo')
// }
// console.log(foo2) ///
// foo2()
// var foo2 = function(){
//   console.log('foo2')
// }
// //foo2()
// var foo3 = ()=>{
//   console.log('foo3')
// }
// //foo3()

// console.log(a);
// var a = 5;

// let a ;
// a =6;
// console.log(a)
// const b;
// b = 6;
// console.log(b)

// const obj = {name:'patrick'};
// obj.name = 5;
// obj.age = 12
// console.log(obj)

// function foo(){
//  // console.log(a)// undefined
//   if(true){
//     let a = 5;
//     console.log(a)// 5
//   }
//   //console.log(a)// 5
// }

// foo()
// console.log(a) // 5

// function foo(){
//   for(var i = 0;i<5;i++){
//     setTimeout(()=>{
//       console.log(i);
//     },i*1000)
//   }
// }
// foo()

// function foo(){

//   for(let i = 0; i<20;i++){
//     // if(i === 0){
//     //   setTimeout(()=>{
//     //       console.log(i)
//     //   },0)
//     // }
//   }
// }
// foo()

// function dosomethingOne(){
//   console.log('dosomethingOne')
// }

// function dosomethingTwo(){
//   console.log('dosomethingTwo')
// }
// function dosomething(msg) {
//   console.log(`doing thing ${msg}`);
// }

// function callAfter2SecondWithPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('next');
//     }, 2000);
//   });
// }

// callAfter2SecondWithPromise()
//   .then((_) => {
//     dosomething(1);
//     return callAfter2SecondWithPromise();
//   })
//   .then((_) => {
//     dosomething(2);
//     return callAfter2SecondWithPromise();
//   })
//   .then((_) => {
//     dosomething(3);
//     return callAfter2SecondWithPromise();
//   })
//   .then((_) => {
//     dosomething(4);
//     return callAfter2SecondWithPromise();
//   })
//   .then((_) => {
//     dosomething(5);
//     return callAfter2SecondWithPromise();
//   });

// function callAfter2Second(callbackFn){
//   setTimeout(()=>{
//     callbackFn()
//   },2000)
// }

// callAfter2Second(()=>{
//   dosomething(1);
//   callAfter2Second(()=>{
//     dosomething(2);
//     callAfter2Second(()=>{
//       dosomething(3);
//       callAfter2Second(()=>{
//         dosomething(4);
//         callAfter2Second(()=>dosomething(5));
//       });
//     });
//   });
// });

// callAfter2Second(dosomethingOne);
// callAfter2Second(dosomethingTwo);

// class MyPromise {
//   constructor(cb) {
//     this.resolve = this.resolve.bind(this);
//     this.PromiseState = 'pending';
//     this.onFufillmentList = [];
//     cb(this.resolve);
//   }

//   resolve(value) {
//     this.PromiseState = 'fufill';
//     this.value = value;
//     setTimeout(async() => {
//       for(let i = 0; i<this.onFufillmentList.length;i++){
//         const result = await this.onFufillmentList[i](this.value);
//         this.value = result;
//       }
//     });
//   }

//   then(onFufillmentFn) {
//     this.onFufillmentList.push(onFufillmentFn);
//     return this;
//   }
// }

// // console.log('before new Prmomise');
// let p = new MyPromise((resolve, reject) => {
//   console.log('hello');
//   setTimeout(() => {
//     resolve({ name: 'patrick' });
//   }, 3000);
// });
// p.then((value) => {
//   console.log('value', value);}
// return new Promise((res, rej) => {
//   res("hello");
// });

//   return "no Promise any more"
// }).then((value2) => {
//   console.log("value2",value2);
// });
// console.log('After new Prmomise');
// console.log(p);

// console.log('================');

// console.log(1)
// new Promise((resolve,reject)=>{
//   console.log(2);
//   resolve(3)
// }).then(data=>{
//   console.log(data)
// })
// console.log(4)

//p.then(console.log(5))

// console.log(p);
// setTimeout(()=>{
//   console.log(p);
// },4000)

// class Test {
//   constructor(msg){
//     this.msg = msg
//   }
//   showMsg (){
//     console.log(this.msg)
//   }
//   static showMsg2(){
//     console.log("this.msg")
//   }
// }

// Test.showMsg3 = function(){
//   console.log('msg3')
// }

// Test.showMsg3();

// let test = new Test('patrick');
// test.showMsg()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve(1)
//   },1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('promise2 resovle')
//   },2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve({name:'promise 3'})
//   },3000);
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// Promise.myAll = function(promiseArray){
//   const len = promiseArray.length;
//   const resultArray = new Array(len)
//   let resolvedCounter = 0;
//   return new Promise((resolve,reject)=>{
//     promiseArray.forEach((p,index)=>{
//       p.then(data=>{
//         resultArray[index] = data;
//         resolvedCounter++;
//         if(resolvedCounter === len){
//           resolve(resultArray)
//         }
//       })
//     })
//   })
// }

// Promise.myAll([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// function myFetch(url) {
//   return new Promise((res, rej) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(xhttp);
//         res({
//           json: function () {
//             return new Promise((res, rej) => {
//               res(JSON.parse(xhttp.response))
//             });
//           },
//         });
//       }
//     };
//     xhttp.open('GET', url, true);
//     xhttp.send();
//   });
// }

// myFetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     let res = response.json();
//     return res;
//   })
//   .then((json) => console.log('json my fetach', json));

// function getData(url, options) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       options.success(JSON.parse(xhttp.response));
//     }
//   };
//   xhttp.open(options.method, url, true);
//   xhttp.send();
// }

// getData('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'GET',
//   success: function (data) {
//     alert(data);
//   },
// });
