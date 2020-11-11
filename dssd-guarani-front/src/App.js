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
import {FirstAccess} from './components/Login/FirstAccess';
import UserModify from './components/UserModify/index'
import { Loading } from './components/Login/Loading';
import SubjectInscriptionModification from './components/InscriptionsModification/SubjectInscriptionModification'
import UserInsert from './components/UserInsert';
import SubjectInsert from './components/SubjectInsert/SubjectInsert';
import InsertInscriptionWindow from './components/InscriptionWindow/InsertInscriptionWindow'
import SubjectSpreadSheet from './components/SpreadSheet/SubjectSpreadSheet'

const App = () => {

  const [userToken,setUserToken] = useState(Storage.getJwtToken());
  const [imageUser,setImageUser] = useState(Storage.getImageUser());
  const [rolUser,setRolUser] = useState(Storage.getRolUser());
  const [nameUser,setNameUser] = useState(Storage.getNameUser());
  const [passChange,setPassChange] = useState(Storage.getPassChange());
  const [mailUser,setMailUser] = useState(Storage.getMailUser());
  const [userId,setUserId] = useState(Storage.getUserId());

  

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
          <Login setToken={setUserToken} setMailUser={setMailUser} setPassChange={setPassChange} setImageUser={setImageUser} setRolUser={setRolUser} setNameUser={setNameUser} setUserId = {setUserId}/>          
          {/* <SubjectInscriptionModification /> */}
          {/* <UserInsert /> */}
          {/* <SubjectInsert /> */}
          {/* <InsertInscriptionWindow /> */}
          {/* <SubjectSpreadSheet /> */}
          </>
          :
          <>
          <Redirect exact to="/home"/>
          {(passChange === 'false'
              ? <FirstAccess setPassChange={setPassChange}/> 
              : (rolUser === 'ADMIN' && passChange === 'true'
                ? <HomeAdmin rolUser={rolUser} imageUser={imageUser} nameUser={nameUser} userId={userId}/> 
                : (rolUser === 'STUDENT' && passChange === 'true'
                        ? <HomeStudent rolUser={rolUser} imageUser={imageUser} nameUser={nameUser} userId={userId}/> 
                        : (rolUser === 'TEACHER' && passChange === 'true' 
                            ? <HomeTeacher rolUser={rolUser} imageUser={imageUser} nameUser={nameUser} userId={userId}/>
                            : <Loading/>))))}
          </>
          }
        </Route>
        </Switch>
        

      </React.Fragment>
    </div>
    </Router>   
  );
}

export default App;
