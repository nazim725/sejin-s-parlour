import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvkNIBrm0NfoostevnLE4IWHgryehQbJqgpOSAIPQViKTN0cKjbr8irdsae4gIcSqjebi9TAESKSU2Zz8rnRo8S00s9KqkuaY')

const Payment = () => {
    const { bookingId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://sejin-parlour.herokuapp.com/orders/${bookingId}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            });
    }, [bookingId]);
    return (
        <div>

            <h2 style={{ color: '#00ffff', marginTop: '20px', marginbottom: '20px' }}>Please Pay </h2>
            <h2 style={{ color: '#00ffff', marginTop: '20px', marginbottom: '20px' }}> Customer Name :{order.customerName}</h2>
            <h2 style={{ color: '#00ffff', marginTop: '20px', marginbottom: '20px' }}> Service Name  : {order.serviceName}</h2>
            <h2 style={{ color: '#00ffff', marginTop: '20px', marginbottom: '20px' }}>Pay: ${order.servicePrice}</h2>

            {order?.servicePrice && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order} />
            </Elements>}
        </div>
    );
};

export default Payment;