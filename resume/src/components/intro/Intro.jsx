import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export function Intro() {
  const textRef = useRef();

  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: [
        "Front-end developer & Designer.",
        " Front-end developer & Designer.",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/image.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Olusola Gbenga Adelabu</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
          <p>
            It is my passion to solve User problems with Design and Development.
            Outside my profession, I dance, play golf and work out.
          </p>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow-down-s-line.png" alt="" />
        </a>
      </div>
    </div>
  );
}
