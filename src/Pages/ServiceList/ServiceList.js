import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';

const ServiceList = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div style={{ marginTop: '30px' }}>
            <h2 style={{ color: '#ff8000', marginBottom: '30px' }} >Our Awesome Services</h2>
            <div className="service-container">
                {
                    services.map(service => <ServiceItem service={service} key={service._id}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default ServiceList;