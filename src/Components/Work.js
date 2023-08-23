import React from "react";
import PickMeals from "../Assets/invitation.png";
import ChooseMeals from "../Assets/response.png";
import DeliveryMeals from "../Assets/attendance.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Invitation",
      text: "SendMeeting offers a streamlined invitation process,simplifying how users send meeting invitations to ensure efficient communication and scheduling. Its function is easy to invite others to a meeting. ",
    },
    {
      image: ChooseMeals,
      title: "Response",
      text: "SendMeeting provides a convenient platform for users to receive and manage responses to meeting invitations, enhancing communication and coordination within organizations. ",
    },
    {
      image: DeliveryMeals,
      title: "Attendance ",
      text: "With SendMeeting, tracking attendance for your meetings has never been easier. This feature ensures that organizations can keep a close eye on who's present, improving overall meeting efficiency and accountability.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        This app simplifies meeting management by centralizing invitations, 
        responses, and attendance tracking,reducing scheduling conflicts and 
        missed meetings for organizations.

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;