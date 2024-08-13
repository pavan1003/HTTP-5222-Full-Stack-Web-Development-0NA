import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="/Logo.svg" className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="me-1" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className="me-1" /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#skills" onClick={() => updateExpanded(false)}>
                <AiOutlineUser className="me-1" /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projects" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className="me-1" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contact" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen className="me-1" /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="resume-btn">
              <Button
                className="resume-btn-inner"
                variant="primary"
                href="/Pavan Mistry-Full Stack.pdf"
                target="_blank"
              >
                <CgFileDocument />
                &nbsp; Resume
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
