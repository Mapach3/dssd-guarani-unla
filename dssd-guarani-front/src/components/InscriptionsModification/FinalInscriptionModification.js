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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import axios from 'axios'
import { __API_CAREER, __API_SUBJECT, __API_USER, __API_INSCFINAL, __API_SUBCODES, __API_FINALCALL } from '../../consts/consts';

import moment from 'moment';
import 'moment/locale/es';




class FinalInscriptionModification extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        subjectList : [],
        chosenSubject : '',
        studentsList : [],
        chosenCareerSubjects : [],
        finalsOfChosenSubject : [],
        studentsOfThisFinal : [],
        finalsList : [],
        chosenFinal : '',
        errorMsg : '',
        dialogOpen: false
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)
        const getStudents = axios.get(__API_USER)
        const getFinals = axios.get(__API_FINALCALL)

        axios.all([getCareers,getSubjects,getStudents,getFinals]).then(axios.spread((careers,subjects,students,finals) => {
            this.setState({careerList : careers.data, 
                           subjectList : subjects.data, 
                           studentsList : students.data.filter(student => student.role === 1),
                           finalsList: finals.data
                        })
        }))
    }

    updateStudentsList = () => {
        axios.get(__API_USER).then( resp => {
            const {subjectList} = this.state
            var studentsFromDB = resp.data
            var chosenFinal = this.state.chosenFinal
            //Elimino los que no tengan una cursada con nota mayor a 4 para esta materia.. porque sino no pueden dar final
            let aprobadosAndConCursada  = studentsFromDB.filter(student => (student.courses.find(course => subjectList.find( subject => subject.id === course.subjectId).subjectCode === this.state.chosenSubject && course.courseAverage >= 4))) 
                                                                        
    
            //elimino los estudiantes que tienen este final aprobado porque no les puedo sacar la inscripción
            var conFinalAprobado = aprobadosAndConCursada.filter( student => student.inscriptionFinals.find( final => final.finalId === chosenFinal && final.score >= 4))
            var disponiblesParaTomarFinal = aprobadosAndConCursada.filter((el) => !conFinalAprobado.includes(el)) 
            
            this.setState({studentsOfThisFinal : disponiblesParaTomarFinal,
                           studentsList : studentsFromDB})


        })

    }



    onChosenFinalChange = (ev) => {
        const {subjectList, chosenFinal} = this.state
        debugger;
        this.setState({chosenFinal : ev.target.value,studentsOfThisFinal : []})
        //Elimino los que no tengan una cursada con nota mayor a 4 para esta materia.. porque sino no pueden dar final

        let aprobadosAndConCursada  = this.state.studentsList.filter(student => (student.courses.find(course => subjectList.find( subject => subject.id === course.subjectId).subjectCode === this.state.chosenSubject && course.courseAverage >= 4)) 
                                                                     && (!student.inscriptionFinals.find(final => final.finalId === chosenFinal && final.score === 0)))
        

        this.setState({studentsOfThisFinal : aprobadosAndConCursada})

    }

    onChosenSubjectChange = (ev) => {
        debugger;
        const {subjectList} = this.state
        this.setState({chosenSubject : ev.target.value})
        let subject = this.state.subjectList.find( subject => subject.subjectCode === ev.target.value)
        this.setState({finalsOfChosenSubject : this.state.finalsList.filter(final => final.active && subjectList.find(subject => subject.id === final.subject).subjectCode === subject.subjectCode),
                       studentsOfThisFinal : [],
                       chosenFinal : ''})
    }

    onCareerChange = (ev) => {
        debugger;
        this.setState({chosenCareer : ev.target.value})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        for (let index in subjectsOfCareer){
            if (subjectsOfCareer.find(sub => sub.subjectCode === subjectsOfCareer[index].subjectCode && sub.id !== subjectsOfCareer[index].id)){
                subjectsOfCareer.splice(index,1)
            }
        }
        this.setState({chosenCareerSubjects : subjectsOfCareer,
                       studentsOfThisFinal : [],
                       chosenFinal : ''})        
    }

    createInscription = (ev) => {
        this.setState({errorMsg : ''})
        debugger;
        var userId = parseInt(ev.currentTarget.value)
        var finalId = parseInt(this.state.chosenFinal)

        const options = {
            method : "POST",
            url : __API_INSCFINAL,
            
            data : {
                userid : userId,
                finalid : finalId
            }
        } 
        axios(options).then(resp => {
            console.log(resp.data)
            this.setState({errorMsg : resp.data, dialogOpen : true})
            
            this.updateStudentsList()
        })

    }

    getFinalData(date){
        moment.locale('es')
        return moment(date).format('dddd DD [de] MMMM hh:mm')
    

    }

    handleDialog = () => {
        this.setState({ dialogOpen: !this.state.dialogOpen })
      }

    deleteInscription = (ev) => {
        debugger;
        var userId = parseInt(ev.currentTarget.value)
        var finalId = parseInt(this.state.chosenFinal)

        const options = {
            method : "DELETE",
            url : __API_INSCFINAL,
            
            data : {
                userid : userId,
                finalid : finalId
            }
        }
        
        axios(options).then(resp => {
            console.log(resp.data)
            this.setState({errorMsg : resp.data,dialogOpen : true})
            this.updateStudentsList()
        });

    }

    getSubjectNameAndShift(subject){
        var ret = subject.name + " -"
        switch(subject.shift){
            case 1: ret+=" Mañana"
            break;
            case 2: ret+=" Tarde"
            break;
            case 3: ret+=" Noche"
            break;
            default: ret+=" Mañana"
        }
        return ret;
    }

    render(){
        return (
                <Container maxWidth="md">
                    <Dialog
                        open={this.state.dialogOpen}
                        keepMounted
                        onClose={this.handleDialog}
                        >
                        <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {this.state.errorMsg}
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleDialog} color="primary">
                            Aceptar
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <h3>Modificación de inscripciones a Finales</h3>
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
                            {this.state.chosenCareerSubjects.length !== 0 ? 
                                <Grid item sm={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Materia</InputLabel>
                                        <Select onChange={this.onChosenSubjectChange} value={this.state.chosenSubject}>
                                            {this.state.chosenCareerSubjects.map(subject =>
                                                <MenuItem key={subject.subjectCode} value={subject.subjectCode}>{subject.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                : null
                            }
                            {this.state.finalsOfChosenSubject.length !== 0 ? 
                                <Grid item sm={12}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Final</InputLabel>
                                        <Select onChange={this.onChosenFinalChange} value={this.state.chosenFinal}>
                                            {this.state.finalsOfChosenSubject.map(final =>
                                            <MenuItem key={final.id} value={final.id}>{this.getFinalData(final.date)}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                : null
                            }
                            {this.state.studentsOfThisFinal.length !== 0 ?
                            <>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                        <TableCell># ID</TableCell>
                                        <TableCell align="left">Nombre y Apellido</TableCell>
                                        <TableCell align="left">E-mail</TableCell>
                                        <TableCell align="left">DNI</TableCell>
                                        <TableCell align="left">Usuario</TableCell>
                                        <TableCell align="left">Acción</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.studentsOfThisFinal.map(user => (
                                        <TableRow key={user.id}>
                                            <TableCell component="th" scope="row">{user.id}</TableCell>
                                            <TableCell align="left">{user.name} {user.surname}</TableCell>
                                            <TableCell align="left">{user.email}</TableCell>
                                            <TableCell align="left">{user.dni}</TableCell>
                                            <TableCell align="left">{user.userName}</TableCell>
                                            <TableCell align="left">
                                            {user.inscriptionFinals.find( final => final.finalId === this.state.chosenFinal && final.userId === user.id) !== undefined ?  
                                                <Button variant="contained" onClick={this.deleteInscription} color="secondary" value={user.id}>Baja</Button> : 
                                                <Button variant="contained" onClick={this.createInscription} color="primary" value={user.id}>Alta</Button> 
                                            }
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

export default FinalInscriptionModification;