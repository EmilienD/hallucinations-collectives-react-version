import React from 'react';
import {
  RainingContainer, ChainLinkStyle, RotatingLogo, Container,
} from './Layout.style';
import config from './config';

const chainLinkArray = ['chaines2.svg', 'monkey.svg', 'knife.svg', 'paraplu.svg'];

const chainLinkSource = chainLinkArray[Math.floor(Math.random() * chainLinkArray.length)];
const rainDrops = new Array(6)
  .fill()
  // cuz they're all the same, so nothing else than index to differentiate them
  // eslint-disable-next-line react/no-array-index-key
  .map((v, i) => <ChainLinkStyle key={i} src={`${config.publicRoot}/assets/${chainLinkSource}`} />);
export default function SideBar() {
  return (
    <Container>
      <RotatingLogo />
      <RainingContainer>{rainDrops}</RainingContainer>
    </Container>
  );
}
