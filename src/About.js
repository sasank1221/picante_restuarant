import React, { useState } from 'react';
import './About.css';
import Nav from './Nav';

function AboutUs() {
  const [chefRating, setChefRating] = useState(null);
  const [ambianceRating, setAmbianceRating] = useState(null);
  const [tasteRating, setTasteRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingChange = (ratingType, value) => {
    switch (ratingType) {
      case 'chef':
        setChefRating(value);
        break;
      case 'ambiance':
        setAmbianceRating(value);
        break;
      case 'taste':
        setTasteRating(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitRating = () => {
    if (chefRating !== null && ambianceRating !== null && tasteRating !== null) {
      console.log('Chef rating:', chefRating);
      console.log('Ambiance rating:', ambianceRating);
      console.log('Taste rating:', tasteRating);
      alert('Thank you for your ratings!');
      setIsSubmitted(true);
    } else {
      alert('Please provide ratings for chef, ambiance, and taste!');
    }
  };

  const ratingSection = isSubmitted ? null : (
    <div className="rating-section">
      <h2>Rate Your Experience</h2>
      <div className="rating-item">
        <h3>Chef</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={value <= chefRating ? 'star filled' : 'star'}
              onClick={() => handleRatingChange('chef', value)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div className="rating-item">
        <h3>Ambiance</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={value <= ambianceRating ? 'star filled' : 'star'}
              onClick={() => handleRatingChange('ambiance', value)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div className="rating-item">
        <h3>Taste</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={value <= tasteRating ? 'star filled' : 'star'}
              onClick={() => handleRatingChange('taste', value)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <button onClick={handleSubmitRating}>Submit Ratings</button>
    </div>
  );

  return (
    <div>
      <Nav links={Nav} />
      <div className="about-container">
        <h1 className="about-heading">About Picante Restaurant</h1>
        <p className="about-description">
          Welcome to Picante Restaurant, where passion for flavor meets the art of dining.
          Our mission is to provide a culinary experience that tantalizes your taste buds
          and leaves you craving for more. At Picante, we believe in using only the freshest
          ingredients sourced from local farms and markets to create mouthwatering dishes
          that reflect the vibrant flavors of our region.
        </p>
        <p className="about-description">
          Our talented chefs are dedicated to crafting authentic and innovative dishes
          that showcase the richness and diversity of Latin American cuisine. Whether you're
          craving traditional classics or daring to explore new flavors, our menu offers
          something for everyone. From sizzling fajitas to zesty ceviche, each dish is
          prepared with precision and passion to ensure a memorable dining experience.
        </p>
        <p className="about-description">
          At Picante, we pride ourselves on providing exceptional service and creating
          a warm and inviting atmosphere for our guests. Whether you're joining us for
          a casual lunch, intimate dinner, or special celebration, our dedicated team
          is committed to exceeding your expectations and creating lasting memories.
        </p>
        <p className="about-description">
          We invite you to experience the flavors of Picante Restaurant and embark on
          a culinary journey like no other. Come join us and discover why we're not just
          a restaurant, but a destination for food lovers and aficionados alike.
        </p>
      </div>
      {ratingSection}
    </div>
  );
}

export default AboutUs;
