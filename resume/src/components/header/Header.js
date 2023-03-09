import React, {useState} from "react";
import Topbar from "../topbar/Topbar";
import {Menu} from "../menu/Menu";

const Header =() => {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
)
}

export default Header;