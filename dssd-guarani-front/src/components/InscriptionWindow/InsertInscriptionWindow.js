import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';


class InsertInscriptionWindow extends Component{

    state = {
        
        formStartDate : '',
        formEndDate : '',
        errorMsg : ''
    }


    render(){
        return (
                <Container maxWidth="xs">
                    <h3>Ingrese datos de la materia</h3>
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
                    <form autoComplete="off">
                        <Grid container spacing={1}>
                        <Grid item sm={6}>
                            <TextField id="startDate" label="Inicio" type="date" />
                            <TextField fullWidth id="time" variant="outlined" label="Hora de Inicio"  type="time"/>
                        </Grid>
                            
                            
                        <Grid item sm={6}>
                        <TextField id="endDate" label="Fin" type="date" />
                            <TextField fullWidth id="time" variant="outlined" label="Hora de Fin" type="time"/>
                        </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained"  color="primary">
                            Agregar Ventana
                        </Button>                        
                    </form>
                    <br />          
                </Container>
        )
    }


}

export default InsertInscriptionWindow;
