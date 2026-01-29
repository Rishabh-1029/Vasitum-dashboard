import Left from "./Components/LEFT_navigation_bar/LeftComponent.jsx";
import Navbar from "./Components/Navigation_bar/Navbar.jsx";
import Card from "./Components/Dashboard/dashboard_card.jsx";
import GCard from "./Components/Graph_Card/graph_card.jsx";
import Acard from "./Components/Announcements/announcement.jsx";
import Recent from "./Components/Recent/recent_activity.jsx";
import Schedule from "./Components/Schedule/schedule.jsx";
import "./index.css";

function App() {
  return (
    <div className="body-div">
      {/* Left comopnent */}
      <div>
        <Left className="Left-app" />
      </div>

      <div className="Right-app">
        {/* Right & center Component */}
        <Navbar className="Nav-app" />

        <div className="center-align">
          <div className="Center-app">
            {/* Center component */}
            <Card className="card-app" />
            <GCard className="Graph-app" />
            <Acard className="Announcement-app" />
          </div>

          <div className="Extreme_right-app">
            {/* Right component */}
            <Recent className="Recent-app" />
            <Schedule className="scedule-app" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
