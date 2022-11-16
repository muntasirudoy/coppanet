import React from "react";
import Container from "./Container";
import img1 from "../assets/images/icons/job-icon1.svg";
import img2 from "../assets/images/icons/location-prm2.svg";
import img3 from "../assets/images/icons/time-prm2.svg";
import img4 from "../assets/images/icons/job-icon2.svg";
import img5 from "../assets/images/icons/location-prm2.svg";
import img6 from "../assets/images/icons/time-prm2.svg";
import img7 from "../assets/images/icons/job-icon3.svg";
import img8 from "../assets/images/icons/location-prm2.svg";
import img9 from "../assets/images/icons/time-prm2.svg";
const Job = () => {
  return (
    <>
      <div className="job-section pb-20">
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title2 primary5">
                <span>- Our Jobs-</span>
                <div>
                  <h3>Our Recent Job Post</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex justify-between gap-4">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="jobpost-item hover-border2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="job-header">
                  <div className="icon">
                    <img src={img1} alt="image" />
                  </div>
                  <h4 className="title">
                    <a href="job-details.html">Full-Stack Developer Wanted</a>
                  </h4>
                </div>
                <div className="job-body">
                  <p className="para">
                    We’re hiring Want craft the best Full-Stack Developer job
                    vacancy or hiring post? Get inspired by these examples.
                  </p>
                  <ul className="job-meta">
                    <li className=" flex">
                      <img src={img2} alt="image" />
                      London, UK
                    </li>
                    <li className=" flex">
                      <img src={img3} alt="image" />
                      Full Time
                    </li>
                  </ul>
                </div>
                <div className="job-footer">
                  <div className="eg-btn btn--primary2-light btn--sm">
                    1 Day Ago
                  </div>
                  <a
                    href="job-details.html"
                    className="eg-btn btn--primary2 btn--sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="jobpost-item hover-border2 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="job-header">
                  <div className="icon">
                    <img src={img4} alt="image" />
                  </div>
                  <h4 className="title">
                    <a href="job-details.html">Frontend Developer</a>
                  </h4>
                </div>
                <div className="job-body">
                  <p className="para">
                    We’re hiring Want craft the best social media job vacancy or
                    hiring post? Get inspired by these examples.
                  </p>
                  <ul className="job-meta">
                    <li className=" flex">
                      <img src={img5} alt="image" />
                      London, UK
                    </li>
                    <li className=" flex">
                      <img src={img6} alt="image" />
                      Full Time
                    </li>
                  </ul>
                </div>
                <div className="job-footer">
                  <div className="eg-btn btn--primary2-light btn--sm">
                    2 Days Ago
                  </div>
                  <a
                    href="job-details.html"
                    className="eg-btn btn--primary2 btn--sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div
                className="jobpost-item hover-border5 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="job-header">
                  <div className="icon">
                    <img src={img7} alt="image" />
                  </div>
                  <h4 className="title">
                    <a href="job-details.html">WordPress Developer</a>
                  </h4>
                </div>
                <div className="job-body">
                  <p className="para">
                    We’re hiring Want craft the best social media job vacancy or
                    hiring post? Get inspired by these examples.
                  </p>
                  <ul className="job-meta">
                    <li className=" flex">
                      <img src={img8} alt="image" />
                      London, UK
                    </li>
                    <li className=" flex">
                      <img src={img9} alt="image" />
                      Full Time
                    </li>
                  </ul>
                </div>
                <div className="job-footer">
                  <div className="eg-btn btn--primary2-light btn--sm">
                    3 Days Ago
                  </div>
                  <a
                    href="job-details.html"
                    className="eg-btn btn--primary2 btn--sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Job;
