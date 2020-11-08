import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
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
        isLoading : false,
        formEmail : '',
        formPassword : '',
        wrongCredentials : '',
    }


    handleMailChange = (ev) => {
        this.setState({formEmail : ev.target.value})
    }

    handlePasswordChange = (ev) => {
        this.setState({formPassword : ev.target.value})
    }

    performLogin(){
        this.setState({wrongCredentials : false, isLoading : true})
        const {formEmail, formPassword} = this.state

        if (formEmail.length === 0 || formPassword.length === 0){
            this.setState({wrongCredentials : "Complete los campos", isLoading : false})
        } else if (!formEmail.includes("@")){
            this.setState({wrongCredentials : "Ingrese un Email válido",isLoading : false})
        }
        else{
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
                    Storage.setPassChange(loginResponse.passwordChange)
                    Storage.setMailUser(loginResponse.mailUser)
                    this.props.setMailUser(loginResponse.mailUser)
                    this.props.setPassChange(loginResponse.passwordChange)
                    this.props.setToken(loginResponse.data)
                    this.props.setImageUser(loginResponse.imageUser)
                    this.props.setRolUser(loginResponse.rol)
                    this.props.setNameUser(loginResponse.nameUser)
                    
                }
                else
                {
                    if(loginResponse.mensaje === "Usuario Dado de Baja"){
                        this.setState({wrongCredentials : "Error: Usuario Dado de Baja.",  isLoading : false})
                    }else{
                        this.setState({wrongCredentials : "Error: Credenciales inválidas",  isLoading : false})
                    }
                }
                    
    
            }).catch( error => {
                console.error("Error during Login: ",error)
            })


        }

    }

    render(){
        return (
            <Container maxWidth="md">
                <h1>Logearse al sitio</h1>
                <form autoComplete="off">
                    <FormControl>
                        <InputLabel htmlFor="component-simple">E-mail</InputLabel>
                        <Input id="component-simple" inputProps={{ maxLength: 100 }} value={this.state.formEmail} onChange={this.handleMailChange}/>
                    </FormControl> <br />
                    <FormControl>
                        <InputLabel htmlFor="component-simple">Contraseña</InputLabel>
                        <Input inputProps={{ maxLength: 100 }} id="component-simple" type="password" onChange={this.handlePasswordChange}/>
                    </FormControl>
                    <p>{this.state.wrongCredentials}</p>
                    <Button variant="contained" disabled={this.state.isLoading} color="primary" onClick={() => this.performLogin()}>
                        Ingresar
                    </Button>
                </form>
            </Container>
        )


    }





}