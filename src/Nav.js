import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Li, NavStyle, Ul } from './Nav.style';

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

const Nav = () => (
  <NavStyle>
    <Ul>
      <NavItem to="/accueil">Accueil</NavItem>
      <NavItem to="/tickets">Tickets</NavItem>
      <NavItem to="/infos-pratiques">Infos Pratiques</NavItem>
      <NavItem to="/programmation">Programmation</NavItem>
      <NavItem to="/a-propos">À propos</NavItem>
      <NavItem to="/editions-precedentes">Éditions précédentes</NavItem>
    </Ul>
  </NavStyle>
);

export default Nav;
