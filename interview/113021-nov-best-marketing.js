11/1 Kevin
Q1
// Say you have a list of projects for a given company returned from the server:
const projects = [
  {
    projectId: "abc123",
    name: "Project 1",
    userProjects: [
      {
        userId: "xyz789",
        projectId: "abc123",
        user: {
          userId: "xyz789",
          email: "user1@test.com"
        },
      },
      {
        userId: "sdf012",
        projectId: "abc123",
        user: {
          userId: "sdf012",
          email: "user2@test.com"
        },
      },
    ],
  },
  {
    projectId: "def456",
    name: "Project 2",
    userProjects: [
      {
        userId: "xyz789",
        projectId: "def456",
        user: {
          userId: "xyz789",
          email: "user1@test.com"
        },
      },
      {
        userId: "sdf012",
        projectId: "def456",
        user: {
          userId: "sdf012",
          email: "user2@test.com"
        },
      },
    ],
  },
]

//We want to display a list of users and all their projects like this:
[
  {
    userId: "xyz789",
    email: "user1@test.com",
    projects: [
      {
        projectId: "abc123",
        name: "Project 1",
      },
      {
        projectId: "def456",
        name: "Project 2",
      },
    ]
  }
  {
    userId: "sdf012",
    email: "user2@test.com",
    projects: [
      {
        projectId: "abc123",
        name: "Project 1",
      },
      {
        projectId: "def456",
        name: "Project 2",
      },
    ]
  }
  // ...
];
//implement a function to take the given array above and return it in the specified format

//Answer:
//solution 1
const userInfo = [];

for (const { userProjects, projectId, name } of projects) {
  for (const { user } of userProjects) {
    const userExist = userInfo.some((item) =>
      item.userId.includes(user.userId)
    );
    if (!userExist) userInfo.push({ ...user, project: [] });

    for (index in userInfo) {
      console.log(userInfo[index].userId);
      console.log(user.userId);
      if (userInfo[index].userId === user.userId) {
        userInfo[index].project.push({
          projectId: projectId,
          name: name,
        });
      }
    }
  }
}

console.log(userInfo);

//solution 2
const userProjectsByUserId = new Map();
for (const { userProjects, projectId, name } of projects) {
  for (const { user } of userProjects) {
    if (!userProjectsByUserId.has(user.userId)) {
      userProjectsByUserId.set(user.userId, { user, projects: [] });
    }
    userProjectsByUserId.get(user.userId).projects.push({ projectId, name });
  }
}
const output = [...userProjectsByUserId.values()].map(({ user, projects }) => ({
  ...user,
  project: projects,
}));
console.log(output);

//solution 3
const userInfo = [];
for (let i = 0; i < projects.length; i++) {
  const userProject = projects[i].userProjects;

  for (let j = 0; j < userProject.length; j++) {
    const userExist = userInfo.some((item) =>
      item.userId.includes(userProject[j].user.userId)
    );
    if (!userExist) userInfo.push(userProject[j].user);
  }
}
userInfo.forEach((user) => {
  let tempArr = [];
  for (let i = 0; i < projects.length; i++) {
    const userProject = projects[i].userProjects;
    for (let j = 0; j < userProject.length; j++) {
      if (user.userId === userProject[j].userId)
        tempArr.push({
          projectId: projects[i].projectId,
          name: projects[i].name,
        });
    }
  }
  user.project = tempArr;
});
console.log(userInfo);

//solution4
const userInfo = [];
for (const { userProjects } of projects) {
  for (const { user } of userProjects) {
    const userExist = userInfo.some((item) =>
      item.userId.includes(user.userId)
    );
    if (!userExist) userInfo.push(user);
  }
}
userInfo.forEach((userInfo) => {
  const tempArr = [];
  for (const { userProjects, projectId, name } of projects) {
    for (const { user } of userProjects) {
      if (userInfo.userId === user.userId)
        tempArr.push({
          projectId: projectId,
          name: name,
        });
      userInfo.project = tempArr;
    }
  }
});
console.log(userInfo);


Q2 
//without running it, what will this log to the console?
const hbModule = {
  interValid: null,
  peerId: "peer1",
  _ping(){
    console.log(this)   //reference to the Window object if called from start() since this does not belong to any object
    console.log("ping from", this.peerId);
  },
  start(){
    this.intervalId = setInterval(this._ping, 1000);
  },
  stop() {
    if(this.intervalId !== null){
      clearInterval(this.intervalId);
    }
  }
}
hbModule._ping() //ping from peer1
hbModule.start(); //ping from undefined
setTimeout(() => {
  hbModule.stop();
}, 5000);

//Answer:
//ping from undefined - for 5 times

Q3 prefer function or class component? 
  - functional component because of hooks
Q4 TypeScript exp? What do you use it for? How do you like using it? 
  - yes, good
Q5 Event loop, setTimeout(0)? 
  - main thread first then setTimeout due to event loop in the JS built in engine in the broswer
Q6 configuring SPA, what’s code splitting? What’s it good for? 
  - splitting code into various bundles or components which can then be loaded on demand or in parallel.

11/02 Doug
- Self intro
- More full stack backend or frontend?
- Introduce your project
- Redux mechanism?
- React lifecycle hooks
- Is react the only framework you used in previous projects
- Restful API call vs web socket vs long polling
- Project you worked on that makes you excited, the project you enjoyed most
- Any new technologies and upcoming technologies you know about, excited about?
- How much experience with stylesheets, CSS, or libraries like bootstrap?

11/22 Kevin
- Setter and getter, why use them
Getters and setters, also known as accessors and mutators, are used to protect your data,  particularly when creating classes. 
For each instance variable, a getter method returns its value while a setter method sets or updates its value. 

- Arrow function vs regular function
arrow functions do not have their own this, arguments objects are not available, cannot be used as a constructor, implicitly returned without the use of return keyword (within one line)

- Deep clone & shallow clone
Deep clone: no more contact with previous reference, they are not related, any modification would not influence original copy - lodash.cloneDeep() & JSON parse and stringify
Shallow Clone: reuse previous reference, certain (sub-)values are still connected to the original variable - {...obj} & [...arr]

- Write your own code of deep clone:
function copy(obj) { 
  if (!obj) { 
    return obj; 
  } 
  let v; 
  let res = Array.isArray(obj) ? [] : {};   //check if it is array
  for (const k in obj) { 
    v = obj[k];   //iterate each item in object, and store to v
    res[k] = (typeof v === "object") ? copy(v) : v;   //recursion, if v is object then copy(v), stores in res[k]
  } 
return res; 
}
const a = {a: [1,2,3]};
const b = copy(a);
console.log(JSON.stringify(a) === JSON.stringify(b)); // true
console.log(a === b); // false
