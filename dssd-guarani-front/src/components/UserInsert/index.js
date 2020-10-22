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
        formName : '',
        formSurname : '',
        formDni : '',
        formEmail : '',
        formPassword : '',
        wrongCredentials : false,
    }


    render(){
    return (
            <Container maxWidth="xs">
                <h2>Alta de usuario</h2>
                <form autoComplete="off">
                    <Grid container spacing={1}>
                        <Grid item sm={6} >
                            <TextField variant="outlined" label="Nombre" type="text"/>
                        </Grid> 
                        
                        <Grid item sm={6}>
                            <TextField variant="outlined" label="Apellido" type="text"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth variant="outlined" label="Email" type="text"/>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField fullWidth variant="outlined" label="Contraseña" type="password"/>
                        </Grid> 
                        <Grid item sm={6}>
                            <TextField variant="outlined" label="DNI" type="text"/>
                        </Grid> 
                        <Grid item sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Tipo de Usuario</InputLabel>
                                <Select>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> 
                    </Grid>
                    <br />                 
                    <Button variant="contained" color="primary">
                            Enviar
                        </Button>                          
                </form>
            </Container>
        )

    }
}

export default UserInsert