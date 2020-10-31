import React, {Component} from 'react';
import axios from 'axios'
import {__API_USER } from '../../consts/consts';


import CircularProgress from '@material-ui/core/CircularProgress'
import UserGrid from './UserGrid';


class UserDrop extends Component{

    state = {
        userList : [],
        loading : true,
        errorMsg : ''

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

    changeUserActive(userId){
        debugger;
        var id = parseInt(userId)
        var user = this.state.userList.find( user => user.id === id)
        var newActive = !user.active

        axios.patch(__API_USER+userId+"/Active/"+newActive).then(response => {
            console.log(response.data)
            this.setState({errorMsg : "El cambio fue guardado"})
            this.updateUserList()
        });


    }

    render(){
        const{userList,loading} = this.state
        
        return <>
        <h3>Lista de usuarios</h3>
        {loading ? <CircularProgress color="secondary"/> : <UserGrid users={userList} action={(id) => this.changeUserActive(id)}/> }
        </>   
    }

}

export default UserDrop