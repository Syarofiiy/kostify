import React from "react";
import "./About.css";
import syarofiPhoto from "../assets/dumb/Syarofi.jpg";
import anggiPhoto from "../assets/dumb/Anggi.jpg";

function About() {
  return (
    <div className="about-container">
      <h1>Tentang Pembuat Website</h1>
      <div className="about-card">
        <img src={syarofiPhoto} alt="Syarofi" className="about-photo" />
        <div className="about-info">
          <h2>Syarofi</h2>
          <p>Kelas: XI RPL 7</p>
          <p>SMK Telkom Malang</p>
        </div>
      </div>
      <div className="about-card">
        <img src={anggiPhoto} alt="Anggi" className="about-photo" />
        <div className="about-info">
          <h2>Anggi</h2>
          <p>Kelas: XI RPL 7</p>
          <p>SMK Telkom Malang</p>
        </div>
      </div>
    </div>
  );
}

export default About;
