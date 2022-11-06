import ProgressChart from './ProgressChart';
import getUsersData from './GetData';
import Login from './Login';
import { useEffect, useState } from 'react';

export const serverUrl = "http://localhost:5000/";

const App = () => {


  const [user, setUser] = useState("");
  const [logged_in, setLogIn] = useState(false);


  // if user has reloaded page they will remain logged in
  // until they have logged out or started a new browser session
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser !== null) {
      try {
        logUserIn(storedUser);
      } catch (error) {
        console.log("error logging user in ", error);
      }


    };
  }, []);

  // function to log the user in, set the apps state to logged in, 
  // and retrieve the users data from the server
  const logUserIn = username => {
    if (username !== "") {
      console.log("LOGGING USER IN");
      setLogIn(true);// set the state to reflect that a user has logged in
      setUser(username); // set the current user to the users username
      localStorage.setItem('user', username);// set users username in local storage

    }


  };

  // function to log user out, set app state to logged_in = false and 
  // remove local storage
  const logUserOut = () => {
    setUser("");
    setLogIn(false);
    localStorage.removeItem('user');
  }


  return (
    <div className="App">
      {logged_in === true &&
        <div>
          <h1>Welcome {user}</h1>
          <button type="button" onClick={logUserOut}> Log out</button>
          <ProgressChart username={user} />
        </div>


      }
      {logged_in === false && <Login onLoginHandler={logUserIn}></Login>}

    </div>
  );
}

export default App;
