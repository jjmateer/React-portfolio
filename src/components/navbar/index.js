import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <div id="sidenav">
                <div id="logo" />
                <div id="siteLinks">
                    <Link className="siteLink" to="/">Home</Link>
                    <Link className="siteLink" to="/">About</Link>
                    <Link className="siteLink" to="/">Projects</Link>
                    <Link className="siteLink" to="/">Contact</Link>
                </div>
                <div id="resourceLinks">
                    <Link className="resourceLink" to="/">Github</Link>
                    <Link className="resourceLink" to="/">Linkedin</Link>
                    <Link className="resourceLink" to="/">Resume</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;