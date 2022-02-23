// Write your code here
import "./index.css";
import Navbar from "../Navbar";
import { Fragment, useState } from "react";
import { BOOKS } from "../../constants/dummy";

const Book = () => {
  const [book, setBook] = useState("");

  return (
    <>
      <div className="main-home-container">
        <Navbar />
        <div className="home-container-light">
          <table id="books">
            <thead>
              <th>Book Name</th>
              <th>Aurthor</th>
              <th>Borrowed By</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
            </thead>
            <tbody>
              {BOOKS.map((book, i) => {
                return (
                  <Fragment>
                    <tr key={book.id}>
                      <td>{book.name}</td>
                      <td>{book.aurthor}</td>
                      <td>{book.borrowedBy}</td>
                      <td>{book.borrowDate}</td>
                      <td>{book.expectedDate}</td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Book;
