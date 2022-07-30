import React from "react";
import Col from "react-bootstrap/Col";

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={4}>
          <h5 style={{padding: "0 1.5rem", color: "rgb(34 130 42 / 75%)"}}>
            Programming Skills
          </h5>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>Python</li>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>Matlab</li>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>Fortran</li>
      </Col>
      <Col xs={12} md={4}>
      <h5 style={{padding: "0 1.5rem", color: "rgb(34 130 42 / 75%)"}}>
            Visualization Tools
          </h5>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>Tecplot</li>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>Gnuplot</li>
      </Col>
      <Col xs={12} md={4}>
      <h5 style={{padding: "0 1.5rem", color: "rgb(34 130 42 / 75%)"}}>
            Technical
          </h5>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>CFD</li>
          <li style={{padding: "0.5rem 4rem", listStyleType: "none", fontWeight: "420", fontSize: "1.25rem"}}>Analysis</li>

      </Col>
    </>
  );
}

export default SkillsTab;
