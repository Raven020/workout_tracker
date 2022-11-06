const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;
const path = require('path');
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

//const data = { "squat": [10, 15, 20, 25], "bench": [30, 35, 40, 45], "deadlift": [50, 55, 60, 65] };
const projectedWeight = [100, 102.5, 107.5, 112.5];
const users = ["raven", "jim", "bob", "jane"];
app.get("/", (req, res) => {
    console.log("recieved get request");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// app to register user, and send the client the users data
app.post("/registerUser", (req, res) => {
    console.log("registering user - ");
    console.log(req.body);
    res.send(projectedWeight);
})

app.listen(port);