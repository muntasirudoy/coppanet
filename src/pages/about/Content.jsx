import React from "react";
import Container from "../../components/Container";
import img1 from "../../assets/images/bg/section-bg1.png";
import img2 from "../../assets/images/bg/about11.png";
import img3 from "../../assets/images/icons/medal-icon.svg";
import img4 from "../../assets/images/bg/about13.png";
import img5 from "../../assets/images/bg/section-bg1.png";
import img6 from "../../assets/images/icons/sun-icon.svg";
import img7 from "../../assets/images/icons/about-triangle.svg";
const Content = () => {
  return (
    <>
      <div className="about1-section pt-120 pb-120" id="about">
        <img src={img1} className="img-fluid section-bg1" alt="" />
        <Container>
          <div className="row flex justify-between gap-4">
            <div className="w-2/4 order-1 ">
              <div
                className="about1-content wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span>-About Our Company-</span>
                <h3>
                  We are committed to providing our customers with exceptional.
                </h3>
                <p className="para">
                  Lorem Ipsum is simply dummy text of free available in market
                  the way printing and typesetting industry has been the
                  industry's standard dummy text ever.
                </p>
                <ul className="about-list">
                  <li>Price of additional materials or parts (if needed)</li>
                  <li>Transportation cost for carrying new materials/parts</li>
                  <li>Interpreting services is our specialty</li>
                </ul>
                <p className="para">
                  Since the advent of the Internet and e-commerce, a growing
                  number of consumers are buying their travel requirements
                  online. In many cases, they bypass the travel agent and
                  purchase directly from the airline, hotel chain, etc.Most
                  travel agents, especially large ones, have two departments.
                  Some agencies, i.e.Bricks and mortar travel agents were once
                  common in every high street. They existed next door to
                  grocers, department stores, and clothes shops., tourism or
                  business travel.
                </p>
              </div>
            </div>
            <div className="w-2/4 order-2">
              <div
                className="about-images wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row flex gap-0">
                  <div className="w-2/4">
                    <img src={img2} className="about11 img-fluid" alt="image" />
                    <div className="experience-tag">
                      <div className="tag-inner">
                        <img src={img3} alt="image" />
                        <h5>10+ Years Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-2/4 position-relative">
                    <img src={img3} className="about12 img-fluid" alt="image" />
                    <img src={img4} className="about13 img-fluid" alt="image" />
                    {/* <img src={img5} className="sun-icon" alt="image" /> */}
                    <img src={img6} className="about-dot" alt="image" />
                    <img src={img7} className="about-triangle" alt="image" />
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

export default Content;
