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

const CustomDrawer = ({ classes, open, setOpen, theme, ...props }) => {
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
            onClick={() => {setOpen(!open)}}
        >    
            <div className={classes.drawerHeader}>
                <IconButton >
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={() => props.history.push("/inscriptionExam")}>
                    <ListItemIcon><Add /></ListItemIcon>
                    <ListItemText primary="Inscripcion a Examenes" />
                </ListItem>

            </List>
            <Divider />
        </Drawer>
    )
}
export default withRouter(CustomDrawer);
