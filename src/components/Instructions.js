import React, { Component } from 'react';

class Instructions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      let header;
      let instructions;

      if (this.props.answerIsShown && this.props.savedMsgIsShown) {
        header = 
          <h2 aria-live="polite">No problem! We will save this question to your Missed Flashcards!</h2>
        instructions = null;
      } else if (this.props.answerIsShown) {
        header =
          <h2 aria-live="polite">Check your answer!</h2>
        instructions =
          <p aria-live="polite">If you feel good about your answer, let's keep going! If you think you may need more review, you can save this card to come back to this question later.</p>
      } else if (this.props.allCardsShown) {
          header =
            <h2>All Flashcards</h2>
          instructions =
            <a 
              className="back-btn" 
              onClick={this.backToQuiz}>
              Go back to quiz
            </a>
      } else {
        header =
          <h2>Learn About Objects and Classes!</h2>
        instructions = 
          <p aria-live="polite">Answer the question on the flashcard below. Submit your answer first then check your answer!</p>
      }

    return(
      <section className="Instructions">
        {header}
        {instructions}
      </section>
    );
  }
}

export default Instructions;