import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import Build from '@material-ui/icons/Build';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

const CustomDrawerTeacher = ({ classes, open, setOpen, theme, ...props }) => {

    //teacher
    // a. Consulta de materias asignadas.
    // b. Consulta de listado de alumnos de cada materia, este listado debe poder bajarse en formato Excel, con las respectivas columnas para cargar las notas de parciales y trabajos prácticos.
    // c. Carga de notas de cursada: se podrá hacer mediante la vista en pantalla o cargando la planilla en formato Excel. La carga de notas tiene una fecha límite, pasada la fecha, no se podrá modificar.
    // d. Carga de notas de finales: opera de la misma forma que la funcionalidad de cursada.


    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
            onClick={() => { setOpen(!open) }}
        >
            <div className={classes.drawerHeader}>
                <IconButton >
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>

            </List>
            <Divider />
        </Drawer>
    )
}
export default withRouter(CustomDrawerTeacher);
