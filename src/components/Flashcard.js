import React, { Component } from 'react';

class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerIsShown: false,
      showBtnValue: 'Show Answer'
    }
  }

  toggleAnswer = () => {
    if (!this.state.answerIsShown) {
      this.setState({
        answerIsShown: true,
        showBtnValue: 'Hide Answer'
      });
    } else {
      this.setState({
        answerIsShown: false,
        showBtnValue: 'Show Answer'
      });
    }
  }

  render() {
    if (this.props.answerIsShown || this.state.answerIsShown) {
      var answer = 
        <p aria-live="polite" className="Flashcard-answer">
          {this.props.answer}
        </p>
    }

    if (this.props.allCardsShown || this.props.missedCardsShown) {
      var showButton = 
        <button 
          className="show-btn"
          onClick={this.toggleAnswer}>
          {this.state.showBtnValue}
        </button>
    }

    return (
      <article className="Flashcard">
        <h3 aria-live="polite" className="Flashcard-question">
          {this.props.question}
        </h3>
        {answer}
        {showButton}
      </article>
    )
  }
}

export default Flashcard;
