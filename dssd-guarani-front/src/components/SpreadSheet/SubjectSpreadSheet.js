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


import axios from 'axios'
import { __API_CAREER, __API_SUBJECT } from '../../consts/consts';




class SubjectInscriptionModification extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        subjectList : [],
        chosenPeriod : '',
        chosenCareerSubjects : [],
        chosenperiodSubjects : [],
        dialogOpen: false
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)

        axios.all([getCareers,getSubjects]).then(axios.spread((careers,subjects) => {
            this.setState({careerList : careers.data, 
                           subjectList : subjects.data, 
                        })
        }));
    }

    onChosenPeriodChange = (ev) => {
        debugger;
        this.setState({chosenPeriod : ev.target.value})
        let subjectsOfPeriod = this.state.chosenCareerSubjects.filter( subject => subject.period === ev.target.value).sort((a,b) => a.year - b.year || a.shift- b.shift)
        this.setState({chosenperiodSubjects : subjectsOfPeriod})

    }

    onCareerChange = (ev) => {
        debugger;
        this.setState({chosenCareer : ev.target.value})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        this.setState({chosenCareerSubjects : subjectsOfCareer})        
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
                            {this.state.chosenPeriod.length !== 0 ? 
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Cuatrimestre</InputLabel>
                                    <Select onChange={this.onChosenPeriodChange} value={this.state.chosenPeriod}>
                                            <MenuItem value={1}>Primero</MenuItem>
                                            <MenuItem value={1}>Segundo</MenuItem>
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
                                        <TableCell align="left">Año</TableCell>
                                        <TableCell align="left">Turno</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.chosenPeriodSubjects.map(subject => (
                                        <TableRow key={subject.id}>
                                            <TableCell align="left">{subject.name}</TableCell>
                                            <TableCell align="left">{subject.year}</TableCell>
                                            <TableCell align="left">{subject.shift}</TableCell>
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