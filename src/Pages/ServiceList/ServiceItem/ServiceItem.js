
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Booking from '../../ServiceList/Booking/Booking'
import { Link } from 'react-router-dom';

const ServiceItem = (props) => {
    const { name, price, description, img, _id } = props.service
    return (
        <>
            <Card className="service-card" sx={{ maxWidth: 345, maxHeight: 500, pb: 4 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/booking/${_id}`}><Button variant="contained">Book</Button></Link>

                </CardActionArea>
            </Card>


        </>
    );
};

export default ServiceItem;