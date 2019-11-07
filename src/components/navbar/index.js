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
                    <Link id="link2" className="fa fa-fw fa-user" to="/"></Link>
                    <Link id="link3" className="fa fa-briefcase" to="/" ></Link>
                    <Link id="link4" className="fa fa-fw fa-envelope" to="/" ></Link >
                </div >

                <div id="resourceLinks">
                    <Link id="link5" className="fa fa-github" to="/"></Link>
                    <Link id="link6" className="fa fa-linkedin" to="/"></Link>
                    <Link id="link7" className="fa fa-file-text" to="/"></Link>
                </div>
            </div >
        )
    }
}

export default Navbar;