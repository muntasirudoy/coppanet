import React from "react";
import MiniBanner from "../../components/MiniBanner";
import img1 from "../../assets/images/bg/proj-details.png";
import img2 from "../../assets/images/icons/client-icon.svg";
import img3 from "../../assets/images/icons/category-icon.svg";
import img4 from "../../assets/images/icons/calendar2.svg";
import img5 from "../../assets/images/bg/project-d1.png";
import img6 from "../../assets/images/bg/project-d2.png";
import img7 from "../../assets/images/bg/testi11.png";
import Container from "../../components/Container";
export const ProjectDetails = () => {
  return (
    <>
      <MiniBanner
        text1="Details all the projects"
        text2="Home"
        text3="Projects Details"
      />
      <div class="project-details-section pt-120 pb-20" id="project-details">
        <Container>
          <div class="row flex justify-center gap-5">
            <div class="col-lg-7">
              <div class="proj-details-single">
                <img src={img1} alt="image" class="img-fluid" />
                <ul class="project-meta-list gap-3">
                  <li>
                    <div class="icon">
                      <img src={img2} alt="image" />
                    </div>
                    <div class="text">
                      <h5>Client Name</h5>
                      <p>Sara Watson</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <img src={img3} alt="image" />
                    </div>
                    <div class="text">
                      <h5>Category</h5>
                      <p>Branding, Ui/Ux</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <img src={img4} alt="image" />
                    </div>
                    <div class="text">
                      <h5>Complete Date</h5>
                      <p>25 January 2022</p>
                    </div>
                  </li>
                </ul>
                <h4>
                  The UX design process consists user research, wireframing and
                  prototyping, and user testing.
                </h4>
                <p class="para">
                  Let’s imagine an e-commerce startup—we’ll call it Beautify.
                  Beautify creates their own all-natural cosmetics and sells
                  them online via their website. Some of the key team members
                  behind this small but successful startup include a UX
                  designer, a UI designer, a web developer, a data analyst, and
                  a digital marketer.
                </p>
                <div class="challenge-box">
                  <h4>Challenge During The Project</h4>
                  <p class="para">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commod conse quat. Duis aute irure dolor in repreh
                    enderit in voluptate velit esse cillum dolore education
                    level of volatility.
                  </p>
                  <ul class="challenge-list">
                    <li>
                      Analyzing research data and identifying trends and
                      patterns
                    </li>
                    <li>Conducting usability testing sessions with users</li>
                    <li>Amazing Timing and Experience</li>
                    <li>
                      Gathering user feedback through surveys and questionnaires
                    </li>
                  </ul>
                </div>
                <h4>How Works It?</h4>
                <p class="para mb-0">
                  Ompanies and investors grapple with changing conditions
                  constantly, but our re search points to an unusual level of
                  volatility in the decades ahead. To understand why, we look at
                  the three major forces that will shape the 2020.with changing
                  conditions constantly.
                </p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="proj-details-right">
                <div class="title-area">
                  <span>Ui/Ux Design</span>
                  <h2>Creative Ui/Ux Design for Your Business.</h2>
                </div>
                <p class="para">
                  When it comes to the tech industry, there are many different
                  paths you can follow. UX design, UI design, web development,
                  data analytics, and digital marketing UX design, UI design all
                  offer exciting, fulfilling.
                </p>
                <p class="para">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commod consequat. Duis aute irure dolor in repreh enderit
                  in voluptate velit esse cillum dolore eu
                </p>
                <div class="proj-details-imgs">
                  <div class="row flex gap-4">
                    <div class="col-lg-6 col-md-6 col-sm-6 text-center">
                      <img src={img5} class="img-fluid" alt="image" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 text-center">
                      <img src={img6} class="img-fluid" alt="image" />
                    </div>
                  </div>
                </div>
                <h3>Client Feedback This Project</h3>
                <div
                  class="testimonial-single hover-border1 wow fadeInDown"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <img
                    alt="image"
                    src="assets/images/icons/quote-icon.svg"
                    class="quote-icon"
                  />
                  <div class="testi-img">
                    <img alt="image" src={img7} />
                  </div>
                  <div class="testi-content">
                    <div class="testi-designation">
                      <h5>Ronald Richards</h5>
                      <p>Co Founder</p>
                    </div>
                    <p>
                      The Pacific Grove Chamber of Commerce would like to thank
                      eLab Communications and Mr. Will Elkadi for all the
                      efforts and suggestions that assisted.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
