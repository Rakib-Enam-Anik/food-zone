import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/CoverSendMeeting010.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
         
        </div>
        <div className="home-text-section" >
          <h1 className="primary-heading">
          Send Meeting is powerful scheduling engine
          </h1>
          <p className="primary-text">
            Send Meeting is a tool developed by Teamexus Solutions Ltd to automate 
            the meeting scheduling process.
          </p>
          <button className="secondary-button">
            Learn More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;