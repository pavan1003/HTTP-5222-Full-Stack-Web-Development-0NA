import React, { useState, useEffect } from "react";
import Particle from "../Particle";

import { Container, Col, Row } from "react-bootstrap";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const sortedSkills = data.sort((a, b) => a.skillName.localeCompare(b.skillName));
        setSkills(sortedSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <Container fluid id="skills" className="about-section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          Professional <strong className="txt-color">Skills</strong>
        </h1>
        <Row className="justify-content-center align-items-end pb-5">
          {skills.map((skill, index) => (
            <Col key={index} xs={4} md={2} className="mb-3">
              <img
                src={skill.skillImage}
                alt={skill.skillName}
                className="img-fluid rounded rounded-3 mb-1 skill-img"
              />
              <p>{skill.skillName}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
