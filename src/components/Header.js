import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Form from "react-bootstrap/Form";

function Header() {
  const [searchCriteria, setSearchCriteria] = useState("default");

  const handleSearchCriteriaChange = (e) => {
    const selectedCriteria = e.target.value;

    setSearchCriteria(selectedCriteria);
  };

  console.log(searchCriteria);

  return (
    <div className="container header-container">
      <div className="row gy-4">
        <div className="col col-12 col-sm-4 col-md-3">
          <Form.Select
            aria-label="search criteria"
            className="headerForm"
            id="search-criteria"
            value={searchCriteria}
            onChange={handleSearchCriteriaChange}
          >
            <option value="default">Search by:</option>
            <option value="author" className="search-author">
              Author
            </option>
            <option value="title" className="search-title">
              Title
            </option>
            <option value="category" className="search-category">
              Category
            </option>
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
