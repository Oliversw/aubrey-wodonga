import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
/* -------------------- START CSS RESET -------------------- */
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* -------------------- END CSS RESET -------------------- */

/* -------------------- BEGIN GLOBAL STYLES -------------------- */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,800;1,400&display=swap');

:root {
  --black: #121212;
  --white: #FFF;
  --highlight: #4EA9BD;
}

body {
  background-color: var(--black);
  font-family: 'Montserrat', sans-serif;
}

main {
  color: white;
  letter-spacing: 0.11em;
}

h1 {
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 4rem;
}

h2 {
  font-size: 2rem;
  line-height: 2.2rem;
  color: var(--highlight)
}

p {
  line-height: 1.2rem;
  letter-spacing: 0.11em;}
`;

export default GlobalStyle;
