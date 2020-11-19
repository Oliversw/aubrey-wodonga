import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import GlobalStyle from "../components/globalStyle";
import Image from "../components/image";
import SEO from "../components/seo";
import Socials from "../components/socials";

import Background from "../images/aubrey-background.png";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
`;

const Content = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const IndexPage = () => (
  <Main>
    <Content>
      <GlobalStyle />
      <SEO title="Home" />
      <h1>Aubrey Wodonga</h1>
      <h2>
        Drag Queen.
        <br /> Professional Circus Artist.
        <br /> Twitch Streamer.
        <br /> Dork.
        <br /> 😄
      </h2>
      <div>
        <Socials />
        <p>hello@aubreywodonga.com</p>
      </div>
    </Content>
    {/* <img src={Background} /> */}
  </Main>
);

export default IndexPage;
