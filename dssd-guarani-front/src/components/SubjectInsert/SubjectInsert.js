import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'


class SubjectInsert extends Component{

    state = {
        
        formName : '',
        formStartTime : '',
        formEndTime : '',
        formYear : '',
        formPeriod : '',
        formShift : '',
    }

    onNameChange = (ev) => {
        this.setState({formName : ev.target.value}) 
    }

    onStartTimeChange = (ev) => {
        this.setState({formStartTime : ev.target.value})
    }

    onEndTimeChange = (ev) => {
        this.setState({formEndTime : ev.target.value})
    }

    onYearChange = (ev) => {
        this.setState({formYear : ev.target.value})
    }

    onShiftChange = (ev) => {
        this.setState({formShift : ev.target.value})
    }

    onPeriodChange = (ev) => {
        this.setState({formPeriod : ev.target.value})
    }

    render(){
        return (
                <Container maxWidth="xs">
                    <h3>Ingrese datos de la materia</h3>
                    <form autoComplete="off">
                        <Grid container spacing={1}>
                            <Grid item sm={12} >
                                <TextField fullWidth inputProps={{maxLength: 100}} variant="outlined" value={this.state.formName} onChange={(ev) => this.onNameChange(ev)} label="Nombre" type="text"/>
                            </Grid> 
                            
                            <Grid item sm={6}>
                                <TextField fullWidth id="time" variant="outlined" value={this.state.formStartTime} onChange={(ev) => this.onStartTimeChange(ev)} label="Hora de inicio" defaultValue="09:00" type="time"/>
                            </Grid>
                            
                            <Grid item sm={6}>
                                <TextField fullWidth id="time" variant="outlined" value={this.state.formEndTime} onChange={(ev) => this.onEndTimeChange(ev)} label="Hora de Fin" defaultValue="09:00" type="time"/>
                            </Grid>
                            
                            <Grid item sm={6}>
                                <FormControl fullWidth variant="outlined">
                                        <InputLabel>Año</InputLabel>
                                        <Select onChange={(ev) => this.onYearChange(ev)} value={this.state.formYear}>
                                            <MenuItem value={1}>Primero</MenuItem>
                                            <MenuItem value={2}>Segundo</MenuItem>
                                            <MenuItem value={3}>Tercero</MenuItem>
                                            <MenuItem value={4}>Cuarto</MenuItem>
                                            <MenuItem value={5}>Quinto</MenuItem>
                                        </Select>
                                </FormControl>
                            </Grid> 
                            <Grid item sm={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Turno</InputLabel>
                                    <Select onChange={(ev) => this.onShiftChange(ev)} value={this.state.formShift}>
                                        <MenuItem value={1}>Mañana</MenuItem>
                                        <MenuItem value={2}>Tarde</MenuItem>
                                        <MenuItem value={3}>Noche</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Cuatrimestre</InputLabel>
                                    <Select onChange={(ev) => this.onPeriodChange(ev)} value={this.state.formPeriod}>
                                        <MenuItem value={1}>Primero</MenuItem>
                                        <MenuItem value={2}>Segundo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>  
                        </Grid>
                        <br />
                        <Button variant="contained" color="primary">
                            Enviar
                        </Button>                        
                    </form>
                    <br />          
                </Container>
                
                
            )
    
        }




}

export default SubjectInsert