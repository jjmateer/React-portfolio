import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
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
        )
    }
}

export default Navbar;