import { useEffect } from "react";
import "../pages/body.css";
import port02 from "../assets/images/port02.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import github from "../assets/images/github.png";
import wordpress from "../assets/images/wordpress.png";
import structure from "../assets/images/structure.png";
import adobe from "../assets/images/adobe.png";
import html from "../assets/images/html.png";
import css3 from "../assets/images/css3.png";
import python from "../assets/images/python.png";
import travel from "../assets/images/travel.png";
import simmie from "../assets/images/simmie.png";
import techmaven from "../assets/images/techmaven.png";
// import  codetyping from "../assets/images/codetyping.gif"
// import  mobileapps from "../assets/images/mobileapps.gif"
// import  port01 from "../assets/images/port01.png"
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Body() {
  //Slider Animation for Homepage
  useEffect(() => {
    //     Slide()
  });
  return (
    <>
      <section id="hero-section" data-aos="zoom-in">
        <div className="container firstpart">
          <div className="row">
            <div className="col-lg-6">
              <p className="h-0">HI, MY NAME IS</p>
              <br></br>
              <h3 className="h-1">
                GIDEON ABAYOMI <br></br>
                <span>
                  <Typewriter
                    words={["A DIGITAL ENTHUSIAST", "A FRONTEND WEB DEVELOPER"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h3>
              <a href="https://wa.me/+2347010190783" target="__blank">
                <button className="cta">Hire Me !</button>
              </a>
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
            <hr className="line" />
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
                Hello there ! My name is Gideon and I am a Digital Enthusiast
                and passionate FrontEnd Web developer.
                <br></br> My interest in web development started back in 2020
                when I wondered how the internet worked and decided to take a
                leap of faith.
                <br></br> My main aim is building accessible, blazing fast &
                mobile responsive websites for a variety of client.
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
          <div className="container skillset-details">
            <span className="html">
              HTML
              <img className="img-fluid htmlimg" src={html} alt="" />
            </span>
            <span className="html">
              CSS
              <img className="img-fluid htmlimg" src={css3} alt="" />
            </span>
            <span className="html">
              REACTjs
              <img className="img-fluid htmlimg" src={structure} alt="" />
            </span>
            <span className="html">
              PYTHON
              <img className="img-fluid htmlimg" src={python} alt="" />
            </span>
            <span className="html">
              WORDPRESS
              <img className="img-fluid htmlimg" src={wordpress} alt="" />
            </span>
            <span className="html">
              ADOBE ILLUSTRATOR
              <img className="img-fluid htmlimg" src={adobe} alt="" />
            </span>
          </div>
        </div>
      </section>
      {/* <div className="container-fluid lineplace">
        <div className="row">
          <div className="col-md-12">
            <hr className="line" />
          </div>
        </div>
      </div> */}
      {/* <section id="services">
        <div className="container-fluid about-div">
          <div className="row">
            <div className="col-md-12">
              <p className="aboutme">SERVICES I OFFER</p>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container-fluid lineplace">
        <div className="row">
          <div className="col-md-12">
            <hr className="line" />
          </div>
        </div>
      </div>
      <section id="portfolio">
        <div className="container about-div">
          <div className="row">
            <div className="col-md-12">
              <p className="aboutme">SELECTED WORKS</p>
            </div>
            <div className="container port-details">
              <span className="html">
                <a href="https://techmavendev.netlify.app/"> Tech Maven</a>
                <img className="img-fluid portimg" src={techmaven} alt="" />
              </span>
              <span className="html">
                <a href="https://vendlify.netlify.app/"> Simmie Shades</a>
                <img className="img-fluid portimg" src={simmie} alt="" />
              </span>
              <span className="html">
                <a href="https://travel-techmaven.netlify.app/">
                  Travel Continental
                </a>
                <img className="img-fluid portimg" src={travel} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid lineplace">
        <div className="row">
          <div className="col-md-12">
            <hr className="line" />
          </div>
        </div>
      </div>

      <section id="contactme">
        <div className="container-fluid about-div">
          <div className="row">
            <div className="col-md-12">
              <p className="developer">NEED A DEVELOPER ?</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="developer1">LET'S WORK TOGETHER</p>
            </div>
          </div>
          <div className="row">
            <div className="col-mg-12 contactpart">
              <Link to="/continue">
                <button className="developer2" lazy-loading>
                  SAY HELLO
                </button>
              </Link>
            </div>
          </div>
          <br /> <br /> <br />
          <div className="row">
            <div className="col-md-6">
              <a href="tel:+2347010190783">
                <p className="contactt">
                  <i class="fa-solid fa-phone"></i>+2347010190783
                </p>
              </a>
            </div>
            <div className="col-md-6">
              <a href="mailto:gideonakinlotan16@gmail.com">
                <p className="contactt">
                  <i class="fa-solid fa-envelope"></i>gideonakinlotan16@gmai.com
                </p>
              </a>
            </div>
            <div className="footer-icons">
              <a
                href="https://twitter.com/Gizzhy_A"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" className="img-footer" />
              </a>
              <a
                href="https://instagram.com/gideon_akinz?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="github" className="img-footer" />
              </a>
              <a
                href="https://github.com/Gizzhy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="email" className="img-footer" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Body;
