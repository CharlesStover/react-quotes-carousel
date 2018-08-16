import React from 'react';
import Quote from '../quote/quote';
import styles from './quotes.scss';

export default class Quotes extends React.PureComponent {

  // Memoization properties:
  _animationDuration = 1500;
  _incomingStyle = {
    animationDuration: '1.5s'
  };

  get carouselClassName() {
    const classNames = [ styles.carousel ];
    classNames.push(
      this.props.forward ?
        styles.forward :
        styles.backward
    );
    return classNames.join(' ');
  }

  get incomingStyle() {
    if (
      this._animationDuration !== this.props.animationDuration
    ) {
      this._animationDuration = this.props.animationDuration;
      this._incomingStyle = {
        animationDuration: (this.props.animationDuration / 1000) + 's'
      };
    }
    return this._incomingStyle;
  }

  get rootClassName() {
    const classNames = [ styles.root ];
    if (this.props.className) {
      classNames.push(this.props.className);
    }
    return classNames.join(' ');
  }

  render() {
    return (
      <div
        className={this.rootClassName}
        onMouseOut={this.props.onMouseOut}
        onMouseOver={this.props.onMouseOver}
      >
        <div
          className={styles.left}
          onClick={this.props.onPrevious}
        />
        <div className={this.carouselClassName}>
          <Quote
            key={'in ' + this.props.incoming.quote}
            style={this.incomingStyle}
            {...this.props.incoming}
          />
          <Quote
            key={'out ' + this.props.outgoing.quote}
            {...this.props.outgoing}
          />
        </div>
        <div
          className={styles.right}
          onClick={this.props.onForward}
        />
      </div>
    );
  }
}
