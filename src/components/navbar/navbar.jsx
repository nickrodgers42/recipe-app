import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    withStyles,
    IconButton,
    InputBase,
    Button,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    Search as SearchIcon
} from '@material-ui/icons';
import "typeface-roboto";
import PropTypes from "prop-types";
import MediaQuery from 'react-responsive';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../../appTheme.jsx';
import { fade } from '@material-ui/core/styles/colorManipulator';


const styles = {
    grow: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.primary.dark,
        backgroundColor: fade(theme.palette.common.white, 0.5),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 1),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
        width: 'auto',
        },
        padding: '0 10px',
        margin: '10px',
        height: '40px'
    },
}

function Navbar(props) {
    const { classes } = props;
    return(
        <MuiThemeProvider theme={theme}>
                 
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={[ classes.white, classes.grow, classes.title]}
                        nowrap
                    >
                        Grandma's Cookbook
                    </Typography>
                    <InputBase
                        placeholder="Search"
                        className={classes.search}
                    >
                    </InputBase>
                    <Button variant="contained" color="secondary">
                        <SearchIcon />
                    </Button>
                    <Button variant="contained" color="secondary">
                        Log In
                    </Button>
                </Toolbar>
            </AppBar>

        </MuiThemeProvider>
    )
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar);