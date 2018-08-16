import React from 'react';
import styles from './quote.scss';

export default class Quote extends React.PureComponent {
  render() {
    return (
      <div
        className={styles.root}
        style={this.props.style || null}
      >
        <div className={styles.image}>
          <img
            alt={this.props.author}
            height={100}
            src={this.props.image}
            title=""
            width={100}
          />
        </div>
        <blockquote>
          <q children={this.props.quote} />
          <cite
            children={this.props.author}
            title={this.props.company}
          />
        </blockquote>
      </div>
    );
  }
}
