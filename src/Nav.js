import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavStyle = styled.nav``;

const Ul = styled.ul`
  font-family: Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 2em 0 0 0;
`;

const Li = styled.li`
  text-align: center;
  flex-grow: 1;
  padding: 0 2em 2em 0;
  &:last-child {
    padding: 0 0 2em 0;
  }
  a,
  a:visited,
  a:focus {
    text-decoration: none;
    color: white;
    outline: none;
  }
  a.current {
    text-decoration: underline;
  }
`;

const NavItem = ({ to, children }) => (
  <Li>
    <NavLink activeClassName="current" to={to}>
      {children}
    </NavLink>
  </Li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Nav() {
  return (
    <NavStyle>
      <Ul>
        <NavItem to="/accueil">Accueil</NavItem>
        <Li>
          <a href="/tickets">Tickets</a>
        </Li>
        <NavItem to="/infos-pratiques">Infos Pratiques</NavItem>
        <NavItem to="/programmation">Programmation</NavItem>
        <NavItem to="/a-propos">À propos</NavItem>
        <NavItem to="/contributions">Contributions</NavItem>
      </Ul>
    </NavStyle>
  );
}
