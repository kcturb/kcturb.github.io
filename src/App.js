import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";
import Navbar from "./components/Navbar";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Education from "./components/home/Education";
import Publication from "./components/home/Publication";
import Skills from "./components/home/Skills";
import Contact from "./components/home/Contact";
const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={false}
        />
      )}
      <Education />
      <Publication
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
      />
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      <Contact/>
    </>
  );
});

function App() {
  const titleRef = React.useRef();
  const [show, setShow] = useState(0);
  setTimeout(() => {
    setShow(true);
  }, 3500);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
