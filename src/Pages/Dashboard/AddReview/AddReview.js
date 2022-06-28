import { TextField, Button, MenuItem } from "@mui/material";
import React, { useState, useRef } from "react";

const AddReview = () => {
  const nameRef = useRef();
  const companyNameRef = useRef();
  const imgRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const designationRef = useRef();
  const serviceNameRef = useRef();

  const [services, setServices] = React.useState([]);
  const [service, setService] = React.useState();
  React.useEffect(() => {
    fetch("https://sejin-parlour.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  const handleChange = (event) => {
    setService(event.target.value);
  };
  console.log(service);

  const handleAddReview = (e) => {
    const name = nameRef.current.value;
    const companyName = companyNameRef.current.value;
    const img = imgRef.current.value;
    const description = descriptionRef.current.value;
    const rating = ratingRef.current.value;
    const designation = designationRef.current.value;
    const serviceName = serviceNameRef.current.value;
    const newReview = {
      name,
      img,
      description,
      companyName,
      rating,
      designation,
      serviceName,
    };

    fetch("https://sejin-parlour.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added Your Review.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2 style={{ marginTop: "30px", marginBottom: "30px", color: "#00FFFF" }}>
        Add Review
      </h2>
      <form onSubmit={handleAddReview}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select a service"
          value={service}
          inputRef={serviceNameRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        >
          {services.map((option) => (
            <MenuItem key={option.value} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-size-small"
          placeholder="Name"
          size="small"
          inputRef={nameRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        />
        <TextField
          id="outlined-size-small"
          placeholder="description"
          size="small"
          inputRef={descriptionRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        />
        <TextField
          id="outlined-size-small"
          placeholder="Company Name"
          size="small"
          inputRef={companyNameRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        />
        <TextField
          id="outlined-size-small"
          placeholder="Designation"
          size="small"
          inputRef={designationRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        />
        <TextField
          id="outlined-size-small"
          placeholder="Image URL"
          size="small"
          inputRef={imgRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        />
        <TextField
          id="outlined-size-small"
          placeholder="RatingL"
          size="small"
          inputRef={ratingRef}
          className="input-field"
          sx={{ width: "100%", m: 1, input: { color: "#fff" } }}
          InputLabelProps={{
            style: { color: "#fff", paddingLeft: "10px" },
          }}
        />
        <Button type="submit" variant="contained">
          Add Review
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
