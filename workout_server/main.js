//import readUserData from "./readUserData";
const readUserData = require("./readUserData");

const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;
const path = require('path');


app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

//const data = { "squat": [10, 15, 20, 25], "bench": [30, 35, 40, 45], "deadlift": [50, 55, 60, 65] };
const projectedWeight = [100, 102.5, 107.5, 112.5];
const users = ["raven", "jim", "bob", "jane"];
app.get("/", (req, res) => {
    console.log("recieved get request");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


/** Route to register user, and send the client the users data 
 * 
 * Recieves username, Checks if user exists, if user exists return users personal data
 * if user does not exist return not found, user will then be prompted to sign up.
*/
app.post("/registerUser", async (req, res) => {
    let usersName = req.body.user;
    console.log("registering user - ");
    //console.log(req.body.user);

    //console.log(readUserData.userExists(req.body.user));
    //let doesUserExist = readUserData.userExists(usersName);

    const checkUser = async () => {
        const doesUserExist = await readUserData.userExists(usersName);

        if (doesUserExist === true) {
            res.send(projectedWeight);
        }
        else {
            res.send([0]);
        }
    }

    await checkUser();
})

app.listen(port);