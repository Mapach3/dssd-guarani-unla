import React, {Component} from 'react';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

import moment from 'moment'
import axios from 'axios'

import {__API_INSCWINDOW, __API_SUBJECT, __API_USER} from '../../consts/consts'


class SubjectInsert extends Component{

    state = {
        isLoading : false,
        formName : '',
        formStartTime : '',
        formEndTime : '',
        formYear : '',
        formPeriod : '',
        formShift : '',
        errorMsg : '',
        teacherList : [],
        inscWindowList : [],
        selectedTeachers : [],
        subjectInscriptionWindow : ''
    }

    componentDidMount(){
        const getUsers = axios.get(__API_USER)
        const getInscWindows =  axios.get(__API_INSCWINDOW)
        axios.all([getUsers,getInscWindows]).then(axios.spread((users,inscWindows) => {
            console.log("Users: ",users,"/// InscriptionWindows: ",inscWindows)
            this.setState({teacherList : users.data.filter(user => user.role === 2), inscWindowList : inscWindows.data })
        }));

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

    onSelectedTeachersChange = (ev,values) => {
        debugger;
        this.setState({selectedTeachers : values})
    }

    onWindowChange = (ev) => {
        this.setState({subjectInscriptionWindow : ev.target.value})
    }

    generateWindowText(window){
        debugger;
        var startDate = moment(window.startDate).format("DD/MM/yyyy hh:mm")
        var endDate = moment(window.endDate).format("DD/MM/yyyy hh:mm")
        return "Desde " + startDate+" hasta "+endDate+"."

    }


    insertSubject(){
        debugger;
        const {formName,formStartTime,formEndTime,formYear,formShift,formPeriod,selectedTeachers} = this.state
        if (formName.length === 0 || formStartTime.length === 0 || formEndTime.length === 0 
            || formYear.length === 0 || formShift.length === 0 || formPeriod.length === 0){
                this.setState({errorMsg : "Por favor, complete todos los campos"})
        } else {
            
            var startTime = new Date()
            startTime.setHours(formStartTime.split(":")[0])
            startTime.setMinutes(formStartTime.split(":")[1])
            console.log(startTime)
            
            var endTime = new Date()
            endTime.setHours(formEndTime.split(":")[0])
            endTime.setMinutes(formEndTime.split(":")[1])
            console.log(endTime)

            //docentes asignados
            var teachers = []
            selectedTeachers.map( teacher => teachers.push({userid : teacher.id}))
             

            if (startTime < endTime){
                const options = {
                    method : "POST",
                    url : __API_SUBJECT,
                    data : {
                        name : formName,
                        starttime : startTime,
                        endtime : endTime,
                        year : formYear,
                        period : formPeriod,
                        shift : formShift,
                        courses : teachers
                    }
                }
    
                axios(options).then( resp => {
                    console.log(resp.data);
                    this.setState({errorMsg : "Materia agregada correctamente"})
                    this.setState({formName : '',formStartTime : '',formEndTime : '', formYear : '', formShift : '', formPeriod : '', selectedTeachers : []})

                })
            } else {
                this.setState({errorMsg : "La hora de inicio debe ser antes que la hora de fin"})
            }

        }



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
                        
                            <Grid item sm={12} >
                                <TextField fullWidth inputProps={{maxLength: 100}} variant="outlined" value={this.state.formName} onChange={(ev) => this.onNameChange(ev)} label="Nombre" type="text"/>
                            </Grid> 
                            
                            <Grid item sm={6}>
                                <TextField fullWidth id="time" variant="outlined" InputLabelProps={{shrink : true}} value={this.state.formStartTime} onChange={(ev) => this.onStartTimeChange(ev)} label="Hora de Inicio"  type="time"/>
                            </Grid>
                            
                            <Grid item sm={6}>
                                <TextField fullWidth id="time" variant="outlined" InputLabelProps={{shrink : true}} value={this.state.formEndTime} onChange={(ev) => this.onEndTimeChange(ev)} label="Hora de Fin" type="time"/>
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
                                        <MenuItem value={1}>Primer Cuatrimestre</MenuItem>
                                        <MenuItem value={2}>Segundo Cuatrimestre</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete options={this.state.teacherList}
                                                  onChange={(ev,values) => this.onSelectedTeachersChange(ev,values)}
                                                  filterSelectedOptions
                                                  value={this.state.selectedTeachers}
                                                  getOptionLabel={(option) => option.name+" "+option.surname}
                                                  renderInput={(params) => <TextField {...params} variant="outlined" label="Docentes" />} 
                                                  multiple id="tags-standard" noOptionsText="No hay coincidencias" 
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Ventana de Inscripción</InputLabel>
                                    <Select onChange={(ev) => this.onWindowChange(ev)} value={this.state.subjectInscriptionWindow}>
                                        {this.state.inscWindowList.map( window => 
                                            <MenuItem value={window.id}>{this.generateWindowText(window)}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained" disabled={this.state.isLoading} onClick= {this.insertSubject}color="primary">
                            Agregar Materia
                        </Button>                        
                    </form>
                    <br />          
                </Container>
                
                
                
            )
    
        }




}

export default SubjectInsert