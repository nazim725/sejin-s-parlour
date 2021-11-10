import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Alert } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {loginUser,authError,isLoading, user,signInWithGoogle}=useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const navigate = useNavigate();
  



    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(value)

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location,navigate)

    }


    const handleLoginSubmit = e => {

        loginUser(loginData.email,loginData.password,location,navigate)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={12}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>


                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Your Email"
                        variant="standard"
                        name="email"
                        onBlur={handleOnchange}
                        sx={{ width: '75%', m: 1 }}

                    /> <br />

                    <TextField
                        id="standard-basic"
                        label="Your Password"
                        variant="standard"
                        type="password"
                        name="password"
                        onBlur={handleOnchange}

                        sx={{ width: '75%', m: 1 }} />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign In</Button>

                    <NavLink style={{ textDecoration: 'none' }} to="/register"> <Button variant="text">New User? Please Register</Button></NavLink>

                </form>}
                <Button variant="contained" onClick={handleGoogleSignIn}>Sign In With Google</Button>


                {
                    isLoading && <CircularProgress />
                }

                {
                    user?.email && <Alert severity="success">Successfully Login in Your Account</Alert>
                }

                {
                    authError && <Alert severity="error">{authError}</Alert>
                }


            </Grid>
           

        </Grid>
    </Container >
    );
};

export default Login;