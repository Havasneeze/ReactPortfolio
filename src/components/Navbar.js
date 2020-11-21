import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RightMenuSlide from '@material-ui/core/Drawer';
import {
    AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon,
    Avatar, Divider, List, Typography, Box
} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from "./emoji1.png";


//search Material Icons for different icons
const menuItems = [
    {
        ListIcon: <Home />,
        listText: "Home"
    },
    {
        ListIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        ListIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        ListIcon: <ContactMail />,
        listText: "Contacts"
    },

]


//Created hook for the slider. 
const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };


    const classes = useStyles()

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}>

            <Avatar className={classes.avatar} src={avatar} alt="Funny Face" />
            <Divider />

            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>{lsItem.ListIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>

        </Box>
    )


    return (
        <React.Fragment>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{ color: "yellow" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>
                            Portfolio
            </Typography>
                        <RightMenuSlide anchor='left'
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                        >
                            {sideList('right')}
                        </RightMenuSlide>
                    </Toolbar>

                </AppBar>
            </Box>
        </React.Fragment>
    )
}

//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#222',
        height: "100%"
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    listItem: {
        color: 'white'
    }
}));

export default Navbar;