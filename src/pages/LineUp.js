import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import assoc from 'lodash/fp/assoc';
import path from 'lodash/fp/path';
import difference from 'lodash/difference';
import queryString from 'query-string';
import wpService from '../services/wpService';
import Post from './Post';
import TagSelector from './TagSelector';

const LineupContainer = styled.div`
  flex-direction: column;
  justify-content: center;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 0 1em 0;
  justify-content: center;
`;

export default class LineUp extends Component {
  constructor() {
    super();
    this.state = {
      lineUpPosts: [],
      lineUpTags: [],
      selectedPost: null,
    };
    this.setPosts = this.setPosts.bind(this);
    this.isSelectedPost = this.isSelectedPost.bind(this);
    this.hasAllSearchTags = this.hasAllSearchTags.bind(this);
  }

  componentDidMount() {
    wpService
      .getCurrentLineupPosts()
      .then(this.setPosts)
      .then(lineUpPosts => wpService.getTags().then(tags => this.setTags(tags, lineUpPosts)));
  }

  setPosts(lineUpPosts) {
    this.setState({ lineUpPosts });
    return lineUpPosts;
  }

  setTags(tags, posts) {
    const lupTagIdMap = posts.reduce(
      (acc, lup) => lup.tags.reduce((acc2, tagId) => assoc(tagId, true, acc2), acc),
      {},
    );
    const currentEdition = new Date().getFullYear().toString();
    const lineUpTags = tags.filter(t => t.name !== currentEdition && lupTagIdMap[t.id]);
    this.setState({ lineUpTags });
    return lineUpTags;
  }

  getSearchedTagsArray() {
    const { route } = this.props;
    const searchedTags = queryString.parse(path('location.search', route)).tags;

    return searchedTags ? searchedTags.split(',').map(Number) : [];
  }

  hasAllSearchTags(post) {
    // lodash/difference returns an array with the value from the first array missing in the second
    // if the result is empty, it means the second array holds all the values from the first
    return !difference(this.getSearchedTagsArray(), post.tags).length;
  }

  isSelectedPost(post) {
    const { route } = this.props;
    return path('match.params.band', route) === post.slug;
  }

  render() {
    const { lineUpPosts, lineUpTags } = this.state;
    const { route } = this.props;
    const { location } = route;
    const selectedPost = lineUpPosts.find(this.isSelectedPost) || null;
    return (
      <LineupContainer>
        {selectedPost && <Post post={selectedPost} thumbnail={false} />}
        <TagSelector tags={lineUpTags} location={location} />
        <ThumbnailContainer>
          {lineUpPosts.filter(this.hasAllSearchTags).map(lup => (
            <Post key={lup.id} post={lup} basePath="programmation/" thumbnail />
          ))}
        </ThumbnailContainer>
      </LineupContainer>
    );
  }
}

LineUp.propTypes = {
  route: PropTypes.object.isRequired,
};
