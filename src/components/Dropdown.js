import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <article className="Dropdown">
        <ul>
          <li>All Flashcards</li>
          <li>Missed Flashcards</li>
          <li>Review Sheet</li>
          <li>Take Quiz</li>
        </ul>
      </article>
    );
  }
}