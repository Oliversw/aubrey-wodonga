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
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 100vh;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4rem;
      letter-spacing: 0.6rem;
      margin: 1rem 2rem;
    }

    h2 {
      margin: 1rem 2rem;
    }
  }
`;

const ImgContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 45vw;
  min-width: 45vw;
  max-width: 50vw;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 50vw;
    min-width: 50vw;
  }
`;

const ImgStyled = styled.img`
  height: 100%;
`;

const IndexPage = () => (
  <Main>
    <Content>
      <GlobalStyle />
      <SEO title="Home" />
      <div>
        <h1>Aubrey Wodonga</h1>
        <h2>
          Drag Queen.
          <br /> Professional Circus Artist.
          <br /> Twitch Streamer.
          <br /> Dork.
          <br /> 😄
        </h2>
      </div>
      <Socials />
    </Content>
    <ImgContainer></ImgContainer>
  </Main>
);

export default IndexPage;
