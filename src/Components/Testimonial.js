import React from "react";
import ProfilePic from "../Assets/EmonVai.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Users of SendMeeting enjoy a streamlined and efficient meeting experience. They benefit from simplified invitations,
         effortless response management, easy attendance tracking, and overall improved communication and coordination within their organizations.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "SendMeeting has greatly improved our meeting efficiency, simplifying invitations, responses, and attendance tracking. 
        It's a game-changer for our organization."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Asiqul Islam</h2>
      </div>
    </div>
  );
};

export default Testimonial;