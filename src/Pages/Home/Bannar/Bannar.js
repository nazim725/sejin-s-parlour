import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import img from '../../../Images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept_1-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';

const Bannar = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (



        <Box style={{ backgroundColor: '' }} sx={{ flexGrow: 1, mt: 2 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 7,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>

                    <Box>
                        <h1 style={{ color: '#16E2F5' }}>Sejin's Parlour</h1>
                        <Typography variant="h4" component="h2" style={{ color: 'gray' }}>
                            <Typewriter
                                options={{
                                    strings: [' BEAUTY SALON'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                        </Typography>
                        <Typography variant="h4" component="h2" style={{ color: 'gray' }} >
                            <Typewriter
                                options={{
                                    strings: [' FOR EVERY WOMEN'],
                                    autoStart: true,
                                    delay: 75,
                                    loop: true,
                                }}
                            />

                        </Typography>
                        <Typography variant="h6" sx={{ m: 1 }} style={{ color: '#B1C5CF' }} component="h2">
                            Sejin's Beauty Parlor for the body is a popular beauty treatment, with various techniques offering benefits to the skin including the application of beauty products and for increasing mental well-being.
                        </Typography>
                        <NavLink style={{ textDecoration: 'none' }} to="/serviceList">  <Button variant="contained">Get an Appointment</Button></NavLink>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>

                    <img src={img} width="100%"></img>

                </Grid>

            </Grid>
        </Box>

    );
};

export default Bannar;