import React,{useState,useEffect} from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const[services,setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h3 sx={{my:5}}>Our Awesome Services</h3>
        <div className="service-container">
            {
                services.map(service=><Service service={service} key={service._id}></Service>)
            }
        </div>
        
            
        </div>
    );
};

export default Services;