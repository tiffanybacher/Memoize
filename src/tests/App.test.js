import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

const getSavedCardSelection = jest.fn();
const getSavedCards = jest.fn();

const mockAllCards = [ 
  {
    "question": "What is an object in JavaScript?",
    "answer": "An object in JavaScript can be compared to an object in real life. It is a stand alone entity with it's own set of properties and methods.",
    "id": 1,
    "group": 1
  },
  {
    "question": "What is a method?",
    "answer": "A method is a function that describes a behavior of an object.",
    "id": 2,
    "group": 1
  }
];
const mockCardSelection = mockAllCards;
const mockCurrentCardData = {
    "question": "What is an object in JavaScript?",
    "answer": "An object in JavaScript can be compared to an object in real life. It is a stand alone entity with it's own set of properties and methods.",
    "id": 1,
    "group": 1
  }
const mockSavedCards = [mockCurrentCardData];
const mockQuestion = 'What is an object in JavaScript?';
const mockAnswer = 'An object in JavaScript can be compared to an object in real life. It is a stand alone entity with it\'s own set of properties and methods.';
const mockUserAnswer = 'An object is something that represents a thing in real life.';

const defaultState = {
  group: 1,
  allCards: '',
  cardSelection: null,
  currentCardData: '',
  answerIsShown: false,
  userAnswer: '',
  savedMsgIsShown: false,
  savedCards: null
}

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should show answer when showAnswer is called', () => {
    wrapper.instance().showAnswer();

    expect(wrapper.state('answerIsShown')).toEqual(true);
  });

  it('should update userAnswer when getUserAnswer is called', () => {
    wrapper.instance().getUserAnswer(mockUserAnswer);

    expect(wrapper.state('userAnswer')).toEqual(mockUserAnswer);
  });

  it('should get saved card selection from local storage', () => {
    wrapper.instance().getSavedCardSelection();

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should start a fresh card selection using all the cards if no selection is found in local storage', () => {
    wrapper.setState({
      allCards: mockAllCards,
      cardSelection: null
    });

    wrapper.instance().startFreshCardSelection();

    expect(wrapper.state('cardSelection')).toEqual(mockAllCards);
  });

  it('should remove the current card of allCards and return a new selection to cardSelection if there is no current selection', () => {
    wrapper.setState({
      allCards: mockAllCards,
      cardSelection: null
    });

    wrapper.instance().updateCardSelection();

    expect(wrapper.state('cardSelection')).toEqual([{
      "question": "What is a method?",
      "answer": "A method is a function that describes a behavior of an object.",
      "id": 2,
      "group": 1
    }]);
  });

  it('should remove the current card of cardSelection and return a new selection to cardSelection', () => {
    wrapper.setState({
      allCards: mockAllCards,
      cardSelection: mockCardSelection
    });

    wrapper.instance().updateCardSelection();

    expect(wrapper.state('cardSelection')).toEqual([{
      "question": "What is a method?",
      "answer": "A method is a function that describes a behavior of an object.",
      "id": 2,
      "group": 1
    }]);
  });

  it('should save current card selection to storage if a current selection exists', () => {
    wrapper.instance().saveCurrentCardsToStorage();

    expect(localStorage.getItem).toHaveBeenCalled();

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should update currentCardData with the first item in cardSelection', () => {
    wrapper.setState({
      allCards: mockAllCards,
      cardSelection: mockCardSelection
    });

    wrapper.instance().updateCardData();

    expect(wrapper.state('currentCardData')).toEqual(mockCurrentCardData);
  });

  it('should update currentCardData with the first item in allCards if cardSelection is null', () => {
    wrapper.setState({
      allCards: mockAllCards,
      cardSelection: null
    });

    wrapper.instance().updateCardData();
    
    expect(wrapper.state('currentCardData')).toEqual(mockCurrentCardData);
  });

  it('should get save cards from local storage', () => {
    wrapper.instance().getSavedCards();

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('should save card to local storage', () => {
    wrapper.instance().saveCardToStorage();

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should update savedCards when a card is saved', () => {
    wrapper.setState({
      currentCardData: mockCurrentCardData,
      savedCards: null
    });

    wrapper.instance().updateSavedCards();

    expect(wrapper.state('savedCards')).toEqual([mockCurrentCardData]);
  });

  it('should be able to take in multiple cards to savedCards', () => {
    wrapper.setState({
      currentCardData: mockCardSelection[1],
      savedCards: mockSavedCards
    });

    wrapper.instance().updateSavedCards();

    expect(wrapper.state('savedCards')).toEqual(mockCardSelection);
  });

  it('should hide answer', () => {
    wrapper.instance().hideAnswer();

    expect(wrapper.state('answerIsShown')).toEqual(false);
  });

  it('should show message letting user know we saved a card', () => {
    wrapper.instance().showSavedMsg();

    expect(wrapper.state('savedMsgIsShown')).toEqual(true);
  });

  it('should hide message letting user know we saved a card', () => {
    wrapper.instance().hideSavedMsg();

    expect(wrapper.state('savedMsgIsShown')).toEqual(false);
  });
});


