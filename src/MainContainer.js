import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Breakpoint from './helperComponents/Breakpoint';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Hallu";
    src: url("/assets/YES.ttf") format("truetype");
  }
  @font-face {
    font-family: "Main";
    src: url("/assets/zai_ConsulPolishTypewriter.ttf") format("truetype");
  }
  body {
  font-family: 'Main', 'Courier New', Courier, monospace;
    margin: 0;
    background-image: url('/assets/bg.png');
  }
  body > div {
    display: flex;
    justify-content: center;
    max-height: 100vh;
    overflow-y: scroll;
  }
  body > div > *:last-child {
    flex-grow: 1;
  }
  @media screen and (min-width:${Breakpoint.M} ){
    body {
      font-size: 22px;
    }
  }
`;

const MainContainer = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      <svg style={{ display: 'none' }}>
        <filter id="wiggleFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.001" numOctaves="2">
            <animate
              attributeName="baseFrequency"
              values="0.01; 0.015; 0.02; 0.025; 0.03; 0.025; 0.02; 0.015"
              repeatCount="indefinite"
              dur="0.25s"
            />
          </feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            scale="25"
          />
        </filter>
        <filter id="wiggleFilter2">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1">
            <animate
              attributeName="baseFrequency"
              values="0.01; 0.015; 0.02; 0.025; 0.03; 0.025; 0.02; 0.015"
              repeatCount="indefinite"
              dur="1s"
            />
          </feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            scale="10"
          />
        </filter>
      </svg>
      {children}
    </Fragment>
  );
};
MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
