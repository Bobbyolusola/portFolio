import React, {useState} from "react";
import "./App.scss"


import Topbar from "./components/topbar/Topbar";
import {Contact} from "./components/contact/Contact";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Works} from "./components/works/Works";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Intro} from "./components/intro/Intro";
import {Menu} from "./components/menu/Menu";
import Header from "./components/header/Header";



function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (

    <div className="App">
        <Header />

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
