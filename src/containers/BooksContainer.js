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
  // Add this prop
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const apiURL = `https://openlibrary.org/search.json?${searchCriteria}=${searchInput.replace(
          " ",
          "+"
        )}`;

        const response = await fetch(apiURL);
        const data = await response.json();
        setData(data);
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
  }, [searchCriteria, searchInput, searchClicked, setSearchClicked]); // Add setSearchClicked as a dependency

  return (
    <div className="container">
      <h1>Books container:</h1>
      <div className="row">
        {loading ? <p>Loading...</p> : <Books data={data} />}
      </div>
    </div>
  );
};

export default BooksContainer;
