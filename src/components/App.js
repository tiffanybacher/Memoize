import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';
import UserAnswer from '../components/UserAnswer';

let data = require('../data.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      group: 1,
      question: data.objectQuestions[0].question,
      answer: '',
      displayAnswer: false,
      userAnswer: ''
    }
  }

  findAnswer = () => {
    this.setState({
      answer: data.objectQuestions[0].answer,
      displayAnswer: true
    }, () => {console.log(this.state.answer)});
  }

  getUserAnswer = (answerInput) => {
    this.setState({
      userAnswer: answerInput
    }, () => console.log(this.state.userAnswer));
  }

  render() {
    if (this.state.displayAnswer) {
      var answerInput = 
        <UserAnswer userAnswer={this.state.userAnswer}/>
      var instructions =
        <p>If you feel good about your answer, click the top button to move on! If you think you may need more review, click the bottom button to come back to this question later.</p>
      var header = 
        <h2>Check your answer!</h2>
    } else {
      var answerInput = 
        <AnswerInput 
          findAnswer={this.findAnswer}
          getUserAnswer={this.getUserAnswer}
        />
      var instructions = 
        <p>Answer the question on the flashcard below. Submit your answer first then check your answer!</p>
      var header =
        <h2>Learn About Objects and Classes!</h2>
    }

    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Cat />
        <section className="main-background">
          <div className="main-container">
            {header}
            {instructions}
            <Flashcard 
              question={this.state.question}
              answer={this.state.answer}
              displayAnswer={this.state.displayAnswer}
            />
            {answerInput}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
