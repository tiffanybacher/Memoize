import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  handleMouseLeave = () => {
    this.props.hideDropdown();
  }

  goToAllFlashcards = () => {
    this.props.hideMainFlashcard();
    this.props.showAllFlashcards();
    this.props.hideDropdown();
  }

  goToMissedFlashcards = () => {
   this.props.hideMainFlashcard();
   this.props.showMissedFlashcards();
   this.props.hideDropdown();
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
          <li onClick={this.goToMissedFlashcards}>Flashcards for Review</li>
          <li onClick={this.startOver}>Start Over</li>
        </ul>
      </article>
    );
  }
}

export default Dropdown;