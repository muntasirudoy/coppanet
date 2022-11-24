import React from "react";
import img1 from "../assets/images/bg/blog31.png";
import img2 from "../assets/images/bg/blog32.png";
import img3 from "../assets/images/bg/blog33.png";
import img4 from "../assets/images/bg/water-mark4.png";
import BlogCard from "./BlogCard";
import Container from "./Container";
import TitleFive from "./TitleFive";
const Blogs = () => {
  return (
    <>
      <div className="blog-section3 position-relative overflow-hidden pt-120 pb-120">
        <img src={img4} alt="image" className="service-watermark" />
        <Container>
          <div className="row flex justify-center">
            <div className="w-2/4">
              <TitleFive
                heading="-Our Blog-"
                subheading="Latest News Feeds"
                para=" Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences."
              />
            </div>
          </div>
          <div className="row mt-5 justify-content-center position-relative">
            <div className="swiper blog-slider swiper-fix">
              <div className="swiper-wrapper flex">
                <BlogCard></BlogCard>
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
