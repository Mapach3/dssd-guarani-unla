import React, { useState } from 'react';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomAppBar from '../navigation/CustomAppBar';
import CustomDrawerAdmin from '../navigation/CustomDrawerAdmin';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import InscriptionExam from './subPages/InscriptionExam';

const drawerWidth = 240;
const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
     
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
}));

const HomeAdmin = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    return (
        <Router history={history}>
            <div className={classes.root}>
                <CssBaseline />
                <CustomAppBar open={open} setOpen={setOpen} classes={classes} nameUser={props.nameUser} imageUser={props.imageUser} rolUser={props.rolUser}/>
                <CustomDrawerAdmin open={open} setOpen={setOpen} classes={classes} theme={theme} rolUser={props.rolUser}/>
                <div className='mainContainer'>
                    <Route path="/inscriptionExam" render={(props) => <InscriptionExam open={open} classes={classes} {...props} /> } />
                </div>
            </div>
        </Router>
    )
}
export default HomeAdmin;