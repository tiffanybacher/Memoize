import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';
import UserAnswer from '../components/UserAnswer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      group: 1,
      cardQuestions: '',
      question: '',
      answer: '',
      displayAnswer: false,
      userAnswer: '',
      displaySavedMsg: false
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

  getNextQuestion = () => {
    let length = this.state.cardQuestions.length
    this.setState({
      cardQuestions: this.state.cardQuestions.slice(1, length)
    })
  }

  hideAnswer = () => {
    this.setState({
      displayAnswer: false
    })
  }

  displayNextQuestion = () => {
    this.setState({
      question: this.state.cardQuestions[0].question
    })
  }

  displaySavedMsg = () => {
    this.setState({
      displaySavedMsg: true
    })
  }

  render() {
    let answerInput;
    let instructions;
    let header;

   
    if (this.state.displayAnswer && this.state.displaySavedMsg) {
      answerInput = 
        <UserAnswer 
        userAnswer={this.state.userAnswer}
        hideAnswer={this.hideAnswer}
        displayNextQuestion={this.displayNextQuestion}
        displaySavedMsg={this.displaySavedMsg} />
      instructions = null;
      header = 
      <h2>No problem! We will save this question to your Missed Flashcards!</h2>
    } else if (this.state.displayAnswer) {
      answerInput = 
        <UserAnswer 
        userAnswer={this.state.userAnswer}
        hideAnswer={this.hideAnswer}
        displayNextQuestion={this.displayNextQuestion}
        displaySavedMsg={this.displaySavedMsg} />
      instructions =
        <p>If you feel good about your answer, click the top button to move on! If you think you may need more review, click the bottom button to come back to this question later.</p>
      header = 
        <h2>Check your answer!</h2>
    } else {
      answerInput = 
        <AnswerInput 
          findAnswer={this.findAnswer}
          getUserAnswer={this.getUserAnswer}
          getNextQuestion={this.getNextQuestion}
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
