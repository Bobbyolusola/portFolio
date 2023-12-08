import "./Topbar.scss";
import { Person, Mail, LinkedIn } from "@material-ui/icons";
import { AppRoutes } from "../../common/routes/AppRoutes";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const { pathname } = useLocation();

  return (
    <div className={"top-bar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/*<a href='#intro' className="logo">PF</a>*/}

          <ul>
            <li
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {pathname !== AppRoutes.MAIN ? (
                <NavHashLink to={`${AppRoutes.MAIN}#home`} className="logo">
                  PF
                </NavHashLink>
              ) : (
                <a href="#intro" className="logo">
                  PF
                </a>
              )}
            </li>
          </ul>

          <div className="itemContainer">
            <Person />
            <span>+1 604 753 7715</span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>contact@olusolaweb.com</span>
          </div>
          <div className="itemContainer">
            <LinkedIn />
            <span>
              <a href="https://www.linkedin.com/in/olusolaweb" target="_blank">
                {" "}
                linkedin.com/in/olusolaweb
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
