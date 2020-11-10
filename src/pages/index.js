import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import GlobalStyle from "../components/globalStyle";
import Image from "../components/image";
import SEO from "../components/seo";
import Socials from "../components/socials";

const Content = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-flow: column nowrap;
`;

const IndexPage = () => (
  <main>
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
      <Socials />
    </Content>
    <p>hello@aubreywodonga.com</p>
  </main>
);

export default IndexPage;
