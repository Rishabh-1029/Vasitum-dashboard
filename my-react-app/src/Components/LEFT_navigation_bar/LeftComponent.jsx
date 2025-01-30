import "./Left.css";
import React from "react";

function Left() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div className="new-main-div-menu">
      <div className={`Left-Sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        {/* LOGO SECTION */}

        <div className="Left-Logo">
          <br></br>
          <img src=".\\public\\assets\\vasi_logo.png" className="vasi-logo" />
          <img src=".\\public\\assets\\logo_text.png" className="logo_text" />
          <div className="Main-menu-btn-c" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
            ></path>
          </svg>
        </div>
        </div>



        {/* MAIN MENU */}

        <div className="Main-menu">
          <p className="label_m">MAIN MENU</p>
          <a href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
                ></path>
              </svg>
              <div className={`icon_text ${isSidebarOpen ? "open" : "closed"}`}>Dashboard</div>
            </p>
          </a>

          <a href="#">
            <p id="RecruitmentIcon-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1em"
                viewBox="0 0 56 24"
              >
                <path
                  fill="currentColor"
                  d="M6 30h20v-5a7.01 7.01 0 0 0-7-7h-6a7.01 7.01 0 0 0-7 7zM9 9a7 7 0 1 0 7-7a7 7 0 0 0-7 7"
                ></path>
                <path
                  fill="currentColor"
                  d="M45 12.998h-6v6h-2v-6H31v-2h6v-6h2v6h6z"
                ></path>
              </svg>
              <div className="icon_text">Recruitment</div>
            </p>
          </a>

          <a href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 15h-6v-6h6v6zm1-10H5V7h14v2z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="icon_text">Schedule</div>
            </p>
          </a>

          <a href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m5 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4 7a4 4 0 0 0-8 0v3h8zM6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 10v-3a5.972 5.972 0 0 0-.75-2.906A3.005 3.005 0 0 1 19 15v3zM4.75 12.094A5.973 5.973 0 0 0 4 15v3H1v-3a3 3 0 0 1 3.75-2.906"
                ></path>
              </svg>
              <div className="icon_text">Employee</div>
            </p>
          </a>
          <a href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M8 17.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M9.5 8a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1-5 0m6.5 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                ></path>
              </svg>
              <div className="icon_text">Department</div>
            </p>
          </a>
        </div>

        {/* OTHER */}

        <div className="Other">
          <p1 className="label_o">OTHER</p1>
          <a href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10"
                ></path>
              </svg>
              <div className="icon_text">Support</div>
            </p>
          </a>

          <a href="#">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.82 22h-3.64a1 1 0 0 1-.977-.786l-.407-1.884a8.002 8.002 0 0 1-1.535-.887l-1.837.585a1 1 0 0 1-1.17-.453L2.43 15.424a1.006 1.006 0 0 1 .193-1.239l1.425-1.3a8.1 8.1 0 0 1 0-1.772L2.623 9.816a1.006 1.006 0 0 1-.193-1.24l1.82-3.153a1 1 0 0 1 1.17-.453l1.837.585c.244-.18.498-.348.76-.5c.253-.142.513-.271.779-.386l.408-1.882A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .976.787l.412 1.883a8.192 8.192 0 0 1 1.535.887l1.838-.585a1 1 0 0 1 1.169.453l1.82 3.153c.232.407.152.922-.193 1.239l-1.425 1.3a8.1 8.1 0 0 1 0 1.772l1.425 1.3c.345.318.425.832.193 1.239l-1.82 3.153a1 1 0 0 1-1.17.453l-1.837-.585a7.98 7.98 0 0 1-1.534.886l-.413 1.879a1 1 0 0 1-.976.786ZM11.996 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
                ></path>
              </svg>
              <div className="icon_text">Setting</div>
            </p>
          </a>
        </div>
      </div>
      <div className="Main-menu-btn-o" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21 18H3v-2h18v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Left;
