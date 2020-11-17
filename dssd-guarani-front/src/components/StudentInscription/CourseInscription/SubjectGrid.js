import React, {Component} from 'react';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import './style.css'

class SubjectGrid extends Component{

    sendUserData(ev,subjectId,active,inWindow){
        debugger;
        var userId = ev.currentTarget.value
        ev.currentTarget.disabled = true
        this.props.action(userId,subjectId,active,inWindow)
        ev.currentTarget.disabled = false
    }

    isWindowActive(subject){
        var startDate = subject.inscriptionWindow.startDate;
        var endDate = subject.inscriptionWindow.endDate;
        var currentDate = new Date(Date.now()).toISOString();
        console.log(currentDate < endDate && currentDate > startDate)
        return (currentDate < endDate && currentDate > startDate)
    }

    getTeacherNames(subject, teacherList){
        debugger;
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

    isUserInSubject(subject){
        return subject.courses.find(course => course.userId == window.localStorage.getItem('userId'))
    }

    getSubjectShift(subject){
        var ret = "";
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

    removePreviousCourses(courses){
        var currentDate = new Date(Date.now()).toISOString();
        return courses.filter(course => course.endTime > currentDate)
    }

    render(){
        const {subjects, teacherList} = this.props
        return <>
        <TableContainer className="userDropTables" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell># ID</TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Turno</TableCell>
                    <TableCell align="left">Horario</TableCell>
                    <TableCell align="left">Docente</TableCell>
                    <TableCell align="left">Activo</TableCell>
                    <TableCell align="left">Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.removePreviousCourses(subjects).map((subject) => (
                    <TableRow key={subject.id}>
                        <TableCell component="th" scope="row">{subject.id}</TableCell>
                        <TableCell align="left">{subject.name}</TableCell>
                        <TableCell align="left">{this.getSubjectShift(subject)}</TableCell>
                        <TableCell align="left">{subject.weekDay}</TableCell>
                        <TableCell align="left">{this.getTeacherNames(subject, teacherList)}</TableCell>
                        <TableCell align="left">{this.isUserInSubject(subject) ? "Si" : "No"}</TableCell>
                        <TableCell align="left">
                        <Button variant="contained" value={window.localStorage.getItem('userId')} disabled={false} 
                        color={this.isUserInSubject(subject) ? "secondary" : "primary"} onClick={(ev) => this.sendUserData(ev, subject.id, this.isUserInSubject(subject), this.isWindowActive(subject))}>{this.isUserInSubject(subject) ? "Baja" : "Alta"}</Button>      
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
      </>



        
    }






}

export default SubjectGrid