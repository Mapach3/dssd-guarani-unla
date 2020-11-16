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

    render(){
        const {subjects} = this.props
        return <>
        <TableContainer className="userDropTables" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell># ID</TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Turno</TableCell>
                    <TableCell align="left">Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects.map((subject) => (
                    <TableRow key={subject.id}>
                        <TableCell component="th" scope="row">{subject.id}</TableCell>
                        <TableCell align="left">{subject.name}</TableCell>
                        <TableCell align="left">{this.getSubjectShift(subject)}</TableCell>
                        <TableCell align="left">
                        <Button variant="contained" value={window.localStorage.getItem('userId')} disabled={false} color={this.isUserInSubject(subject) ? "secondary" : "primary"}>{this.isUserInSubject(subject) ? "Baja" : "Alta"}</Button>      
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