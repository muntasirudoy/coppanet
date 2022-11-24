import React from "react";
import { bannerText, bannerBtn } from "./bannerInfo";
import Button from "./Button";
import img1 from "../assets/images/icons/banner5-tirang1.svg";
import img2 from "../assets/images/icons/banner5-tirang2.svg";
import img3 from "../assets/images/icons/banner5-tirang4.svg";
import img4 from "../assets/images/bg/banner5-vector-left.png";
import img5 from "../assets/images/bg/banner5-vector.png";
import img6 from "../assets/images/bg/banner5-image.png";
import img7 from "../assets/images/bg/about4-img.png";
import Container from "./Container";

const Banner = ({ bannerText }) => {
  return (
    <>
      <div class="banner-section5 py-16">
        <ul class="banner-social style-2 gap-4">
          <li>
            <a href="https://www.facebook.com/">
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <ion-icon size="large" name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <ion-icon size="large" name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
        <img src={img1} class="banner5-tirang1 img-fluid" alt="image" />
        <img src={img2} class="banner5-tirang2 img-fluid" alt="image" />
        <img src={img3} class="banner5-tirang3 img-fluid" alt="image" />
        <img src={img2} class="banner5-tirang4 img-fluid" alt="image" />
        <img src={img4} class="banner5-tirang5 img-fluid" alt="image" />
        <img src={img4} class="banner5-vector-left img-fluid" alt="image" />
        <img src={img5} class="banner5-vector img-fluid" alt="image" />
        <Container>
          <div class="row w-full flex justify-between items-center">
            <div class="w-[60%]">
              <div
                class="banner-content style-3  wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span>
                  Wellcome to{" "}
                  <p className=" !text-[#fa3f3f] inline-block bg-[#ffcdcd]/40 px-3 rounded-sm">
                    Coppanet Ltd.
                  </p>
                </span>
                <h1>Creative To Plan Your Business Company</h1>
                <p class="para">
                  We develop mobile application platforms across different
                  sectors including Healthcare, Travel and Tourism, Fintech and
                  E-Commerce. We implement state of the art machine learning and
                  recommendation systems for maximum user-friendliness.
                </p>
                <div class="button-group gap-4">
                  <button className="button-86">Learn More</button>
                  <button className="button-86 button-86-2">Contact</button>
                </div>
              </div>
            </div>
            <div class="w-[40%] flex justify-end position-relative d-lg-block d-none">
              {/* <div class="offer-image-area style-2">
                <img src={img6} class="img-fluid banner5-image" alt="image" />
              </div> */}
              <div
                class="col-xl-7 col-lg-6 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <img src={img7} class="img-fluid about4-image" alt="image" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
