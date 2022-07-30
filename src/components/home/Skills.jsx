import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import SkillsBar from "./SkillsBar";
import Col from "react-bootstrap/Col";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, hardSkills, softSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <div
      ref={skillsTabRef}
      id="skills"
      className="jumbotron jumbotron-fluid m-0"
      style={{
        position: "relative",
        background: "rgb(255 255 255)",
        padding: "2rem 0 2rem 0",
      }}
    >
      {" "}
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-5 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-5 px-1">
            <Col xs={12} md={6}>
        <SkillsSection
          skills={softSkills.slice(0, Math.floor(softSkills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={softSkills.slice(Math.floor(softSkills.length / 2), softSkills.length)}
          isScrolled={isScrolled}
        />
      </Col>
                       </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

export default Skills;
