import config from '../config/local';

const get = path => queryString => fetch(`${config.wordpressBasePath}/${path}${queryString ? `?${queryString}` : ''}`).then(res => res.json());
const getPages = get('pages');
const getChildrenPagesOf = pageId => getPages(`parent=${pageId}`);
const getPosts = get('posts');

export default {
  getPages,
  getChildrenPagesOf,
  getPosts,
};
