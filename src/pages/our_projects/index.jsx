import React from "react";
import Container from "../../components/Container";
import MiniBanner from "../../components/MiniBanner";
import Projects from "../../components/Projects";

const OurProjects = () => {
  return (
    <div>
      <MiniBanner text1="Our all Projects" text2="Home" text3="Projects" />
      <Projects />
    </div>
  );
};

export default OurProjects;
