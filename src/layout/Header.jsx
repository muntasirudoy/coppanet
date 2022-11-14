import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import { MenuItems } from "./helper";
import logo from "../assets/logo-03.svg";
import "./layout.css";
const btnText = {
  name: "Call Now",
  padding: "10px 25px",
};
const Header = () => {
  return (
    <div className=" border">
      <Container>
        <header className="headers header-area style-4 style-5">
          <div className="header-logo">
            <a href="index.html">
              <img alt="Coppanet" src={logo} className="img-fluid" />
            </a>
          </div>
          <div className="main-nav">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              {/* <div className="mobile-logo-wrap ">
                <a href="index.html">
                  <img alt="image" src="assets/images/icons/footer5-logo.svg" />
                </a>
              </div> */}
              <div className="menu-close-btn">
                <i className="bi bi-x-lg text-white"></i>
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Home
                </a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Company
                </a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="job-list.html">Job List</a>
                  </li>
                  <li>
                    <a href="job-details.html">Career</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="service.html" className="drop-down">
                  Services
                </a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Projects
                </a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <a href="project.html">Projects</a>
                  </li>
                  <li>
                    <a href="project-details.html">Projects Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="blog-grid.html">Blog</a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="nav-right d-flex align-items-center gap-5">
            <div className="eg-btn header-btn">
              <a href="contact.html">LET'S TALK</a>
            </div>
            <div className="header-icons d-flex align-items-center">
              <div className="sidebar-btn">
                <i className="bi bi-list"></i>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Header;
