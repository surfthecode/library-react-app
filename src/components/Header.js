import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Form from "react-bootstrap/Form";

function Header() {
  return (
    <div className="container header-container">
      <div className="row gy-4">
        <div className="col col-12 col-sm-4 col-md-3">
          <Form.Select aria-label="search criteria" className="headerForm">
            <option>Search by:</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="category">Category</option>
          </Form.Select>
        </div>
        <div className="col col-12 col-sm-8 col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="your text here"
            aria-label="search input"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
