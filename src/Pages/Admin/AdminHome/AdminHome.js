import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import OrderList from "../../OrderList/OrderList";
import AddService from "../../Dashboard/AddService/AddService";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import ManageService from "../ManageServices/ManageService";
import UpdateService from "../UpdateService/UpdateService";
import bg from "../../../Images/bgImage2.png";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import DashboardHome from "../../Dashboard/Dashboard/DashboardHome/DashboardHome";
import ManageUsers from "../ManageUsers/ManageUsers";

const drawerWidth = 200;

function AdminHome(props) {
  const { admin, user } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background: `url(${bg})`, height: "800px" }}>
      <Toolbar />
      <NavLink className="navlink" to="/home">
        <Button className="button" color="inherit">
          Go to Home
        </Button>
      </NavLink>{" "}
      <br />
      <NavLink className="navlink" to="addService">
        <Button className="button" color="inherit">
          Add Service
        </Button>
      </NavLink>{" "}
      <br />
      <NavLink className="navlink" to="orderList">
        <Button className="button" color="inherit">
          Order List
        </Button>
      </NavLink>{" "}
      <br />
      <NavLink className="navlink" to="makeAdmin">
        <Button className="button" color="inherit">
          Make Admin
        </Button>
      </NavLink>{" "}
      <br />
      <NavLink className="navlink" to="manageService">
        <Button className="button" color="inherit">
          Manage service
        </Button>{" "}
        <br />
      </NavLink>{" "}
      <NavLink className="navlink" to="manageUsers">
        <Button className="button" color="inherit">
          Manage Users
        </Button>
      </NavLink>{" "}
      <br />
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
              Admin Dashboard
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
            <Route path="" element={<DashboardHome />} />
            <Route path="addService" element={<AddService />} />
            <Route path="orderList" element={<OrderList />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageService" element={<ManageService />} />
            <Route path="manageUsers" element={<ManageUsers />} />
            <Route
              path="manageService/updateService/:serviceId"
              element={<UpdateService />}
            />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

AdminHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminHome;
