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
import 'moment/locale/es';

import axios from 'axios'
import { __API_CAREER, __API_FINALCALL, __API_SUBJECT, __API_USER } from '../../consts/consts';


class FinalSpreadSheet extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        subjectList : [],
        chosenPeriod : '',
        teacherList : [],
        finalList : [],
        chosenCareerFinals : [],
        chosenCareerSubjects : [],
        chosenPeriodSubjects : []
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)
        const getFinals = axios.get(__API_FINALCALL)
        const getUsers = axios.get(__API_USER)

        axios.all([getCareers,getSubjects,getFinals,getUsers]).then(axios.spread((careers,subjects,finals,users) => {
            console.log(users.data)
            this.setState({careerList : careers.data, 
                           subjectList : subjects.data, 
                           finalList : finals.data,
                           teacherList : users.data.filter( user => user.role === 2)
                         })
        }));
    }


    onCareerChange = (ev) => {
        this.setState({chosenCareer : ev.target.value})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        let subjectsOfCareerIds =  []
        subjectsOfCareer.forEach( sub => {
            subjectsOfCareerIds.push(sub.id)
        })
        let finalsOfCareer = this.state.finalList.filter( final => subjectsOfCareerIds.includes(final.subject)).sort((a,b) => a.date > b.date)
        this.setState({chosenCareerFinals : finalsOfCareer,
                       chosenCareerSubjects : subjectsOfCareer})        
    }

    setSubjectName = (id) => {
        var name = this.state.chosenCareerSubjects.find( sub => sub.id === id).name
        return name
    }

    setFinalDateTime(date) {
        moment.locale('es')
        return moment(date).format('DD [de] MMMM hh:mm')
    }

    getTeacherNames(final){
        console.log(final)
        var teacherNamesConcat = ""
        final.inscriptionFinals.forEach( insc => {
            var teacher = this.state.teacherList.find(teacher => teacher.id === insc.userId)
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
                    <h3>Planilla de Finales</h3>
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
                            <>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell align="left">Materia</TableCell>
                                        <TableCell align="left">Día y Horario</TableCell>
                                        <TableCell align="left">Docentes</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.chosenCareerFinals.map(final => (
                                        <TableRow key={final.id}>
                                        <TableCell align="left">{this.setSubjectName(final.id)}</TableCell>
                                        <TableCell align="left"> 
                                        {this.setFinalDateTime(final.date)}
                                        </TableCell>
                                        <TableCell align="left">{this.getTeacherNames(final)}</TableCell>
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

export default FinalSpreadSheet;