import { Link } from "react-router-dom";

import React from "react";

function HomePage() {
  return (
    <div>
      <h1>Welcome to our Baseball Recruit Form</h1>
      <p>Thank you for your interest in our baseball program!</p>
      <p>Please fill out the form below to start the recruiting process.</p>
      <ul>
        <li>
          <Link to="/form">Recruit Form</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
