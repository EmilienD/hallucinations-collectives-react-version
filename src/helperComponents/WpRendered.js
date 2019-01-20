import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WpStyle = styled.div`
  .has-huge-font-size {
    font-size: 3em;
  }
  .has-large-font-size {
    font-size: 2em;
  }
  .has-small-font-size {
    font-size: 0.5em;
  }
  img {
    max-width: 100%;
  }
  iframe {
    margin: auto;
    display: block;
  }
`;

export default function WpRendered({ rendered, ...props }) {
  // because the only html parsing lib I've found so far adds half a second to the loading time
  // eslint-disable-next-line react/no-danger
  return rendered ? (
    <WpStyle {...props} dangerouslySetInnerHTML={{ __html: rendered }} />
  ) : (
    <p>loading...</p>
  );
}

WpRendered.propTypes = {
  rendered: PropTypes.string,
};

WpRendered.defaultProps = {
  rendered: '',
};
