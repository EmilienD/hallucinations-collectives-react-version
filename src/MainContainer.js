import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    background-image: url('assets/bg.png');
  }
  body > div {
    display: flex;
  }
`;

export default function MainContainer(props) {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
}
