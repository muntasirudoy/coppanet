import React from "react";
import Banner from "../../components/Banner";
import { bannerText } from "../../components/bannerInfo";
import Container from "../../components/Container";

const Home = ({}) => {
  return (
    <div>
      <Container>
        <Banner bannerText={bannerText} />
      </Container>
    </div>
  );
};

export default Home;
