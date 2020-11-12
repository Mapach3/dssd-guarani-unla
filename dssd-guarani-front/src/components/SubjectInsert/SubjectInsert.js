import React, { Component } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';

import axios from 'axios'

import {__API_CAREER, __API_SUBJECT, __API_USER} from '../../consts/consts'


class SubjectInsert extends Component {

    state = {
        isLoading : false,
        formName : '',
        formStartTime : '',
        formEndTime : '',
        formYear : '',
        formPeriod : '',
        formWeekDay : '',
        formShift : '',
        errorMsg : '',
        subjectCareer : '',
        teacherList : [],
        selectedTeachers : [],
        careerList : []
        
    }

    componentDidMount() {
        const getUsers = axios.get(__API_USER)
        const getCareers = axios.get(__API_CAREER)
        axios.all([getUsers,getCareers]).then(axios.spread((users,careers) => {
            this.setState({teacherList : users.data.filter(user => user.role === 2), careerList : careers.data })
        }));

    }

    onNameChange = (ev) => {
        this.setState({ formName: ev.target.value })
    }

    onWeekDayChange = (ev) => {
        this.setState({ formWeekDay: ev.target.value })
    }

    onStartTimeChange = (ev) => {
        this.setState({ formStartTime: ev.target.value })
    }

    onEndTimeChange = (ev) => {
        this.setState({ formEndTime: ev.target.value })
    }

    onYearChange = (ev) => {
        this.setState({ formYear: ev.target.value })
    }

    onShiftChange = (ev) => {
        this.setState({ formShift: ev.target.value })
    }

    onPeriodChange = (ev) => {
        this.setState({ formPeriod: ev.target.value })
    }

    onSelectedTeachersChange = (ev, values) => {
        debugger;
        this.setState({ selectedTeachers: values })
    }


    onCareerChange = (ev) => {
        this.setState({subjectCareer : ev.target.value})
    }



    insertSubject = () => {
        debugger;
        const {formName,formStartTime,formEndTime,formYear,formShift,formPeriod,selectedTeachers, subjectCareer, formWeekDay} = this.state
        if (formName.length === 0 || formStartTime.length === 0 || formEndTime.length === 0 
            || formYear.length === 0 || formShift.length === 0 || formPeriod.length === 0 
            || subjectCareer.length === 0 || formWeekDay.length === 0){
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
            selectedTeachers.map(teacher => teachers.push({ userid: teacher.id }))


            if (startTime < endTime){
                const options = {
                    method : "POST",
                    url : __API_SUBJECT,
                    data : {
                        name : formName,
                        starttime : startTime,
                        endtime : endTime,
                        year : formYear,
                        weekday: formWeekDay,
                        period : formPeriod,
                        shift : formShift,
                        courses : teachers,
                        careerid : subjectCareer,
                        inscriptionwindowid : 1,
                    }
                }

                axios(options).then(resp => {
                    console.log(resp.data);
                    this.setState({errorMsg : "Materia agregada correctamente"})
                    this.setState({formName : '',formStartTime : '',formEndTime : '', formYear : '', formShift : '', 
                                   formPeriod : '', selectedTeachers : [], subjectCareer : ''})
                    

                })
            } else {
                
                this.setState({errorMsg : "La hora de inicio debe ser antes que la hora de fin" })
            }

        }
    }

    render() {
        return (
            // <main
            //     className={clsx(this.props.classes.content, {
            //         [this.props.classes.contentShift]: this.props.open,
            //     })}
            // >
            //    <div className={this.props.classes.drawerHeader} />
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
                                <TextField fullWidth inputProps={{ maxLength: 100 }} variant="outlined" value={this.state.formName} onChange={(ev) => this.onNameChange(ev)} label="Nombre" type="text" />
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Día de Cursada</InputLabel>
                                    <Select onChange={(ev) => this.onWeekDayChange(ev)} value={this.state.formWeekDay}>
                                        <MenuItem value={"Lunes"}>Lunes</MenuItem>
                                        <MenuItem value={"Martes"}>Martes</MenuItem>
                                        <MenuItem value={"Miércoles"}>Miércoles</MenuItem>
                                        <MenuItem value={"Jueves"}>Jueves</MenuItem>
                                        <MenuItem value={"Viernes"}>Viernes</MenuItem>
                                        <MenuItem value={"Sábado"}>Sábado</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item sm={6}>
                                <TextField fullWidth id="time" variant="outlined" InputLabelProps={{ shrink: true }} value={this.state.formStartTime} onChange={(ev) => this.onStartTimeChange(ev)} label="Hora de Inicio" type="time" />
                            </Grid>

                            <Grid item sm={6}>
                                <TextField fullWidth id="time" variant="outlined" InputLabelProps={{ shrink: true }} value={this.state.formEndTime} onChange={(ev) => this.onEndTimeChange(ev)} label="Hora de Fin" type="time" />
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
                                        onChange={(ev, values) => this.onSelectedTeachersChange(ev, values)}
                                        filterSelectedOptions
                                        value={this.state.selectedTeachers}
                                        getOptionLabel={(option) => option.name + " " + option.surname}
                                        renderInput={(params) => <TextField {...params} variant="outlined" label="Docentes" />}
                                        multiple id="tags-standard" noOptionsText="No hay coincidencias"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Carrera</InputLabel>
                                    <Select onChange={(ev) => this.onCareerChange(ev)} value={this.state.subjectCareer}>
                                        {this.state.careerList.map( career => 
                                            <MenuItem value={career.id}>{career.name}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <br />
                        <Button variant="contained" disabled={this.state.isLoading} onClick={this.insertSubject} color="primary">
                            Agregar Materia
                        </Button>
                    </form>
                    <br />
                </Container>
                // </main>
                
                
            )
    
        }




}

export default SubjectInsert