# json-server

This is a mock backend server using Json-server to privoide the basic CURD for the eventList

### Creat your own json-server

> **1st**: Clone this repository.

> **2nd**: Under this repo, run: npm install

> **3rd**: Start this json-server, run: npm run start

### Run your json-server

Check the server port (default port should be 3000).

On browser, check json-server main page(http://localhost:3000 ) for our json-server.

# Examples:

```javascript
// Get all Events
fetch("http://localhost:3000/events")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Create a new Event
fetch("http://localhost:3000/events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    eventName: "TEST",
    startDate: "1641790800000",
    endDate: "1641790800000",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Delete an Event with id 1
fetch("http://localhost:3000/events/1", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Update an Event with id 2
fetch("http://localhost:3000/events/2", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    eventName: "TEST-CHANGED",
    startDate: "1641790800000",
    endDate: "1641790800000",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

# How to reset the database:

you can just remove everything inside `db.json`, add copy everything from `db.init.json` into `db.json`
