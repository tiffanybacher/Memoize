import React, { Component } from 'react';
import Flashcard from '../components/Flashcard';

class AllCardsArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="AllCardsArea">
        {this.props.allCards.map(card => 
          <Flashcard 
            question={card.question}
            answer={card.answer}
            allCardsShown={this.props.allCardsShown} />
        )}
      </section>
    );
  }
}

export default AllCardsArea;

// <article className="Flashcard">
//             <h3 className="Flashcard-question">
//               {card.question}
//             </h3>
//               {card.answer}
//           </article>