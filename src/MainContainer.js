import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import Breakpoint from "./helperComponents/Breakpoint";
import FallingWilhelm from "./FallingWilhelm";
import config from "./config";

const GlobalStyle = createGlobalStyle`
  body {
    scroll-behavior: smooth;
    margin: 0;
    font-size: 22px;
  }
  #wavyBackground {
    filter: url("#wiggleFilter3");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  body > div {
    position: relative;
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

const MainContainer = props => {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      {config.withFallingMan && <FallingWilhelm />}
      <svg
        style={{
          position: "fixed",
          width: 0,
          height: 0,
          pointerEvents: "none"
        }}
      >
        <filter id="wiggleFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001"
            numOctaves="2"
          >
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
        <filter id="wiggleFilter3" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            id="sea-filter"
            numOctaves="3"
            seed="2"
            baseFrequency="0.02 0.05"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              keyTimes="0;0.5;1"
              values="0.02 0.06;0.04 0.08;0.02 0.06"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic" />
        </filter>
      </svg>
      {children}
    </Fragment>
  );
};
MainContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContainer;
