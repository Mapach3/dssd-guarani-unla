import React, {Component} from 'react';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css'

class GradesGrid extends Component{

    render(){
        const {grades} = this.props
        return <>
        <TableContainer className="userDropTable" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell># ID</TableCell>
                    <TableCell align="left">Materia</TableCell>
                    <TableCell align="left">Nota</TableCell>
                    <TableCell align="left">Fecha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {grades.map((grade) => (
                    <TableRow key={grade.id}>
                        <TableCell component="th" scope="row">{grade.id}</TableCell>
                        <TableCell align="left">{grade.subject} </TableCell>
                        <TableCell align="left">{grade.score}</TableCell>
                        <TableCell align="left">{grade.date}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
      </>



        
    }






}

export default GradesGrid