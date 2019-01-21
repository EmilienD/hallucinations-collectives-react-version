import styled from 'styled-components';
import WpRendered from '../helperComponents/WpRendered';

export const HomeStyle = styled(WpRendered)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1em;
  border-radius: 1em;
  a {
    font-family: 'Hallu', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: red;
    overflow: visible;
    text-decoration: none;
  }
  a:hover {
    filter: url('#wiggleFilter2');
  }
`;
