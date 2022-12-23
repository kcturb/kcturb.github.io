import React from "react";

import logo from "./img.png";
import './css/AboutMe.css';
const AboutMe = ({ heading, message, link, imgSize, resume }) => {
//hey this is me
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{position:"relative", background:"white", padding:"6rem 0 4rem 0"}}>
      <div className="container container-fluid">
        <div className="row" style={{columnGap:"3rem"}}>
          <div className="col-3 d-none d-lg-block align-self-center">
            <div className="biography">
              <img
                style={{width: "100%", position: "relative", paddingTop: "1rem"}}
                src={logo}
                alt="profilepicture"
                width="50%"
                height="auto"
              />
              <ul className="list-check">
                <li className="row">
                  <div className="col-xs-2 col-sm-6 col-md-2 col-lg-6">
                    <i className="fa fa-fw fa-id-badge"></i>
                    <strong className="hidden-xs hidden-md">Name:</strong>
                  </div>
                  <div className="col-xs-10 col-sm-6 col-md-10 col-lg-6"><span>Krishan Chand</span></div>
                </li>
                <li className="row">
                  <div className="col-xs-2 col-sm-6 col-md-2 col-lg-6">
                    <i className="fa fa-fw fa-calendar"></i>
                    <strong className="hidden-xs hidden-md">Birth:</strong>
                  </div>
                  <div className="col-xs-10 col-sm-6 col-md-10 col-lg-6">June, 1993</div>
                </li>
                <li className="row">
                  <div className="col-xs-2 col-sm-6 col-md-2 col-lg-6">
                    <i className="fa fa-fw fa-home"></i>
                    <strong className="hidden-xs hidden-md">Location:</strong>
                  </div>
                  <div className="col-xs-10 col-sm-6 col-md-10 col-lg-6">Guwahati, India</div>
                </li>
                <li className="row">
                  <div className="col-xs-2 col-sm-6 col-md-2 col-lg-6">
                    <i className="fa fa-fw fa-globe"></i>
                    <strong className="hidden-xs hidden-md">Citizenship:</strong>
                  </div>
                  <div className="col-xs-10 col-sm-6 col-md-10 col-lg-6">Indian</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`col-lg-8`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;