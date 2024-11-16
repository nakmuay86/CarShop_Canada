import React from 'react';
import Slider from 'react-slick';

const CarItem = ({ car }) => {


  const handleCheckClick = () => {
    window.open('https://web.telegram.org/k/#@TwissRoad8160', '_blank'); 
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">❮</div>,
    nextArrow: <div className="slick-next">❯</div>,
  };

  return (
    <div 
      className="car-item" 
    >
      <h2>{car.name}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {car.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={car.name} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          ))}
        </Slider>
      </div>
      <p className="price">Price: {car.price}</p>
      <p className="mileage">Miles: {car.mileage}</p>
       <p className="description">{car.description}</p>
      <button onClick={handleCheckClick}>Check</button>
    </div>
  );
};

export default CarItem;
