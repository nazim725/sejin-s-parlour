import { TextField, Button } from '@mui/material';
import React, { useState, useRef } from 'react';

const AddReview = () => {
    const nameRef = useRef();
    const companyNameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const ratingRef = useRef();
    const designationRef = useRef();



    const handleAddReview = e => {

        const name = nameRef.current.value;
        const companyName = companyNameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const rating = ratingRef.current.value;
        const designation = designationRef.current.value;
        const newReview = { name,img, description,companyName,rating,designation }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added Your Review.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <form onSubmit={handleAddReview}>
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Name"
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
                placeholder="Company Name"
                size="small"
                inputRef={companyNameRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Designation"
                size="small"
                inputRef={designationRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="Image URL"
                size="small"
                inputRef={imgRef}
            />
            <TextField
                sx={{ width: '90%', m: 1 }}
                id="outlined-size-small"
                placeholder="RatingL"
                size="small"
                inputRef={ratingRef}
            />
            <Button type="submit" variant="contained">Add Review</Button>
        </form>
    );
};

export default AddReview;