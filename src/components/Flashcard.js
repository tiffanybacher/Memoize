import React, { Component } from 'react';

class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      question: 'Mock question?',
      answer: 'Mock answer.'
    }
  }
  render() {
    return (
      <article className="Flashcard">
        <h3 className="Flashcard-question">
          {this.state.question}
        </h3>
      </article>
    )
  }
}

export default Flashcard;
