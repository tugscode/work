import { Table, DropdownButton, Dropdown } from "react-bootstrap";
import React from "react";
import "../css/mainTable.css";

function TableItems() {
  return (
    <>
      <div className="mainTable">
        <div className="bg-white px-3 py-2 mt-5 subTable">
          <div className="header d-flex justify-content-between">
            <p>Зарах утасны жагсаалт</p>
            <DropdownButton id="dropdown-basic-button" title="Profile">
              <Dropdown.Item className="dItem" href="#/action-1">
                Action
              </Dropdown.Item>
              <Dropdown.Item className="dItem" href="#/action-2">
                Another action
              </Dropdown.Item>
              <Dropdown.Item className="dItem" href="#/action-3">
                Гарах
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="search px-2 d-flex align-items-center rounded">
            <input className="icon my-1" placeholder="Бүх талбараас хайх" />
          </div>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Модел</th>
                <th>Ангилал</th>
                <th>Үнэ</th>
                <th>IMEI</th>
                <th>Өнгө</th>
                <th>Баталгаа</th>
                <th>Тайлбар</th>
                <th>Салбар</th>
                <th>Статус</th>
                <th>Утас</th>
                <th>Нэр</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
              </tr>
            </tbody>
          </Table>
          <div className="d-flex justify-content-center">
            <button className="newBtn rounded">Шинэчлэх</button>
          </div>
        </div>
        <div className="footer d-flex align-items-center justify-content-center">
          <p className="m-0">©COPYRIGHT SOFTWARE DEPARTMENT 2022</p>
        </div>
      </div>
    </>
  );
}
export default TableItems;
