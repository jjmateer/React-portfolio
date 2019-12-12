import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./menu.css";
const styles = {
  pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen
        ? ""
        : right
        ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
        : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      MsTransform: isOpen
        ? ""
        : right
        ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
        : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      OTransform: isOpen
        ? ""
        : right
        ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
        : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      WebkitTransform: isOpen
        ? ""
        : right
        ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
        : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      transform: isOpen
        ? ""
        : right
        ? "translate3d(-100px, 0, -600px) rotateY(20deg)"
        : "translate3d(100px, 0, -600px) rotateY(-20deg)",
      transformStyle: "preserve-3d",
      transition: "all 0.5s",
      overflow: isOpen ? "" : "hidden"
    };
  },

  outerContainer(isOpen) {
    return {
      perspective: "1500px",
      overflow: isOpen ? "" : "hidden"
    };
  }
};
export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      text: ""
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
      <Menu
        right
        style={styles}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          id="about"
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/"
        >
          About
        </Link>
        <Link
          className="menu-item"
          onClick={() => this.closeMenu()}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          id="contact"
          className="menu-item"
          onClick={() => this.closeMenu()}
          to="/contact"
        >
          Contact
        </Link>
        <a
          className="menu-item"
          onClick={() => this.closeMenu()}
          href="https://github.com/jjmateer"
        >
          GitHub
        </a>
        <a
          className="menu-item"
          onClick={() => this.closeMenu()}
          href="https://linkedin.com/in/john-mateer"
        >
          LinkedIn
        </a>
        <a
          className="menu-item"
          onClick={() => this.closeMenu()}
          href="https://github.com/jjmateer/React-portfolio-2/files/3951433/John_Mateer_Resume.pdf"
        >
          Resume
        </a>
      </Menu>
    );
  }
}
