import React from 'react';
import shuffleArray from '../../constants/shuffle-array';
import View from './quotes-view';

const DEFAULT_ANIMATION_DURATION = 1500;

const DEFAULT_DELAY = 5000;

const EVENT_LISTENER_OPTIONS = {
  passive: true
};

export default class Quotes extends React.PureComponent {

  _shuffledQuotes = null;
  _shuffledQuotesParameter = null;

  lastTransition = 0;

  state = {
    first: true,
    forward: true,
    index: 0
  };

  timeout = null;

  componentDidMount() {
    this.setTimeout();
    window.addEventListener('blur', this.handleWindowBlur, EVENT_LISTENER_OPTIONS);
    window.addEventListener('focus', this.handleWindowFocus, EVENT_LISTENER_OPTIONS);
  }

  componentWillUnmount() {
    this.clearTimeout();
    window.removeEventListener('blur', this.handleWindowBlur, EVENT_LISTENER_OPTIONS);
    window.removeEventListener('focus', this.handleWindowFocus, EVENT_LISTENER_OPTIONS);
  }

  get animationDuration() {
    return this.props.animationDuration || DEFAULT_ANIMATION_DURATION;
  }

  get backwardIndex() {
    if (this.state.index === 0) {
      return this.quotes.length - 1;
    }
    return this.state.index - 1;
  }

  clearTimeout() {
    window.clearTimeout(this.timeout);
  }

  get delay() {
    return this.props.delay || DEFAULT_DELAY;
  }

  get forwardIndex() {
    return (this.state.index + 1) % this.quotes.length;
  }

  handleForward = () => {
    if (this.isAnimating) {
      return false;
    }
    this.lastTransition = Date.now();
    this.clearTimeout();
    this.setState(
      state => ({
        first: false,
        forward: true,
        index: (state.index + 1) % this.quotes.length
      }),
      () => {
        this.setTimeout();
      }
    );
    return true;
  };

  handlePrevious = () => {
    if (this.isAnimating) {
      return false;
    }
    this.lastTransition = Date.now();
    this.clearTimeout();
    this.setState(
      state => ({
        first: false,
        forward: false,
        index:
          state.index === 0 ?
            this.quotes.length - 1 :
            state.index - 1
      }),
      () => {
        this.setTimeout();
      }
    );
    return true;
  };

  handleMouseOut = () => {
    this.setTimeout(false);
  };

  handleMouseOver = () => {
    this.clearTimeout();
  };

  handleWindowBlur = () => {
    this.clearTimeout();
  };

  handleWindowFocus = () => {
    this.setTimeout(false);
  };

  get isAnimating() {
    return this.lastTransition > Date.now() - this.animationDuration;
  }

  get outgoingIndex() {
    return this.state.forward ? this.backwardIndex : this.forwardIndex;
  }

  get quotes() {
    return (
      this.props.shuffle ?
        this.shuffledQuotes :
        this.props.quotes
    );
  }

  setTimeout(animation = true) {
    if (!this.isAnimating) {
      this.clearTimeout();
      this.timeout = window.setTimeout(
        this.handleForward,
        animation ?
          this.delay :
          this.shortDelay
      );
    }
  }

  get shortDelay() {
    return this.props.shortDelay || this.animationDuration;
  }

  get shuffledQuotes() {
    if (this._shuffledQuotesParameter !== this.props.quotes) {
      this._shuffledQuotesParameter = this.props.quotes;
      this._shuffledQuotes = shuffleArray(this.props.quotes);
    }
    return this._shuffledQuotes;
  }

  render() {
    return (
      <View
        animate={!this.state.first}
        animationDuration={this.animationDuration}
        forward={this.state.forward}
        incoming={this.quotes[this.state.index]}
        onForward={this.handleForward}
        onPrevious={this.handlePrevious}
        onMouseOut={this.handleMouseOut}
        onMouseOver={this.handleMouseOver}
        outgoing={this.quotes[this.outgoingIndex]}
        {...this.props}
      />
    );
  }
}
