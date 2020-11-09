import React from "react";
import { Link } from "gatsby";

import GlobalStyle from "../components/globalStyle";
import Image from "../components/image";
import SEO from "../components/seo";
import Socials from "../components/socials";

const IndexPage = () => (
  <main>
    <GlobalStyle />
    <SEO title="Home" />
    <h1>Aubrey Wodonga</h1>
    <h2>Drag Queen. Professional Circus Artist. Twitch Streamer. Dork. 😄</h2>
    <p>hello@aubreywodonga.com</p>
    <Socials />
  </main>
);

export default IndexPage;
