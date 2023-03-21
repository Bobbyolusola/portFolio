import "./Menu.scss";
import {Link, useLocation} from "react-router-dom";
import {AppRoutes} from "../../common/routes/AppRoutes";
import { NavHashLink } from 'react-router-hash-link';


export function Menu({menuOpen, setMenuOpen}) {

    const {pathname} = useLocation()
    // console.log(path); /// path changed to pathname from console.log
    return(
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>{setMenuOpen(false)}}>
                    {pathname !== AppRoutes.MAIN
                       ? <NavHashLink
                            to={`${AppRoutes.MAIN}#home`}>Home</NavHashLink>
                       : <a href="#intro">Home</a>
                    }
                </li>

                <li  onClick={()=>{setMenuOpen(false)}}>
                    {pathname !== AppRoutes.MAIN
                        ? <NavHashLink
                            to={`${AppRoutes.MAIN}#portfolio`}>Portfolio</NavHashLink>
                        : <a href="#portfolio">Portfolio</a>
                    }
                </li>

                <li  onClick={()=>{setMenuOpen(false)}}>
                    {pathname !== AppRoutes.MAIN
                        ? <NavHashLink
                            to={`${AppRoutes.MAIN}#works`}>Projects</NavHashLink>
                        : <a href="#works">Skills</a>
                    }
                </li>

                <li  onClick={()=>{setMenuOpen(false)}}>
                    {pathname !== AppRoutes.MAIN
                        ? <NavHashLink
                            to={`${AppRoutes.MAIN}#testimonials`}>Testimonials</NavHashLink>
                        : <a href="#testimonials">Testimonials</a>
                    }
                </li>

                <li  onClick={()=>{setMenuOpen(false)}}>
                    {pathname !== AppRoutes.MAIN
                        ? <NavHashLink
                            to={`${AppRoutes.MAIN}#contact`}>Contact</NavHashLink>
                        : <a href="#contact">Contact</a>
                    }
                </li>


                {/*{ pathname === AppRoutes.MAIN &&*/}
                {/*    <>*/}
                {/*        <li  onClick={()=>{setMenuOpen(false)}}>*/}
                {/*            <a href="#portfolio">Portfolio</a>*/}
                {/*        </li>*/}
                {/*        <li  onClick={()=>{setMenuOpen(false)}}>*/}
                {/*            <a href="#works">Projects</a>*/}
                {/*        </li>*/}
                {/*        <li  onClick={()=>{setMenuOpen(false)}}>*/}
                {/*            <a href="#testimonials">Testimonials</a>*/}
                {/*        </li>*/}
                {/*        <li onClick={()=>{setMenuOpen(false)}}>*/}
                {/*            <a href="#contact">Contact</a>*/}
                {/*        </li>*/}
                {/*    </>*/}

            </ul>
        </div>
    );
};