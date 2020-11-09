import React, { Component } from 'react';
import axios from 'axios'
import { __API_PATCH_USER_PASSWORD, __API_USER } from '../../consts/consts';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {Storage} from '../Storage'

export class FirstAccess extends Component {

        state = {
            isLoading: false,
            userList : [],
            newPassword: '',
            mail: Storage.getMailUser(),
            newUserName : '',
            errorMsg : ''
        };


    setPasswordDefinitive = () =>  {
        debugger;
        const {mail,newPassword, newUserName,userList} = this.state

        if (userList.find(user => user.userName === newUserName) !== undefined){
            this.setState({errorMsg : "Error: ya existe un usuario con ese Nombre de Usuario"})
        }else{
            const options = {
                method : "PATCH",
                url : __API_PATCH_USER_PASSWORD + mail + "/PassChange/",
                data : {
                    username : newUserName,
                    email : mail,
                    password : newPassword
                }    
            }

            axios(options).then(response => {
                Storage.setPassChange(true)
                this.props.setPassChange(true)
            }).catch(error => {
                console.log("Error change password temporal:" + error);
            })
        }


    }

    onChangePass = (ev) => {
        this.setState({ newPassword: ev.target.value })
    }

    componentDidMount(){
        axios.get(__API_USER).then( resp => {
            this.setState({userList : resp.data})
        })
    }
    onChangeUserName = (ev) => {
        this.setState({ newUserName: ev.target.value })
    }

    render() {
        return (
            <Container maxWidth="xs">
                <br />
                <Typography>
                    Primer acceso en el sistema, por favor cambie sus datos de ingreso.
                    </Typography>
                <Grid item sm={12} >
                    <TextField fullWidth inputProps={{ maxLength: 100 }} variant="outlined"
                        value={this.state.newUserName} onChange={(ev) => this.onChangeUserName(ev)} label="Ingrese Nombre de Usuario" type="text" />
                </Grid>
                <Grid item sm={12} >
                    <TextField fullWidth inputProps={{ maxLength: 100 }} variant="outlined"
                        value={this.state.newPassword} onChange={(ev) => this.onChangePass(ev)} label="Ingrese Contraseña" type="text" />
                </Grid>
                < br/>
                <Button variant="contained" onClick={this.setPasswordDefinitive} color="primary">
                    Actualizar datos
                </Button>
                <br />
                {this.state.errorMsg.length !== 0 ? <p>{this.state.errorMsg}</p> : null }
            </Container>
        )
    }

}