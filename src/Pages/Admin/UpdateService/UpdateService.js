import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UpdateService = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const navigate = useNavigate();

    const url = `https://serene-badlands-96491.herokuapp.com/services/${serviceId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])


    const handleUpdateService = e => {
        const url = `https://serene-badlands-96491.herokuapp.com/services/${serviceId}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setService({});
                    navigate('/adminHome/manageService')


                }
            })
        e.preventDefault();
    }


    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedService = { name: updatedName, price: service.price, img: service.img, description: service.description };
        setService(updatedService)
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updatedService = { name: service.name, price: updatePrice, img: service.img, description: service.description };
        setService(updatedService)
    }

    const handleImgChange = e => {
        const updateImg = e.target.value;
        const updatedService = { name: service.name, price: service.price, img: updateImg, description: service.description };
        setService(updatedService)
    }
    const handleDescriptionChange = e => {
        const updateDescription = e.target.value;
        const updatedService = { name: service.name, price: service.price, img: service.img, description: updateDescription };
        setService(updatedService)
    }

    return (
        <div>
            <Box>
                <Typography className="login-heading" id="transition-modal-title" variant="h4" component="h2">
                    Update Products
                </Typography>

                <form onSubmit={handleUpdateService}>
                    <TextField
                        sx={{ width: '90%', m: 1, input: { color: 'blue' } }}

                        id="outlined-password-input"
                        name="name"
                        onChange={handleNameChange}
                        value={service.name || ''}
                        required

                    />
                    <TextField
                        sx={{ width: '90%', m: 1, input: { color: 'blue' } }}
                        id="outlined-size-small"
                        name="price"
                        onChange={handlePriceChange}
                        value={service.price || ''}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1, input: { color: 'blue' } }}
                        id="outlined-size-small"
                        name="img"
                        onChange={handleImgChange}
                        value={service.img || ''}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1, input: { color: 'blue' } }}
                        id="outlined-size-small"
                        name="description"
                        onChange={handleDescriptionChange}
                        value={service.description || ''}
                        size="small"
                    />
                    <Button sx={{ width: '90%', m: 1 }} type="submit" variant="contained">Update</Button>
                </form>
            </Box>

        </div>
    );
};

export default UpdateService;