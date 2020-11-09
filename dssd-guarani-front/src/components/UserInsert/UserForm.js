import React, { Component } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';

import ImageUploader from 'react-images-upload';
import NoImage from '../../assets/img/NoImage.jpg'

class UserForm extends Component {
    state = {
        //personalInfo
        imgBase64: '',
        formName: '',
        formSurname: '',
        formUserName : '',
        formDni: '',
        formEmail: '',
        formPassword: '',
        formUserType: '',
        //address
        formStreetAndNumber: '',
        formLocation: '',
        formPostCode: '',
        formCity: '',
        formCountry: '',
    }

    onNameChange = (ev) => {
        this.setState({ formName: ev.target.value })
    }

    onSurnameChange = (ev) => {
        this.setState({ formSurname: ev.target.value })
    }

    onDniChange = (ev) => {
        var value = ev.target.value.replace(/[^0-9]/g, '');
        this.setState({ formDni: value })
    }

    onUserNameChange = (ev) => {
        this.setState({formUserName : ev.target.value})
    }

    onUserTypeChange = (ev) => {
        this.setState({ formUserType: ev.target.value })
    }

    onEmailChange = (ev) => {
        this.setState({ formEmail: ev.target.value })
    }

    onPasswordChange = (ev) => {
        this.setState({ formPassword: ev.target.value })
    }

    onStreetAndNumberChange = (ev) => {
        this.setState({ formStreetAndNumber: ev.target.value })
    }

    onPostCodeChange = (ev) => {
        var value = ev.target.value.replace(/[^0-9]/g, '');
        this.setState({ formPostCode: value })
    }

    onLocationChange = (ev) => {
        this.setState({ formLocation: ev.target.value })
    }

    onCityChange = (ev) => {
        this.setState({ formCity: ev.target.value })
    }

    onCountryChange = (ev) => {
        this.setState({ formCountry: ev.target.value })
    }

    setImg = (picArray) => {
        var profilePic = picArray[0]
        let reader = new FileReader()
        var preview = document.getElementById("profile-pic")

        reader.onloadend = () => {
            preview.src = reader.result;
            this.setState({ imgBase64: reader.result })
        }
        if (profilePic) {
            reader.readAsDataURL(profilePic);
        } else {
            preview.src = "";
        }
    }

    deletePicture() {
        this.setState({ imgBase64: '' })
    }

    clearValues() {
        console.log("Clearing values")
        this.setState({
            formEmail: '',formUserName : '', formPassword: '', formName: '', formSurname: '', formDni: '', formUserType: '', formStreetAndNumber: '',
            formLocation: '', formPostCode: '', formCity: '', formCountry: '', imgBase64: ''
        })

        this.props.setClearForm(false)
    }

    insertUser() {
        this.props.action(this.state)
    }


    render() {
        return (
            // <main
            //     className={clsx(this.props.classes.content, {
            //         [this.props.classes.contentShift]: this.props.open,
            //     })}
            // >
            //     <div className={this.props.classes.drawerHeader} />
                <Container maxWidth="xs">
                    <h3>Ingrese los datos del usuario</h3>
                    <form autoComplete="off">
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <ImageUploader
                                    withIcon={false}
                                    buttonText='Subir imagen...'
                                    onChange={this.setImg}
                                    singleImage={true}
                                    withLabel={false}
                                    fileTypeError=" no es un archivo soportado."
                                />
                                <img style={{ borderRadius: "50%" }} id="profile-pic" src={this.state.imgBase64.length === 0 ? NoImage : this.state.imgBase64} width="100" height="100" alt=""></img>
                                <br />
                                {this.state.imgBase64.length === 0 ? null : <Button variant="contained" color="primary" onClick={() => this.deletePicture()}>Eliminar</Button>}
                                {this.props.errorMsg.length !== 0 ?
                                    <>
                                        <br />
                                        <Chip
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            label={this.props.errorMsg}
                                        />
                                        <br />
                                    </> :
                                    null}
                            </Grid>
                            <Grid item sm={6} >
                                <TextField inputProps={{ maxLength: 25 }} variant="outlined" value={this.state.formName} onChange={(ev) => this.onNameChange(ev)} label="Nombre" type="text" />
                            </Grid>

                            <Grid item sm={6}>
                                <TextField inputProps={{ maxLength: 25 }} variant="outlined" value={this.state.formSurname} onChange={(ev) => this.onSurnameChange(ev)} label="Apellido" type="text" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField inputProps={{ maxLength: 30 }} fullWidth variant="outlined" value={this.state.formEmail} onChange={(ev) => this.onEmailChange(ev)} label="Email" type="text" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField inputProps={{ maxLength: 30 }} fullWidth variant="outlined" value={this.state.formUserName} onChange={(ev) => this.onUserNameChange(ev)} label="Nombre de Usuario" type="text" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField inputProps={{ maxLength: 12 }} fullWidth variant="outlined" value={this.state.formPassword} onChange={(ev) => this.onPasswordChange(ev)} label="Contraseña" type="password" />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField inputProps={{ maxLength: 8 }} variant="outlined" value={this.state.formDni} onChange={(ev) => this.onDniChange(ev)} label="DNI" type="text" />
                            </Grid>
                            <Grid item sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Usuario</InputLabel>
                                    <Select onChange={(ev) => this.onUserTypeChange(ev)} value={this.state.formUserType}>
                                        <MenuItem value={0}>Administrador</MenuItem>
                                        <MenuItem value={1}>Alumno</MenuItem>
                                        <MenuItem value={2}>Profesor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container spacing={1}>
                            <Grid item sm={12} >
                                <TextField inputProps={{ maxLength: 40 }} value={this.state.formStreetAndNumber} onChange={(ev) => this.onStreetAndNumberChange(ev)} fullWidth variant="outlined" label="Calle y número" type="text" />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField inputProps={{ maxLength: 15 }} value={this.state.formLocation} onChange={(ev) => this.onLocationChange(ev)} fullWidth variant="outlined" label="Localidad" type="text" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField inputProps={{ maxLength: 4 }} value={this.state.formPostCode} onChange={(ev) => this.onPostCodeChange(ev)} fullWidth variant="outlined" label="Código Postal" type="text" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField inputProps={{ maxLength: 20 }} value={this.state.formCity} onChange={(ev) => this.onCityChange(ev)} fullWidth variant="outlined" label="Ciudad" type="text" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField inputProps={{ maxLength: 20 }} value={this.state.formCountry} onChange={(ev) => this.onCountryChange(ev)} fullWidth variant="outlined" label="País" type="text" />
                            </Grid>
                        </Grid>

                        {this.props.clearForm ?
                            <>
                                <br />
                                <Button variant="contained" color="primary" onClick={() => this.clearValues()}>Limpiar formulario</Button>
                                <br />
                            </>
                            : null}

                        <br />
                        <Button variant="contained" color="primary" onClick={() => this.insertUser()}>
                            Enviar
                        </Button>

                    </form>
                    <br />

                </Container>
                // </main>
                
            )
    
        }



}

export default UserForm