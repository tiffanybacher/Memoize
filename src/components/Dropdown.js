import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  handleMouseLeave = () => {
    this.props.hideDropdown();
  }

  render() {
    return (
      <article className="Dropdown">
        <ul onMouseLeave={this.handleMouseLeave}>
          <li>All Flashcards</li>
          <li>Missed Flashcards</li>
          <li>Start Over</li>
        </ul>
      </article>
    );
  }
}

export default Dropdown;