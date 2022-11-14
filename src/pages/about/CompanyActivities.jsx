import React from "react";
import img1 from "../../assets/images/bg/water-mark1.png";
import img2 from "../../assets/images/bg/water-mark2.png";
import Container from "../../components/Container";
const CompanyActivities = () => {
  return (
    <>
      <div className="activities-section pt-20 pb-20">
        <img src={img1} alt="image" className="img-fluid water-mark1" />
        <img src={img2} alt="image" className="img-fluid water-mark2" />
        <Container>
          <div className="row flex w-full justify-center">
            <div className="w-2/4">
              <div className="section-title primary5">
                <span>-Our Video-</span>
                <h3>Our Company Activities</h3>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row flex z-10 justify-center">
            <div className="activities-area w-full">
              <div
                className="company-vdo position-relative wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="video-play style-2">
                  <a
                    href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                    className="popup-youtube video-icon"
                  >
                    <i className="bx bx-play"></i>
                  </a>
                </div>
              </div>
              <div
                className="company-counter wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="row flex gap-4  justify-center">
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.2s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer" data-odometer-final="450">
                          420
                        </h2>
                        <a href="#">Happy Customer</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.4s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer" data-odometer-final="500">
                          50
                        </h2>
                        <a href="#">Project Completed</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.6s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer" data-odometer-final="150">
                          36
                        </h2>
                        <a href="#">Team member</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-10 col-10">
                    <div
                      className="counter-single text-center d-flex flex-row wow animate fadeInDown"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.8s"
                    >
                      <div className="coundown d-flex flex-column">
                        <h2 className="odometer" data-odometer-final="130">
                          5
                        </h2>
                        <a href="#">Awards Winner</a>
                      </div>
                    </div>
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

export default CompanyActivities;
