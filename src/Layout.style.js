import React from 'react';
import styled, { keyframes } from 'styled-components';
import Svg from './helperComponents/LazyLoadingInlineSvg';

const CHAIN_LINK_HEIGHT_VALUE = 30;
const CHAIN_LINK_HEIGHT_UNIT = 'vh';
const CHAIN_LINK_HEIGHT = CHAIN_LINK_HEIGHT_VALUE + CHAIN_LINK_HEIGHT_UNIT;

const SIDE_BAR_WIDTH_VALUE = 20;
const SIDE_BAR_WIDTH_UNIT = 'vw';

const SIDE_BAR_PADDING_VALUE = 1;
const SIDE_BAR_PADDING = SIDE_BAR_PADDING_VALUE + SIDE_BAR_WIDTH_UNIT;

const rotation = keyframes`{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}`;
const rain = keyframes`{
  from {
    transform: translate(0, -${CHAIN_LINK_HEIGHT});
  }
  to {
    transform: translate(0, 0vh);
  }
}`;

export const RainingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`;

export const ChainLinkStyle = styled(Svg)`
  height: ${CHAIN_LINK_HEIGHT};
  animation: ${rain} 8s infinite linear;
  svg {
    height: 100%;
  }
`;

const RotatingLogoStyle = styled(Svg)`
  height: ${SIDE_BAR_WIDTH_VALUE - SIDE_BAR_PADDING_VALUE * 2 + SIDE_BAR_WIDTH_UNIT};
  width: ${SIDE_BAR_WIDTH_VALUE - SIDE_BAR_PADDING_VALUE * 2 + SIDE_BAR_WIDTH_UNIT};
  animation: ${rotation} 30s infinite linear;
`;

export const RotatingLogo = () => <RotatingLogoStyle src="/assets/logo.svg" />;

export const Container = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${SIDE_BAR_WIDTH_VALUE - SIDE_BAR_PADDING_VALUE + SIDE_BAR_WIDTH_UNIT};
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: ${SIDE_BAR_PADDING} 0 0 ${SIDE_BAR_PADDING};
`;

export const H1 = styled.h1`
  font-family: Hallu;
  width: 100%;
  padding: 0 0 0 1em;
`;

export const H1Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > *:first-child {
    flex-shrink: 0;
  }
`;
