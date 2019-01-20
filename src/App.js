import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import Header from './Header';
import Home from './pages/Home';
import LineUp from './pages/LineUp';
import StandardPage from './pages/StandardPageContainer';
import About from './pages/About';
import Tickets from './pages/Tickets';
import Breakpoint from './helperComponents/Breakpoint';

const ContentContainer = styled.div`
  padding: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (min-width: ${Breakpoint.S}) {
    padding: 40px;
  }
`;
const App = () => (
  <MainContainer>
    <Breakpoint renderS={() => <SideBar />} />
    <Router>
      <ContentContainer>
        <Header />
        <Switch>
          <Route
            path="/:url*"
            exact
            strict
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
          />
          <Route path="/accueil" component={Home} />
          <Route path="/infos-pratiques" render={() => <StandardPage slug="infos-pratiques" />} />
          <Route path="/programmation/:band?" render={route => <LineUp route={route} />} />
          <Route path="/a-propos" render={() => <StandardPage slug="a-propos" />} />
          <Route path="/contributions" component={() => 'Concontritribubutiontion'} />
          <Route from="/tickets" render={() => <StandardPage slug="tickets" />} />
          <Redirect from="/" to="/accueil" />
          <Route component={() => <h1>Quatre Sans Quatre</h1>} />
        </Switch>
      </ContentContainer>
    </Router>
  </MainContainer>
);

export default App;
