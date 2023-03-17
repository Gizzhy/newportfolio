import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="container-fluid">
               <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
        <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt="" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link about" aria-current="page" href="hhtps://google.com">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link service" aria-current="page" href="hhtps://google.com">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link portfolio" aria-current="page" href="hhtps://google.com">Portfolio</a>
              </li>

              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
            <li className="d-flex">
                                    <Link to="/auth/sign-up" className="nav-link nav-cta"><button className="contact-me">Contact Me</button></Link>
                                </li>
            
            {/* <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
</div>
  )
}
