import React from "react";
import MiniBanner from "../../components/MiniBanner";
import Team from "../../components/Team";

const index = () => {
  return (
    <>
      <MiniBanner text1="Team Member" text2="Home" text3="Team" />
      <Team />
    </>
  );
};

export default index;
