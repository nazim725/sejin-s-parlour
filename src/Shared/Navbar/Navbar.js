
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
  const { user, logout } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sejin's Parlour
          </Typography>
          <NavLink style={{ textDecoration: 'none' }} to="/home"><Button style={{ color: '#AF9B60' }} sx={{ m: 1, }}>Home</Button></NavLink>

          {
            user.email ?
              <Button color="inherit" onClick={logout} sx={{ m: 1 }}>logout</Button>
              :
              <NavLink style={{ textDecoration: 'none' }} to="/login"> <Button sx={{ m: 1 }} color="inherit">Login</Button></NavLink>
          }
          {
            user.email && <NavLink style={{ textDecoration: 'none' }} to="/dashboard"> <Button sx={{ m: 1 }} color="inherit">Customer Care</Button></NavLink>
          }
          {
            user.email && <NavLink style={{ textDecoration: 'none' }} to="/adminHome"> <Button color="inherit" sx={{ m: 1 }} >Admin</Button></NavLink>
          }


        </Toolbar>
      </AppBar>
    </Box >
  );
};

export default Navbar;