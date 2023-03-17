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
                           loop={10}
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

        </>
 )
}
export default Body