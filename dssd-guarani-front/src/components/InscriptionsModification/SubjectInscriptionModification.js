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




class SubjectInscriptionModification extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        subjectList : [],
        chosenSubject : '',
        studentsList : [],
        chosenCareerSubjects : []
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)
        const getStudents = axios.get(__API_USER)

        axios.all([getCareers,getSubjects,getStudents]).then(axios.spread((careers,subjects,students) => {
            this.setState({careerList : careers.data, subjectList : subjects.data, studentsList : students.data.filter(student => student.role === 1)})
        }))
    }

    onChosenSubjectChange = (ev) => {
        this.setState({chosenSubject : ev.target.value})

    }


    onCareerChange = (ev) => {
        debugger;
        this.setState({chosenCareer : ev.target.value})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        this.setState({chosenCareerSubjects : subjectsOfCareer})        
    }
    render(){
        return (
                <Container maxWidth="xs">
                    <h3>Modificación de inscripciones a materias</h3>
                        <>
                        <Grid container spacing={1}>
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
                            {this.state.chosenCareerSubjects.length !== 0 ? 
                                <Grid item sm={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Materia</InputLabel>
                                        <Select onChange={(ev) => this.onChosenSubjectChange(ev)} value={this.state.chosenSubject}>
                                            {this.state.chosenCareerSubjects.map(subject =>
                                                <MenuItem value={subject.id}>{subject.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                : null
                            }
                            {this.state.chosenSubject.length !== 0 ?
                            <>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell># ID</TableCell>
                                        <TableCell align="left">Nombre y Apellido</TableCell>
                                        <TableCell align="left">E-mail</TableCell>
                                        <TableCell align="left">DNI</TableCell>
                                        <TableCell align="left">Rol</TableCell>
                                        <TableCell align="left">Acción</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.studentsList.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell component="th" scope="row">{user.id}</TableCell>
                                            <TableCell align="left">{user.name} {user.surname}</TableCell>
                                            <TableCell align="left">{user.email}</TableCell>
                                            <TableCell align="left">{user.dni}</TableCell>
                                            <TableCell align="left">{this.setUserRole(user)}</TableCell>
                                            <TableCell align="left">
                                            <Button variant="contained" value={user.id} disabled={false} color={user.active ? "secondary" : "primary"} onClick={(ev) => this.sendUserId(ev)}>{user.active ? "Baja" : "Alta"}</Button>      
                                            </TableCell>
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

export default SubjectInscriptionModification;