import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Instructions from '../components/Instructions'
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';
import UserArea from '../components/UserArea';
import AllCardsArea from '../components/AllCardsArea';
import MissedCardsArea from '../components/MissedCardsArea';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: '',
      cardSelection: this.getSavedCardSelection() || null,
      currentCardData: '',
      answerIsShown: false,
      userAnswer: '',
      savedMsgIsShown: false,
      savedCards: this.getSavedCards() || null,
      flashcardShown: true,
      allCardsShown: false,
      missedCardsShown: false
    }
  }

  componentDidMount() {
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/tiffanybacher/objectquestions')
      .then(response => response.json())
      .then(data => this.setState({
        allCards: data.objectQuestions }))
      .then(data => this.startFreshCardSelection())
      .then(data => this.setState({
        currentCardData: this.state.cardSelection[0] }))
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

  getSavedCardSelection = () => {
    return JSON.parse(localStorage.getItem('savedSelection'));
  }

  startFreshCardSelection = () => {
    if (!this.state.cardSelection) {
      this.setState({
        cardSelection: this.state.allCards
      });
    }
  }

  updateCardSelection = () => {
    if (!this.state.cardSelection) {
      let length = this.state.allCards.length;

      this.setState({
        cardSelection: this.state.allCards.slice(1, length)
      });
    } else {
      let length = this.state.cardSelection.length;

      this.setState({
        cardSelection: this.state.cardSelection.slice(1, length)
      }, () => this.updateCardData());
    }
  }

  saveCurrentCardsToStorage = () => {
    if (this.state.cardSelection) {
      let savedSelection = JSON.parse(localStorage.getItem('savedSelection'));

      savedSelection = this.state.cardSelection;

      localStorage.setItem('savedSelection', JSON.stringify(savedSelection));
    }
  }

  updateCardData = () => {
    this.saveCurrentCardsToStorage();
    if (this.state.cardSelection) {
      this.setState({
        currentCardData: this.state.cardSelection[0]
      });
    } else {
      this.setState({
        currentCardData: this.state.allCards[0]
      });
    }
  }

  getSavedCards = () => {
    return JSON.parse(localStorage.getItem('savedCards'));
  }

  saveCardToStorage = () => {
    if (this.state.savedCards) {
      let allSavedCards = JSON.parse(localStorage.getItem('savedCards'));

      allSavedCards.push(this.state.allCards[0]);
      localStorage.setItem('savedCards', JSON.stringify(allSavedCards));
    } else {
      localStorage.setItem('savedCards', JSON.stringify([this.state.allCards[0]]));
    }
  }

  removeAllFromStorage = () => {
    localStorage.removeItem('savedCards');
    localStorage.removeItem('savedSelection');
  }

  updateSavedCards = () => {
    if (!this.state.savedCards) {
      this.setState({
        savedCards: [this.state.currentCardData]
      });
    } else {
      this.setState({
        savedCards: this.state.savedCards.concat(this.state.currentCardData)
      })
    }
  }

  hideAnswer = () => {
    this.setState({
      answerIsShown: false
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
    });
  }

  hideMainFlashcard = () => {
    this.setState({
      flashcardShown: false
    });
  }

  showAllFlashcards = () => {
    this.setState({
      allCardsShown: true
    });
  }

  showMissedFlashcards = () => {
    this.setState({
      missedCardsShown: true
    });
  }

  backToMainCard = () => {
    this.setState({
      allCardsShown: false,
      missedCardsShown: false,
      flashcardShown: true
    });
  }

  resetDefaults = () => {
    this.removeAllFromStorage();

    this.setState({
      allCards: this.state.allCards,
      cardSelection: null,
      currentCardData: '',
      answerIsShown: false,
      userAnswer: '',
      savedMsgIsShown: false,
      savedCards: null,
      flashcardShown: true,
      allCardsShown: false,
      missedCardsShown: false
    });

    this.startFreshCardSelection();
    this.updateCardData();
  }

  render() {
    let UserInput;

    if (this.state.answerIsShown) {
      UserInput = 
        <UserArea 
          userAnswer={this.state.userAnswer}
          hideAnswer={this.hideAnswer}
          updateCardSelection={this.updateCardSelection}
          showSavedMsg={this.showSavedMsg}
          hideSavedMsg={this.hideSavedMsg}
          saveCardToStorage={this.saveCardToStorage}
          updateSavedCards={this.updateSavedCards}
          resetDefaults={this.resetDefaults}
          cardSelection={this.state.cardSelection}
        />
    } else if (this.state.flashcardShown) {
      UserInput = 
        <AnswerInput 
          showAnswer={this.showAnswer}
          getUserAnswer={this.getUserAnswer}
        />
    } 

    return (
      <div className="App">
        <header className="App-header">
          <Nav 
            hideMainFlashcard={this.hideMainFlashcard}
            showAllFlashcards={this.showAllFlashcards}
            showMissedFlashcards={this.showMissedFlashcards}
            resetDefaults={this.resetDefaults} />
        </header>
        <Cat />
        <section className="main-background">
          <div className="main-container">
            <Instructions
              answerIsShown={this.state.answerIsShown}
              savedMsgIsShown={this.state.savedMsgIsShown}
              allCardsShown={this.state.allCardsShown}
              missedCardsShown={this.state.missedCardsShown}
              backToMainCard ={this.backToMainCard }
              savedCards={this.state.savedCards} />

            {this.state.flashcardShown &&
              <Flashcard 
                question={this.state.currentCardData.question}
                answer={this.state.currentCardData.answer}
                answerIsShown={this.state.answerIsShown} /> 
            } 

            {this.state.allCardsShown &&
              <AllCardsArea
                allCards={this.state.allCards}
                allCardsShown={this.state.allCardsShown} />
            }

            {this.state.missedCardsShown &&
              <MissedCardsArea
                savedCards={this.state.savedCards}
                missedCardsShown={this.state.missedCardsShown} />
            }

            {UserInput}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
