import React, { Component } from 'react';
import styled from 'styled-components';
import path from 'lodash/fp/path';
import wp from './wpService';
import WpRendered from './WpRendered';

const HomeStyle = styled(WpRendered)`
  a {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: red;
  }
`;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      page: '',
    };
  }

  componentDidMount() {
    wp.getPages('slug=accueil').then((pages) => {
      this.setState({ page: pages[0] });
    });
  }

  render() {
    const { page } = this.state;

    return <HomeStyle rendered={path('content.rendered', page)} />;
  }
}
