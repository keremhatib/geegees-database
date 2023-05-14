import React from "react";
import { Link } from "react-router-dom";
import logo from "./Ottawa_Gee-Gees.png";

import "./homePage.css";

function HomePage() {
  return (
    <div className="welcome">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to the Baseball Recruit Form App</h1>
      </header>
      <main>
        <p>
          This app allows baseball coaches to easily collect information from
          potential recruits.
        </p>
        <p>
          To get started, click the "Recruit Form" link in the navigation menu
          above.
        </p>
        <ul>
          <Link to="/form">Recruit Form</Link>
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
