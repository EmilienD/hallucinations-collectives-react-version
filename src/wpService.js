import config from './config/local';

const getPages = queryString => fetch(`${config.wordpressBasePath}/pages${queryString ? `?${queryString}` : ''}`).then(res => res.json());
const getChildrenPagesOf = pageId => getPages(`parent=${pageId}`);

export default {
  getPages,
  getChildrenPagesOf,
};
