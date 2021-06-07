import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    menuicon: {
        color: "#fff"
    }
}));

export const Menu = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)} >
            <List>
                <ListItem 
                    button 
                    component={Link} 
                    to="/popular" >
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Popular" />
                </ListItem>
                <ListItem 
                    button 
                    component={Link} 
                    to="/top-rated" >
                    <ListItemIcon>
                        <FormatListNumberedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Top Rated" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon className={classes.menuicon} />
                </Button>
                <Typography variant="h6" className={classes.title}>
                    Lukasiak | Movies
                </Typography>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)} >
                    {list('left')}
                </SwipeableDrawer>
            </Toolbar>
        </AppBar>
    );
}