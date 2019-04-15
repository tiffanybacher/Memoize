import React, { Component } from 'react';

class AnswerInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    
  }

  handleClick = () => {
    this.props.findAnswer();
    this.props.getUserAnswer(this.userInput.innerText);
  }

  render() {
    return (
      <article className="AnswerInput">
        <h3>Answer:</h3>
        <div className="flex-container">
          <div 
            role="textbox"
            className="input"
            contentEditable="true"
            ref={el => (this.userInput = el)}
          >
          </div>
        </div>
          <div
            role="button"
            className="submit-btn"
            onClick={this.handleClick}>
            Submit 
          </div>
      </article>
    );
  }
}

export default AnswerInput;