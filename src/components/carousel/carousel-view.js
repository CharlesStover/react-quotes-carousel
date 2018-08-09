import React from 'react';
import Quote from '../quote/quote';
import styles from './carousel.scss';

export default class Carousel extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <Quote
          className={styles.incoming}
          {...this.props.incoming}
        />
        <Quote
          className={styles.outgoing}
          {...this.props.outgoing}
        />
      </div>
    );
  }
}
