import "./announcement_style.css";
import DateDropSelector from "..//Dates//Date_component";
import React from "react";

// DATA

// const Data = [
//   {
//     title: "Outing schedule for every department",
//     duration: "5 Minutes ago",
//     pin_toggle: true,
//   },
//   {
//     title: "Meeting HR Department",
//     duration: "Yesterday, 12:30 PM",
//     pin_toggle: false,
//   },
//   {
//     title: "IT Department needs two more talents for UX/UI Designer position",
//     duration: "Yesterday, 12:30 PM",
//     pin_toggle: false,
//   },
//   {
//     title: "Presentation on quarterly financial results",
//     duration: "Today, 10:00 AM",
//     pin_toggle: true,
//   },
//   {
//     title: "Product strategy brainstorming session",
//     duration: "Tomorrow, 09:00 AM",
//     pin_toggle: false,
//   },
//   {
//     title: "Executive board meeting",
//     duration: "Next Monday, 02:00 PM",
//     pin_toggle: true,
//   },
// ];

// Card Design

function Acard() {
  const [Data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=18")
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

  const cards = Data.map((item, index) => {
    return (
      <div className="A-card" key={index}>
        <div className="A-content">
          <p className="A_title">{item.title}</p>
          <p className="A_duration">{item.duration}</p>
        </div>

        <div className="menu_Announcement">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="pin"
          >
            <path
              fill="currentColor"
              d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588c-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828l-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182l-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="menu"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 12h.01M8 12h.01M16 12h.01"
            ></path>
          </svg>
        </div>
      </div>
    );
  });

  // HTML design

  return (
    <div className="Main-Acard">
      <div className="announce_title_panel">
        <p>Announcement</p>
        <DateDropSelector />
      </div>
      <div className="announcement-container">{cards}</div>
      <div className="All_announcement">
        <button onClick="#">See All Announcement</button>
      </div>
    </div>
  );
}

export default Acard;
