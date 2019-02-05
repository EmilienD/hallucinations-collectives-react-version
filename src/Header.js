import React from 'react';
import Nav from './Nav';
import Breakpoint from './helperComponents/Breakpoint';
import Svg from './helperComponents/LazyLoadingInlineSvg';
import config from './config';

const Header = () => (
  <header>
    <Breakpoint
      renderXS={() => (
        <Svg
          style={{ width: '50%', margin: '0 auto' }}
          src={`${config.publicRoot}/assets/LogoR.svg`}
        />
      )}
      renderM={() => null}
    />
    <Nav />
  </header>
);

export default Header;
