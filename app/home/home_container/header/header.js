import React from "react";
import './header.css';
import { images } from "../../../../assets";

export default function Header() {
  return (
    <div className="home__header">
      <div className="home__header-body container">
        <div className="home__header-content">
          <h1>Fitness Club</h1>
          <h2>
            Sweat, Smile
            <span style={{display: 'block'}}>And Repeat</span>
          </h2>
          <p>Check out the most effective exercises personalized to you</p>
          <a className="btn" href="#">Explore Exercises</a>
        </div>
        <img alt="header img" src={images.banner} className="home__header-img" />
        <p className="home__footer">Exercise</p>
      </div>
    </div>
  )
}
