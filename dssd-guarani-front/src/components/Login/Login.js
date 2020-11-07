import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import {__API_LOGIN} from '../../consts/consts';
import {Storage} from '../Storage'


export class Login extends Component{

    state = {
        formEmail : '',
        formPassword : '',
        wrongCredentials : 'Credenciales inválidas',
    }

    handleMailChange = (ev) => {
        this.setState({formEmail : ev.target.value})
    }

    handlePasswordChange = (ev) => {
        this.setState({formPassword : ev.target.value})
    }

    performLogin(){
        this.setState({wrongCredentials : false})
        const options = {
            method: "POST",
            url: __API_LOGIN,
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            
            data: {
                email : this.state.formEmail,
                password : this.state.formPassword
            }
        }

        axios(options).then( resp => {
            console.log("Login Response: ", resp)
            var loginResponse = resp.data
            if (loginResponse.cod === 200){
                Storage.setJwtToken(loginResponse.data)
                Storage.setImageUser(loginResponse.imageUser)
                Storage.setRolUser(loginResponse.rol)
                Storage.setNameUser(loginResponse.nameUser)
                this.props.setToken(loginResponse.data)
                this.props.setImageUser(loginResponse.imageUser)
                this.props.setRolUser(loginResponse.rol)
                this.props.setNameUser(loginResponse.nameUser)
            }
            else
                this.setState({wrongCredentials : "Error: credenciales inválidas"})



        }).catch( error => {
            console.error("Error during Login: ",error)
        })


    }

    render(){
        return (
            <Container maxWidth="md">
                <h1>Logearse al sitio</h1>
                <form autoComplete="off">
                    <FormControl>
                        <InputLabel htmlFor="component-simple">E-mail</InputLabel>
                        <Input id="component-simple" value={this.state.formEmail} onChange={this.handleMailChange}/>
                    </FormControl> <br />
                    <FormControl>
                        <InputLabel htmlFor="component-simple">Contraseña</InputLabel>
                        <Input id="component-simple" type="password" onChange={this.handlePasswordChange}/>
                    </FormControl>
                    <p>{this.state.wrongCredentials}</p>
                    <Button variant="contained" color="primary" onClick={() => this.performLogin()}>
                        Ingresar
                    </Button>
                </form>
            </Container>
        )


    }





}