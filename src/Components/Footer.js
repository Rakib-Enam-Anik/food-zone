import React from "react";
import Logo from "../Assets/SendMeeting.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper-whole">
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="start">
            <img src={Logo} alt="" />
            <p className="text" >SendMeeting</p>
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>FAQ</span>
            <span>Careers</span>
            <span>About Us</span>
            <span>Terms & Conditions</span>
          </div>
          <div className="footer-section-columns">
            <span><a href="tel://+8801790826633">+8801790826633</a></span>
            <span><a href="mailto://info@sendmeeting.com">info@sendmeeting.com</a></span>
            <span>161/B (1st Floor) Lake Circus, <br /> Kalabagan, Dhaka</span>
          </div>
        </div>
      </div>
      <div align="center" className="footer-section-bottom">
        <p>Design & Developed by <a href="http://www.teamexus.com" target="blank">Teamexus Solutions Ltd.</a> | Copyright © 2023 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;