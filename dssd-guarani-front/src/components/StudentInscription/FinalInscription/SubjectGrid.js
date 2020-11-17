import React, {Component} from 'react';

import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import './style.css'

class finalGrid extends Component{

    sendUserData(ev,finalId,active,inWindow){
        debugger;
        var userId = ev.currentTarget.value
        ev.currentTarget.disabled = true
        this.props.action(userId,finalId,active,inWindow)
        ev.currentTarget.disabled = false
    }

    isWindowActive(final){
        var startDate = final.inscriptionWindow.startDate;
        var endDate = final.inscriptionWindow.endDate;
        var currentDate = new Date(Date.now()).toISOString();
        console.log(currentDate < endDate && currentDate > startDate)
        return (currentDate < endDate && currentDate > startDate)
    }

    isUserInfinal(final){
        return final.inscriptionFinals.find(inscription => inscription.userId == window.localStorage.getItem('userId'))
    }

    getSubject(final, subjectsList){
        return subjectsList.find(subject => subject.id == final.subject).name
    }

    removePreviousFinals(finals){
        var currentDate = new Date(Date.now()).toISOString();
        return finals.filter(final => final.date > currentDate)
    }

    setFinalDateTime(date) {
        moment.locale('es')
        return moment(date).format('DD [de] MMMM [de] YYYY [-] hh:mm')
    }

    getTeacherNames(subjects, subjectId, teacherList){
        debugger;
        var subject = subjects.find(subject => subject.id == subjectId)
        var teacherNamesConcat = ""
        subject.courses.forEach( course => {
            var teacher = teacherList.find(teacher => teacher.id === course.userId)
            if(teacher !== undefined){
                teacherNamesConcat+= teacher.name + " "+teacher.surname + ", "
            }
        })
        debugger;
        teacherNamesConcat = teacherNamesConcat.slice(0, -2);
        return teacherNamesConcat.length === 0 ? "A definir" : teacherNamesConcat
    }

    render(){
        const {finals, subjectsList, teacherList} = this.props
        return <>
        <TableContainer className="userDropTables" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell># ID</TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Fecha</TableCell>
                    <TableCell align="left">Docente</TableCell>
                    <TableCell align="left">Activo</TableCell>
                    <TableCell align="left">Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.removePreviousFinals(finals).map((final) => (
                    <TableRow key={final.id}>
                        <TableCell component="th" scope="row">{final.id}</TableCell>
                        <TableCell align="left">{this.getSubject(final, subjectsList)}</TableCell>
                        <TableCell align="left">{this.setFinalDateTime(final.date)}</TableCell>
                        <TableCell align="left">{this.getTeacherNames(subjectsList, final.subject, teacherList)}</TableCell>
                        <TableCell align="left">{this.isUserInfinal(final) ? "Si" : "No"}</TableCell>
                        <TableCell align="left">
                        <Button variant="contained" value={window.localStorage.getItem('userId')} disabled={false} 
                        color={this.isUserInfinal(final) ? "secondary" : "primary"} onClick={(ev) => this.sendUserData(ev, final.id, this.isUserInfinal(final), this.isWindowActive(final))}>{this.isUserInfinal(final) ? "Baja" : "Alta"}</Button>      
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
      </>



        
    }






}

export default finalGrid