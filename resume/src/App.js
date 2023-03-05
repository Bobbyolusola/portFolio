import React, {useState} from "react";
import "./App.scss"


import Topbar from "./components/topbar/Topbar";
import {Contact} from "./components/contact/Contact";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Works} from "./components/works/Works";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Intro} from "./components/intro/Intro";
import {Menu} from "./components/menu/Menu";



function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (

    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="sections">
            <Intro />
            <Portfolio />
            <Works />
            <Testimonials />
            <Contact />
        </div>
    </div>
  );
}

export default App;
