import React from 'react';
import './About.css'; 
import Nav from './Nav'

function AboutUs() {
  return (
    <div>
     <Nav links={Nav} /> <br></br><br></br>

      
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
    </div>
  );
}

export default AboutUs;
