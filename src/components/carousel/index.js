import React, { Component } from "react";
import Slider from "react-slick";
import projects from "./projects.json"
import CarouselItem from "./carouselItem";
import AbsoluteWrap from "../absolute-wrap";
import "./style.css";

export default class Carousel extends Component {
    state = {
        projects
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1441,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <AbsoluteWrap>
                <h1 className="mainH"> Projects</h1>
                <Slider {...settings}>
                    {this.state.projects.map(project => (
                        <CarouselItem
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            codelink={project.codelink}
                            demolink={project.demolink}
                            description={project.description}
                            image={project.image}
                        />
                    ))}
                </Slider>
            </AbsoluteWrap>
        );
    }
}