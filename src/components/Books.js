import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

import defaultCover from "../assets/images/no-book-cover-available.jpg";

const Books = ({ data }) => {
  return (
    <div className="books">
      {data.docs &&
        data.docs.map((book) => {
          console.log(book);
          // Extract the relevant information for each book
          const title = book.title;
          const author = book.author_name ? book.author_name[0] : "Unknown";
          const coverId = book.cover_i;
          const coverUrl = coverId
            ? `http://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : "https://via.placeholder.com/150";
          const bookUrl = `https://openlibrary.org${book.key}`;

          // Render each book as a card with the information and a link
          return (
            <div className="card" key={book.key}>
              <img
                src={coverUrl ? coverUrl : defaultCover} //check for missing cover -> display my default cover
                alt={title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">By {author}</p>
                <a href={bookUrl} className="btn btn-primary" target="_blank">
                  View Book
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Books;
