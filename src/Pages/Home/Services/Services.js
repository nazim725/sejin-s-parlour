import React, { useState, useEffect } from 'react'
import Service from '../Home/Service/Service'
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://sejin-parlour.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
        console.log(data)
      })
  }, [])
  return (
    <div style={{ marginTop: '100px' }} className="container">
      <h2 style={{ color: '#00FFFF', marginTop: '30px', marginBottom: '30px' }}>
        Our Awesome Services
      </h2>
      <div className="service-container">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  )
}

export default Services
