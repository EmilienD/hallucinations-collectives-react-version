import React, { Component } from 'react';
import path from 'lodash/fp/path';
import PropTypes from 'prop-types';
import wpService from '../services/wpService';
import WpRendered from '../helperComponents/WpRendered';

class StandardPageContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { slug } = this.props;
    wpService.getPages(`slug=${slug}`).then(pages => this.setState({ page: pages[0] }));
  }

  render() {
    const { page } = this.state;
    return <WpRendered rendered={path('content.rendered', page)} />;
  }
}

StandardPageContainer.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default StandardPageContainer;
