import React from 'react';
import {Login} from './components/Login/Login'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Login />
      
      </React.Fragment>

    </div>
  );
}

export default App;
