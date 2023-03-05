import  "./PortfolioLists.scss";

export function PortfolioLists({id, title, active, setSelected}){

    return (
        <li className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}>
            {title}
            
        </li>
    )
}