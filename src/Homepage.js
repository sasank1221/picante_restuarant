import React from "react";
import { Link } from "react-router-dom";
import Banner from "./images/banner.jpeg";
import './Homepage.css';
import Nav from './Nav'
const Home = () => {
  return (
      <div>
        <Nav links={Nav} /> <br></br>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, textAlign: 'left'}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/home">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      </div>

  );
};

export default Home;