import React, { Component } from 'react';

class UserArea extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displaySavedBtn: false
    }
  }

  moveToNextQuestion = () => {
    this.props.hideSavedMsg();
    this.props.hideAnswer();
    this.props.updateCardSelection();
  }

  saveCard = () => {
    this.props.saveCardToStorage();
    this.props.updateSavedCards();
    this.props.showSavedMsg();
    this.setState({
      displaySavedBtn: true
    });
  }

  render() {
    if (this.state.displaySavedBtn) {
      return (
          <button
            className="next-btn"
            onClick={this.moveToNextQuestion}>
            Okay! Next Question!
          </button>
      );
    } else {
      return (
        <section className="UserAnswer">
          <h3>Your Answer:</h3>
          <p>{this.props.userAnswer}</p>
          <div className="user-btn-area">
            <button 
              className="accept-btn"
              onClick={this.moveToNextQuestion}>
                I feel good about this!</button>
            <button 
              className="save-btn"
              onClick={this.saveCard}>
                I may need to come back to this.</button>
          </div>
        </section>
      );
    }
  }
}

export default UserArea;