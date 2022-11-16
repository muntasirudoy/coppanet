import React from "react";
import { ReactPropTypes } from "react";
import Container from "../../components/Container";
import img1 from "../../assets/images/bg/office1.png";
import img2 from "../../assets/images/bg/office2.png";
import img3 from "../../assets/images/bg/office3.png";
import MiniBanner from "../../components/MiniBanner";
const Contact = () => {
  return (
    <>
      <MiniBanner text1="Contact with us" text2="Home" text3="Contact" />
      <div class="address-section pt-120 pb-20">
        <Container>
          <div class="row flex justify-center">
            <div class="col-md-6">
              <div class="section-title primary5">
                <span>-Our Office-</span>
                <h3>Office Near You</h3>
                <p class="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
              </div>
            </div>
          </div>
          <div class="row flex justify-center gap-4">
            <div class="w-2/6">
              <div class="address-card">
                <div class="content">
                  <div class="header">
                    <div class="location flex justify-center items-center">
                      <svg
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                      </svg>
                    </div>
                    <h3>New York</h3>
                  </div>
                  <ul class="address-list">
                    <li>
                      <span>Address:</span>2972 Mahtab Center Dhaka 85486
                    </li>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+88017123456"> +880 123456</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#f59c9b939ab5908d9498859990db969a98c9">
                        <span
                          class="__cf_email__"
                          data-cfemail="20494e464f604558414d504c450e434f4d"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src={img1} alt="image" />
              </div>
            </div>
            <div class="w-2/6">
              <div class="address-card">
                <img src={img2} alt="image" />
                <div class="content">
                  <div class="header">
                    <div class="location flex justify-center items-center">
                      <svg
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                      </svg>
                    </div>
                    <h3>Kentucky</h3>
                  </div>
                  <ul class="address-list">
                    <li>
                      <span>Address:</span>4517 Washington Ave. Manc hester,
                      Kentucky 39495
                    </li>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+8801761456456"> +880 123456</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#9bf2f5fdf4dbfee3faf6ebf7feb5f8f4f6a7">
                        <span
                          class="__cf_email__"
                          data-cfemail="40292e262f002538212d302c256e232f2d"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-2/6">
              <div class="address-card">
                <div class="content">
                  <div class="header">
                    <div class="location flex justify-center items-center">
                      <svg
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                      </svg>
                    </div>
                    <h3>Abc London</h3>
                  </div>
                  <ul class="address-list">
                    <li>
                      <span>Address:</span>2118 Thornridge Cir. Syracuse,
                      Connecticut 35624
                    </li>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:+8801761456456"> +880 123456</a>
                    </li>
                    <li>
                      <span>Email:</span>
                      <a href="https://demo.egenslab.com/cdn-cgi/l/email-protection#563f38303916332e373b263a337835393b6a">
                        <span
                          class="__cf_email__"
                          data-cfemail="deb7b0b8b19ebba6bfb3aeb2bbf0bdb1b3"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src={img3} alt="image" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
