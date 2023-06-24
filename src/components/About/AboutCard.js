import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Sohair </span>
            from <span className="purple"> Burhanpur, India.</span>
            <br />
            <br /> I am Experienced full-stack mobile app engineer
            with a strong background in Android development.
            Skilled in maintaining product quality, conducting code reviews, integrating SDKs,
            and collaborating effectively with cross-functional teams.
            Dedicated to enhancing user experience and delivering high-quality solutions.
            <br />
            Additionally, I am currently working with Angkas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🧳Travelling and Exploring different cultures.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Once your mind stretches to a new level it never goes back to its original dimension.”{" "}
          </p>
          <footer className="blockquote-footer">Dr APJ Abdul Kalam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
