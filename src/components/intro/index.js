import React from "react";
import AbsoluteWrap from "../absolute-wrap";
import RandomText from "../text-animation/random-text";
import { Link } from "react-router-dom";
import "./style.css";

export default class Intro extends React.Component {
    state = {
        skillsArr: [
            { key: 1, skill: 'HTML5' },
            { key: 2, skill: 'CSS3' },
            { key: 13, skill: 'Bootstrap' },
            { key: 3, skill: 'Javascript' },
            { key: 4, skill: 'Node.js' },
            { key: 5, skill: 'React.js' },
            { key: 10, skill: 'Express.js' },
            { key: 14, skill: 'jQuery' },
            { key: 9, skill: 'Heroku' },
            { key: 8, skill: 'Git/Github' },
            { key: 6, skill: 'MongoDB' },
            { key: 7, skill: 'MySQL' },
            { key: 12, skill: 'Redux' },
            { key: 15, skill: 'Axios' },
            { key: 16, skill: 'AJAX' }
        ]
    }
    render() {
        return (
            <AbsoluteWrap>
                <div className="intro-container">
                    <h1 className="intro-header">Hello, my name is John Mateer</h1>
                    <p className="introp">Web developer specializing in the MERN stack. Graduated from High School and recently earned a certificate in full-stack web development at the University of California, Davis. I am an excellent problem solver and enjoy working in teams on ambitious projects. Acquired organizational and interpersonal skills in a fast-paced environment as a cook at a leading restaurant. Excited to use my skills as a part of a quality-driven team to create efficient user experiences.
                    <br /><br />Please check out some of my <Link to="/projects" className="highlightedWord">projects</Link> and feel free to send a <Link to="/contact" className="highlightedWord">message</Link> or email me at jj.mateer@live.com. </p>
                    <h1 className="intro-header">What I work with:</h1>
                    <div className="tSkills">
                        {this.state.skillsArr.map(skill => (
                            <div key={skill.key} className="skill"><RandomText
                                text={skill.skill}
                            />
                            </div>
                        ))}
                    </div>
                </div>
            </AbsoluteWrap>


        )
    }
}