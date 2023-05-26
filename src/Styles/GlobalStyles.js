import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: 'Roboto Mono' ;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

textarea {
  white-space: revert;
}

`;

export default GlobalStyles;
