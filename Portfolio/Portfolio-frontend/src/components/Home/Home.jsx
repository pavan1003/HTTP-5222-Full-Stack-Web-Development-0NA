import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "/PavanMistry.png";
import Particle from "../Particle";
import HomeContent from "./HomeContent";
import Typewriter from "typewriter-effect";

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
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
            </Col>
            
          </Row>
        </Container>
      </Container>
      {/* <HomeContent /> */}
    </section>
  );
}

export default Home;
