import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Github from "./Github";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container fluid id="projects" className="project-section">
      <Particle />
      <Container>
        <h1 className="display-4 pb-3">
          My Recent <strong className="txt-color">Projects </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row className="justify-content-center pb-5">
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.projectImage}
                title={project.projectTitle}
                description={project.projectDescription}
                githubLink={project.githubUrl}
                demoLink={project.liveUrl}
              />
            </Col>
          ))}
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default Projects;
