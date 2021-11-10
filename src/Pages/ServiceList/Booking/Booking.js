import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';
import Navbar from '../../../Shared/Navbar/Navbar';


const Booking = () => {
    const [service, setService] = useState({})
    const { user } = useAuth();
    const { serviceId } = useParams()
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)
            })
    }, [])


    const handleBookingSubmit = e => {
        // collect data
        const bookService = {
            ...bookingInfo,
            serviceName: service.name,
            servicePrice:service.price

        }
        // send to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully Booked Your service")

                }
            });

        e.preventDefault();
    }

    return (
        <Box>
            <Navbar></Navbar>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                {service.name}
            </Typography>

            <form onSubmit={handleBookingSubmit}>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="patientName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Phone Number"
                    size="small"
                />

                <Typography id="transition-modal-title" variant="h6" component="h2">
                Your Service Charged will be <span style={{color:'blue',fontWeight:'bold'}}>{service.price}  </span>tk
                </Typography>


                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </Box>
    );
};

export default Booking;