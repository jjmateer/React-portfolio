import React from "react";
import AbsoluteWrap from "../absolute-wrap";
import AnimatedText from "../text-animation";
import { Link } from "react-router-dom";
import "./style.css";

export default class Intro extends React.Component {
    state = {
        skillsArr: [
            { key: 1, skill: 'HTML5' },
            { key: 2, skill: 'CSS3' },
            { key: 3, skill: 'Javascript' },
            { key: 4, skill: 'Node.js' },
            { key: 5, skill: 'React.js' },
            { key: 6, skill: 'MongoDB' },
            { key: 7, skill: 'MySQL' },
            { key: 8, skill: 'Git/Github' },
        ],
        skillsArr2: [
            { key: 9, skill: 'Heroku' },
            { key: 10, skill: 'Express' },
            { key: 11, skill: 'RESTful API' },
            { key: 12, skill: 'MVC' },
            { key: 13, skill: 'Bootstrap' },
            { key: 14, skill: 'jQuery' },
            { key: 15, skill: 'Axios' },
            { key: 16, skill: 'AJAX' }
        ]
    }
    render() {
        return (
            <AbsoluteWrap>
                <div id="intro">
                    <h1 className="mainH">Hello, my name is John Mateer.</h1>
                    <div id="#introp">I am a fast-learning full-stack web developer looking to move up the tech industry.
                    <br /> Feel free to check out some of my <Link to="/projects">projects</Link>
                        <br />contact via <Link to="/projects">phone</Link> or <Link to="/contact">email</Link>.</div>
                    <h1 id="tsheader" className="mainH"><AnimatedText text={"Technical Skills"} /></h1>
                    <ul className="tSkills">
                        <div>
                            {this.state.skillsArr.map(skill => (
                                <li key={skill.key} className="skill"><AnimatedText
                                    text={skill.skill}
                                />
                                </li>
                            ))}
                        </div>
                        <div>
                            {this.state.skillsArr2.map(skill => (
                                <li key={skill.key} className="skill"><AnimatedText
                                    text={skill.skill}
                                />
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </AbsoluteWrap>


        )
    }
}