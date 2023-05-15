import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./recruitForm.css";
import logo from "./Ottawa_Gee-Gees.png";

function RecruitForm() {
  const [player, setPlayer] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    otherContact: "",
    primaryPosition: "",
    secondaryPosition: "",
    mostRecentTeam: "",
    mostRecentTeamContact: "",
    howWeFind: "",
    gradYear: "",
    height: "",
    weight: "",
    fastballVelo: "",
    curveballRating: "",
    changeupRating: "",
    sliderCutter: "",
    pitchInfo: "",
    hittingVelo: "",
    recruitmentStatus: "",
    appNumber: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the player data
    console.log("Player:", player);
    // Reset the form
    event.target.reset();
    setPlayer({
      name: "",
      email: "",
      phoneNumber: "",
      otherContact: "",
      primaryPosition: "",
      secondaryPosition: "",
      mostRecentTeam: "",
      mostRecentTeamContact: "",
      howWeFind: "",
      gradYear: "",
      height: "",
      weight: "",
      fastballVelo: "",
      curveballRating: "",
      changeupRating: "",
      sliderCutter: "",
      pitchInfo: "",
      hittingVelo: "",
      recruitmentStatus: "",
      appNumber: "",
      notes: "",
    });
  };

  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </header>
      <div className="container">
        <h1 className="center">Baseball Recruit Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={player.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={player.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Other Contact (Any social media account):
          <input
            type="text"
            name="otherContact"
            value={player.otherContact}
            onChange={handleChange}
          />
        </label>

        <h2>Contact Information</h2>
        <label>
          Most Recent Team:
          <input
            type="text"
            name="mostRecentTeam"
            value={player.mostRecentTeam}
            onChange={handleChange}
          />
        </label>
        <label>
          Most Recent Team Contact Info:
          <input
            type="text"
            name="mostRecentTeamContactInfo"
            value={player.mostRecentTeamContact}
            onChange={handleChange}
          />
        </label>
        <label>
          How we find him:
          <input
            type="text"
            name="howWeFindHim"
            value={player.howWeFind}
            onChange={handleChange}
          />
        </label>

        <h2>Baseball Information</h2>
        <label>
          Primary Position:
          <input
            type="text"
            name="primaryPosition"
            value={player.primaryPosition}
            onChange={handleChange}
          />
        </label>
        <label>
          Secondary Position(s):
          <input
            type="text"
            name="secondaryPosition"
            value={player.secondaryPosition}
            onChange={handleChange}
          />
        </label>
        <label>
          Graduation Year:
          <input
            type="text"
            name="gradYear"
            value={player.gradYear}
            onChange={handleChange}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={player.height}
            onChange={handleChange}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={player.weight}
            onChange={handleChange}
          />
        </label>
        <label>
          Fastball Velo (range):
          <input
            type="text"
            name="fastballVelo"
            value={player.fastballVelo}
            onChange={handleChange}
          />
        </label>
        <label>
          Curveball Rating or Range (“20-80 scale” or velo range):
          <input
            type="text"
            name="curveballRating"
            value={player.curveballRating}
            onChange={handleChange}
          />
        </label>
        <label>
          Changeup Rating or Range (“20-80 scale” or velo range):
          <input
            type="text"
            name="changeupRating"
            value={player.changeupRating}
            onChange={handleChange}
          />
        </label>
        <label>
          Slider/Cutter (notes and Rating or Range):
          <input
            type="text"
            name="sliderCutter"
            value={player.sliderCutter}
            onChange={handleChange}
          />
        </label>
        <label>
          “Other” pitch info:
          <input
            type="text"
            name="pitchInfo"
            value={player.pitchInfo}
            onChange={handleChange}
          />
        </label>
        <label>
          Exit velo for hitting (max):
          <input
            type="text"
            name="hittingVelo"
            value={player.hittingVelo}
            onChange={handleChange}
          />
        </label>
        <label>
          Recruitment Status:
          <input
            type="text"
            name="recruitmentStatus"
            value={player.recruitmentStatus}
            onChange={handleChange}
          />
        </label>
        <label>
          uOttawa Application Number:
          <input
            type="text"
            player="appNumber"
            value={player.appNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Notes:
          <input
            type="text"
            name="notes"
            value={player.notes}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecruitForm;
