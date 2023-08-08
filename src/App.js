import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import BookCardContainer from "./containers/BookCardContainer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <BookCardContainer />
    </>
  );
}

export default App;
