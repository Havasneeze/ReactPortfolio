import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: "0.4"
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Particles canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 4,
                                size_min: 0.3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            random: true,
                            speed: 1,
                            direction: "top",
                            out_mode: "out"
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble"
                            },
                            onclick: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            bubble: {
                                distance: 100,
                                duration: 9,
                                size: 0,
                                opacity: 0
                            },
                            repulse: {
                                distance: 400,
                                duration: 4
                            }
                        }
                    }
                }}
                >

                </Particles>
                </React.Fragment>
    );
            };
            

export default Home;
