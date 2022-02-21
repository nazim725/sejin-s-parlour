import { Button, Container } from "@mui/material";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AppBar = () => {
  const { admin, user, logout } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle
            className="bg-secondary"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav className="me-auto">
                <NavLink style={{ textDecoration: "none" }} to="/home">
                  {" "}
                  <Button color="inherit" sx={{ m: 1 }}>
                    Home
                  </Button>
                </NavLink>

                {user.email && (
                  <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                    {" "}
                    <Button sx={{ m: 1 }} color="inherit">
                      Customer Care
                    </Button>
                  </NavLink>
                )}
                {user.email && admin && (
                  <NavLink style={{ textDecoration: "none" }} to="/adminHome">
                    {" "}
                    <Button color="inherit" sx={{ m: 1 }}>
                      Admin
                    </Button>
                  </NavLink>
                )}

                {user.email ? (
                  <Button
                    color="primary"
                    style={{ fontWeight: "bold" }}
                    onClick={logout}
                  >
                    logout
                  </Button>
                ) : (
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    {" "}
                    <Button sx={{ m: 1 }} color="inherit">
                      Login
                    </Button>
                  </NavLink>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppBar;
