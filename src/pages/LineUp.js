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

const DATE_TAG_REGEX = /^[0-9]{2}\/[0-9]{2}$/;

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
  a {
    text-decoration: none;
  }
`;

export default class LineUp extends Component {
  constructor() {
    super();
    this.state = {
      lineUpPosts: [],
      lineUpTags: [],
    };
    this.setPosts = this.setPosts.bind(this);
    this.isSelectedPost = this.isSelectedPost.bind(this);
    this.hasAllSearchTags = this.hasAllSearchTags.bind(this);
    this.sortPosts = this.sortPosts.bind(this);
  }

  componentDidMount() {
    wpService
      .getCurrentLineupPosts()
      .then(this.setPosts)
      .then(lineUpPosts => wpService.getTags().then((tags) => {
        const lineUpTags = this.setTags(tags, lineUpPosts);
        const { route } = this.props;
        if (!route.location.search) {
          route.history.replace({ ...route.location, search: `?tags=${lineUpTags[0].id}` });
        }
      }));
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
    const lineUpTags = tags.filter(t => DATE_TAG_REGEX.test(t.name) && lupTagIdMap[t.id]).sort();
    this.eventTag = tags.find(t => t.name === 'Expériences');
    this.bandTag = tags.find(t => t.name === 'Concerts');
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

  sortPosts(a, b) {
    if (this.bandTag) {
      const aIsBand = a.tags.includes(this.bandTag.id);
      const bIsBand = b.tags.includes(this.bandTag.id);
      // bands come before events
      if (aIsBand && !bIsBand) {
        return -1;
      }
      if (!aIsBand && bIsBand) {
        return 1;
      }
    }
    return path('title.rendered', a).localeCompare(path('title.rendered', b));
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
          {lineUpPosts
            .sort(this.sortPosts)
            .filter(this.hasAllSearchTags)
            .map(lup => (
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
