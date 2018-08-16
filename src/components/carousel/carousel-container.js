import React from 'react';
import View from './carousel-view';

const DELAY = 1000;

export default class Carousel extends React.PureComponent {

  state = {
    index: 0
  };

  timeout = null;

  componentDidMount() {
    this.setTimeout();
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  clearTimeout() {
    window.clearTimeout(this.timeout);
  }

  handleMouseOut = e => {
    this.setTimeout();
  };

  handleMouseOver = e => {
    this.clearTimeout();
  };

  get outgoingIndex() {
    if (this.state.index === 0) {
      return this.props.children.length - 1;
    }
    return this.state.index - 1;
  }

  scroll = () => {
    this.setState(state => ({
      index: (state.index + 1) % this.props.children.length
    }));
  }

  setTimeout() {
    window.setTimeout(this.scroll, DELAY);
  }

  render() {
    return (
      <View
        incoming={this.props.children[this.state.index]}
        onMouseOut={this.handleMouseOut}
        onMouseOver={this.handleMouseOver}
        outgoing={this.props.children[this.outgoingIndex]}
      />
    );
  }
}
