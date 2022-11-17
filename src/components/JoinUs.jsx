import React from "react";
import Container from "./Container";

const JoinUs = () => {
  return (
    <>
      <div className="join-section pb-120">
        <Container>
          <div
            className="joinus-area d-flex align-items-center wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className="row d-flex align-items-center g-4">
              <div className="col-lg-7 justify-content-lg-start justify-content-center text-lg-start text-center">
                <h2>We're Always Looking For Talented People Our Agency.</h2>
              </div>
              <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center">
                <button className="button-87"> JOIN US</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default JoinUs;
