import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import bg from "../../Images/bgImage2.png";
import AppBar from "../../Shared/AppBar/AppBar";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://serene-badlands-96491.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);
  return (
    <div
      style={{
        background: `url(${bg})`,
        height: "800px",
        paddingTop: "10px",
      }}
    >
      {/* <AppBar></AppBar> */}
      <h2 style={{ color: "#ff8000", marginBottom: "30px" }}>
        Our Awesome Services
      </h2>
      <div className="service-container">
        {services.map((service) => (
          <ServiceItem service={service} key={service._id}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
