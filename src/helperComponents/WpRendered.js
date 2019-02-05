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
    height: auto;
  }
  .wp-block-image {
    text-align: center;
  }
  .wp-block-embed-youtube {
    margin: 20px auto;
  }
  .wp-block-embed-youtube > .wp-block-embed__wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
  .wp-block-embed-youtube > .wp-block-embed__wrapper > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .gm-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }
  .gm-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
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
