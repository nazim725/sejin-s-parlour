import React, { useState } from "react";
import { Container, Grid, Typography, Button, Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import bg from "../../../Images/bgImage2.png";

const Login = () => {
  const { loginUser, authError, isLoading, user, signInWithGoogle } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(value);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  return (
    <div style={{ background: `url(${bg})`, height: "800px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 8 }} item xs={12} md={12}>
            <Typography style={{ color: "#00ffff" }} variant="h3" gutterBottom>
              Please Login
            </Typography>

            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  name="email"
                  onBlur={handleOnchange}
                  className="input-field"
                  sx={{ width: "75%", m: 1, input: { color: "#fff" } }}
                  InputLabelProps={{
                    style: { color: "#fff", paddingLeft: "10px" },
                  }}
                />{" "}
                <br />
                <TextField
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onBlur={handleOnchange}
                  className="input-field"
                  sx={{ width: "75%", m: 1, input: { color: "#fff" } }}
                  InputLabelProps={{
                    style: { color: "#fff", paddingLeft: "10px" },
                  }}
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>{" "}
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  {" "}
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
              </form>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoogleSignIn}
            >
              Sign In With Google
            </Button>

            {isLoading && <CircularProgress />}

            {user?.email && (
              <Alert severity="success">
                Successfully Login in Your Account
              </Alert>
            )}

            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
