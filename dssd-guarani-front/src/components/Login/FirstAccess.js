import React, { Component } from 'react';
import axios from 'axios'
import { __API_PATCH_USER_PASSWORD } from '../../consts/consts';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {Storage} from '../Storage'

export class FirstAccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            newPassword: '',
            mail: Storage.getMailUser()
        };

        this.setPasswordDefinitive = this.setPasswordDefinitive.bind(this)
    }

    setPasswordDefinitive() {
        axios.patch(__API_PATCH_USER_PASSWORD + this.state.mail + "/PassChange/" + this.state.newPassword).then(response => {
            Storage.setPassChange(true)
            this.props.setPassChange(true)
            // window.location.reload()
        }).catch(error => {
            console.log("Error change password temporal:" + error);
        })
    }

    onChangePass = (ev) => {
        this.setState({ newPassword: ev.target.value })
    }

    render() {
        return (
            <Container maxWidth="xs">
                <Typography>
                    Primer acceso en el sistema, por favor cambie su contraseña temporal por una nueva.
                    </Typography>
                <Grid item sm={12} >
                    <TextField fullWidth inputProps={{ maxLength: 100 }} variant="outlined"
                        value={this.state.newPassword} onChange={(ev) => this.onChangePass(ev)} label="Ingrese Contraseña" type="text" />
                </Grid>
                <Button variant="contained" onClick={this.setPasswordDefinitive} color="primary">
                    Cambiar Contraseña
                </Button>
            </Container>
        )
    }

}