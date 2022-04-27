import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "../css/mainTable.css";


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 helpBtn my-3">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Offcanvas.Title>Help Test</Offcanvas.Title>
        <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      <OffCanvasExample placement="end" name="Help"/>
    </>
  );
}

export default Example;
