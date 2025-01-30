import DateDropSelector from "../Dates/Date_component";
import "./schedule_style.css";

// Data

const Data = [
  {
    title: "Review candidate applications",
    date: "Today - 11:30 AM",
    priority: true,
  },
  {
    title: "Interview with candidates",
    date: "Today - 10:30 AM",
    priority: false,
  },
  {
    title: "Short meeting with product designer from IT Department",
    date: "Today - 09:15 AM",
    priority: false,
  },
  {
    title: "Presentation on new project proposal",
    date: "Tomorrow - 02:00 PM",
    priority: true,
  },
  {
    title: "Team lunch with new hires",
    date: "Today - 12:00 PM",
    priority: false,
  },
  {
    title: "Monthly review meeting",
    date: "Next Monday - 09:00 AM",
    priority: false,
  },
];

// Acccessing data and creating cards

function Schedulecard() {
  // Priority cards

  const priorityCards = Data.map((item, index) => {
    if (item.priority) {
      return (
        <div className="S-card" key={index}>
          <div className="S-content">
            <p className="S_title">{item.title}</p>
            <p className="S_duration">{item.date}</p>
          </div>
          <div className="menu_Schedule">
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
    }
    return null;
  });

  // Other Card

  const otherCards = Data.map((item, index) => {
    if (!item.priority) {
      return (
        <div className="S-card" key={index}>
          <div className="S-content">
            <p className="S_title">{item.title}</p>
            <p className="S_duration">{item.date}</p>
          </div>
          <div className="menu_Schedule">
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
    }
    return null;
  });

  // HTML design

  return (
    <div className="Main-Scard">
      <div className="schecdule_title_panel">
        <div className="Schedule_title_bar">
          <p>Upcoming Schedule</p>
          <DateDropSelector />
        </div>
        <div className="priority_content">
          <p className="label_scedule">Priority</p>
          <div className="schedule_container">{priorityCards}</div>
        </div>
        <div className="other_content">
          <p className="label_scedule">Others</p>
          <div className="schedule_container">{otherCards}</div>
        </div>
      </div>
      <div className="new_Schedule">
        <button onClick="#">Create a New Schedule</button>
      </div>
    </div>
  );
}

export default Schedulecard;
