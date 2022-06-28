import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, useParams } from "react-router";
import Navbar from "../../../Shared/Navbar/Navbar";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";
import TimePicker from "@mui/lab/TimePicker";
import bg from "../../../Images/bgImage2.png";
import AppBar from "../../../Shared/AppBar/AppBar";
const Booking = () => {
  const [service, setService] = useState({});
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const newDate = date.toLocaleDateString();
  const newTime = date.toLocaleTimeString();
  const { user } = useAuth();
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const initialInfo = {
    customerName: user.displayName,
    email: user.email,
    phone: "",
    status: "PENDING",
    date: newDate,
    time: newTime,
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  useEffect(() => {
    const url = `https://sejin-parlour.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, []);

  const handleBookingSubmit = (e) => {
    // collect data
    const bookService = {
      ...bookingInfo,
      serviceName: service.name,
      servicePrice: service.price,
    };
    // send to the server
    fetch("https://sejin-parlour.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Booked Your service");
        }
      });

    navigate("/dashboard/myAppointment");

    e.preventDefault();
  };

  return (
    <div
      style={{ background: `url(${bg})`, height: "800px", paddingTop: "10px" }}
    >
      <AppBar></AppBar>

      <Box>
        <Typography
          style={{ color: "#00ffff", marginBottom: "15px" }}
          id="transition-modal-title"
          variant="h6"
          component="h2"
        >
          {service.name}
        </Typography>

        <form onSubmit={handleBookingSubmit}>
          <TextField
            id="outlined-size-small"
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
            sx={{ width: "70%", m: 1, input: { color: "#fff" } }}
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
          />
          <TextField
            id="outlined-size-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            size="small"
            sx={{ width: "70%", m: 1, input: { color: "#fff" } }}
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
          />
          <TextField
            id="outlined-size-small"
            name="phone"
            onBlur={handleOnBlur}
            defaultValue="Phone Number"
            size="small"
            sx={{ width: "70%", m: 1, input: { color: "#fff" } }}
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                // openTo="day"
                views={["day"]}
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    className="input-field"
                    InputLabelProps={{
                      style: { color: "#fff", paddingLeft: "10px" },
                    }}
                    sx={{ width: "70%", m: 1, input: { color: "#fff" } }}
                    {...params}
                    style={{ margin: "auto" }}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              value={time}
              onChange={setTime}
              renderInput={(params) => (
                <TextField
                  className="input-field"
                  InputLabelProps={{
                    style: { color: "#fff", paddingLeft: "10px" },
                  }}
                  sx={{ width: "70%", m: 1, input: { color: "#fff" } }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>

          <Typography
            id="transition-modal-title"
            variant="h6"
            style={{ color: "#00ffff" }}
            component="h2"
          >
            Your Service Charged will be{" "}
            <span style={{ color: "#ffff", fontWeight: "bold" }}>
              {service.price}{" "}
            </span>
            tk
          </Typography>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Booking;
