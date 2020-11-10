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

const CustomDrawerAdmin = ({ classes, open, setOpen, theme, ...props }) => {
    //admin
    // a.ABM de estudiantes y docentes.Además de los datos comunes referidos a las personas, se podrá cargar una fotografía de los mismos.
    //     b.Carga de cuatrimestres: el administrador tendrá la tarea de cargar las materias que se dictarán en el cuatrimestre con sus respectivos horarios y docentes asignados.
    //         c.Planilla de cuatrimestre: deberá haber una opción para exportar la planilla del cuatrimestre en formato PDF por cada turno(mañana, tarde, noche), ordenando los datos por año de la carrera(1º, 2º, 3º, …).
    //             d.Carga / planilla de mesas de examen: opera de la misma forma que el caso de cuatrimestres.
    //                 e.Modificación de inscripciones.
    //                     f.Carga de ventana de inscripciones.

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
                <ListItem button onClick={() => props.history.push("/insertUser")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Agregar Usuario" />
                </ListItem>
                <ListItem button onClick={() => props.history.push("/modifyUser")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Modificar Usuario" />
                </ListItem>
                <ListItem button onClick={() => props.history.push("/deleteUser")}>
                    <ListItemIcon><Delete /></ListItemIcon>
                    <ListItemText primary="Borrar Usuario" />
                </ListItem>

                <ListItem button onClick={() => props.history.push("/inscriptionWindow")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Ventana de Inscripcion" />
                </ListItem>

                <ListItem button onClick={() => props.history.push("/insertSubject")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Agregar Materias" />
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    )
}
export default withRouter(CustomDrawerAdmin);
