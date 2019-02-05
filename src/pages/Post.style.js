import styled from 'styled-components';

export const Thumbnail = styled.div`
  background-image: url("${props => props.backgroundImage}");
  overflow: hidden;
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 5px;
  width: 200px;
  height: 200px;
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
export const FullSize = styled('article')`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 1em;
  flex-grow: 2;
  flex-shrink: 0;
  margin: 0 auto;
  max-width: 38em;
  padding: 1em;
  .wp-block-image {
    position: relative;
  }
  .wp-block-image figcaption {
    position: absolute;
    bottom: 0;
  }
`;
export const H2 = styled.h2``;
