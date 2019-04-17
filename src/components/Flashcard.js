import React, { Component } from 'react';

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerIsShown: false
    }
  }

  showAnswer = () => {
    console.log('Flashcard.showAnswer')
  }

  render() {
    if (this.props.answerIsShown || this.state.answerIsShown) {
      var answer = 
        <p className="Flashcard-answer">
          {this.props.answer}
        </p>
    }

    if (this.props.allCardsShown || this.props.missedCardsShown) {
      var showButton = 
        <button 
          className="show-btn"
          onClick={this.showAnswer}>
          Show Answer
        </button>
    }

    return (
      <article className="Flashcard">
        <h3 className="Flashcard-question">
          {this.props.question}
        </h3>
        {answer}
        {showButton}
      </article>
    )
  }
}

export default Flashcard;
