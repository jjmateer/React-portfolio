import React from "react";
import "./style.css"

function CarouselItem(props) {
    return (
        <div id="project">
            <h2 className="project-name">{props.title}</h2>
            <div id="link-container">
                {props.codelink ? <a className="code-link" href={props.codelink}>Code</a> : <p className="code-linkNA">N/A</p>}
                {props.demolink ? <a className="demo-link" href={props.demolink}>Demo</a> : <p className="demo-linkNA">N/A</p>}
            </div>
            <div className="description">{props.description}</div>
            <div className="technology-used">Technology used: {props.technology}</div>
            <img className="project-image" src={props.image} alt={props.image}></img>
        </div>
    )
}

export default CarouselItem;