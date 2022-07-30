import React from "react";
import Container from "react-bootstrap/Container";
import sample from './sample.mp4';
import sample2 from './sample2.mp4';
import sample3 from './sample3.mp4';
import sample4 from './sample4.png';
import { useRef, useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import { CSSTransition } from 'react-transition-group';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const [transition, setTransition]=useState(false);
    const videoRef= useRef();
    const mainData= useRef();
    const [play,setPlay]= useState(true);
    const seeMoreRef=useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 0.5;
      setTimeout(() => {
        videoRef.current.pause();
        setPlay(false);
        setTimeout(() => {
          setTransition(true);
          mainData.current.style.background="black";
          seeMoreRef.current.style.display="block";
        }, 500);
      }, 3000);
      
    };

    const handleButtonClick = () => {
      if(play) {
        videoRef.current.pause();
      }
      else {
        videoRef.current.play();
      }
      setPlay(!play);
    };

    return (
       <div id="home" className="jumbotron title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <video className='videoTag video' ref={videoRef} onCanPlay={() => setPlayBack()} autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>

               
        <CSSTransition
        in={transition}
        timeout={6000}
        classNames="alert"
        unmountOnExit
        >
          <Container ref={mainData} className="text-center main_body">
              <div style={{padding: "2rem"}}>
                  <h1 ref={ref} className="display-1">
                      {title}
                  </h1>
              </div>
              {!play && <i onClick={handleButtonClick} className="fa fa-play playbutton" aria-hidden="true"></i>}
              {play && <i onClick={handleButtonClick} className="fa fa-pause playbutton" aria-hidden="true"></i>}
          </Container>

        </CSSTransition>



        <div ref={seeMoreRef} style={{display:"none"}} className="content">
        

            <div id="lead-down">
                <span className="spanofarrow" onClick={(e) => {
                    e.preventDefault();
                    window.location.href="#aboutme";
                    }}>
                    <i className="fa fa-chevron-down down" style={{fontSize: "2rem"}} aria-hidden="true"></i>
                </span>

                <a
                    id="myBtn"
                        className="btn btn-outline-light btn-lg "
                        href="#aboutme"
                        role="button"
                        aria-label="Learn more about me"
                    >
                        More about me
                    </a>
            </div>
        </div>
    </div>
    );
  }
);

export default MainBody;