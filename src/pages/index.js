import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import GlobalStyle from "../components/globalStyle";
import SEO from "../components/seo";
import Socials from "../components/socials";

import Background from "../images/aubrey-background.png";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;

  /* tablet + */
  @media (min-width: 768px) {
    background: none;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
  }
`;

const Content = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgb(18, 18, 18, 0.5);
`;

const ImgContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  height: 100vh;
  width: auto;
  max-width: 45vw;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  height: 100%;
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
    <ImgContainer>
      <ImgStyled src={Background} />
    </ImgContainer>
  </Main>
);

export default IndexPage;
