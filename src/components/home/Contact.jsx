import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  const email = "krishan.iitghy@gmail.com";
  return (
    <div
      style={{
        position: "relative",
        background: "rgb(178 184 194)",
        padding: "2rem 0 6rem 0",
        fontWeight: "500"
      }}
    >
      <h6
        className="display-6 pb-3"
        style={{ paddingLeft: "2.5rem", fontWeight: "320" }}
      >
        Contact me
      </h6>
      <Row xs={12} md={3}>
        <Col style={{display: "inline !important", paddingLeft: "3.5rem", fontSize: "large"}}>
          <i style={{paddingRight: "1.5rem"}}className="fa fa-fw fa-envelope"></i>
          Email :
          <a href={`mailto:${email}`}> {email}</a>
        </Col>
        <Col style={{display: "inline !important", paddingLeft: "3.5rem", fontSize: "large"}}>
          <i style={{paddingRight: "1.5rem"}} className="fa fa-fw fa-phone"></i>
          Phone number : +91 80119 91005
        </Col>
        <Col style={{display: "inline !important", fontSize: "large"}}>
          <i style={{paddingRight: "1.5rem"}} className="fa fa-fw fa-linkedin"></i>
          Linkedin :
          <a href="https://www.linkedin.com/in/krishan-chand-176039212/">
             Krishan Chand
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default Contact;
