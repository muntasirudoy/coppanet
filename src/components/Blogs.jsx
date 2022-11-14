import React from "react";
import img1 from "../assets/images/bg/blog31.png";
import img2 from "../assets/images/bg/blog32.png";
import img3 from "../assets/images/bg/blog33.png";
import img4 from "../assets/images/bg/water-mark4.png";
import Container from "./Container";
const Blogs = () => {
  return (
    <>
      <div className="blog-section3 position-relative overflow-hidden pt-120 pb-120">
        <img src={img4} alt="image" className="service-watermark" />
        <Container>
          <div className="row flex justify-center">
            <div className="w-2/4">
              <div className="section-title primary5 w-[650px]">
                <span>-Our Blog-</span>
                <h3>Latest News Feeds </h3>
                <p>
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center position-relative">
            <div className="swiper blog-slider swiper-fix">
              <div className="swiper-wrapper flex">
                <div className="swiper-slide w-2/4 ">
                  <div
                    className="single-blog-2 style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <img src={img1} className="blog-img" alt="image" />
                    <div className="content">
                      <span>Ui/Ux Design</span>
                      <h4>
                        <a href="blog-details.html">
                          What Does a Product Manager Do? Your Complete Career
                          Guide
                        </a>
                      </h4>
                      <p className="para">
                        The product manager job titleis fast becom ing on of the
                        hottest business.
                      </p>
                      <div className="meta">
                        <i className="bi bi-stopwatch"></i>
                        <span>Februay 24, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide w-2/4">
                  <div
                    className="single-blog-2 style-2 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <img src={img2} className="blog-img" alt="image" />
                    <div className="content">
                      <span>Development</span>
                      <h4>
                        <a href="blog-details.html">
                          What Is a Marketing Associate? A Job Description &
                          Career.
                        </a>
                      </h4>
                      <p className="para">
                        The product manager job titleis fast becom ing on of the
                        hottest business.
                      </p>
                      <div className="meta">
                        <i className="bi bi-stopwatch"></i>
                        <span>Februay 24, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-bottom mt-50 d-xl-flex d-none justify-content-center align-items-center">
              <div className="swiper-pagination-blog style-2 text-center"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
