import React from "react"
import { faUserGraduate, faGraduationCap, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css/Education.css';
import ScrollAnimation from 'react-animate-on-scroll'

const Education = () => {

    return (
      <div id="education" className="jumbotron jumbotron-fluid m-0" style={{position:"relative", background:"rgb(178 184 194)", padding:"2rem 0 2rem 0"}}>

        <div className="container container-fluid">
          <section className="resume-section section-padding">
            <ScrollAnimation animateIn="fadeInDown" className="flipp">
              <h2 className="section-title">Education</h2>
            </ScrollAnimation>
  
            <div className="row">
              <div className="col-md-12">
  
              <div className="resume">
                <ul className="timeline">

                  <li className="">
                    <div className="posted-date">
                      <span className="month">2017 - present</span>
                    </div>
                    
                    <ScrollAnimation id="edu-02" className="panel panel-success timeline-panel flipp" animateIn="fadeInDown">
                        <div className="timeline-content">
      
                          <div className="panel-heading timeline-heading row">
                            <div className="col-md-10 col-xs-9 pull-left">
                              <h3 className="panel-title">Ph.D.</h3>
                            </div>
      
                            <div className="col-md-2 col-xs-3 pull-right text-center">
                              <FontAwesomeIcon icon={faUserGraduate} className="fas fa-3x text-success" />
                            </div>
                          </div>
      
                          <div className="panel-body timeline-body">
                          <p>
                              Mechanical Engineering<br />
                              Indian Institute of Technology, Guwahati, India<br />
                              Research area- <strong>Turbulent thermal convection</strong>
                            </p>
                          </div>
                        </div>
                    </ScrollAnimation>
                  </li>
    
                  <li className="timeline-inverted">
                    <div className="posted-date">
                      <span className="month">2015 - 2017</span>
                    </div>

                    <ScrollAnimation id="edu-02" className="panel panel-success timeline-panel flipp" animateIn="fadeInDown">
                        <div className="timeline-content">
      
                          <div className="panel-heading timeline-heading row">
                            <div className="col-md-10 col-xs-9 pull-left">
                              <h3 className="panel-title pane">Master's degree</h3>
                            </div>
      
                            <div className="col-md-2 col-xs-3 pull-right text-center">
                              <FontAwesomeIcon icon={faGraduationCap} className="fas fa-3x text-success" />
                            </div>
                          </div>
      
                          <div className="panel-body timseline-body">
                            <p>
                              Mechanical Engineering<br />
                              Delhi Technological University, Delhi, India<br />
                              Field of study- <strong>Renewable Energy Technology</strong>
                            </p>
                          </div>
                        </div>
                    </ScrollAnimation>
                  </li>

                  <li className="">
                    <div className="posted-date">
                      <span className="month">2011 - 2015</span>
                    </div>

                    <ScrollAnimation id="edu-03" className="panel panel-success timeline-panel flipp" animateIn="fadeInDown">
                      <div className="timeline-content">
    
                        <div className="panel-heading timeline-heading row">
                          <div className="col-md-10 col-xs-9 pull-left">
                            <h3 className="panel-title">Bachelor's degree</h3>
                          </div>
    
                          <div className="col-md-2 col-xs-3 pull-right text-center">
                            <FontAwesomeIcon icon={faBook} className="fas fa-3x text-success" />
                          </div>
                        </div>
    
                        <div className="panel-body timeline-body">
                        <p>
                            Mechanical Engineering<br />
                            NCE College of Enginnering, Panipat, India<br />
                        </p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </li>
  
                </ul>
            </div>
            </div>
            </div>
          </section>
  
        </div>
      </div>
    );
  };
  
  export default Education;