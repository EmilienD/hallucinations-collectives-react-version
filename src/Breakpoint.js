import { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

const XS = 0;
const S = 575;
const M = 767;
const L = 991;
const XL = 1200;

// ! \\ IMPORTANT: sort from smaller to bigger
const breakpointsToRenderName = [
  { bp: XS, renderName: 'renderXS' },
  { bp: S, renderName: 'renderS' },
  { bp: M, renderName: 'renderM' },
  { bp: L, renderName: 'renderL' },
  { bp: XL, renderName: 'renderXL' },
];

export default class Breakpoints extends Component {
  constructor() {
    super();
    this.state = { renderName: 'renderXS' };
  }

  componentDidMount() {
    this.setMatchedBreakpoint();
    window.addEventListener('resize', debounce(() => this.setMatchedBreakpoint(), 5));
  }

  setMatchedBreakpoint() {
    const breakpointAboveMin = breakpointsToRenderName
      .concat()
      .reverse()
      .find(
        ({ bp, renderName }) => window.matchMedia(`(min-width: ${bp}px)`).matches && this.propExists(renderName),
      );
    const { renderName } = this.state;
    if (renderName !== breakpointAboveMin.renderName) {
      this.setState({
        renderName: breakpointAboveMin.renderName,
      });
    }
  }

  propExists(propName) {
    // dynamic prop access
    // eslint-disable-next-line react/destructuring-assignment
    return !!this.props[propName];
  }

  render() {
    const { renderName } = this.state;
    // dynamic prop access
    // eslint-disable-next-line react/destructuring-assignment
    return this.props[renderName]();
  }
}
Breakpoints.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  // render props are accessed dynamically
  renderXS: PropTypes.func,
  /* eslint-disable react/require-default-props */
  // render props default to renderXS prop, which itself has a default
  renderS: PropTypes.func,
  renderM: PropTypes.func,
  renderL: PropTypes.func,
  renderXL: PropTypes.func,
  /* eslint-enable react/require-default-props */
  /* eslint-enable react/no-unused-prop-types */
};

Breakpoints.defaultProps = {
  renderXS: () => null,
};
Breakpoints.XS = XS;
Breakpoints.S = S;
Breakpoints.L = L;
Breakpoints.M = M;
Breakpoints.XL = XL;
