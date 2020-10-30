import React, {Component} from 'react';
import axios from 'axios'
import {__API_USER } from '../../consts/consts';
import './style.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'




class UserDrop extends Component{

    state = {
        userList : []
    }


    componentDidMount(){
        this.updateUserList()

    }


    updateUserList(){
        axios.get(__API_USER).then( resp => {
            console.log(resp.data);
            this.setState({userList : resp.data.filter(user => user.role !== 0)})
        })
    }


    render(){
        const{userList} = this.state
        
        return <>
        <h3>Lista de usuarios</h3>    
        <TableContainer className="userDropTable" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Nombre y Apellido</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                    <TableCell align="left">DNI</TableCell>
                    <TableCell align="left">Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell component="th" scope="row">{user.id}</TableCell>
                        <TableCell align="left">{user.name} {user.surname}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left">{user.dni}</TableCell>
                        <TableCell align="left">
                        {user.active ? <Button variant="contained" disabled={false} color="secondary" onClick={(ev) => console.log("Presionaste el boton: ",ev.target)}>Baja</Button> : 
                             <Button variant="contained"  color="" onClick={() => console.log("Presionaste el boton")}>Alta</Button>
                        }
                        
                            
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
      </TableContainer>     
    </>


    }

}

export default UserDrop