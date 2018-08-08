import React from 'react';
import styles from './quote.scss';

class Quote extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.image}>
          <img
            alt={this.props.author}
            className={styles.image}
            height={100}
            src={this.props.image}
            title=""
            width={100}
          />
        </div>
        <blockquote className={styles.quote}>
          <q
            children={this.props.quote}
            className={styles.quote}
          />
          <cite
            children={this.props.author}
            className={styles.author}
          />,{' '}
          <span
            children={this.props.company}
            className={styles.company}
          />
        </blockquote>
      </div>
    );
  }
}

export default Quote;
