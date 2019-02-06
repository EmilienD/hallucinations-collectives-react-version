/* eslint-disable no-param-reassign */
import { Component } from 'react';
import PropTypes from 'prop-types';

class DocTitle extends Component {
  componentDidMount() {
    const tag = document.querySelector('title');
    if (!tag) {
      const createdTag = document.createElement('title');
      document.querySelector('head').append(createdTag);
      this.tag = createdTag;
      this.modifyTag(createdTag);
    } else {
      this.tag = tag;
      this.originalContent = tag.innerText;
      this.modifyTag(tag);
    }
  }

  componentDidUpdate() {
    this.modifyTag(this.tag);
  }

  componentWillUnmount() {
    if (this.originalContent) {
      this.tag.innerText = this.originalContent;
    } else {
      this.tag.remove();
    }
  }

  modifyTag(tag) {
    const { children } = this.props;
    tag.innerHTML = children;
  }

  render() {
    return null;
  }
}

DocTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DocTitle;
