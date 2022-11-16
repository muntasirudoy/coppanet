import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import { MenuItems } from "./helper";
import logo from "../assets/logo-01.svg";
import logo2 from "../assets/logo-white.svg";
import "./layout.css";
import { Link } from "react-router-dom";
const btnText = {
  name: "Call Now",
  padding: "10px 25px",
};

const Header = () => {
  const [navCol, setNavCol] = useState(true);

  useEffect(() => {
    handleCheck();
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [window.location.pathname]);

  const isSticky = (e) => {
    const header = document.querySelector(".headTop");
    const scrollTop = window.scrollY;

    if (scrollTop >= 250) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  };

  const handleCheck = () => {
    if (window.location.pathname == "/") {
      setNavCol(true);
    } else {
      setNavCol(false);
    }
  };

  console.log(navCol);
  return (
    <div className="headTop z-50 absolute w-full ">
      <Container>
        <header className="headers header-area style-4 style-5 z-50+">
          <div className="header-logo flex items-center h-full">
            <a href="index.html">
              <img
                alt="Coppanet"
                src={navCol ? logo : logo2}
                className="img-fluid"
              />
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
                <Link
                  className="active"
                  to="/"
                  onClick={handleCheck}
                  style={
                    navCol == true ? { color: "black" } : { color: "white" }
                  }
                >
                  Home
                </Link>
                <i className="bi bi-chevron-down dropdown-icon"></i>
              </li>
              <li className="menu-item-has-children">
                <a
                  href="/"
                  className="drop-down"
                  style={
                    navCol == true ? { color: "black" } : { color: "white" }
                  }
                  onClick={handleCheck}
                >
                  Company
                </a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <Link to="about" onClick={handleCheck}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="team" onClick={handleCheck}>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="faq" onClick={handleCheck}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="job-list" onClick={handleCheck}>
                      Job List
                    </Link>
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
                    <Link to="services">Services</Link>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link
                  to="projects"
                  onClick={handleCheck}
                  style={
                    navCol == true ? { color: "black" } : { color: "white" }
                  }
                >
                  Projects
                </Link>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <Link
                      to="projects"
                      onClick={handleCheck}
                      style={
                        navCol == true ? { color: "white" } : { color: "black" }
                      }
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="project-details"
                      onClick={handleCheck}
                      style={
                        navCol == true ? { color: "white" } : { color: "black" }
                      }
                    >
                      Projects Details
                    </Link>
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
                <Link
                  to="contact"
                  onClick={handleCheck}
                  style={
                    navCol == true ? { color: "black" } : { color: "white" }
                  }
                >
                  Contact Us
                </Link>
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
