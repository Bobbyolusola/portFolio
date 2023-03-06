import  "./PortfolioLists.scss";

export function PortfolioLists({id, title, active, setSelected, url}){
console.log(url);

    return (
        <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}>
            {url ? <a href={url}>{title}</a> : title}
        </li>
    )
}

