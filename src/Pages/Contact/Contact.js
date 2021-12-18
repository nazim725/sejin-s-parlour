import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import './Contact.css'


const Contact = () => {

    return (
        <div >
            <h2 style={{ color: '#00FFFF', marginTop: '30px', marginBottom: '30px' }}>Contact Us</h2>


            <Grid container spacing={2} >
                <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div >

                        <h3 style={{ textAlign: "left", color: 'gray' }} >Contact info</h3>

                        <div style={{ textAlign: "left", color: 'gray' }}>
                            <h3> <i class="fas fa-envelope"></i> nazimhabib77@gmail.com </h3>
                            <h3> <i class="fas fa-phone"></i> 01830082347 </h3>
                            <h3> <i class="fas fa-phone"></i> 01627175966 </h3>
                            <h3> <i class="fas fa-map-marker-alt"></i> Raozan, Chattogram </h3>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h3 style={{ marginRight: '10px', fontSize: '34px' }}><a target="_blank" href="https://www.facebook.com/kajol.kalo.923"><i class="fab fa-facebook"></i></a> </h3>
                            <h3 style={{ marginRight: '10px', fontSize: '34px' }}><a target="_blank" href="https://www.linkedin.com/in/nazim-uddin-56378b203/"><i class="fab fa-linkedin"></i></a> </h3>
                            <h3 style={{ marginRight: '10px', fontSize: '34px' }} ><a target="_blank" href="https://www.instagram.com/nazimhabib77/?hl=en"><i class="fab fa-instagram-square"></i></a> </h3>
                        </div>

                    </div>

                </Grid>
                <Grid item xs={12} md={6} lg={6} >
                    <form className="contact-form" >
                        <TextField
                            id="standard-basic"
                            label="Your Name"
                            variant="outlined"
                            name="name"
                            sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                            className='input-field'
                            InputLabelProps={{
                                style: { color: '#fff', paddingLeft: '10px' },
                            }}


                        /> <br />
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            variant="outlined"
                            name="email"
                            sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                            className='input-field'
                            InputLabelProps={{
                                style: { color: '#fff', paddingLeft: '10px' },
                            }}

                        /> <br />

                        <TextField
                            style={{ marginTop: '10px', width: '100%' }}
                            id="outlined-textarea"
                            label="Message"
                            placeholder="Message"
                            className='input-field'
                            sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                            InputLabelProps={{
                                style: { color: '#fff', paddingLeft: '10px' },
                            }}
                            multiline
                        /> <br />
                        <Button style={{ marginTop: '10px', width: '100%', marginLeft: "10px" }} variant="contained">
                            Send
                        </Button>
                    </form>
                </Grid>

            </Grid>

        </div>

    );
};

export default Contact;