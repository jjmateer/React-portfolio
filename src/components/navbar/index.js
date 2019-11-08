import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "./style.css";

class Navbar extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (<div>
            <div id="sidenav">
                <Link id="logo" to="/">jpm</Link>
                <div id="siteLinks">
                    <Link id="link1" className="fa fa-fw fa-home" to="/"></Link>
                    <Link id="link2" className="fa fa-fw fa-user" to="/about"></Link>
                    <Link id="link3" className="fa fa-briefcase" to="/projects" ></Link>
                    <Link id="link4" className="fa fa-fw fa-envelope" to="/contact" ></Link >
                </div >

                <div id="resourceLinks">
                    <a id="link5" className="fa fa-github" href="https://github.com/jjmateer"> </a>
                    <a id="link6" className="fa fa-linkedin" href="https://linkedin.com/in/john-mateer"> </a>
                    <Link id="link7" className="fa fa-file-text" to="/"> </Link>
                </div>
            </div >
            <div id="topnav">
                <Link id="logo" to="/">jpm</Link>
                <Menu noOverlay id="hamburger">
                    <Link id="link1top" className="fa fa-fw fa-home" to="/"></Link>
                    <Link id="link2top" className="fa fa-fw fa-user" to="/about"></Link>
                    <Link id="link3top" className="fa fa-briefcase" to="/projects" ></Link>
                    <Link id="link4top" className="fa fa-fw fa-envelope" to="/contact" ></Link >
                    <a id="link5top" className="fa fa-github" href="https://github.com/jjmateer"> </a>
                    <a id="link6top" className="fa fa-linkedin" href="https://linkedin.com/in/john-mateer"> </a>
                    <Link id="link7top" className="fa fa-file-text" to="/"> </Link>
                </Menu>
            </div >
        </div>
        )
    }
}

export default Navbar;