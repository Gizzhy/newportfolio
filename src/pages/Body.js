import { useEffect } from "react"
import "../pages/body.css"
import  port02 from "../assets/images/port02.png"
import { Link } from "react-router-dom";
import {Typewriter} from 'react-simple-typewriter'


function Body() {
        //Slider Animation for Homepage
        useEffect(() =>{
        //     Slide()
        })
    return (
        <>
        <section id="hero-section" data-aos="zoom-in">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <p className="h-0">HI, MY NAME IS</p><br></br>
                        <h3 className="h-1">
                         GIDEON ABAYOMI{' '}<br></br>
                                <span>
                           <Typewriter
                           words={['A DIGITAL ENTHUSIAST', 'A FRONTEND WEB DEVELOPER']}
                           loop={0}
                           cursor
                           cursorStyle='|'
                                             typeSpeed={60}
                           deleteSpeed={50}
                           delaySpeed={1000}/>
                          </span>
                        </h3>
                            <Link to="/continue"><button className="cta">Hire Me !</button></Link>
                        </div>
                        <div className="col-lg-6">
                            <img className="port01" src={port02} alt="" />
                        </div>
                    </div>
                </div>
        </section>
        <div className="container-fluid lineplace">
            <div className="row">
                <div className="col-md-12">
                    <hr className="line"/>
                </div>
            </div>
        </div>
        <section id="about">
            <div className="container-fluid about-div">
                <div className="row">
                    <div className="col-md-12">
                        <p className="aboutme">ABOUT ME</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid about-div">
            <div className="row">
                <div className="col-md-12">
                    <p className="aboutbody">
                        Hello there ! My name is Adisa and I am a Digital Enthusiast and passionate FrontEnd Web developer.
                        <br></br> My interest in web development started back in 2020 when I wondered how the internet worked and decided to take a leap of faith.
                        <br></br> My main aim is building accessible, blazing fast & mobile responsive websites for a variety of client.
                    </p>
                </div>
            </div>
            </div>
            <div className="container-fluid about-div">
                <div className="row">
                    <div className="col-md-12">
                        <p className="aboutme">MY SKILLS</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <section>
            <div className="row">
             <div className="col-lg-12">
             <hr className="line" />
        </div>
            </div>
        </section> */}

        </>
 )
}
export default Body