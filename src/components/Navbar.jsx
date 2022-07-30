
   
import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + navbarMenuRef.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    if (!navbarMenuRef.current) return;
    navBottom - scrollPosition >= navbarMenuRef.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, navbarMenuRef, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" style={{color: 'black', fontWeight: 'bold', fontStyle: 'italic'}} href={process.env.PUBLIC_URL + "/#home"}>
        {`${mainBody.firstName}`}
      </Navbar.Brand>
      <Navbar.Toggle style= {{backgroundColor: 'white'}} aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          } */}
          
          {about.show && (
            <Nav.Link
              className="nav-link lead"
              style={{color: "black"}}
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </Nav.Link>
          )}
          <Nav.Link
              className="nav-link lead"
              style={{color: "black"}}
              href={process.env.PUBLIC_URL + "/#education"}
            >
              Education
            </Nav.Link>

            {repos.show && (
            <Nav.Link
              className="nav-link lead"
              style={{color: "black"}}
              href={process.env.PUBLIC_URL + "/#publications"}
            >
              Publications
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              className="nav-link lead"
              style={{color: "black"}}
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </Nav.Link>
          )}
          <Nav.Link
            className="nav-link lead"
            style={{color: "black"}}
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;