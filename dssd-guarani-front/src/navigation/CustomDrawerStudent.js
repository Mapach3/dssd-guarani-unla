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

const CustomDrawerStudent = ({ classes, open, setOpen, theme, ...props }) => {


    //student
    // a. Consulta de materias/exámenes disponibles para inscripción, los listados deben mostrar los días, horarios y docentes asignados.
    // b. Dentro de la ventana de inscripción, el estudiante podrá dar de baja su inscripción.
    // c. Se podrá consultar el informe analítico de las materias en las que se haya rendido examen final con el respectivo promedio a nivel general.
    // d. El informe analítico podrá descargarse en formato pdf.
    // e. Modificación de datos de contacto y clave. Los datos sensibles como nombre, apellido y dni solo los puede cambiar el rol de administrador.
    // f. Recordatorios: en las inscripciones a finales, se podrá optar por recibir un recordatorio por e-mail con los datos de la mesa de examen a la que se inscribió el estudiante. Este recordatorio se puede activar individualmente por materia.


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
                <ListItem button onClick={() => props.history.push("/inscriptionCourse")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Inscripcion a cursadas" />
                </ListItem>
                <ListItem button onClick={() => props.history.push("/gradesInform")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Informe analitico" />
                </ListItem>
                <ListItem button onClick={() => props.history.push("/modifyStudent")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Modificar datos" />
                </ListItem>
            </List>
            <Divider />
        </Drawer>
    )
}
export default withRouter(CustomDrawerStudent);
