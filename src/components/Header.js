import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import avatar from "./emoji1.png";
import Typed from 'react-typed';

const Header = () => {

    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Funny Face" />
            </Grid>

            <Typography className={classes.title} variant="h4">
                <Typed className={classes.title} strings={["Funny Face"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Design", "Web Development", "MERN Stack"]} typeSpeed={40}
                    backspeed={60}
                    loop />
            </Typography>

        </Box>


    );
};

//CSS STYLES
const useStyles = makeStyles(theme => ({
    title: {
        color: 'yellow'
    },
    subtitle: {
        color: 'red',
        marginBottom: '3rem'

    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: "center",
        zIndex: '1'
    }
}));

export default Header;
