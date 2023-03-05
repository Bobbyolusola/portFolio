import "./Topbar.scss";
import {Person, Mail} from "@material-ui/icons";


export default function Topbar({menuOpen, setMenuOpen}) {

    return (
        <div className={"top-bar " + (menuOpen && "active" )}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className="logo">PF</a>
                    <div className='itemContainer'>
                        <Person/>
                        <span>+380 633 169 509</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail/>
                        <span>contact@olusolaweb.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={ ()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>

        </div>
    )
}

