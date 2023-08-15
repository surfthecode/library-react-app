import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Form from "react-bootstrap/Form";
import BooksContainer from "../containers/BooksContainer";

function Header() {
  const [searchCriteria, setSearchCriteria] = useState("default");
  const [searchInput, setSearchInput] = useState("");
  const [searchClicked, setSearchClicked] = useState(false); // Add this state variable

  const handleSearchCriteriaChange = (e) => {
    const selectedCriteria = e.target.value;

    setSearchCriteria(selectedCriteria);
  };

  const handleSearchInputChange = (e) => {
    const input = e.target.value;

    setSearchInput(input);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchClicked(!searchClicked); // Toggle the state
  };

  return (
    <div className="container header-container">
      <div className="row gy-4">
        <div className="col col-12 col-sm-4 col-md-3">
          <Form.Select
            aria-label="search criteria"
            className="header-form"
            id="search-criteria"
            value={searchCriteria}
            onChange={handleSearchCriteriaChange}
          >
            <option value=" ">Search by:</option>

            <option value="author" className="search-author">
              Author
            </option>
            <option value="title" className="search-title">
              Title
            </option>
            <option value="subject" className="search-subject">
              Category
            </option>
          </Form.Select>
        </div>
        <form className="col" onSubmit={handleSearchClick}>
          <div className="col col-12 col-sm-8 col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="your text here"
              aria-label="search input"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-outline-success form-btn"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* renders 2x in page becasue of how it's written */}
      <BooksContainer
        searchCriteria={searchCriteria}
        searchInput={searchInput}
        searchClicked={searchClicked}
        setSearchClicked={setSearchClicked}
      />
    </div>
  );
}

export default Header;
