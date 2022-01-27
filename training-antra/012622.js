/* for(var i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 500);
} */
/* var i = 0;
for(;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    }, 500);
} */
//sync code, code that is going to execute right away
// async code, will not get executed right away, but sometime in the future
//call stack, message queue

/* var i = 0;
for(;i<5;i++){
    console.log(i);
}  */

/* var i = 0;
while(i<5){

    setTimeout(()=>{
        console.log(i);
    },500);

    i++;//fourth loop, i is going to be 5 in the end
} */
//5,5,5,5,5
//0,1,2,3,4

/* for(let i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 500);
} */
/* var i = 0;
while(i<5){
    ((i)=>{
        setTimeout(()=>{
            console.log(i)
        },500);
    })(i); //iife, closure. 
    i++;
} */

/* const foo = (cb) => {
    setTimeout(()=>{
        cb();
    },2000)
}
const callback = () => {console.log(1)}; */

/* foo(
    ()=>{
        foo(
            ()=>{
                foo(callback);
            }
        );
    }
); */
/* foo(
    ()=>{
        foo(
            ()=>{
                foo(
                    ()=>{
                        foo(
                            ()=>{
                                foo(
                                    ()=>{
                                        foo(callback);
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }
); */ //callback hell, promise

/* var xhttp = new XMLHttpRequest();//xhr
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(1,xhttp.response);
        var xhttp1 = new XMLHttpRequest();
        xhttp1.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                console.log(2, xhttp1.response);
            }
        }
        xhttp1.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp1.send();
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhttp.send(); */

/* 
    1, {}
    2, [{},{}....]
*/

/* const foo = () => {
    setTimeout(() => {
       setTimeout(()=>{
           console.log("after 1000ms")
       },500) 
    }, 500);
}

foo(); */

/* const promise = 
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("first setTimeout after 500ms")
        reject("rejected");

    },500)
}).then((res)=>{
    console.log("res",res);
    setTimeout(()=>{
        console.log("second setTimeout after 1000ms")
    },500)
}).catch((err)=>{
    console.log(err)
}) */

const request = (cb, url) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb();
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};

const requestPromise = new Promise((
  resolve1 /* function */,
  reject1 /* function */
) => {
  console.log("1st promise");
  request(
    () => resolve1("from 1st promise"),
    "https://jsonplaceholder.typicode.com/posts/1"
  );
})
  .then((res) => {
    //we chain this then here, so that the pattern is better looking
    console.log("1st then", res);
    return new Promise((resolve2, reject2) => {
      request(
        () => resolve2("from 1st then"),
        "https://jsonplaceholder.typicode.com/posts/2"
      );
    });
  })
  .then((res2) => {
    return new Promise((resolve3, reject3) => {
      console.log("2nd then", res2);
      request(
        () => resolve3("from 2nd then"),
        "https://jsonplaceholder.typicode.com/posts/3"
      );
    });
  })
  .then((res3) => {
    console.log("from 3rd then", res3);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {});
