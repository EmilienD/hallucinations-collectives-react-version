import styled from "styled-components";
import Breakpoints from "./helperComponents/Breakpoint";

export const NavStyle = styled.nav``;

export const Ul = styled.ul`
  font-family: "navfont", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 2em 0 0 0;
  color: #000;
  color: var(--nav-primary-color);
`;

export const Li = styled.li`
  text-align: center;
  flex-grow: 1;
  padding: 0 1em 1em 0;
  @media screen and (min-width: ${Breakpoints.S}px) {
    padding: 0 2em 2em 0;
  }
  &:last-child {
    padding: 0 0 2em 0;
  }
  a,
  a:visited {
    text-decoration: none;
    color: #000;
    color: var(--nav-primary-color);
    outline: none;
  }
  a.current,
  a:focus,
  a:hover {
    color: red;
    color: var(--nav-secondary-color);
    overflow: visible;
    text-decoration: none;
  }
  @media screen and (min-width: ${Breakpoints.XL}px) {
    a.current,
    a:focus,
    a:hover {
      filter: url("#wiggleFilter2");
    }
  }
`;
