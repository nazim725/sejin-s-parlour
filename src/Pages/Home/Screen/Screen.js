import { Grid } from '@mui/material';
import React from 'react';
import img from '../../../Images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
import './Screen.css'

const Screen = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={img} alt="" width="75%" height="100%" />
                </Grid>
                <Grid item xs={12} md={6} lg={6} >

                    <h1 style={{ color: '#ADD8E6' }}>Let us handle your screen Professionally.</h1>
                    <p style={{ color: '#FF00FF' }}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>


                    <div className="customer" style={{ display: 'flex' }}>
                        <div style={{ color: ' #ff0066' }}>
                            <h2>500+</h2>
                            <p>Happy Customer</p>
                        </div>
                        <div style={{ color: ' #ff0066', marginLeft: '20px' }}>
                            <h2>16+</h2>
                            <p>Total Service</p>
                        </div>
                    </div>


                </Grid>


            </Grid>
        </div>
    );
};

export default Screen;