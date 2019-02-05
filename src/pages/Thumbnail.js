import React from 'react';
import path from 'lodash/fp/path';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WpRendered from '../helperComponents/WpRendered';

export const ThumbnailStyled = styled.div`
  background-image: url("${props => props.backgroundImage}");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 5px;
  width: 320px;
  height: 320px;
  margin: 0 10px 10px 0;
  padding: 1em;
  && {
    text-decoration: none;
  }
  & > * {
    display: none;
  }
  &:hover > * {
    display: initial;
  }
  &:hover {
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.65) 100%), url("${props => props.backgroundImage}");
  }
`;

const Thumbnail = ({ post, media }) => (
  <ThumbnailStyled backgroundImage={path('source_url', media)}>
    <WpRendered rendered={path('title.rendered', post)} />
    <WpRendered rendered={path('excerpt.rendered', post)} />
  </ThumbnailStyled>
);

Thumbnail.propTypes = {
  post: PropTypes.object.isRequired,
  media: PropTypes.object.isRequired,
};

export default Thumbnail;
