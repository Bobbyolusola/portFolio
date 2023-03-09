import "./Menu.scss";
import {Link, useLocation} from "react-router-dom";
import {AppRoutes} from "../../common/routes/AppRoutes";

export function Menu({menuOpen, setMenuOpen}) {

    const {pathname} = useLocation()
    // console.log(path); /// path changed to pathname from console.log
    return(
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>{setMenuOpen(false)}}>
                    {pathname === AppRoutes.MAIN
                       ? <a href="#home">Home</a>
                       : <Link to={AppRoutes.MAIN}>Home</Link>
                    }
                </li>

                { pathname === AppRoutes.MAIN &&
                    <>
                        <li  onClick={()=>{setMenuOpen(false)}}>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li  onClick={()=>{setMenuOpen(false)}}>
                            <a href="#works">Projects</a>
                        </li>
                        <li  onClick={()=>{setMenuOpen(false)}}>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li onClick={()=>{setMenuOpen(false)}}>
                            <a href="#contact">Contact</a>
                        </li>
                    </>
                }
            </ul>
        </div>
    );
};