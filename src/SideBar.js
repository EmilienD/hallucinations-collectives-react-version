import React from 'react';
import {
  RainingContainer, ChainLinkStyle, RotatingLogo, Container,
} from './Layout.style';

const chainLinkSource = '/assets/chain.svg';
const rainDrops = new Array(6)
  .fill()
  // cuz they're all the same, so nothing else than index to differentiate them
  // eslint-disable-next-line react/no-array-index-key
  .map((v, i) => <ChainLinkStyle key={i} src={chainLinkSource} />);
export default function SideBar() {
  return (
    <Container>
      <RotatingLogo />
      <RainingContainer>{rainDrops}</RainingContainer>
    </Container>
  );
}
