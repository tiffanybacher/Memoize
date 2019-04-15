import React, { Component } from 'react';

class AnswerInput extends Component {
  render() {
    return (
      <article className="AnswerInput">
        <h3>Answer:</h3>
        <div className="flex-container">
          <div 
            role="textbox"
            className="input"
            contentEditable="true">
          </div>
        </div>
      </article>
    );
  }
}

export default AnswerInput;