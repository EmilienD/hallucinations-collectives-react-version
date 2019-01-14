import React, { Component } from 'react';

export default class LazyLoadingInlineSvg extends Component {
  constructor() {
    super();
    this.state = {
      markup: '',
    };
  }

  componentDidMount() {
    const { src } = this.props;
    fetch(src)
      .then(res => res.text())
      .then(markup => this.setState({ markup }));
  }

  render() {
    const { markup } = this.state;
    const { src, ...otherProps } = this.props;
    return <div {...otherProps} dangerouslySetInnerHTML={{ __html: markup }} />;
  }
}
