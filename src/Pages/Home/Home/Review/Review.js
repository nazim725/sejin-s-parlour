import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";

const Review = (props) => {
  const {
    name,
    img,
    description,
    companyName,
    designation,
    rating,
    serviceName,
  } = props.review;
  return (
    <Card sx={{ maxWidth: 345, height: 440 }}>
      <CardActionArea>
        <img
          src={img}
          style={{ margin: "auto", borderRadius: "50%" }}
          alt=""
          width="200"
          height="200"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {companyName}, {designation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {serviceName}
          </Typography> */}
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Review;
