import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, price, description, img, _id } = props.service;
  return (
    <>
      <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
        <Card
          className="service-card"
          sx={{ maxWidth: 345, pb: 4, height: 400 }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
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
                {description.slice(0,70)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default Service;
