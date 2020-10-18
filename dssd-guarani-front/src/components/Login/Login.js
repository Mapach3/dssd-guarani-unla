import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import {__API_LOGIN} from '../../consts/consts';
import {Storage} from '../../consts/Storage'


export class Login extends Component{

    state = {
        formEmail : '',
        formPassword : '',
        wrongCredentials : false,
    }

    handleMailChange = (ev) => {
        this.setState({formEmail : ev.target.value})
        console.log("Nuevo value Email: ",this.state.formEmail)
    }

    handlePasswordChange = (ev) => {
        this.setState({formPassword : ev.target.value})
        console.log("Nuevo value Password: ",this.state.formPassword)
    }

    performLogin(){
        this.setState({wrongCredentials : false})
        debugger;
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
            debugger;
            console.log("Login Response: ", resp)
            var loginResponse = resp.data
            if (loginResponse.cod === 200){
                Storage.setJwtToken(loginResponse.data)
                this.props.setToken(loginResponse.data)
            }
            else
                this.setState({wrongCredentials : true})



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
                    </FormControl> <br /> < br />
                    {this.state.wrongCredentials ? 
                    <><p>CREDENCIALES INVÁLIDAS</p> <br /></>: 
                    null}
                    <Button variant="contained" color="primary" onClick={() => this.performLogin()}>
                        Ingresar
                    </Button>
                    

                </form>


            </Container>
        )


    }





}