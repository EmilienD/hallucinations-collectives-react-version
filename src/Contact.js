import React from 'react';
import styled from 'styled-components';
import Svg from './helperComponents/LazyLoadingInlineSvg';
import config from './config';

const ContactStyle = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: auto;
  a {
    padding: 0.5em;
    background-color: rgba(255, 255, 255, 0.8);
  }
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
