import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import Books from "../components/Books";

const BooksContainer = ({
  searchCriteria,
  searchInput,
  searchClicked,
  setSearchClicked,
}) => {
  // add state for fetching api data
  const [data, setData] = useState([]);
  // add state for loading
  const [loading, setLoading] = useState(false);

  // fetch api data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // loading effect
        setLoading(true);

        const apiURL = `https://openlibrary.org/search.json?${searchCriteria}=${searchInput.replace(
          " ",
          "+"
        )}`;

        const response = await fetch(apiURL);
        const data = await response.json();

        // set data to api response
        setData(data);

        // remove loading effect
        setLoading(false);

        // Reset the searchClicked prop to false
        setSearchClicked(false);
      } catch (error) {
        console.error(error);
      }
    };

    // Only fetch data if the searchClicked prop is true
    if (searchClicked) {
      fetchData();
    }
  }, [searchCriteria, searchInput, searchClicked, setSearchClicked]);

  return (
    <div className="container">
      <div className="row">
        {loading ? <p>Loading...</p> : <Books data={data} />}
      </div>
    </div>
  );
};

export default BooksContainer;
