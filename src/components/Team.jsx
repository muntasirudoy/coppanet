import React from "react";
import img1 from "../assets/images/bg/section-bg1.png";
import img2 from "../assets/images/bg/team31.png";
import img3 from "../assets/images/bg/team32.png";
import img4 from "../assets/images/bg/team33.png";
import img5 from "../assets/images/bg/team34.png";
import img6 from "../assets/images/bg/team35.png";
import Container from "./Container";
const Team = () => {
  return (
    <>
      <div className="team-section pt-120 pb-120">
        <img src={img1} alt="image" className="img-fluid water-mark1" />
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-8 flex justify-center">
              <div className="section-title primary5 w-[650px]">
                <span>-Our Team-</span>
                <h3>Our Creative Minds</h3>
                <p className="para ">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row flex justify-between gap-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="team-image">
                  <img src={img2} alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus"></i>
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Esther Howard</h4>
                  <p className="designation">CEO/Founder</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="team-image">
                  <img src={img3} alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus"></i>
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Cameron Williamson</h4>
                  <p className="designation">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <div className="team-image">
                  <img src={img3} alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus"></i>
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Brooklyn Simmons Sr</h4>
                  <p className="designation">Ui/Ux Designer</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div
                className="single-team1 hover-border1 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.8s"
              >
                <div className="team-image">
                  <img src={img4} alt="image" />
                  <div className="social-area gap-3">
                    <div className="social-plus">
                      <i className="bx bx-plus"></i>
                    </div>
                    <ul className="social-links d-flex justify-content-center align-items-center flex-column gap-3">
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="name">Lincoln Anthony</h4>
                  <p className="designation">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Team;
