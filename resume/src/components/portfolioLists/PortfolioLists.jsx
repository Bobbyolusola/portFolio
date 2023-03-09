import  "./PortfolioLists.scss";
import {Link} from "react-router-dom";

export function PortfolioLists({id, title, active, setSelected, url}){
// console.log(url);

    return (
        <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}>
            {url ? <Link to={url}>{title}</Link> : title}
        </li>
    )
}

