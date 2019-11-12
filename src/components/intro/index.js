import React from "react";
import "./style.css";

function Intro() {
    return (
        <div id="intro">
            <h1 className="mainH">About Me</h1>
            <p>I am a fast learning web developer based in Sacramento, CA. Enjoy using new technology, cooking, 
                and tinkering with computers/cars. Recently completed the UC Davis full-stack coding bootcamp
                and look forward to starting a new career in web developement.</p>
                    <h1 className="mainH">Technical skills</h1>
                    <ul className="tSkills">
                        <div>
                        <li className="skill">HTML5</li>
                        <li className="skill">CSS3</li>
                        <li className="skill">Javascript</li>
                        <li className="skill">Node.js</li>
                        <li className="skill">React.js</li>
                        <li className="skill">MongoDB</li>
                        <li className="skill">MySQL</li>
                        </div>
                        <div>
                        <li className="skill">Git/Github</li>
                        <li className="skill">Heroku</li>
                        <li className="skill">Express</li>
                        <li className="skill">RESTful API</li>
                        <li className="skill">Bootstrap</li>
                        <li className="skill">jQuery</li>
                        <li className="skill">Axios</li>
                        <li className="skill">AJAX</li>
                        </div>
                    </ul>
        </div>


    )
}

export default Intro;