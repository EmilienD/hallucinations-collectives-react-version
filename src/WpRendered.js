import React from 'react';

export default function WpRendered({ rendered = '', ...props }) {
  // eslint-disable-next-line react/no-danger
  return <div {...props} dangerouslySetInnerHTML={{ __html: rendered }} />;
}
