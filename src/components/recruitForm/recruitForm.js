import React, { useState } from "react";
import "./recruitForm.css";

function RecruitForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bats, setBats] = useState("");
  const [throws, setThrows] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Position:", position);
    console.log("Grad Year:", gradYear);
    console.log("Height:", height);
    console.log("Weight:", weight);
    console.log("Bats:", bats);
    console.log("Throws:", throws);
  };

  return (
    <div>
      <h1>Baseball Recruit Form</h1>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <h2>Baseball Information</h2>
        <label>
          Position:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <label>
          Graduation Year:
          <input
            type="text"
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Bats:
          <input
            type="text"
            value={bats}
            onChange={(e) => setBats(e.target.value)}
          />
        </label>
        <label>
          Throws:
          <input
            type="text"
            value={throws}
            onChange={(e) => setThrows(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecruitForm;
