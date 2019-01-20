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
  border: 1px solid black;
  border-radius: 1em;
  padding: 1em;
  flex-grow: 2;
  flex-shrink: 0;
`;
export const H2 = styled.h2``;
