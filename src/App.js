import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => setCardsData(data));
  }, []);

  return (
    <div className="gallery">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="header">
            <div className="name">{card.name}</div>
            <div className="title">{card.current_title}</div>
          </div>
          <div className="content">
            <div className="location">{card.location}</div>
            {card.phone_number && (
              <div className="phone">{card.phone_number}</div>
            )}
            {card.personal_email && (
              <div className="email">{card.personal_email}</div>
            )}
            {card.linkedIn && (
              <div className="linkedin">
                <a
                  href={card.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            )}
            <div className="experience">
              <div className="section-title">Experience</div>
              <ul>
                {card.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
            <div className="education">
              <div className="section-title">Education</div>
              <ul>
                {card.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
