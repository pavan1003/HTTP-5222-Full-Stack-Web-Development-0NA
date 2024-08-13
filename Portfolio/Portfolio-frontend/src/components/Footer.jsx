import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="8" className="footer-copywright">
          <h3>© Copyright Pavan Mistry, {year}. All rights reserved.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                className="text-white"
                href="https://github.com/pavan1003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="text-white"
                href="https://www.linkedin.com/in/pavan1003/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="text-white"
                href="https://www.instagram.com/pavan_1003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={25} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
