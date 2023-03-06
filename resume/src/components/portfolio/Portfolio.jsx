import "./Portfolio.scss";
import {PortfolioLists} from "../portfolioLists/PortfolioLists";
import {useState, useEffect} from "react";
import { webPortfolio,
    animatPortfolio,
    uxuiPortfolio} from "../../data";
import {Link} from "react-router-dom";

export function  Portfolio() {

    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "web",
            title: "Web Development",
        },
        {
            id: "animation",
            title: "Animation Design",
        },
        {
            id: "uxui",
            title: "UX/UI Design",
        },
    ];

    useEffect( ()=> {

        switch(selected){
            case "web":
                setData(webPortfolio);
                break;
            case "animation":
                setData(animatPortfolio);
                break;
            case "uxui":
                setData(uxuiPortfolio);
                break;
            default:
                setData(webPortfolio);
        }
    },[selected])

    return(
        <div className="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <ul>
                    {list.map((item) => (
                            <PortfolioLists title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                            />
                        ))}
                </ul>

            <div className="container">
                {data.map(data=>(
                    <div className="item">
                        <img src={data.img}
                             alt="" />
                        <h3>{data.url ? <a href={data.url}>{data.title}</a> : data.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}