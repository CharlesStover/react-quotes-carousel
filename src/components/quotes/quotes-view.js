import React from 'react';
import Quote from '../quote/quote';
import styles from './quotes.scss';

export default class Quotes extends React.PureComponent {

  get carouselClassName() {
    const classNames = [ styles.carousel ];
    classNames.push(
      this.props.forward ?
        styles.forward :
        styles.backward
    );
    return classNames.join(' ');
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
            className={styles.incoming}
            key={'in ' + this.props.incoming.quote}
            {...this.props.incoming}
          />
          <Quote
            className={styles.outgoing}
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
