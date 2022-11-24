import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import List from "../components/List";
import { MenuItems } from "./helper";
import logo from "../assets/logo-01.svg";
import logo2 from "../assets/logo-white.svg";
import "./layout.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  const [sticky, setSticky] = useState(false);

  
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".headTop");
    const scrollTop = window.scrollY;

    if (scrollTop >= 250) {
      header.classList.add("is-sticky");
      setSticky(true);
    } else {
      header.classList.remove("is-sticky");
      setSticky(false);
    }
  };

  console.log(location);

  return (
    <div className="headTop z-50 absolute top-0 w-full">
      <div className=" px-[100px]">
        <header className="headers header-area style-4 style-5 z-50+">
          <div className="header-logo flex items-center h-full">
            <a href="/">
              <img alt="Coppanet" src={ location == "/" ? logo && sticky ? logo : logo :logo } className="img-fluid" />
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
                <Link className="active" to="/">
                  Home
                </Link>
                <i className="bi bi-chevron-down dropdown-icon"></i>
              </li>
              <li className="menu-item-has-children">
                <a className="drop-down">
                  Company
                </a>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                <ul className="sub-menu">
                  <li>
                    <Link to="about">About</Link>
                  </li>
                  <li>
                    <Link to="team">Team</Link>
                  </li>
                  <li>
                    <Link to="faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="job-list">Job List</Link>
                  </li>
                </ul>
              </li>
              
              <li className="menu-item-has-children">
                <Link to="projects">Projects</Link>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                
              </li>
              <li className="menu-item-has-children">
                <Link to="blog">Blog</Link>
                <i className="bi bi-chevron-down dropdown-icon"></i>
                
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right d-flex align-items-center gap-5">
            <div className="">
              <button className="button-87"> LET'S TALK</button>
            </div>
            <div className="header-icons d-flex align-items-center">
              <div className="sidebar-btn">
                <i className="bi bi-list"></i>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};



export default Header;
