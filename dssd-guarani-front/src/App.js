import React, {useState} from 'react';
import {Login} from './components/Login/Login'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Storage} from './components/Storage'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import HomeAdmin from './pages/HomeAdmin';
import HomeStudent from './pages/HomeStudent';
import HomeTeacher from './pages/HomeTeacher';

const App = () => {

  const [userToken,setUserToken] = useState(Storage.getJwtToken());
  const [imageUser,setImageUser] = useState(Storage.getImageUser());
  const [rolUser,setRolUser] = useState(Storage.getRolUser());
  const [nameUser,setNameUser] = useState(Storage.getNameUser());

  

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
          <Login setToken={setUserToken} setImageUser={setImageUser} setRolUser={setRolUser} setNameUser={setNameUser}/>         
          </>
          : 
          <>
          <Redirect exact to="/home"/>
          {(rolUser === 'ADMIN' 
                ? <HomeAdmin rolUser={rolUser} imageUser={imageUser} nameUser={nameUser}/> 
                : (rolUser === 'STUDENT' 
                        ? <HomeStudent rolUser={rolUser} imageUser={imageUser} nameUser={nameUser}/> 
                        : <HomeTeacher rolUser={rolUser} imageUser={imageUser} nameUser={nameUser}/>))}
          </>}
        </Route>
        </Switch>
        

      </React.Fragment>
    </div>
    </Router>   
  );
}

export default App;
