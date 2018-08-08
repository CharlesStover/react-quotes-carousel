import memoizeOne from 'memoize-one';
import React from 'react';
import styles from './carousel.scss';
import mapQuotesToCarousel from './map-quotes-to-carousel';

export default class Carousel extends React.PureComponent {

  mapQuotesToCarousel = memoizeOne(mapQuotesToCarousel);

  render() {
    return (
      <div
        children={this.mapQuotesToCarousel(this.props.children)}
        className={styles.root}
      />
    );
  }
}
