import React from 'react';
import styled, { keyframes } from 'styled-components';
import Svg from './LazyLoadingInlineSvg';

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

const RainingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
`;

const ChainLinkStyle = styled(Svg)`
  height: ${CHAIN_LINK_HEIGHT};
  animation: ${rain} 8s infinite linear;
  svg {
    height: 100%;
  }
`;

const RotatingLogo = styled(Svg)`
  height: ${SIDE_BAR_WIDTH_VALUE - SIDE_BAR_PADDING_VALUE * 2 + SIDE_BAR_WIDTH_UNIT};
  animation: ${rotation} 30s infinite linear;
`;

const Container = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${SIDE_BAR_WIDTH_VALUE - SIDE_BAR_PADDING_VALUE + SIDE_BAR_WIDTH_UNIT};
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: ${SIDE_BAR_PADDING} 0 0 ${SIDE_BAR_PADDING};
`;

export default function SideBar() {
  return (
    <Container>
      <RotatingLogo src="assets/logo.svg" />
      <RainingContainer>
        <ChainLinkStyle src="assets/chain.svg" />
        <ChainLinkStyle src="assets/chain.svg" />
        <ChainLinkStyle src="assets/chain.svg" />
        <ChainLinkStyle src="assets/chain.svg" />
        <ChainLinkStyle src="assets/chain.svg" />
        <ChainLinkStyle src="assets/chain.svg" />
      </RainingContainer>
    </Container>
  );
}
