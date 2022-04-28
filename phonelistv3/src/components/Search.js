import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "../css/search.css"
import searchIcon from "../img/search.svg";

function Search() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <InputGroup className="mb-3" style={{ width: "40%" }}>
          <InputGroup.Text id="inputGroup-sizing-default">
            <img src={searchIcon} alt="search" />
          </InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Бүх талбараас хайх"
          />
        </InputGroup>
      </div>
    </>
  );
}

export default Search;
