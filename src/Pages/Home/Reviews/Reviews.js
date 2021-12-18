import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Review from '../Home/Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = React.useState([])
  React.useEffect
    (() => {
      fetch('https://serene-badlands-96491.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
          setReviews(data)
          console.log(data)
        })
    }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div style={{ paddingBottom: '50px', marginTop: '40px', marginLeft: '50px', marginRight: '50px' }}>
      <h2 style={{ marginBottom: "30px", color: '#00FFFF' }}> Reviews </h2>
      <Slider {...settings}>

        {reviews.map(review => <Review review={review}></Review>)}


      </Slider>
    </div>
  );
};

export default Reviews;