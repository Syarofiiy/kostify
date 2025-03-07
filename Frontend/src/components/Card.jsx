import React from "react";
import "./Card.css"; 

const Card = ({ title, content, logoUrl }) => {
  return (
    <div className="card">
      <img className="logo" src={logoUrl} alt="Logo"></img>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
