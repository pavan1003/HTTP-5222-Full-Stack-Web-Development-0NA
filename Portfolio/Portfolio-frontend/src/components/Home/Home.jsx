import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="pb-3 d-flex justify-content-center align-items-center">
              <img
                src="/PavanMistry.png"
                alt="home pic"
                className="img-fluid home-img"
              />
            </Col>
            <Col md={6} className="home-header">
              <h1 className="heading mb-3">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Pavan Mistry</strong>
              </h1>

              <div className="ps-5">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "I.T. Consultant",
                      "AI/ML Engineer",
                      "Teacher",
                      "Open Source Contributor",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </div>
              <div md="4" className="ps-5 pt-2">
                <ul className="footer-icons">
                  <li className="social-icons">
                    <a
                      className="text-white cursor-pointer"
                      href="https://github.com/pavan1003"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub size={45} />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      className="text-white"
                      href="https://www.linkedin.com/in/pavan1003/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={45} />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      className="text-white"
                      href="https://www.instagram.com/pavan_1003"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInstagram size={45} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
