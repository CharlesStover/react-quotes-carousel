import memoizeOne from 'memoize-one';
import React from 'react';
import Carousel from '../carousel/carousel';
import shuffleArray from '../../constants/shuffle-array';
import styles from './quotes.scss';

export default class Quotes extends React.PureComponent {

  shuffleQuotes = memoizeOne(shuffleArray);

  get className() {
    const classNames = [ styles.root ];
    if (this.props.className) {
      classNames.push(this.props.className);
    }
    return classNames.join(' ');
  }

  get quotes() {
    return (
      this.props.shuffle ?
        this.shuffleQuotes(this.props.quotes) :
        this.props.quotes
    );
  }

  render() {
    return (
      <div className={this.className}>
        <div className={styles.left} />
        <Carousel children={this.quotes} />
        <div className={styles.right} />
      </div>
    );
  }
}
