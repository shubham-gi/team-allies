import React from "react";
// import { Routes, Route } from "react-router-dom";
// import StudentHeader from "./Student/StudentHeader";
import profile1 from "./Student/images/profile-1.png";
import profile2 from "./Student/images/profile-2.jpeg";
import profile3 from "./Student/images/profile-3.jpg";
import profile4 from "./Student/images/profile-4.jpg";

// import   './Student/styles.css'
import "./Student/index.css";
const Studentdesk = (props) => {
  return (
    <>
      <div className="container1">
        <aside>
          <div className="profile">
            <div className="top">
              <div className="profile-photo">
                <img src={profile1} alt="" />
              </div>
              <div className="info">
                <p>
                  Hey, <b>{props.user.name}</b>{" "}
                </p>
                <small className="text-muted">12102030</small>
              </div>
            </div>
            <div className="about">
              <h5>Course</h5>
              <p>BTech. Computer Science & Engineering</p>
              <h5>DOB</h5>
              <p>29-Feb-2004</p>
              <h5>Contact</h5>
              <p>1234567890</p>
              <h5>Email</h5>
              <p>unknown@gmail.com</p>
              <h5>Address</h5>
              <p>Haryana, India</p>
            </div>
          </div>
        </aside>

        <main>
          <h1>Attendance</h1>
          <div className="subjects">
            <div className="eg">
              <span className="material-icons-sharp">architecture</span>
              <h3>Engineering Graphics</h3>
              <h2>12/14</h2>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>86%</p>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="mth">
              <span className="material-icons-sharp">functions</span>
              <h3>Mathematical Engineering</h3>
              <h2>27/29</h2>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>93%</p>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="cs">
              <span className="material-icons-sharp">computer</span>
              <h3>Computer Architecture</h3>
              <h2>27/30</h2>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="cg">
              <span className="material-icons-sharp">dns</span>
              <h3>Database Management</h3>
              <h2>24/25</h2>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>96%</p>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="net">
              <span className="material-icons-sharp">router</span>
              <h3>Network Security</h3>
              <h2>25/27</h2>
              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div className="number">
                  <p>92%</p>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
          </div>

          <div className="timetable" id="timetable">
            <div>
              <span id="prevDay">&lt;</span>
              <h2>Today's Timetable</h2>
              <span id="nextDay">&gt;</span>
            </div>
            <span className="closeBtn" onclick="timeTableAll()">
              X
            </span>
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Room No.</th>
                  <th>Subject</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Sunday</th>
                  <th>Holiday</th>
                  <th>No class available</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <div className="right">
          <div className="announcements">
            <h2>Announcements</h2>
            <div className="updates">
              <div className="message">
                <p>
                  {" "}
                  <b>Academic</b> Summer training internship with Live Projects.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
              <div className="message">
                <p>
                  {" "}
                  <b>Co-curricular</b> Global internship oportunity by Student
                  organization.
                </p>
                <small className="text-muted">10 Minutes Ago</small>
              </div>
              <div className="message">
                <p>
                  {" "}
                  <b>Examination</b> Instructions for EndSem Examination.
                </p>
                <small className="text-muted">Yesterday</small>
              </div>
            </div>
          </div>

          <div className="leaves">
            <h2>Teachers on leave</h2>
            <div className="teacher">
              <div className="profile-photo">
                <img src={profile2} alt="" />
              </div>
              <div className="info">
                <h3>Venkatesh</h3>
                <small className="text-muted">Full Day</small>
              </div>
            </div>
            <div className="teacher">
              <div className="profile-photo">
                <img src={profile3} alt="" />
              </div>
              <div className="info">
                <h3>Ramesh</h3>
                <small className="text-muted">Half Day</small>
              </div>
            </div>
            <div className="teacher">
              <div className="profile-photo">
                <img src={profile4} alt="" />
              </div>
              <div className="info">
                <h3>Himanshu Jindal</h3>
                <small className="text-muted">Full Day</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentdesk;
