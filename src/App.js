import { Route, Routes, Navigate } from "react-router-dom";
// import { Redirect } from "react-router";
import { Component } from "react";

import ThemeContext from "./contex/ThemeContex";

import "./App.css";
import Book from "./components/Book";
import Student from "./components/Student";
import NotFound from "./components/NotFound";

class App extends Component {
  state = { isDarkTheme: false };

  toggleTheme = () =>
    this.setState((prevState) => ({ isDarkTheme: !prevState.isDarkTheme }));

  render() {
    const { isDarkTheme } = this.state;

    return (
      <ThemeContext.Provider
        value={{ isDarkTheme, toggleTheme: this.toggleTheme }}
      >
        <Routes>
          <Route path="/" exact element={<Book />} />
          <Route path="/students" exact element={<Student />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </ThemeContext.Provider>
    );
  }
}

export default App;
