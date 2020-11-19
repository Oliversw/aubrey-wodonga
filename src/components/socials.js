import React from "react";
import styled from "styled-components";

import Instagram from "../../assets/socialInsta.svg";
import Tiktok from "../../assets/socialTiktok.svg";
import Twitch from "../../assets/socialTwitch.svg";
import Twitter from "../../assets/socialTwitter.svg";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem;
  max-width: 800px;

  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;

const Email = styled.p`
  font-size: 1.3rem;
  height: 1.3rem;
  margin: 1rem;
  overflow: scroll;

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const Socials = () => {
  return (
    <div>
      <Container>
        <Instagram />
        <Twitch />
        <Twitter />
        <Tiktok />
      </Container>
      <Email>hello@aubreywodonga.com</Email>
    </div>
  );
};

export default Socials;
