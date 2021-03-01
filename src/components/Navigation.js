import React, { useState } from "react";

// IMPORT style
import "../style/navigation.css";

// IMPORT functions
import { searchAPI, defAPI } from "../Functions/APIreq";

// IMPORT bootstrap
import { Button, Navbar, Form, FormControl, Container } from "react-bootstrap";

const Navigation = ({ setInfo, setSrc }) => {
  const [value, setValue] = useState("");

  const searchValueHandler = (e) => {
    setValue(e.target.value);
  };

  const submitValueHandler = (e) => {
    e.preventDefault();
    if (value != "") {
      searchAPI(setInfo, value);
    }
    setValue("");
    setSrc(false);
  };

  const defPageHandler = () => {
    defAPI(setInfo, 1, 15);
    setSrc(true);
  };

  return (
    <>
      <Container fluid className="mt-4 mb-4 w-75">
        <Navbar className="d-flex justify-content-between " id="resp">
          <Navbar.Brand onClick={defPageHandler} className="logo">
            Ignator
          </Navbar.Brand>
          <Form inline onSubmit={submitValueHandler} className="form">
            <FormControl
              onChange={searchValueHandler}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={value}
            />
            <Button onClick={submitValueHandler} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
