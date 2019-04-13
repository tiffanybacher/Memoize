import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it.skip('should match snapshot', () => {
    
  });

  it.skip('should have a default state', () => {

  });
});


