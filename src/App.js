import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import wp from './wpService';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import Home from './Home';
import PracticalInformation from './PracticalInformation';
import LineUp from './LineUp';
import About from './About';
import Nav from './Nav';
import Breakpoint from './Breakpoint';

const ContentContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: ${Breakpoint.S}) {
    padding: 40px;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      pagesList: [],
    };
  }

  componentDidMount() {
    wp.getPages()
      .then(res => this.setState({ pagesList: res }))
      .catch(console.log);
  }

  render() {
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
}

export default App;
