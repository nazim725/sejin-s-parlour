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
        fetch(`http://localhost:5000/orders/${bookingId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [appointmentId]);
    return (
        <div>
            <h2>Please Pay for: {order.customerName} for {order.serviceName}</h2>
            <h4>Pay: ${order.price}</h4>

            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order} />
            </Elements>}
        </div>
    );
};

export default Payment;