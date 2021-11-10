import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)

    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset();
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    style={{ width: '60%' }}
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}

                />
                <br />

                <Button style={{ width: '60%' }} sx={{ mt: 2 }} type="submit" variant="contained">Make Admin</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;