import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';


const CustomAppBar = ({ classes, open, setOpen }) => {
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {[classes.appBarShift]: open,})}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                    onClick={() => {setOpen(!open)}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Guarani UNLa
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default withRouter(CustomAppBar);