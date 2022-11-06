import { serverUrl } from "./App";


/**
 * Function to retrieve users past lifts.
 * 
 * @param {string} username - the username of the user we are fetching data for 
 * @returns Users data, past lifts from server database
 */
export const getUsersData = async (username) => {
    // returns the users data
    let user = { "username": username };
    let usersLifts = {};
    // fetch the users data from the server to display
    const response = await fetch(serverUrl + "registerUser", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: user,
        //body: JSON.stringify(username),
    }).catch(error => {
        console.log(error);
    });

    if (!response.ok) {
        throw new Error("An error has occurred in Getting data from server: ", response.status);
    }

    usersLifts = await response.json();
    return usersLifts;

}


export default getUsersData;