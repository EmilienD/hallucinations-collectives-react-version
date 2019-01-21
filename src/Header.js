import React from 'react';
import Nav from './Nav';
import Breakpoint from './helperComponents/Breakpoint';
import Svg from './helperComponents/LazyLoadingInlineSvg';

const Header = () => (
  <header>
    <Breakpoint renderXS={() => <Svg src="/assets/LogoR.svg" />} renderS={() => null} />
    <Nav />
  </header>
);

export default Header;
