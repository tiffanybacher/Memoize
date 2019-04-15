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
      userAnswer: 'WHAT'
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
      var answerInput = <UserAnswer />
    } else {
      var answerInput = 
        <AnswerInput 
          findAnswer={this.findAnswer}
          getUserAnswer={this.getUserAnswer}
        />
    }

    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Cat />
        <section className="main-background">
          <div className="main-container">
            <h2>Learn About Objects and Classes!</h2>
            <p>Answer the question on the flashcard below. Check your answer before moving on to the next card!</p>
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
