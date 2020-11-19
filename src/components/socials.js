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
  overflow: scroll;

  @media (min-width: 1024px) {
    margin: 1rem rem;

    justify-content: flex-start;
  }
`;

const Email = styled.p`
  font-size: 1.3rem;
  height: 1.3rem;
  margin: 1rem;
  overflow: scroll;
  transition: 1s;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    text-align: left;
    margin: 1rem 2rem;
  }
`;

const Link = styled.a`
    color: var(--white)
    text-decoration: none;
`;

const InstaT = styled(Instagram)`
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1024px) {
    margin: 0.5rem;
  }
`;
const TwitchT = styled(Twitch)`
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1024px) {
    margin: 0.5rem;
  }
`;
const TwitterT = styled(Twitter)`
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1024px) {
    margin: 0.5rem;
  }
`;
const TiktokT = styled(Tiktok)`
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 1024px) {
    margin: 0.5rem;
  }
`;

const Socials = () => {
  return (
    <div>
      <Container>
        <a href="https://www.instagram.com/aubreywodonga/" target="_blank">
          <InstaT />
        </a>
        <a href="https://www.twitch.tv/aubreywodonga" target="_blank">
          <TwitchT />
        </a>
        <a href="https://twitter.com/AubreyWodonga" target="_blank">
          <TwitterT />
        </a>
        <a href="https://www.tiktok.com/@aubreywodonga" target="_blank">
          <TiktokT />
        </a>
      </Container>
      <Email>
        <Link href="mailto:hello@aubreywodonga.com" target="_blank">
          hello@aubreywodonga.com
        </Link>
      </Email>
    </div>
  );
};

export default Socials;
