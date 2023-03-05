import "./Works.scss"
import {useState} from "react";

export function  Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "assets/cellphone-line.png",
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet sit amet",
            img: "https://media.istockphoto.com/id/1334906074/photo/web-designer-working-with-multiple-devices.jpg?b=1&s=170667a&w=0&k=20&c=gQtc5l3nwoegnM8fc9jKzOCbh709i1FYE1p8gljrtOs=",
        },
        {
            id: "2",
            icon: "assets/global-line.png",
            title: "Web Animation",
            description: "Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet sit amet",
            img: "https://www.kindpng.com/picc/m/151-1512076_web-design-marketing-animation-hd-png-download.png",
        },
        {
            id: "3",
            icon: "assets/writing.png",
            title: "UX/UI Design",
            description: "Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet sit amet",
            img: "https://i.pinimg.com/736x/e6/c0/10/e6c0101c42546b86754d8479a275c47e.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
            :
            setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    };

    return(
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map(data=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={data.icon} alt=""/>
                                    </div>
                                    <h2>{data.title}</h2>
                                    <p>{data.description}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={data.img}
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={ ()=> handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={ ()=> handleClick("right")} />
        </div>
    );
}