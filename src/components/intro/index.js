import React from "react";
import AbsoluteWrap from "../absolute-wrap";
import RandomText from "../text-animation/random-text";
import WaveText from "../text-animation/wave-text";
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
        ],
        skillsArr2: [
            { key: 9, skill: 'Heroku' },
            { key: 8, skill: 'Git/Github' },
            { key: 6, skill: 'MongoDB' },
            { key: 7, skill: 'MySQL' },
            { key: 11, skill: 'RESTful API' },
            { key: 12, skill: 'Redux' },
            { key: 15, skill: 'Axios' },
            { key: 16, skill: 'AJAX' }
        ]
    }
    render() {
        return (
            <AbsoluteWrap>
                <div id="intro">
                    <div id="tone1">
                        <h1 className="mainH" style={{ color: "white", paddingTop:30 }}>Hello, my name is John Mateer.</h1>
                        <div id="introp">I am a full-stack web developer from Roseville, CA, looking to expand my knowledge.</div>
                        <h1 id="tsheader" className="mainH">What I work with:</h1>
                    </div>
                    <ul className="tSkills">
                        <div>
                            {this.state.skillsArr.map(skill => (
                                <li key={skill.key} className="skill"><WaveText
                                    text={skill.skill}
                                />
                                </li>
                            ))}
                        </div>
                        <div>
                            {this.state.skillsArr2.map(skill => (
                                <li key={skill.key} className="skill"><WaveText
                                    text={skill.skill}
                                />
                                </li>
                            ))}
                        </div>
                    </ul>
                    <div id="introp" style={{background:"#2a6da6", marginTop:50}}>If you have any questions feel free to send a <Link id="highlightedWord" to="/contact">message</Link> or email me at jj.mateer@live.com. </div>
                </div>
            </AbsoluteWrap>


        )
    }
}