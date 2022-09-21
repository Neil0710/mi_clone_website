import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "../styles/Slider.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Slider = ({start}) => {
  return (
    <Carousel className="Slider1">
      {start.map((item, index) => (
        <Carousel.Item className="Slider2">
          <img
            className="d-block w-100"
            src={item}
            alt="First Slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
