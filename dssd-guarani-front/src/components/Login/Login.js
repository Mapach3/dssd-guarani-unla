import React, {Component} from 'react'

import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import {__API_LOGIN} from '../../consts/consts'


export class Login extends Component{

    state = {
        formEmail : '',
        formPassword : ''
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
        const options = {
            method: "POST",
            url: 


        }


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
                        <Input id="component-simple" type="password" onChange={this.handlePassword}/>
                    </FormControl> <br /> < br />
                    <Button variant="contained" color="primary" onClick={() => this.performLogin()}>
                        Ingresar
                    </Button>

                </form>


            </Container>
        )


    }





}