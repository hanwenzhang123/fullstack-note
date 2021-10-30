function dosomethingOne(){
  console.log('dosomethingOne')
}

function dosomethingTwo(){
  console.log('dosomethingTwo')
}

function dosomething(msg) {
  console.log(`doing thing ${msg}`);
}

function callAfter2SecondWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('next');
    }, 2000);
  });
}

//both 'dosomethingOne' and 'dosomethingTwo' will be printed at the same time after 2 seconds
callAfter2Second(dosomethingOne); 
callAfter2Second(dosomethingTwo);


//Promise chaining
callAfter2SecondWithPromise()
  .then((_) => {
    dosomething(1);
    return callAfter2SecondWithPromise();
  })
  .then((_) => {
    dosomething(2);
    return callAfter2SecondWithPromise();
  })
  .then((_) => {
    dosomething(3);
    return callAfter2SecondWithPromise();
  })
  .then((_) => {
    dosomething(4);
    return callAfter2SecondWithPromise();
  })
  .then((_) => {
    dosomething(5);
    return callAfter2SecondWithPromise();
  });


// using callback to complete the task
function callAfter2Second(callbackFn){
  setTimeout(()=>{
    callbackFn()
  },2000)
}

callAfter2Second(()=>{
  dosomething(1);
  callAfter2Second(()=>{
    dosomething(2);
    callAfter2Second(()=>{
      dosomething(3);
      callAfter2Second(()=>{
        dosomething(4);
        callAfter2Second(()=>dosomething(5));
      });
    });
  });
});


//Implement your own Promise
class MyPromise {
  constructor(cb) {
    this.resolve = this.resolve.bind(this);
    this.PromiseState = 'pending';
    this.onFufillmentList = [];
    cb(this.resolve);
  }

  resolve(value) {
    this.PromiseState = 'fufill';
    this.value = value;
    setTimeout(async() => {
      for(let i = 0; i<this.onFufillmentList.length;i++){
        const result = await this.onFufillmentList[i](this.value);
        this.value = result;
      }
    });
  }

  then(onFufillmentFn) {
    this.onFufillmentList.push(onFufillmentFn);
    return this;
  }
}

// console.log('before new Prmomise');
let p = new MyPromise((resolve, reject) => {
  console.log('hello');
  setTimeout(() => {
    resolve({ name: 'patrick' });
  }, 3000);
});
p.then((value) => {
  console.log('value', value);}
return new Promise((res, rej) => {
  res("hello");
});

  return "no Promise any more"
}).then((value2) => {
  console.log("value2",value2);
});
console.log('After new Prmomise');
console.log(p);

console.log('================');

console.log(1)
new Promise((resolve,reject)=>{
  console.log(2);
  resolve(3)
}).then(data=>{
  console.log(data)
})
console.log(4)

p.then(console.log(5))

console.log(p);
setTimeout(()=>{
  console.log(p);
},4000)



class Test {
  constructor(msg){
    this.msg = msg
  }
  showMsg (){   //the function declared inside the class object, will be used for instances created based on the class
    console.log(this.msg)
  }
  static showMsg2(){  //called directly on the class - without creating an instance of the class.
    console.log("this.msg")
  }
}

Test.showMsg3 = function(){
  console.log('msg3')
}

Test.showMsg()    //TypeError: Test.showMsg is not a function
Test.showMsg2();  //function showMsg2(){ console.log("this.msg") } -> good, static methods call Class object directly
Test.showMsg3();  //msg3  -> create the function outside the class, it stays in this scope, not part of the class

let test = new Test('patrick');
test.showMsg()   //patrick  -> call the function in the class through the declared instance
test.showMsg2()  //TypeError: test.showMsg2 is not a function -> no good, static keyword only be called with class not but with its instances
test.showMsg3()  //TypeError: test.showMsg3 is not a function -> test is an instance of the class, can only get the things within the class



//Promise.all() - takes an array of all the promises
const promise1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(1)
  },1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('promise2 resovle')
  },2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve({name:'promise 3'})
  },3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


//create your own Promise.all()
Promise.myAll = function(promiseArray){
  const len = promiseArray.length;
  const resultArray = new Array(len)
  let resolvedCounter = 0;
  return new Promise((resolve,reject)=>{
    promiseArray.forEach((p,index)=>{
      p.then(data=>{
        resultArray[index] = data;
        resolvedCounter++;
        if(resolvedCounter === len){
          resolve(resultArray)
        }
      })
    })
  })
}

Promise.myAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});


//create my own fetch() function
function myFetch(url) {
  return new Promise((res, rej) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp);
        res({
          json: function () {
            return new Promise((res, rej) => {
              res(JSON.parse(xhttp.response))
            });
          },
        });
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  });
}

myFetch('https://jsonplaceholder.typicode.com/todos/1') //.fetch() return Promise
  .then((response) => {
    let res = response.json();
    return res;
  })
  .then((json) => console.log('json my fetach', json));


function getData(url, options) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      options.success(JSON.parse(xhttp.response));
    }
  };
  xhttp.open(options.method, url, true);
  xhttp.send();
}

getData('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'GET',
  success: function (data) {
    alert(data);
  },
});
