import React from "react";
import "./style.css"

function CarouselItem(props) {
    return (
        <div id="project">
            <h2 className="project-name">{props.title}</h2>
            <div id="link-container">
                <a className="code-link" href={props.codelink}>Code</a>
                <a className="demo-link" href={props.demolink}>Demo</a>
            </div>
            <div className="description">{props.description}</div>
            <img className="project-image" src={props.image} alt={props.image}></img>
        </div>
    )
}

export default CarouselItem;