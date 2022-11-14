import React from "react";
import Container from "../../components/Container";
import CompanyActivities from "./CompanyActivities";
import Content from "./Content";
import MiniBanner from "./MiniBanner";
import Partner from "./Partner";

const About = () => {
  return (
    <>
      <MiniBanner />
      <Content />
      <CompanyActivities />
      <Partner />
    </>
  );
};

export default About;
