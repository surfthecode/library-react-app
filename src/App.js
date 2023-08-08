import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SearchResultsContainer from "./containers/SearchResultsContainer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <SearchResultsContainer />
    </>
  );
}

export default App;
