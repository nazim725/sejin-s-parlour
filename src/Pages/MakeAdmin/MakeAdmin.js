import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)

    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://sejin-parlour.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Successfully make Admin")
                e.target.reset();
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 style={{ marginTop: '20px', marginBottom: '20px', color: '#00ffff' }}>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    style={{ width: '60%' }}
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    sx={{ width: '100%', m: 1, input: { color: '#fff' } }}
                    className='input-field'
                    InputLabelProps={{
                        style: { color: '#fff', paddingLeft: '10px' },
                    }}

                />
                <br />

                <Button style={{ width: '60%' }} sx={{ mt: 2 }} type="submit" variant="contained">Make Admin</Button>
            </form>

        </div>
    );
};

export default MakeAdmin;