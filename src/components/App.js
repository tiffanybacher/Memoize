import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';
import cardQuestions from '../data';

let data = require('../data.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      question: data.cardQuestions[0].question,
      answer: '',
      displayAnswer: false
    }
  }

  findAnswer = () => {
    this.setState({
      answer: data.cardQuestions[0].answer,
      displayAnswer: true
    }, () => {console.log(this.state.answer)});
  }

  render() {
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
            <AnswerInput findAnswer={this.findAnswer} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
