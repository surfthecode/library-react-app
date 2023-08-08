import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import BookCard from "./components/BookCard";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <BookCard />
    </>
  );
}

export default App;
