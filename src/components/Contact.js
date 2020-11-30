import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';
import { Translate } from '@material-ui/icons';

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            "& fieldset": {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'yellow',
            }
        }
    },

})(TextField);

const useStyles = makeStyles(theme=>({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
    },
    button: {
        backgroundColor: 'green',
        borderColor: 'white',
        marginTop: '1rem',
    }
 
 }))

const Contact = () => {
    const classes = useStyles()
    return (
        

        <Box component='div' style={{background: '#060A0F', height: '100vh', backgroundBlendMode: 'lighten'}}>
          <Navbar />
            <Grid container justify="center">
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{color: 'white', textAlign: 'center'}} >CONTACT ME ...</Typography>
                    <InputField
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        inputProps={{ style: { color: "yellow" } }}
                        margin='dense'
                        size='medium' />

                    <br />

                    <InputField
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        inputProps={{ style: { color: "yellow" } }}
                        margin='dense'
                        size='medium' />

                    <br />
                    <InputField
                        fullWidth={true}
                        label='Company Name'
                        variant='outlined'
                        inputProps={{ style: { color: "yellow" } }}
                        margin='dense'
                        size='medium' />

                    <br />
                    <Button
                        variant='outlined'
                        fullWidth={true}
                        endIcon={<SendIcon />}
                        className={classes.button}
                        
                    >
                        Send
                        </Button>

                </Box>

            Sup
            </Grid>
        </Box>


    )
}



export default Contact
