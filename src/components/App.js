import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cat from '../components/Cat';
import Flashcard from '../components/Flashcard';
import AnswerInput from '../components/AnswerInput';

class App extends Component {
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
            <Flashcard />
            <AnswerInput />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
