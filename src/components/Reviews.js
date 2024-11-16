import React from 'react';
import './reviews.css'
import mapleLeafImage from './logoweb.png'

const Reviews = () => {
  const reviews = [
    {
      name: 'Jason Statham',
      car: 'Audi A8 W12',
      rating: '⭐⭐⭐⭐⭐',
      photo: 'https://avatarfiles.alphacoders.com/886/88686.jpg',
      text: 'I only love cards, money, 2 guns and my cool quotes. I found this site by accident, they promised $5 dollars for a review.'
    },
    {
      name: 'Joel Zimmerman',
      car: 'JustinBieber',
      rating: '⭐⭐⭐',
      photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/deadmau5-profile_image-ee72d3d05d3b99a8-300x300.jpeg',
      text: 'While I was DJing at a local Canadian club, someone took my phone and left a review on this site. Id give it a 5, but I dont have access to the site creators JavaScript file.'
    },
    {
      name: 'Jeremy Clarkson',
      car: 'Porsche 928',
      rating: '⭐⭐⭐⭐⭐',
      photo: 'https://londonspeakerbureau.com/wp-content/uploads/2017/04/Jeremy-Clarkson-Keynote-Speaker.jpg',
      text: 'I dont understand bus lanes. Why do poor people have to get to places quicker than I do?'
    },
  ];

  return (
    <div className="reviews-section">
      <img className="maple-leaf" src={mapleLeafImage} alt="Maple Leaf" style={{ width: '250px', height: 'auto', marginTop: '15px' }} />
      <h2 className='ground'>User Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            {review.photo && <img src={review.photo} alt={review.name} className="review-photo" />}
            <div className="review-content"> {}
            <h3>{review.name}</h3>
            <p>Car: {review.car}</p>
            <p>{review.rating}</p>
            <p className="review-text">{review.text}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
