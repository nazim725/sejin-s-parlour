import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import img from '../../../Images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import { NavLink } from 'react-router-dom';

const Bannar = () => {
    return (
        <Container>
            <Box style={{ backgroundColor: '#FFF8F5' }} sx={{ flexGrow: 1,mt:2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h4" component="h2">
                                BEAUTY SALON
                            </Typography>
                            <Typography variant="h4" component="h2">
                                FOR EVERY WOMEN
                            </Typography>
                            <Typography variant="h6" sx={{ m: 1 }} component="h2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                            </Typography>
                           <NavLink style={{textDecoration:'none'}} to="/serviceList">  <Button variant="contained">Get an Appointment</Button></NavLink>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>

                        <img src={img} width="100%"></img>

                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Bannar;