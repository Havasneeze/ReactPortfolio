import React from 'react';
import { Typography, 
    Grid, 
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Box } from '@material-ui/core';
    import { makeStyles } from '@material-ui/core/styles';
    import Navbar from './Navbar';
    import project1 from '../components/images/Group.png';
    

// const useStyles = makeStyles({
//     mainContainer: {
//         background: "#223",
        
//     },
//     title: {
//         color: 'white',
//     }

// })

const Portfolio = () => {
    // const classes = useStyles();
    return (
      
         <React.Fragment> 
             <Box component="div">
            <Navbar />
            <Grid container justify="center" alignItems="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia 
                        component="img" 
                        alt="Project 1" 
                        height="140" 
                        image={project1} />
                        <CardContent>
                            <Typography gutterBottom variant='h5'>
                                Project 1
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                            A word that is a proper subsitute for any other word. Present most often in one sided conversations, 
                            or when a conversation is running dry, the random insertion of "stuff" 
                            breaks the silence for as long as it takes to say the word.
                            </Typography>
                            </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share 
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo 
                                    </Button>
                                </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            </Box>
          
        </React.Fragment> 
        

    );
};


export default Portfolio;
