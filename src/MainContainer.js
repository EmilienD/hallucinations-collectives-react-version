import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    background-image: url('assets/bg.png');
  }
  body > div {
    display: flex;
  }
`;

export default function MainContainer(props) {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
}
MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
