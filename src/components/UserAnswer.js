import React, { Component } from 'react';

class UserAnswer extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.hideAnswer();
    this.props.displayNextQuestion();
  }

  render() {
    return (
      <section className="UserAnswer">
        <h3>Your Answer:</h3>
        <p>{this.props.userAnswer}</p>
        <div className="user-btn-area">
          <button 
            className="green-btn"
            onClick={this.handleClick}>
              I feel good about this!</button>
          <button 
            className="grey-btn">
              I may need to come back to this.</button>
        </div>
      </section>
    );
  }
}

export default UserAnswer;