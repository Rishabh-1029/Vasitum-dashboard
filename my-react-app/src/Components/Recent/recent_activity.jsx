import TodayDate from "../Dates/today_Date_access.jsx";
import "./recent_activity_style.css";
import React from "react";
// Data

// const Data = [
//   {
//     title: "You Posted a new Job",
//     content:
//       "Kindly check the requirements and terms of work and make sure everything is right.",
//   },
//   {
//     title: "New Feature Release: Improved Job Application Process",
//     content:
//       "We've launched an updated job application process to enhance user experience. Check it out!",
//   },
//   {
//     title: "Reminder: Performance Review Meetings",
//     content:
//       "Don't forget your upcoming performance review meetings scheduled for this week.",
//   },
// ];

// Activity Card

function Recent() {
  const [Data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })

      .then((Data) => {
        setData(Data);
      });
  }, []);
  const activity = Data.map((item, index) => {
    return (
      <div className="recent_activity" key={index}>
        <p className="recent_title">{item.title}</p>
        <p className="recent_content">{item.content}</p>
      </div>
    );
  });

  // HTML design

  return (
    <div className="Main_recent_card">
      <div className="Recently_activity_title">
        <h2>Recently Activity</h2>
      </div>
      <TodayDate />
      <div className="recent_container">{activity}</div>
      <div className="button_element">
        <p>Today you make {Data.length} Activity</p>
        <button className="activity_btn">See All Activity</button>
      </div>
    </div>
  );
}

export default Recent;
