import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute'
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Particles canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 50
                        },
                        density: {
                            enable: true
                        },
                        move: {
                            speed: 0.5
                        }
                    }
                }}
            />
            <Navbar />
            <Header />


        </React.Fragment>

    )
}

export default Home;
