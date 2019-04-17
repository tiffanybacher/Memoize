import React, { Component } from 'react';
import Flashcard from '../components/Flashcard'

class MissedCardsArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.savedCards) {
      return(
        <section className="MissedCardsArea">
          {this.props.savedCards.map(card =>
            <Flashcard 
              missedCardsShown={this.props.missedCardsShown}
              question={card.question}
              answer={card.answer}
              key={card.id}
            />
          )}
        </section>
      );
    } else {
      return null;
    }
  }
}

export default MissedCardsArea;