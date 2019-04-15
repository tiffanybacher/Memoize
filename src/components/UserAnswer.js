import React, { Component } from 'react';

class UserAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displaySavedBtn: false
    }
  }

  handleGreenClick = () => {
    this.props.hideAnswer();
    this.props.displayNextQuestion();
  }

  handleGreyClick = () => {
    this.props.displaySavedMsg();
    this.setState({
      displaySavedBtn: true
    });
  }

  render() {
    if (this.state.displaySavedBtn) {
      return (
          <button
            className="next-btn"
            onClick={this.handleGreenClick}>
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
              className="green-btn"
              onClick={this.handleGreenClick}>
                I feel good about this!</button>
            <button 
              className="grey-btn"
              onClick={this.handleGreyClick}>
                I may need to come back to this.</button>
          </div>
        </section>
      );
    }
  }
}

export default UserAnswer;