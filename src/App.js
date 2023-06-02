import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => setCardsData(data));
  }, []);

  function randomWholeNum() {
    return +Math.floor(Math.random() * 9);
  }

  const image = [
    "./Image/company-1.jpeg",
    "./Image/company-2.jpeg",
    "./Image/company-3.jpeg",
    "./Image/company-4.jpeg",
    "./Image/company-5.png",
    "./Image/university-1.jpeg",
    "./Image/university-2.png",
    "./Image/university-3.jpeg",
    "./Image/company-5.png",
  ];

  return (
    <div className="gallery">
      {cardsData.map((card) => (
        <div className="card" key={card.id}>
          <div className="header">
            <div className="name">
              {card.name}{" "}
              <a href={`tel:${card?.phone_number}`} className="phone">
                {" "}
                <img src="./Image/phone.svg" alt="" />
              </a>{" "}
              <a href={`mailto:${card?.personal_email}`} className="email">
                <img src="./Image/email.svg" alt="" />
              </a>
              <a
                href={card?.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="linked-in"
              >
                <img src="./Image/linked-in.svg" alt="" />
              </a>
            </div>
            <div className="post-location">
              <div className="title">{card.current_title}</div>
              <div className="location">{card.location}</div>
            </div>
          </div>
          <div className="content">
            <div className="experience">
              <div className="section-title">Experience</div>
              <ul>
                {card.experience.map((exp, index) => (
                  <li key={index}>
                    {" "}
                    <div className="company-images-main">
                      <div className="company-images">
                        <img src={image[randomWholeNum()]} alt="" />{" "}
                      </div>
                    </div>
                    <p> {exp} </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="education">
              <div className="section-title">Education</div>
              <ul>
                {card.education.map((edu, index) => (
                  <li key={index}>
                    {" "}
                    <div className="company-images-main">
                      <div className="company-images">
                        <img src={image[randomWholeNum()]} alt="" />{" "}
                      </div>
                    </div>
                    <p>{edu} </p>
                  </li>
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
