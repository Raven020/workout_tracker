const fs = require("fs");



// check that user exists  

const userExists = async (username) => {
    let users = {};
    const data = await fs.readFileSync('db/users.json', 'utf8')
    //console.log(data.js);
    users = JSON.parse(data);

    //console.log(users[0]);
    // search through users return true if user found else false
    for (let user of users) {

        if (user["username"] === username) {
            console.log("User exists");
            return true;
        }

    }
    console.log("User not found");
    return false


}



//export default readUserData;
module.exports = { userExists };


//retrieve user data