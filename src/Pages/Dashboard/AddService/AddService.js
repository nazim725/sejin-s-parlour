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


        fetch('https://sejin-parlour.herokuapp.com/services', {
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
        <div>
            <h2 style={{ marginTop: '20px', marginBottom: '20px', color: '#00ffff' }}>Add Service</h2>
            <form onSubmit={handleAddService}>
                <TextField

                    id="outlined-size-small"
                    placeholder="Service Title"
                    size="small"
                    inputRef={nameRef}
                    sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                    className='input-field'
                    InputLabelProps={{
                        style: { color: '#fff', paddingLeft: '10px' },
                    }}
                />
                <TextField

                    id="outlined-size-small"
                    placeholder="description"
                    size="small"
                    inputRef={descriptionRef}
                    sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                    className='input-field'
                    InputLabelProps={{
                        style: { color: '#fff', paddingLeft: '10px' },
                    }}
                />
                <TextField

                    id="outlined-size-small"
                    placeholder="Price"
                    size="small"
                    inputRef={priceRef}
                    sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                    className='input-field'
                    InputLabelProps={{
                        style: { color: '#fff', paddingLeft: '10px' },
                    }}
                />
                <TextField

                    id="outlined-size-small"
                    placeholder="Image URL"
                    size="small"
                    inputRef={imgRef}
                    sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                    className='input-field'
                    InputLabelProps={{
                        style: { color: '#fff', paddingLeft: '10px' },
                    }}
                />
                <Button type="submit" variant="contained">Add Service</Button>
            </form>

        </div>
    );
};

export default AddService;