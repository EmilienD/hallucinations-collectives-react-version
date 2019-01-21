module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    document: true,
    fetch: true,
    window: true,
    Audio: true,
  },
};
