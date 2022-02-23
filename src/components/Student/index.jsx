// Write your code here
import "./index.css";
import Navbar from "../Navbar";
import { Fragment, useState } from "react";
import { STUDENTS } from "../../constants/dummy";

const Student = () => {
  const [student, setStudent] = useState("");

  return (
    <>
      <div className="main-home-container">
        <Navbar />
        <div className="home-container-light">
          <table id="students">
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
            </thead>
            <tbody>
              {STUDENTS.map((student, i) => {
                return (
                  <Fragment>
                    <tr key={student.id}>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
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

export default Student;
