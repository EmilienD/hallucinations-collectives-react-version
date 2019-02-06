import styled from 'styled-components';
import WpRendered from '../helperComponents/WpRendered';
import Breakpoints from '../helperComponents/Breakpoint';

export const HomeStyle = styled(WpRendered)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1em;
  border-radius: 1em;
  max-width: 38em;
  margin: 0 auto;
  a {
    font-family: 'Hallu', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: red;
    overflow: visible;
    text-decoration: none;
  }

  @media screen and (min-width: ${Breakpoints.XL}px) {
    a:hover {
      filter: url('#wiggleFilter2');
    }
  }
`;
