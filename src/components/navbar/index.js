import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import "./style.css";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            text: ''
        }
    }
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }
    closeMenu() {
        this.setState({ menuOpen: false })
    }
    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }
    render() {
        return (
            <div>
                <div id="sidenav">
                    <Link id="logo" to="/">jpm</Link>
                    <div id="siteLinks">
                        <Link className="fa fa-fw fa-user" to="/"></Link>
                        <Link className="fa fa-briefcase" to="/projects" ></Link>
                        <Link className="fa fa-fw fa-envelope" to="/contact" ></Link >
                    </div >

                    <div id="resourceLinks">
                        <a className="fa fa-github" href="https://github.com/jjmateer"> </a>
                        <a className="fa fa-linkedin" href="https://linkedin.com/in/john-mateer"> </a>
                        <a className="fa fa-file-text" href="https://github.com/jjmateer/React-portfolio/files/3903850/John_Mateer_Resume.pdf"> </a>
                    </div>
                </div >
                <div id="topnav">
                    <Link id="logo" to="/">jpm</Link>
                    <div id="mobile-menu-wrap">
                    <Menu noOverlay isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)} id="hamburger">
                        <Link onClick={() => this.toggleMenu()} to="/">About Me</Link>
                        <Link onClick={() => this.toggleMenu()} to="/projects" >Projects</Link>
                        <Link onClick={() => this.toggleMenu()} to="/contact" >Contact</Link>
                        <a onClick={() => this.toggleMenu()} href="https://github.com/jjmateer">GitHub</a>
                        <a onClick={() => this.toggleMenu()} href="https://linkedin.com/in/john-mateer">LinkedIn</a>
                        <a onClick={() => this.toggleMenu()} href="https://github.com/jjmateer/React-portfolio/files/3903850/John_Mateer_Resume.pdf">Resume</a>
                    </Menu>
                    </div>
                </div >
            </div>
        )
    }
}

export default Navbar;