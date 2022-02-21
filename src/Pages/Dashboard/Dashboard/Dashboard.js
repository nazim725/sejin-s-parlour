import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddService from "../AddService/AddService";
import AddReview from "../AddReview/AddReview";
import ServiceList from "../../ServiceList/ServiceList";
import Booking from "../../ServiceList/Booking/Booking";
import MyAppointment from "../MyAppointment/MyAppointment";
import useAuth from "../../../hooks/useAuth";
import bg from "../../../Images/bgImage2.png";
import "./Dashboard.css";
import Payment from "../../Payment/Payment";

const drawerWidth = 200;

function Dashboard(props) {
  const { user, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background: `url(${bg})`, height: "800px" }}>
      <h1 style={{ color: "#00ffff", paddingTop: "30px" }}>Sejin Parlour</h1>
      <div style={{ paddingTop: "70px" }}>
        <NavLink className="navlink" to="/home">
          <Button className="button" color="inherit">
            Go to Home
          </Button>
        </NavLink>{" "}
        <br />
        <NavLink className="navlink" to="addReview">
          <Button color="inherit">Add Review</Button>
        </NavLink>{" "}
        <br />
        <NavLink className="navlink" to="serviceList">
          <Button color="inherit">Service List</Button>
        </NavLink>{" "}
        <br />
        <NavLink className="navlink" to="myAppointment">
          <Button color="inherit">My Appointments</Button>
        </NavLink>{" "}
        <br />
        <NavLink className="navlink" to="payment">
          <Button color="inherit">Payment</Button>
        </NavLink>{" "}
        <br />
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div style={{ background: `url(${bg})`, height: "800px" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography variant="h6" noWrap component="div">
              {!admin ? (
                <h3> [{user.displayName}] Dashboard</h3>
              ) : (
                <h3>User Dashboard</h3>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="addService" element={<AddService />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="serviceList" element={<ServiceList />} />
            <Route path="booking" element={<Booking />} />
            <Route path="myAppointment" element={<MyAppointment />} />
            <Route path="" element={<ServiceList />} />
            <Route path="booking/:serviceId" element={<Booking />} />
            <Route path="payment/:bookingId" element={<Payment />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
