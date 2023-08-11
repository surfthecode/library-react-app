import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import BooksContainer from "./containers/BooksContainer";

function App() {
  const [searchCriteria, setSearchCriteria] = useState("default");
  const [searchInput, setSearchInput] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <>
      <Navigation />
      <Header
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchClicked={searchClicked}
        setSearchClicked={setSearchClicked}
      />
      <BooksContainer />
    </>
  );
}

export default App;
