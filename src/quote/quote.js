import React from 'react';
import styles from './quote-styles';

class Quote extends React.PureComponent {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.image}>
          <img
            alt={this.props.author}
            height={100}
            src={this.props.image}
            title=""
            width={100}
          />
        </div>
        <blockquote>
          <q
            children={this.props.quote}
            style={styles.quote}
          />
          <cite
            children={this.props.author}
            style={styles.author}
          />,{' '}
          <span
            children={this.props.company}
            style={styles.company}
          />
        </blockquote>
      </div>
    );
  }
}

export default Quote;
