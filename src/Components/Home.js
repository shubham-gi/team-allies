import React from "react";
import line from '../images/line.svg'
import pointSpace from '../images/points-space.svg'
import planet from '../images/planet.svg'
// import grasses from '../images/grasses.png'
import bacha1 from '../images/boyAndGirl.png'
import { Link } from "react-router-dom";
const Home = (props) => {
  console.log(props.user)
  return (
    <main className="main">
      <section className="home">
        
        <div className="home_container container">
          <div className="home_content">
          {!props.loggedIn?<h1>{props.user.name}</h1>:""}
            {/* <h3 className="home_sub">STUDENT WEBSITE</h3> */}
            <h1 className="home_title">
              <span>
                Hello {props.loggedIn?props.user.name:"Engineers"}
                <br />
               
              </span>
              <img src={line} alt="" />
            </h1>
            <p className="home_description">
              Start your journey as a beginner and enhance your overall growth and personality.
            </p>
            <Link to={props.loggedIn?"/studentDesk":"/signin"} className="home_button">
              Let's Start
            </Link>
          </div>
          <div className="home_images">
            <img src={pointSpace} alt="not available" className="home_points" />
            <img src={planet} alt="not available" className="home_planet-2" />
            <img src={planet} alt="not available" className="home_planet-1" />
            <img src={bacha1} alt="not available" className="home_rocket" />
          </div>
        </div>
        {/* <img src={grasses} alt="not available" className="home_cloud-1" />
        <img src={grasses} alt="not available" className="home_cloud-2" /> */}
      </section>
    </main>
  );
};

export default Home;
