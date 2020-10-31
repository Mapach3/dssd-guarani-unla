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

class UserGrid extends Component{

    sendUserId(ev){
        debugger;
        console.log(ev.target.id)
        //this.props.action(user.id)
    }


    render(){
        const {users} = this.props
        return <>
        <TableContainer className="userDropTable" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell># ID</TableCell>
                    <TableCell align="left">Nombre y Apellido</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                    <TableCell align="left">DNI</TableCell>
                    <TableCell align="left">Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell component="th" scope="row">{user.id}</TableCell>
                        <TableCell align="left">{user.name} {user.surname}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.dni}</TableCell>
                        <TableCell align="left">
                        <div id={user.id} onClick={(ev) => this.sendUserId(ev)}>
                        {user.active ? <Button variant="contained" color="secondary">Baja</Button> : 
                                       <Button variant="contained" color="primary">Alta</Button>
                        }
                        </div>            
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>
      </>



        
    }






}

export default UserGrid