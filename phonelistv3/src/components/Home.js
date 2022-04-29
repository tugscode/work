import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import Search from "./Search";
import "../css/home.css";

function Home() {
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/phone", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((e) => {
        setPhone(e.data);
      });
  });

  return (
    <>
      <Container>
        <Search />
        <div className="d-flex justify-content-between">
          <div className="left d-flex justify-content-center flex-column">
            <div className="d-flex justify-content-center ">
              <h3>left</h3>
            </div>
            <div className="left-customized-scrollbar">
              {phone.map((data, i) => {
                return data.status ? (
                  <div className="d-flex justify-content-center my-2" key={i}>
                    <Card style={{ width: "70%" }} className="d-flex flex-row">
                      <Card.Img src={data.image} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.discription}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ) : null;
              })}
            </div>
          </div>
          <div className="right flex-column">
            <div className="d-flex justify-content-center">
              <h3>right</h3>
            </div>
            <div className="left d-flex justify-content-center flex-column">
              <div className="right-customized-scrollbar">
              {phone.map((data, i) => {
                return data.status ? null : (
                  <div className="d-flex justify-content-center my-2" key={i}>
                    <Card style={{ width: "70%" }} className="d-flex flex-row">
                      <Card.Img src={data.image} />
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.discription}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
