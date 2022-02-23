// Write your code here
import { Link } from "react-router-dom";

import ThemeContext from "../../contex/ThemeContex";
import icon from "../../assets/icon1.png";
import "./index.css";

const Navbar = ({ ...props }) => {
  return (
    <div className="nav-bar-container-light">
      <Link to="/">
        <img src={icon} className="website-logo" alt="website logo" />
      </Link>
      <h3>Library Management</h3>
      <ul className="middle-items">
        <li className="list-item">
          <Link to="/" className="link-light">
            Books
          </Link>
        </li>
        <li className="list-item">
          <Link to="/students" className="link-light">
            Students
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
