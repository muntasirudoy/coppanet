import React from 'react'
import img1 from '../assets/images/bg/blog31.png'
const BlogCard = () => {
  return (
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
                        The product manager job title is fast becoming on of the
                        hottest business.
                      </p>
                      <div className="meta">
                        <i className="bi bi-stopwatch"></i>
                        <span>Februay 24, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default BlogCard