import React from "react";
import "./style.css"

function CarouselItem(props) {
    return (
        <div id="project">
            <h2 className="project-name">{props.title}</h2>
            <div className="description">{props.description}</div>
            <div id="link-container">
                {props.codelink ? <a className="code-link" href={props.codelink}>Code</a> : <p className="code-link">No code available.</p>}
                {props.demolink ? <a className="demo-link" href={props.demolink}>Demo</a> : <p className="demo-link">No demo available.</p>}
            </div>
            {/* <div className="description-mobile">{props.description}</div> */}
            <img className="project-image" src={props.image} alt={props.image}></img>
        </div>
    )
}

export default CarouselItem;