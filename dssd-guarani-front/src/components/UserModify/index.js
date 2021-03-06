import React, {Component} from 'react';
import axios from 'axios'
import {__API_USER } from '../../consts/consts';


import CircularProgress from '@material-ui/core/CircularProgress'
import UserGrid from './UserGrid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import ModifyForm from './ModifyForm'


class UserModify extends Component{

    state = {
        userList : [],
        loading : true,
        errorMsg : '',
        dialogOpen : false,
        userToModify : null,
        activeModification: false
    }

    componentDidMount(){
        this.updateUserList()

    }

    updateUserList(){
        axios.get(__API_USER).then( resp => {
            console.log(resp.data);
            this.setState({userList : resp.data.filter(user => user.role !== 0),
                           loading : false})
        })
    }

    openModifyScreen(userId){
        debugger;
        this.setState({errorMsg : ''})
        axios.get(__API_USER+userId).then(response => {
            console.log(response.data)
            this.setState({userToModify : response.data, activeModification : true})
            this.updateUserList()
        }).catch(error => {
            this.setState({errorMsg : "Ha habido un error",dialogOpen : true})
        })
    }

    handleDialog(){
        this.setState({dialogOpen : !this.state.dialogOpen})
    }

    cancelModification = () => {
      this.setState({userToModify : null, activeModification : false})
    }



    render(){
        const{userList,loading,errorMsg} = this.state
        
        return <>
        <h3>Modificación de usuario</h3>
        {loading ? <CircularProgress color="secondary"/> : null}
        <Dialog
        open={this.state.dialogOpen}
        keepMounted
        onClose={() => this.handleDialog()}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {errorMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleDialog()} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      { this.state.activeModification ?
      <> 
      <Button color="secondary" variant="outlined" onClick={this.cancelModification}>Volver a la lista</Button> 
      <ModifyForm user={this.state.userToModify}/> 
      </>
      :
      <UserGrid users={userList} action={(id) => this.openModifyScreen(id)}/>
      }
        </>   
    }

}

export default UserModify