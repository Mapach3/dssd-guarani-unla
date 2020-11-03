import React, {useState} from 'react';
import {Login} from './components/Login/Login'
import UserInsert from './components/UserInsert/index'
import UserDrop from './components/UserDrop/index'
import SubjectInsert from './components/SubjectInsert/SubjectInsert';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Storage} from './components/Storage'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from './pages/Home';
import InsertInscriptionWindow from './components/InscriptionWindow/InsertInscriptionWindow';


const App = () => {

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
          {/* <Login setToken={setUserToken}/> */}
          {/* <UserInsert />  */}
          {/* <UserDrop /> */}
          {/* <SubjectInsert /> */}
          <InsertInscriptionWindow />
          </>
          : 
          <>
          <Redirect exact to="/dashboard"/>
          <h1>Ya estas logeado. tu Token es: </h1>
          <p>{Storage.getJwtToken()}</p>
          </>}
        </Route>
        </Switch>
        

      </React.Fragment>

    </div>
    </Router>
    
    // <Home></Home>
  );
}

export default App;
