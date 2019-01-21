import React, { Component } from 'react';
import styled from 'styled-components';
import Svg from './helperComponents/LazyLoadingInlineSvg';

const FALLING_MAN_SIZE = 10;

const FallingInStyle = styled.div`
  position: fixed;
  top: -${FALLING_MAN_SIZE}vh;
  left: 50%;
  svg {
    height: ${FALLING_MAN_SIZE}vh;
  }
  &.falling {
    transition: top 2s cubic-bezier(0.31, 0.44, 0.445, 1.65);
    top: 100vh;
  }
`;

class FallingWilhelm extends Component {
  constructor() {
    super();
    this.state = {
      falling: false,
    };
    this.fall = this.fall.bind(this);
    this.reset = this.reset.bind(this);

    const scream = new Audio('/assets/WilhelmScream.mp3');
    scream.play();
    scream.pause();
    this.scream = scream;
  }

  componentDidMount() {
    setInterval(this.fall, 300000); // 300000ms = 5min
  }

  fall() {
    this.setState({ falling: true });
    this.scream.play();
  }

  reset() {
    this.setState({ falling: false });
  }

  render() {
    const { falling } = this.state;
    return (
      <FallingInStyle onTransitionEnd={this.reset} className={falling ? 'falling' : ''}>
        <media />
        <Svg src="/assets/fallingman.svg" />
      </FallingInStyle>
    );
  }
}

export default FallingWilhelm;
