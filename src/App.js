import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddService from './Pages/Dashboard/AddService/AddService';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Registration/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceList from './Pages/ServiceList/ServiceList';
import Booking from './Pages/ServiceList/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addService" element={<AddService />} />
            <Route path="/addReview" element={<AddReview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/serviceList" element={<ServiceList />} />
            <Route path="/booking/:serviceId" element={<Booking />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/adminHome/*" element={<AdminHome />} />

            
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
