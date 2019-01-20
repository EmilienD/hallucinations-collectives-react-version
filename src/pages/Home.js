import React, { Component } from 'react';
import path from 'lodash/fp/path';
import wp from '../services/wpService';
import { HomeStyle } from './Home.style';

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
