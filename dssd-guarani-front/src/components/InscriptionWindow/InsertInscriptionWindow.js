import React, { Component } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';
import moment from 'moment'
import { __API_INSCWINDOW } from '../../consts/consts'
import axios from 'axios'


class InsertInscriptionWindow extends Component {

    state = {
        errorMsg: '',
        isLoading: false,
    }


    handleSubmit = (ev) => {
        debugger;
        ev.preventDefault();
        ev.persist()
        this.setState({ isLoading: true })

        var startDate = new Date(moment(ev.target.startDate.value, "YYYY/MM/DD").toDate())
        startDate.setHours(ev.target.startTime.value.split(":")[0])
        startDate.setMinutes(ev.target.startTime.value.split(":")[1])

        var endDate = new Date(moment(ev.target.endDate.value, "YYYY/MM/DD").toDate())
        endDate.setHours(ev.target.endTime.value.split(":")[0])
        endDate.setMinutes(ev.target.endTime.value.split(":")[1])

        //TODO: Validate Dates and Post Window.
        if (!moment(startDate).isValid() || !moment(endDate).isValid()) {
            this.setState({ errorMsg: "El formato de las fechas no es correcto", isLoading: true })
        }
        else if (startDate > endDate) {
            this.setState({ errorMsg: "La Fecha de Inicio debe ser antes que la Fecha de Fin", isLoading: false })
        }
        else {
            const options = {
                method: "POST",
                url: __API_INSCWINDOW,
                data: {
                    startdate: startDate,
                    enddate: endDate,
                }
            }
            axios(options).then(resp => {
                console.log("Respuesta: ", resp)
                debugger;
                ev.target.reset() //reset all Form values to Empty Strings

                this.setState({ errorMsg: "Ventana cargada correctamente", isLoading: false })
            }).catch(error => {
                console.log("Error cargando la Ventana de inscripción: ", error)
                this.setState({ errorMsg: "Error cargando la ventana de inscripción", isLoading: false })
            })

        }

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
                                <TextField fullWidth variant="outlined" id="startDate" label="Fecha de Inicio" type="date" InputProps={{ inputProps: { min: "2010-05-01", max: "2050-12-31" } }} InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField fullWidth id="startTime" variant="outlined" label="Hora de Inicio" type="time" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField fullWidth variant="outlined" id="endDate" label="Fecha de Fin" InputProps={{ inputProps: { min: "2010-05-01", max: "2050-12-31" } }} type="date" InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField fullWidth id="endTime" variant="outlined" label="Hora de Fin" type="time" InputLabelProps={{ shrink: true }} />
                            </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained" disabled={this.state.isLoading} type="submit" color="primary">
                            Agregar Ventana
                        </Button>
                    </form>
                    <br />
                </Container>
               // </main>
        )
    }


}

export default InsertInscriptionWindow;
