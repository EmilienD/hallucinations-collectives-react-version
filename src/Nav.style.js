import styled from 'styled-components';

export const NavStyle = styled.nav``;

export const Ul = styled.ul`
  font-family: Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 2em 0 0 0;
`;

export const Li = styled.li`
  text-align: center;
  flex-grow: 1;
  padding: 0 2em 2em 0;
  &:last-child {
    padding: 0 0 2em 0;
  }
  a,
  a:visited {
    text-decoration: none;
    color: white;
    outline: none;
  }
  a.current,
  a:focus {
    text-decoration: underline;
  }
`;
