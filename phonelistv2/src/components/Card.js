import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../css/card.css"

function Cards() {
  return (
    <div className="container my-5">
      <>
        {[
          "Primary",
          "Secondary",
          "Success",
          "Danger",
          "Warning",
          "Info",
          "Light",
        ].map((variant) => (
          <Card
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "100%" }}
            className="mb-3"
          >
            <ListGroup horizontal className="d-flex justify-content-between">
              <ListGroup.Item className="border-0">Модел</ListGroup.Item>
              <ListGroup.Item className="border-0">Ангилал</ListGroup.Item>
              <ListGroup.Item className="border-0">Үнэ</ListGroup.Item>
              <ListGroup.Item className="border-0">IMEI</ListGroup.Item>
              <ListGroup.Item className="border-0">Өнгө</ListGroup.Item>
              <ListGroup.Item className="border-0">Баталгаа</ListGroup.Item>
              <ListGroup.Item className="border-0">Тайлбар</ListGroup.Item>
              <ListGroup.Item className="border-0">Салбар</ListGroup.Item>
              <ListGroup.Item className="border-0">Статус</ListGroup.Item>
              <ListGroup.Item className="border-0">Утас</ListGroup.Item>
              <ListGroup.Item className="border-0">Нэр</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </>
    </div>
  );
}
export default Cards;
