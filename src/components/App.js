import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Instructions from '../components/Instructions'
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';
import UserArea from '../components/UserArea';

class App extends Component {
  constructor() {
    super();
    this.state = {
      group: 1,
      allCards: '',
      currentCardData: '',
      currentQuestion: '',
      currentAnswer: '',
      answerIsShown: false,
      userAnswer: '',
      savedMsgIsShown: false,
      savedCards: null
    }
  }

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/tiffanybacher/objectquestions')
      .then(response => response.json())
      .then(data => this.setState({
        allCards: data.objectQuestions,
        currentCardData: data.objectQuestions[0],
        currentQuestion: data.objectQuestions[0].question,
        currentAnswer: data.objectQuestions[0].answer }))
      .catch(err => console.log(err));
  }

  showAnswer = () => {
    this.setState({
      answerIsShown: true
    });
  }

  getUserAnswer = (answerInput) => {
    this.setState({
      userAnswer: answerInput
    });
  }

  getNextQuestion = () => {
    let length = this.state.allCards.length

    this.setState({
      allCards: this.state.allCards.slice(1, length),
    });
  }

  saveCardToStorage = () => {
    if (this.state.savedCards) {
      let allSavedCards = JSON.parse(localStorage.getItem('savedCards'));
      allSavedCards.push(this.state.allCards[0]);
      localStorage.setItem('savedCards', JSON.stringify(allSavedCards));
      this.setState({
        savedCards: this.state.savedCards.push(this.state.allCards[0])
      });
    } else {
      localStorage.setItem('savedCards', JSON.stringify([this.state.allCards[0]]));
      this.setState({
        saveCards: [this.state.allCards[0]]
      })
    }
    
  }

  hideAnswer = () => {
    this.setState({
      answerIsShown: false
    });
  }

  displayNextQuestion = () => {
    this.setState({
      question: this.state.allCards[0].question
    });
  }

  showSavedMsg = () => {
    this.setState({
      savedMsgIsShown: true
    });
  }

  hideSavedMsg = () => {
    this.setState({
      savedMsgIsShown: false
    })
  }

  render() {

    console.log('saved cards:', this.state.savedCards);
    console.log('all cards:', this.state.allCards)

    let userInput;

    if (this.state.answerIsShown) {
      userInput = 
        <UserArea 
        userAnswer={this.state.userAnswer}
        hideAnswer={this.hideAnswer}
        getNextQuestion={this.getNextQuestion}
        displayNextQuestion={this.displayNextQuestion}
        showSavedMsg={this.showSavedMsg}
        hideSavedMsg={this.hideSavedMsg}
        saveCardToStorage={this.saveCardToStorage} />
    } else {
      userInput = 
        <AnswerInput 
          showAnswer={this.showAnswer}
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
            <Instructions
              answerIsShown={this.state.answerIsShown}
              savedMsgIsShown={this.state.savedMsgIsShown} />
            <Flashcard 
              question={this.state.currentQuestion}
              answer={this.state.currentAnswer}
              answerIsShown={this.state.answerIsShown}
            />
            {userInput}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
