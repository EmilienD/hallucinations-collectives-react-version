import config from '../config';

const CURRENT_EDITION = new Date().getFullYear();

const Cache = {};

const get = path => queryString => fetch(`${config.wordpressBasePath}/${path}${queryString ? `?${queryString}` : ''}`).then(res => res.json());
const toCache = location => fn => (...args) => {
  const cacheAddress = location + JSON.stringify(args);
  return Cache[cacheAddress]
    ? Promise.resolve(Cache[cacheAddress])
    : fn(...args).then((res) => {
      Cache[cacheAddress] = res;
      return res;
    });
};

const getPages = toCache('pages')(get('pages'));
const getChildrenPagesOf = pageId => getPages(`parent=${pageId}`);

const getTags = toCache('tags')(get('tags'));
const findYearTag = tags => tags.find(t => t.name === CURRENT_EDITION.toString());

const getPosts = toCache('posts')(get('posts'));

const getMedia = toCache('media')(get('media'));
const getMediaById = toCache('media')(id => get(`media/${id}`)());

const getCategories = toCache('categories')(get('categories'));
const getLineupCategory = () => getCategories('name=programmation').then(cats => cats[0]);

const getCurrentLineupPosts = () => Promise.all([getLineupCategory(), getTags().then(findYearTag)]).then(
  ([lineupCategory, yearTag]) => getPosts(`per_page=100&tags=${yearTag.id}&category=${lineupCategory.id}`),
);

export default {
  getCategories,
  getChildrenPagesOf,
  getCurrentLineupPosts,
  getLineupCategory,
  getMedia,
  getMediaById,
  getPages,
  getPosts,
  getTags,
};
