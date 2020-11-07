import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';
import moment from 'moment'


class InsertInscriptionWindow extends Component{

    state = {
        errorMsg : '',
        isLoading : false,
    }

    handleSubmit = (ev) => {
        debugger;
        ev.preventDefault();
        this.setState({isLoading : true})
        
        var startDate = new Date(moment(ev.target.startDate.value,"YYYY/MM/DD").toDate())
        startDate.setHours(ev.target.startTime.value.split(":")[0])
        startDate.setMinutes(ev.target.startTime.value.split(":")[1])
        console.log(startDate)
        
        var endDate = new Date(moment(ev.target.startDate.value,"YYYY/MM/DD").toDate())
        endDate.setHours(ev.target.endTime.split(":")[0])
        endDate.setMinutes(ev.target.endTime.split(":")[1])
        console.log(endDate)

        //TODO: Validate Dates and Post Window.

    }

    render(){
        return (
                <Container maxWidth="xs">
                    <h3>Nueva ventana de inscripción</h3>
                    {this.state.errorMsg.length !== 0 ?
                                <>
                                <Chip
                                    fullWidth
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    label={this.state.errorMsg}
                                />
                                <br /><br />
                                </> : 
                            null}
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <TextField fullWidth variant="outlined" id="startDate" label="Dia de Inicio" type="date" InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth id="startTime" variant="outlined" label="Hora de Inicio"  type="time" InputLabelProps={{ shrink: true }} />
                        </Grid>       
                        <Grid item sm={6}>
                            <TextField fullWidth variant="outlined" id="endDate" label="Dia de Fin" type="date" InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField fullWidth id="endTime" variant="outlined" label="Hora de Fin" type="time" InputLabelProps={{ shrink: true }}/>
                        </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained" disabled={this.state.isLoading} type="submit" color="primary">
                            Agregar Ventana
                        </Button>                        
                    </form>
                    <br />          
                </Container>
        )
    }


}

export default InsertInscriptionWindow;
