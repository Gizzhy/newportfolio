import { useEffect } from "react"
import "../pages/body.css"
import  port02 from "../assets/images/port02.png"
import  codetyping from "../assets/images/codetyping.gif"
import  mobileapps from "../assets/images/mobileapps.gif"
// import  port01 from "../assets/images/port01.png"
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
                <div className="container firstpart">
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
                            <img className="img-fluid port01" src={port02} alt="" />
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
            {/* <div className="container-fluid about-div">
             <div className="row">
                    <div className="col-md-2"><p className="htmlb">HTML</p></div>
                    <div className="skillthings">
                    <div className="col-md-10 ">
                     <div class="skill html">80%</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid about-div">
             <div className="row">
                    <div className="col-md-2"><p className="htmlb">CSS</p></div>
                    <div className="skillthings">
                    <div className="col-md-10 ">
                     <div class="skill html">80%</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid about-div">
             <div className="row">
                    <div className="col-md-2"><p className="htmlb">REACTjs</p></div>
                    <div className="skillthings">
                    <div className="col-md-10 ">
                     <div class="skill html">80%</div>
                    </div>
                    </div>
                </div>
            </div> */}
        </section>
        <div className="container-fluid lineplace">
            <div className="row">
                <div className="col-md-12">
                    <hr className="line"/>
                </div>
            </div>
        </div>
        <section id="services">
        <div className="container-fluid about-div">
                <div className="row">
                    <div className="col-md-12">
                        <p className="aboutme">SERVICES I OFFER</p>
                    </div>
                </div>
            </div>
            {/* <div className="row" style={{textAlign:"center", color:"#fff"}}>
                <div className="col-lg-12">
                    <span className="number">1</span>  <span>Responsive Websites</span>
                </div>
            </div>
            <br/> <br/> <br/>
            <div className="row" style={{textAlign:"center", color:"#fff"}}>
                <div className="col-lg-12">
                    <span className="number">2</span>  <span>Application Development</span>
                </div>
            </div>
            <br/> <br/> <br/>
            <div className="row" style={{textAlign:"center", color:"#fff"}}>
                <div className="col-lg-12">
                    <span className="number">1</span>  <span>Responsive Websites</span>
                </div>
            </div>
            <br/> <br/> <br/> */}
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <p className="website">Responsive Websites</p>
                    </div>
                <div className="col-md-6">
                            <img className="img-fluid websiteimg" src={mobileapps} alt="" />
                        </div>
                </div>
            </div>
            <div className="container-fluid lineplace">
              <div className="row">
                 <div className="col-md-12">
                    <hr className="line1"/>
                 </div>
              </div>
           </div>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <p className="website">Responsive Websites</p>
                    </div>
                <div className="col-md-6">
                            <img className="img-fluid websiteimg" src={codetyping} alt="" />
                        </div>
                </div>
            </div>

            <div className="container-fluid lineplace">
            <div className="row">
                <div className="col-md-12">
                    <hr className="line1"/>
                </div>
            </div>
        </div>

            <div className="container">
                <div className="row">
                   <div className="col-lg-6">
                        <p className="website">BackEnd Development</p>
                    </div>
                <div className="col-lg-6">
                            <img className="img-fluid websiteimg" src={codetyping} alt="" />
                        </div>
                </div>
            </div>
        </section>

        </>
 )
}
export default Body