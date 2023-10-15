// Skills.js
import React from "react";
import { skills } from "./db-skills";
import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import '../styles/Skills.css'; 

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
     {/* <CardDeck>*/}
        <div>
          <Card className="focus mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">
                Version Control
              </Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                <a
                  className="text-dark text-decoration-none"
                  href={skills.frontend[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={skills.frontend[0].imgSrc}
                    alt={skills.frontend[0].imgAltText}
                    rounded
                    className="image-style m-1"
                  />
                  {skills.frontend[0].skillName}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
  {/* </CardDeck>*/}
      </div>
  );
};

export default Skills;
