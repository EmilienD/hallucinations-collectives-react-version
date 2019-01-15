import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import Home from './pages/Home';
import PracticalInformation from './pages/PracticalInformation';
import LineUp from './pages/LineUp';
import About from './pages/About';
import Nav from './Nav';
import Breakpoint from './helperComponents/Breakpoint';

const ContentContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: ${Breakpoint.S}) {
    padding: 40px;
  }
`;

function App() {
  return (
    <MainContainer>
      <Breakpoint renderS={() => <SideBar />} />
      <header className="App-header" />
      <Router>
        <ContentContainer>
          <Nav />
          <Switch>
            <Route path="/accueil" component={Home} />
            <Route path="/infos-pratiques" component={PracticalInformation} />
            <Route path="/programmation" component={LineUp} />
            <Route path="/a-propos" component={About} />
            <Route path="/contributions" component={() => 'Concontritribubutiontion'} />
            <Redirect exact strict from="/" to="/accueil" />
            <Redirect exact from="/tickets" to="http://yesno.wtf" />
            <Route component={() => <h1>Quatre Sans Quatre</h1>} />
          </Switch>
        </ContentContainer>
      </Router>
    </MainContainer>
  );
}

export default App;
