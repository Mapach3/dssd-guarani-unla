import React, {useState} from 'react';
import {Login} from './components/Login/Login'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Storage} from './consts/Storage'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

function App() {

  const [userToken,setUserToken] = useState(Storage.getJwtToken());
  

  return (
    <Router>
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <React.Fragment>
        <CssBaseline />
        <Switch>
        <Route path="/">
          {userToken == null ? 
          <>
          <Redirect exact to="/login"/>
          <Login setToken={setUserToken}/> 
          </>
          : 
          <>
          {console.log("userToken is: ",userToken)}
          <Redirect exact to="/dashboard"/>
          <h1>Ya estas logeado. tu Token es: </h1>
          <p>{Storage.getJwtToken()}</p>
          </>}
        </Route>
        </Switch>

      </React.Fragment>

    </div>
    </Router>
  );
}

export default App;
