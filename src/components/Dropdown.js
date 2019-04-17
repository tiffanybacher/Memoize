import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  handleMouseLeave = () => {
    this.props.hideDropdown();
  }

  goToAllFlashcards = () => {
    console.log('all flashcards')
    this.props.hideMainFlashcard();
    this.props.showAllFlashcards();
    // map through all cards to create a card component
    // tap btn to reveal answer
    // btn only available if allCardsShown is true
  }

  goToMissedFlashcards = () => {
    console.log('missed flashcards')
   // render missedCards component
   // map through each card to create a card component
   // tap btn to reveal answer
   // tap btn to remove card from review deck
   // buttons only available if missedCardsShown is true
  }

  startOver = () => {
    console.log('start over')
    // create pop up to ask if user is sure
    // remove saved cards from local storage
    // remove card selection from local storage
    // reset all state defaults
  }

  render() {
    return (
      <article className="Dropdown">
        <ul onMouseLeave={this.handleMouseLeave}>
          <li onClick={this.goToAllFlashcards}>All Flashcards</li>
          <li onClick={this.goToMissedFlashcards}>Missed Flashcards</li>
          <li onClick={this.startOver}>Start Over</li>
        </ul>
      </article>
    );
  }
}

export default Dropdown;