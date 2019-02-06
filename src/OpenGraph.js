/* eslint-disable no-param-reassign */
import { Component } from 'react';
import PropTypes from 'prop-types';

class OpenGraph extends Component {
  componentDidMount() {
    const { property } = this.props;
    const tag = document.querySelector(`meta[property='${property}']`);
    if (!tag) {
      const createdTag = document.createElement('meta');
      document.querySelector('head').append(createdTag);
      this.tag = createdTag;
      this.modifyTag(createdTag);
    } else {
      this.tag = tag;
      this.originalContent = tag.content;
      this.modifyTag(tag);
    }
  }

  componentDidUpdate() {
    this.modifyTag(this.tag);
  }

  componentWillUnmount() {
    if (this.originalContent) {
      this.tag.content = this.originalContent;
    } else {
      this.tag.remove();
    }
  }

  modifyTag(tag) {
    const { property, content } = this.props;
    if (content) {
      tag.property = property;
      tag.content = content;
    }
  }

  render() {
    return null;
  }
}

OpenGraph.propTypes = {
  property: PropTypes.string.isRequired,
  content: PropTypes.string,
};

OpenGraph.defaultProps = {
  content: '',
};

export default OpenGraph;
