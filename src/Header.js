import React from 'react';
import Nav from './Nav';
import { RotatingLogo, H1, H1Wrapper } from './Layout.style';
import Breakpoint from './helperComponents/Breakpoint';

const Header = () => (
  <header>
    <H1Wrapper>
      <Breakpoint renderXS={() => <RotatingLogo />} renderS={() => null} />
      <H1>Les Hallucinations Collectives</H1>
    </H1Wrapper>
    <Nav />
  </header>
);

export default Header;
