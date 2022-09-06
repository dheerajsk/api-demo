
// express is nodejs framework
const bodyParser = require("body-parser");
const express = require("express");

// 1. Create a server.

const users = [{id: 1,name: "Rohan"}, {id: 2,name: "Kunal"}];

const server = express();
server.use(bodyParser.json());

// API to Get Users.
server.get('/api/user', (req, res)=>{
    res.end(JSON.stringify(users));
});

// API to Get Users.
server.get('/api/user/:id', (req, res)=>{
    req.params.id
    const result = users.find(i=> i.id==req.params.id);
    res.end(JSON.stringify(users));
});

// API to add a new user.
server.post('/api/user', (req, res)=>{
    // push function adds data to array.
    users.push(req.body);
    res.end(JSON.stringify(users));
});

server.listen(3000);