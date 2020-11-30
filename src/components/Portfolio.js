import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import project1 from '../components/images/Group.png';
import project2 from '../components/images/Group2.png';
import project3 from '../components/images/Group3.png';
// import classes from '*.module.css';


const useStyles = makeStyles({
    mainContainer: {
        background: "#223",
        height: '100%'

    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem',
        margin: '5rem auto'
    }

})

const Portfolio = () => {
    const classes = useStyles();
    return (

        <React.Fragment>
            <Box component="div" className={classes.mainContainer}>
                <Navbar />
                <Grid container justify="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="80"
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
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 2"
                                    height="80"
                                    image={project2} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 2
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
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 3"
                                    height="80"
                                    image={project3} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 3
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
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 2"
                                    height="80"
                                    image={project2} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 4
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
