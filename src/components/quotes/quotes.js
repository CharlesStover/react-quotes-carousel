import memoizeOne from 'memoize-one';
import React from 'react';
import mapQuotes from './map-quotes';
import styles from './quotes.scss';

class Quotes extends React.PureComponent {

  mapQuotes = memoizeOne(mapQuotes);

  get className() {
    const classNames = [ styles.root ];
    if (this.props.className) {
      classNames.push(this.props.className);
    }
    return classNames.join(' ');
  }

  render() {
    return (
      <div
        children={this.mapQuotes(this.props.quotes, this.props.shuffle)}
        className={this.className}
      />
    );
  }
}

export default Quotes;
