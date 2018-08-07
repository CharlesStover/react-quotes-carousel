import React from 'react';
import quoteStyles from './quote-styles';

class Quote extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.image}>
          <img
            alt={this.props.author}
            height={100}
            src={this.props.image}
            title=""
            width={100}
          />
        </div>
        <q
          children={this.props.quote}
          className={this.props.classes.quote}
        />
        <cite
          children={this.props.author}
          className={this.props.classes.author}
        />,{' '}
        <span
          children={this.props.company}
          className={this.props.classes.company}
        />
      </div>
    );
  }
}

export default quoteStyles(Quote);
