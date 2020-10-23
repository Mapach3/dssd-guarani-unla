import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'



class UserInsert extends Component{

    state = {
        //personalInfo
        formName : '',
        formSurname : '',
        formDni : '',
        formEmail : '',
        formPassword : '',
        formUserType : '',
        //address
        formStreetAndNumber : '',
        formLocation : '',
        formPostCode : '',
        formCity : '',
        formCountry : '',
        wrongCredentials : false,
    }

    onNameChange = (ev) => {
        this.setState({formName : ev.target.value}) 
    }
    
    onSurnameChange = (ev) => {
        this.setState({formSurname : ev.target.value}) 
    }

    onDniChange = (ev) => {
        var value = ev.target.value.replace(/[^0-9]/g, '');
        this.setState({formDni : value}) 
    }
    
    onEmailChange = (ev) => {
        this.setState({formEmail : ev.target.value}) 
    }
    
    onPasswordChange = (ev) => {
        this.setState({formPassword : ev.target.value}) 
    }

    onStreetAndNumberChange = (ev) => {
        this.setState({formStreetAndNumber : ev.target.value}) 
    }

    onPostCodeChange = (ev) => {
        var value = ev.target.value.replace(/[^0-9]/g, '');
        this.setState({formPostCode : value})
    }

    onLocationChange = (ev) => {
        this.setState({formLocation : ev.target.value}) 
    }

    onCityChange = (ev) => {
        this.setState({formCity : ev.target.value}) 
    }

    onCountryChange = (ev) => {
        this.setState({formCountry : ev.target.value}) 
    }

    sendUserData(){
        console.log("Click send user data placeholder")
    }

    render(){
    return (
            <Container maxWidth="xs">
                <h2>Alta de usuario</h2>
                <form autoComplete="off">
                    <Grid container spacing={1}>
                        <Grid item sm={6} >
                            <TextField inputProps={{maxLength: 25}} variant="outlined" value={this.state.formName} onChange={(ev) => this.onNameChange(ev)} label="Nombre" type="text"/>
                        </Grid> 
                        
                        <Grid item sm={6}>
                            <TextField inputProps={{maxLength: 25}} variant="outlined" value={this.state.formSurname} onChange={(ev) => this.onSurnameChange(ev)} label="Apellido" type="text"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField inputProps={{maxLength: 30}} fullWidth variant="outlined" value={this.state.formEmail} onChange={(ev) => this.onEmailChange(ev)} label="Email" type="text"/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField inputProps={{maxLength: 12}} fullWidth variant="outlined" value={this.state.formPassword} onChange={(ev) => this.onPasswordChange(ev)} label="Contraseña" type="password"/>
                        </Grid> 
                        <Grid item sm={6}>
                            <TextField inputProps={{maxLength: 8}} variant="outlined" value={this.state.formDni} onChange={(ev) => this.onDniChange(ev)} label="DNI" type="text"/>
                        </Grid> 
                        <Grid item sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Usuario</InputLabel>
                                <Select>
                                <MenuItem value={0}>Administrador</MenuItem>
                                <MenuItem value={1}>Alumno</MenuItem>
                                <MenuItem value={2}>Profesor</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> 
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item sm={12} >
                            <TextField inputProps={{maxLength: 40}} value={this.state.formStreetAndNumber} onChange={(ev) => this.onStreetAndNumberChange(ev)} fullWidth variant="outlined" label="Calle y número" type="text"/>
                        </Grid>                   
                        <Grid item sm={12}>
                            <TextField inputProps={{maxLength: 15}} value={this.state.formLocation} onChange={(ev) => this.onLocationChange(ev)} fullWidth variant="outlined" label="Localidad" type="text"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField inputProps={{maxLength: 4}} value={this.state.formPostCode} onChange={(ev) => this.onPostCodeChange(ev)} fullWidth variant="outlined" label="Código Postal" type="text"/>
                        </Grid>  
                        <Grid item xs={12}>
                            <TextField inputProps={{maxLength: 20}} value={this.state.formCity} onChange={(ev) => this.onCityChange(ev)} fullWidth variant="outlined" label="Ciudad" type="text"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField inputProps={{maxLength: 20}} value={this.state.formCountry} onChange={(ev) => this.onCountryChange(ev)} fullWidth variant="outlined" label="País" type="text"/>
                        </Grid>
                        
                    
                    </Grid>
                    <br />                
                    <Button variant="contained" color="primary" onClick={() => this.sendUserData()}>
                            Enviar
                    </Button>                          
                </form>
            </Container>
        )

    }
}

export default UserInsert