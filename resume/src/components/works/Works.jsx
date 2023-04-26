import "./Works.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Works() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  //
  // const data = [
  //     {
  //         id: "1",
  //         icon: "assets/cellphone-line.png",
  //         title: "Web Development Skills",
  //         description1: " React Js library ",
  //         description2: " Javascript",
  //         description3: " Animation ",
  //         description4: " HTML 5",
  //         description5: " CSS 3",
  //         img: "https://media.istockphoto.com/id/1334906074/photo/web-designer-working-with-multiple-devices.jpg?b=1&s=170667a&w=0&k=20&c=gQtc5l3nwoegnM8fc9jKzOCbh709i1FYE1p8gljrtOs=",
  //     },
  //     {
  //         id: "2",
  //         icon: "assets/writing.png",
  //         title: "UX/UI Design Skills",
  //         description1: " React Js library ",
  //         description2: " Javascript",
  //         description3: " Animation ",
  //         description4: " HTML 5",
  //         description5: " CSS 3",
  //         img: "https://i.pinimg.com/736x/e6/c0/10/e6c0101c42546b86754d8479a275c47e.jpg",
  //     },
  // ];

  // const handleClick = (way) => {
  //     way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
  //         :
  //         setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
  // };

  return (
    <div className="works" id="works">
      <div className="divider">
        <div className="skills1">
          <div className="top">
            <img
              src="https://www.pngkit.com/png/full/37-379755_web-development-website-development-images-hd.png"
              alt=""
            />
          </div>
          <div className="below">
            <h2>Web Development Skills</h2>
            <p> &#x2022; React Js library</p>
            <p> &#x2022; Javascript</p>
            <p> &#x2022; Animation</p>
            <p> &#x2022; HTML 5</p>
            <p> &#x2022; CSS 3 & SASS</p>

            <a href="#portfolio">
              <span>Projects</span>
            </a>
          </div>
        </div>

        <div className="skills2">
          <div className="top">
            {/*<img src="https://seodaz.com/wp-content/uploads/2021/07/UX-UI-design3.jpg" alt=""/>*/}
            <img
              src="https://img.freepik.com/free-vector/ux-ui-typographic-header-app-interface-improvement-user-interface-design-and-user-experience-development-modern-technology-concept-flat-vector-illustration_613284-1484.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="below">
            <h2>UX/UI Design Skills</h2>
            <p> &#x2022; User Research & Usability Studies</p>
            <p> &#x2022; Prototyping</p>
            <p> &#x2022; Wireframing</p>
            <p> &#x2022; User flows</p>
            <p> &#x2022; Mockups</p>
            <a href="#portfolio">
              <span>Projects</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /*        /!*<div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}*!/*/
}
{
  /*        /!*>*!/*/
}
{
  /*            {data.map(data=>(*/
}
{
  /*                <div className="container">*/
}
{
  /*                    <div className="item">*/
}
{
  /*                        <div className="left">*/
}
{
  /*                            <div className="leftContainer">*/
}
{
  /*                                <div className="imgContainer">*/
}
{
  /*                                    <img src={data.icon} alt=""/>*/
}
{
  /*                                </div>*/
}
{
  /*                                <h2>{data.title}</h2>*/
}
{
  /*                                <p>1.{data.description1}</p>*/
}
{
  /*                                <p>2.{data.description2}</p>*/
}
{
  /*                                <p>3.{data.description3}</p>*/
}
{
  /*                                <p>4.{data.description4}</p>*/
}
{
  /*                                <p>5.{data.description5}</p>*/
}
{
  /*                                <span>Projects</span>*/
}
{
  /*                            </div>*/
}
{
  /*                        </div>*/
}
{
  /*                        <div className="right">*/
}
{
  /*                            <img*/
}
{
  /*                                src={data.img}*/
}
{
  /*                                alt=""/>*/
}
{
  /*                        </div>*/
}
{
  /*                    </div>*/
}
{
  /*                </div>*/
}
{
  /*            ))}*/
}

{
  /*    /!*    <img src="assets/arrow.png" className="arrow left" alt="" onClick={ ()=> handleClick("left")} />*!/*/
}
{
  /*    /!*    <img src="assets/arrow.png" className="arrow right" alt="" onClick={ ()=> handleClick("")} />*!/*/
}
