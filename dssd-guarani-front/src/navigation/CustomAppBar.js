import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import NoImage from '../assets/img/NoImage.jpg'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';



const CustomAppBar = ({ classes, open, setOpen, rolUser, imageUser, nameUser }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        window.localStorage.clear()
        window.location.reload()
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem button onClick={() => handleLogout()}>Logout</MenuItem>
        </Menu>
    );


    return (
        <div className={classes.grow}>
            <AppBar position="fixed"
                className={clsx(classes.appBar, { [classes.appBarShift]: open, })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        onClick={() => { setOpen(!open) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant={"h6"} noWrap align={"justify"}>
                        Guarani UNLa
                        <br />
                        Usuario: {nameUser}
                        <br />
                        Rol: {rolUser}                        
                    </Typography>
                     

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <img style={{ borderRadius: "50%" }} id="profile-pic" src={imageUser.length === 0 || imageUser == "null" ? NoImage : imageUser} width="100" height="100" alt=""></img>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}
export default withRouter(CustomAppBar);