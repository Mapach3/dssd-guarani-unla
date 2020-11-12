import React, { useState } from 'react';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomAppBar from '../navigation/CustomAppBar';
import CustomDrawerAdmin from '../navigation/CustomDrawerAdmin';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import UserInsert from '../components/UserInsert/index'
import UserDrop from '../components/UserDrop/index'
import UserModify from '../components/UserModify/index'
import SubjectInsert from '../components/SubjectInsert/SubjectInsert';
import InsertInscriptionWindow from '../components/InscriptionWindow/InsertInscriptionWindow';
import FinalCallInsert from '../components/FinalCallInsert/FinalCallInsert'
import FinalSpreadSheet from '../components/SpreadSheet/FinalSpreadSheet'
import SubjectSpreadSheet from '../components/SpreadSheet/SubjectSpreadSheet'
import FinalInscriptionModification from '../components/InscriptionsModification/FinalInscriptionModification';
import SubjectInscriptionModification from '../components/InscriptionsModification/SubjectInscriptionModification';

const drawerWidth = 240;
const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
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
        padding: theme.spacing(0, 10),
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
                    <Route path="/insertUser" render={(props) => <UserInsert open={open} classes={classes} {...props}/>} />
                    <Route path="/modifyUser" render={(props) => <UserModify open={open} classes={classes} {...props}/>} />
                    <Route path="/deleteUser" render={(props) => <UserDrop open={open} classes={classes} {...props}/> } />
                    <Route path="/subjectSpreadSheet" render={(props) => <SubjectSpreadSheet open={open} classes={classes} {...props}/> } />
                    <Route path="/finalSpreadSheet" render={(props) => <FinalSpreadSheet open={open} classes={classes} {...props}/> } />
                    <Route path="/insertSubject" render={(props) => <SubjectInsert open={open} classes={classes} {...props}/> } />
                    <Route path="/insertFinalCall" render={(props) => <FinalCallInsert open={open} classes={classes} {...props}/> } />
                    <Route path="/inscriptionWindow" render={(props) => <InsertInscriptionWindow open={open} classes={classes} {...props}/>  } />
                    <Route path="/finalInscriptionModification" render={(props) => <FinalInscriptionModification open={open} classes={classes} {...props}/> } />
                    <Route path="/subjectInscriptionModification" render={(props) => <SubjectInscriptionModification open={open} classes={classes} {...props}/>  } />
                    
                </div>
            </div>
        </Router>
    )
}
export default HomeAdmin;