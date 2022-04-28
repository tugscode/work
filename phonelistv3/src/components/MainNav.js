import React from "react";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
import "../css/mainNav.css";

function MainNav() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src="https://www.unitel.mn/img/logo.svg" alt="Unitel" className="main-logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-between">
            <div></div>
            <Nav className="my-3 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1"><h3>Зарах утасны жагсаалт</h3></Nav.Link>
            </Nav>
            <Button>Profile</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;
