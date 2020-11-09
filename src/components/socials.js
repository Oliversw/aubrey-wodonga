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
`;

const Socials = () => {
  return (
    <Container>
      <Instagram />
      <Twitch />
      <Twitter />
      <Tiktok />
    </Container>
  );
};

export default Socials;
