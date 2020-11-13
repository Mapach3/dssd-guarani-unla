import React, { Component } from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'


import axios from 'axios'
import { __API_CAREER, __API_SUBJECT, __API_USER } from '../../consts/consts';




class SubjectSpreadSheet extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        subjectList : [],
        teacherList : [],
        chosenPeriod : '',
        chosenCareerSubjects : [],
        chosenPeriodSubjects : [],
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)
        const getUsers = axios.get(__API_USER)

        axios.all([getCareers,getSubjects,getUsers]).then(axios.spread((careers,subjects,users) => {
            this.setState({careerList  : careers.data, 
                           subjectList : subjects.data, 
                           teacherList : users.data.filter( user => user.role === 2), 
                        })
        }));
    }

    onChosenPeriodChange = (ev) => {
        debugger;
        this.setState({chosenPeriod : ev.target.value})
        let subjectsOfPeriod = this.state.chosenCareerSubjects.filter( subject => subject.period === ev.target.value).sort((a,b) => a.year - b.year || a.shift- b.shift)
        this.setState({chosenPeriodSubjects : subjectsOfPeriod})

    }

    onCareerChange = (ev) => {
        debugger;
        this.setState({chosenCareer : ev.target.value})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        this.setState({chosenCareerSubjects : subjectsOfCareer})        
    }

    setSubjectYear(intYear){
        switch(intYear){
            case 1: return "Primero"
            case 2: return "Segundo"
            case 3: return "Tercero"
            case 4: return "Cuarto"
            case 5: return "Quinto"
            default: return "Desconocido"
        }
    }

    setSubjectShift(intShift){
        switch(intShift){
            case 1: return "Mañana"
            case 2: return "Tarde"
            case 3: return "Noche"
            default: return "Desconocido"
        }
    }

    getTeacherNames(subject){
        debugger;
        var teacherNamesConcat = ""
        subject.courses.forEach( course => {
            var teacher = this.state.teacherList.find(teacher => teacher.id === course.userId)
            if(teacher !== undefined){
                teacherNamesConcat+= teacher.name + " "+teacher.surname + ", "
            }
        })
        debugger;
        teacherNamesConcat = teacherNamesConcat.slice(0, -2);

        return teacherNamesConcat.length === 0 ? "A definir" : teacherNamesConcat
    }


    render(){
        return (
                <Container maxWidth="md">
                    <h3>Planilla de Cuatrimestre</h3>
                        <>
                        <Grid container xs={12} spacing={1}>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Carrera</InputLabel>
                                    <Select onChange={this.onCareerChange} value={this.state.chosenCareer}>
                                        {this.state.careerList.map( career => 
                                            <MenuItem key={career.id} value={career.id}>{career.name}</MenuItem>
                                        )}
                                        
                                    </Select>
                                </FormControl>
                            </Grid>
                            {this.state.chosenCareer.length !== 0 ? 
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Cuatrimestre</InputLabel>
                                    <Select onChange={this.onChosenPeriodChange} value={this.state.chosenPeriod}>
                                            <MenuItem value={1}>Primero</MenuItem>
                                            <MenuItem value={2}>Segundo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid> : null}
                            {this.state.chosenPeriod.length !== 0 ?
                            <>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell align="left">Materia</TableCell>
                                        <TableCell align="left">Día y Horario</TableCell>
                                        <TableCell align="left">Docentes</TableCell>
                                        <TableCell align="left">Año</TableCell>
                                        <TableCell align="left">Turno</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.chosenPeriodSubjects.map(subject => (
                                        <TableRow key={subject.id}>
                                            <TableCell align="left">{subject.name}</TableCell>
                                            <TableCell align="left">{subject.weekDay} {moment(subject.startTime).format("hh:mm")} a {moment(subject.endTime).format("hh:mm")} </TableCell>
                                            <TableCell align="left">{this.getTeacherNames(subject)}</TableCell>
                                            <TableCell align="left">{this.setSubjectYear(subject.year)}</TableCell>
                                            <TableCell align="left">{this.setSubjectShift(subject.shift)}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </> : null
                            }
                        </Grid>
                    <br />
                    </>
                </Container>)
    }

}

export default SubjectSpreadSheet;