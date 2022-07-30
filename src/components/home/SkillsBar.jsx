import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <li className="lead mb-1 mt-2">{skill}</li>

    </div>
  );
}

export default SkillsBar;