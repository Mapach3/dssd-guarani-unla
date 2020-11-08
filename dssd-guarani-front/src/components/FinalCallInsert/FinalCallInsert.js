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
import axios from 'axios'
import moment from 'moment'

import { __API_INSCWINDOW, __API_SUBJECT, __API_FINALCALL} from '../../consts/consts'


class FinalCallInsert extends Component{

    state = {
        isLoading : false,
        errorMsg : '',
        formFinalDate : '',
        formFinalScoreUploadLimit : '',
        formSubject : '',
        formInscWindow : '',
        subjectList : [] ,
        inscWindowList : [],  
    }

    componentDidMount() {
        const getInscWindows =  axios.get(__API_INSCWINDOW)
        const getSubjects = axios.get(__API_SUBJECT)
        axios.all([getInscWindows,getSubjects]).then(axios.spread((inscWindows,subjects) => {
            console.log(inscWindows.data, subjects.data)
            this.setState({inscWindowList : inscWindows.data, subjectList : subjects.data })
        }));
    }

    onFinalDateChange = (ev) => {
        console.log(ev.target.value)
        this.setState({formFinalDate : ev.target.value})
    }

    onWindowChange = (ev) => {
        this.setState({ formInscWindow: ev.target.value })
    }

    onSubjectChange = (ev) => {
        this.setState({ formSubject : ev.target.value })
    }

    onFinalScoreUploadLimitChange = (ev) => {
        console.log(ev.target.value)
        this.setState({formFinalScoreUploadLimit : ev.target.value})
    }

    generateWindowText(window){
        var startDate = moment(window.startDate).format("DD/MM/yyyy hh:mm")
        var endDate = moment(window.endDate).format("DD/MM/yyyy hh:mm")
        return startDate+" a "+endDate
    }

    insertFinalCall = (ev) => {
        this.setState({errorMsg : ""})
        ev.preventDefault()
        ev.persist()
        const {formFinalDate , formFinalScoreUploadLimit , formSubject, formInscWindow} = this.state

        if (formFinalDate.length === 0 || formFinalScoreUploadLimit.length === 0 || 
              formSubject.length === 0 || formInscWindow.length === 0){
                  this.setState({errorMsg : "Por favor, complete todos los campos y revise las fechas"})
        }
        else if(!moment(formFinalDate).isValid() || !moment(formFinalScoreUploadLimit).isValid()){
            this.setState({errorMsg : "El formato de las fechas no es correcto"})

        }else if(moment(formFinalDate) > moment(formFinalScoreUploadLimit)){
            this.setState({errorMsg : "La fecha limite de carga de notas no puede ser anterior a la fecha del final"})
        }
        else{
            const options = {
                url : __API_FINALCALL,
                method : "POST",
                data : {
                    date : formFinalDate,
                    scoreuploadlimit : formFinalScoreUploadLimit,
                    subjectid : formSubject,
                    inscriptionwindowid : formInscWindow
                }
                
            }

            axios(options).then( resp => {
                if (resp.status === 200){
                    
                    this.setState({errorMsg : "Final cargado exitosamente", formFinalDate : '', 
                                   formFinalScoreUploadLimit : '', formSubject : '', formInscWindow : ''})
                    ev.target.reset()
                }
            }).catch(error => {
                this.setState({errorMsg : "Hubo un error cargando el llamado"})
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
                // <div className={this.props.classes.drawerHeader} />
                <Container maxWidth="xs">
                    <h3>Ingrese datos del Llamado de Final</h3>
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
                    <form autoComplete="off" onSubmit={this.insertFinalCall}>
                        <Grid container spacing={1}>

                            <Grid item sm={12}>
                                <TextField fullWidth variant="outlined" onChange={this.onFinalDateChange} id="finalDate" label="Fecha del Examen" type="date" InputProps={{ inputProps: { min: "2010-05-01", max: "2050-12-31" } }} InputLabelProps={{ shrink: true }} />
                            </Grid>

                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Materia</InputLabel>
                                    <Select onChange={(ev) => this.onSubjectChange(ev)} value={this.state.formSubject}>
                                        {this.state.subjectList.map(subject => 
                                            <MenuItem key={subject.id} value={subject.id}>{subject.name}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Ventana de Inscripción</InputLabel>
                                    <Select onChange={(ev) => this.onWindowChange(ev)} value={this.state.formInscWindow}>
                                        {this.state.inscWindowList.map(window =>
                                            <MenuItem key={window.id} value={window.id}>{this.generateWindowText(window)}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField fullWidth variant="outlined" onChange={this.onFinalScoreUploadLimitChange} id="finalDate" label="Fecha limite de carga de notas" type="date" InputProps={{ inputProps: { min: "2010-05-01", max: "2050-12-31" } }} InputLabelProps={{ shrink: true }} />
                            </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained" disabled={this.state.isLoading} type="submit" color="primary">
                            Agregar Llamado de Final
                        </Button>
                    </form>
                    <br />
                </Container>
                // </main>
                
                
            )
    
        }










}

export default FinalCallInsert;