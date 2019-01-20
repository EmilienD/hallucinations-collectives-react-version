import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import assoc from 'lodash/fp/assoc';

const TagList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TagListItem = styled.li`
  a {
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 0.5em 1em;
    border-radius: 1em;
    margin: 0.5em;
    display: block;
    text-decoration: none;
    color: black;
  }
  &:hover a,
  &.selected a {
    background-color: black;
    color: white;
  }
`;

const getSearchedTagsArray = parsedSearch => [].concat((parsedSearch.tags || '').split(',').filter(t => t)).map(Number);

const toggleTagSearch = (tagId, parsedSearch) => {
  const currentSearchTag = Number(parsedSearch.tags);
  const removeTag = tagId === currentSearchTag;
  const newParsedSearch = assoc('tags', removeTag ? undefined : tagId, parsedSearch);
  return newParsedSearch;
};
// Cumulative add tag
// const addTagToSearch = (tagId, parsedSearch) => {
//   const newSearchedTags = getSearchedTagsArray(parsedSearch)
//     .concat(tagId)
//     .join(',') || undefined;
//   const newParsedSearch = assoc('tags', newSearchedTags, parsedSearch);
//   return newParsedSearch;
// };

// cumulative remove tag
// const removeTagFromSearch = (tagId, parsedSearch) => {
//   const newSearchedTags = getSearchedTagsArray(parsedSearch)
//     .filter(t => t !== tagId)
//     .join(',') || undefined;
//   const newParsedSearch = assoc('tags', newSearchedTags, parsedSearch);
//   return newParsedSearch;
// };
const TagSelector = ({ tags, location }) => {
  const { pathname, search } = location;
  const parsedSearch = queryString.parse(search);
  const searchedTags = getSearchedTagsArray(parsedSearch);

  return (
    <TagList>
      {tags.map(t => (
        <TagListItem
          key={t.id}
          className={searchedTags.find(tagId => tagId === t.id) ? 'selected' : ''}
        >
          <Link
            to={`${pathname}?${queryString.stringify(toggleTagSearch(t.id, parsedSearch), {
              encode: false,
            })}`}
          >
            {t.name}
          </Link>
        </TagListItem>
      ))}
    </TagList>
  );
};

export default TagSelector;
