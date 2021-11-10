import { TextField, Button } from '@mui/material';
import React, { useState, useRef } from 'react';

const AddService = () => {

    // const [service, setService] = useState()
    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();


    const handleAddService = e => {

        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const newService = { name, price, img, description }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the item.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <form onSubmit={handleAddService}>
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Service Title"
                size="small"
                inputRef={nameRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="description"
                size="small"
                inputRef={descriptionRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Price"
                size="small"
                inputRef={priceRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Image URL"
                size="small"
                inputRef={imgRef}
            />
            <Button type="submit" variant="contained">Add Service</Button>
        </form>
    );
};

export default AddService;