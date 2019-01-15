import React from 'react';
import PropTypes from 'prop-types';

export default function WpRendered({ rendered = '', ...props }) {
  // because the only html parsing lib I've found so far adds half a second to the loading time
  // eslint-disable-next-line react/no-danger
  return <div {...props} dangerouslySetInnerHTML={{ __html: rendered }} />;
}

WpRendered.propTypes = {
  rendered: PropTypes.string.isRequired,
};
