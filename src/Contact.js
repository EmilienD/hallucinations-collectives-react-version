import React from 'react';
import styled from 'styled-components';
import Svg from './helperComponents/LazyLoadingInlineSvg';
import config from './config';

const ContactStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1em;
  svg {
    height: 1.5em;
  }
`;

const Contact = () => (
  <ContactStyle>
    <a href="https://www.facebook.com/leshallus/">
      <Svg src={`${config.publicRoot}/assets/facebook.svg`} />
    </a>
    <a href="mailto:leshalluscollectives@gmail.com">
      <Svg src={`${config.publicRoot}/assets/mail.svg`} />
    </a>
  </ContactStyle>
);

export default Contact;
