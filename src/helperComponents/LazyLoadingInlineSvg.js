import React, { Component } from 'react';
import PropTypes from 'prop-types';
import assetsService from '../services/assetsService';

export default class LazyLoadingInlineSvg extends Component {
  constructor() {
    super();
    this.state = {
      markup: '',
    };
  }

  componentDidMount() {
    const { src } = this.props;
    assetsService.get(src).then(markup => this.setState({ markup }));
  }

  render() {
    const { markup } = this.state;
    const { src, ...otherProps } = this.props;
    // eslint-disable-next-line react/no-danger
    return <div {...otherProps} dangerouslySetInnerHTML={{ __html: markup }} />;
  }
}

LazyLoadingInlineSvg.propTypes = {
  src: PropTypes.string.isRequired,
};
