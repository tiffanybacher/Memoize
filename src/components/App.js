import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';
import UserAnswer from '../components/UserAnswer';

// let data = require('../data.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      group: 1,
      cardQuestions: '',
      question: '',
      answer: '',
      displayAnswer: false,
      userAnswer: ''
    }
  }

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/tiffanybacher/objectquestions')
      .then(response => response.json())
      .then(data => this.setState({
        cardQuestions: data.objectQuestions,
        question: data.objectQuestions[0].question}))
      .catch(err => console.log(err));
  }

  findAnswer = () => {
    this.setState({
      answer: this.state.cardQuestions[0].answer,
      displayAnswer: true
    });
  }

  getUserAnswer = (answerInput) => {
    this.setState({
      userAnswer: answerInput
    });
  }

  render() {
    console.log(this.state.cardQuestions)

    let answerInput;
    let instructions;
    let header;

    if (this.state.displayAnswer) {
      answerInput = 
        <UserAnswer userAnswer={this.state.userAnswer}/>
      instructions =
        <p>If you feel good about your answer, click the top button to move on! If you think you may need more review, click the bottom button to come back to this question later.</p>
      header = 
        <h2>Check your answer!</h2>
    } else {
      answerInput = 
        <AnswerInput 
          findAnswer={this.findAnswer}
          getUserAnswer={this.getUserAnswer}
        />
      instructions = 
        <p>Answer the question on the flashcard below. Submit your answer first then check your answer!</p>
      header =
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
