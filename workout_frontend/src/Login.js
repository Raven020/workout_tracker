import React from "react";

const Login = (props) => {

    //const [username, setUsername] = useState(null);
    //const [usersLifts, setUserLifts] = useState({});
    let usernameInput = null;
    // function for when the user clicks log in button
    const handleSubmit = (e) => {
        // log user in and fetch their data.
        // TODO VERIFY USER
        // Notify app that user has logged in log in user
        props.onLoginHandler(usernameInput);
    }
    // function to track the users entry into username text field
    const onChangeUsername = (e) => {
        //console.log(e.target.value);

        usernameInput = e.target.value;


    }

    const loginUser = (username) => {
        // Send the current user to server, log them in

        // verify that they have an account,

        // if they have an account get their data
        console.log(username);
    }

    return (
        <div>
            <label name="username">Username: </label>
            <input type="text" name="username" id="username" onChange={(e) => onChangeUsername(e)}></input>
            <button id="logInButton" onClick={(e) => handleSubmit(e)}> Log in</button>
        </div >

    );

}
export { };
export default Login;