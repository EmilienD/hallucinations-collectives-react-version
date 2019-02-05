import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Breakpoint from './helperComponents/Breakpoint';
import FallingWilhelm from './FallingWilhelm';
import config from './config';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Hallu";
    src: url("${config.publicRoot}/assets/Animals.ttf") format("truetype");
  }
  @font-face {
    font-family: "Main";
    src: url("${config.publicRoot}/assets/zai_ConsulPolishTypewriter.ttf") format("truetype");
  }
  body {
    scroll-behavior: smooth;
    font-family: 'Main', 'Courier New', Courier, monospace;
    margin: 0;
    background-image: url('${config.publicRoot}/assets/bg006.jpg');
    font-size: 22px;
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
  @media screen and (min-width:${Breakpoint.S}px ){
    body {
      font-size: 25px;
    }
  }
`;

const MainContainer = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      {config.withFallingMan && <FallingWilhelm />}
      <svg
        style={{
          position: 'fixed',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
      >
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
