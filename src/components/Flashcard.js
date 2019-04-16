import React, { Component } from 'react';

class Flashcard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.displayAnswer) {
      var answer = 
        <p className="Flashcard-answer">
          {this.props.answer}
        </p>
    }

    return (
      <article className="Flashcard">
        <h3 className="Flashcard-question">
          {this.props.question}
        </h3>
        {answer}
      </article>
    )
  }
}

export default Flashcard;
