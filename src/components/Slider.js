import React from "react";
import Marquee from "react-fast-marquee";
import javaimg from "../assets/img/javaIcon.png";
import mongoimg from "../assets/img/mongodbIcon.png";
import nodeimg from "../assets/img/nodejsIcon.png";
import htmlimg from "../assets/img/HTMLIcon.png";
import cssimg from "../assets/img/cssIcon.png";
import javascriptimg from "../assets/img/javascriptIcon.png";
import pythonimg from "../assets/img/python.png";
import reactimg from "../assets/img/react.png";
import symfonyimg from "../assets/img/symfony.png";
import springimg from "../assets/img/spring.png";
import sqlimg from "../assets/img/sql.png";
import mlimg from "../assets/img/machine.png";
import linuximg from "../assets/img/LinuxIcon.png";
import bootstrapimg from "../assets/img/bootstrapIcon.png";

import 'react-multi-carousel/lib/styles.css';
import './Slider.css'; // Import the CSS file

export const Slider = () => {
    return (
        <div className="App" id="skills" >
            <div className="text-center" >
                <h1>Skills</h1>
            </div>
            <div className="carousel-container">
                <Marquee direction="right" speed={100} delay={5}>
                    <div className="image_wrapper">
                        <img src={javaimg} alt="Java" />
                    </div>
                    <div className="image_wrapper">
                        <img src={mongoimg} alt="MongoDB" />
                    </div>
                    <div className="image_wrapper">
                        <img src={nodeimg} alt="Node.js" />
                    </div>
                    <div className="image_wrapper">
                        <img src={htmlimg} alt="HTML" />
                    </div>
                    <div className="image_wrapper">
                        <img src={cssimg} alt="CSS" />
                    </div>
                    <div className="image_wrapper">
                        <img src={javascriptimg} alt="JavaScript" />
                    </div>
                    <div className="image_wrapper">
                        <img src={pythonimg} alt="Python" />
                    </div>
                    <div className="image_wrapper">
                        <img src={reactimg} alt="react" />
                    </div>
                    <div className="image_wrapper">
                        <img src={symfonyimg} alt="symfony" />
                    </div>
                    <div className="image_wrapper">
                        <img src={springimg} alt="springboot" />
                    </div>
                    <div className="image_wrapper">
                        <img src={sqlimg} alt="sql" />
                    </div>
                    <div className="image_wrapper">
                        <img src={mlimg} alt="ml" />
                    </div>
                    <div className="image_wrapper">
                        <img src={bootstrapimg} alt="bootstrap" />
                    </div>
                    <div className="image_wrapper">
                        <img src={linuximg} alt="linux" />
                    </div>
                </Marquee>
            </div>
            <div className="carousel-container reverse-carousel">
                <Marquee direction="left" speed={100} delay={5}>
                    <div className="image_wrapper">
                        <img src={javaimg} alt="Java" />
                    </div>
                    <div className="image_wrapper">
                        <img src={mongoimg} alt="MongoDB" />
                    </div>
                    <div className="image_wrapper">
                        <img src={nodeimg} alt="Node.js" />
                    </div>
                    <div className="image_wrapper">
                        <img src={htmlimg} alt="HTML" />
                    </div>
                    <div className="image_wrapper">
                        <img src={cssimg} alt="CSS" />
                    </div>
                    <div className="image_wrapper">
                        <img src={javascriptimg} alt="JavaScript" />
                    </div>
                    <div className="image_wrapper">
                        <img src={pythonimg} alt="Python" />
                    </div>
                    <div className="image_wrapper">
                        <img src={reactimg} alt="react" />
                    </div>
                    <div className="image_wrapper">
                        <img src={symfonyimg} alt="symfony" />
                    </div>
                    <div className="image_wrapper">
                        <img src={springimg} alt="springboot" />
                    </div>
                    <div className="image_wrapper">
                        <img src={sqlimg} alt="sql" />
                    </div>
                    <div className="image_wrapper">
                        <img src={mlimg} alt="ml" />
                    </div>
                    <div className="image_wrapper">
                        <img src={bootstrapimg} alt="bootstrap" />
                    </div>
                    <div className="image_wrapper">
                        <img src={linuximg} alt="linux" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
}
