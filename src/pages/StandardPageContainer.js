import React, { Component } from 'react';
import path from 'lodash/fp/path';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import wpService from '../services/wpService';
import WpRendered from '../helperComponents/WpRendered';

const WpStyle = styled(WpRendered)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1em;
  border-radius: 1em;
`;

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
    return <WpStyle rendered={path('content.rendered', page)} />;
  }
}

StandardPageContainer.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default StandardPageContainer;
