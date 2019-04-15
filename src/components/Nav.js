import React, { Component } from 'react';
import Dropdown from '../components/Dropdown';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      slide: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 220) {
      this.setState({ slide: '-80px' });
    } else {
      this.setState({ slide: '0px' });
    }
  }

  render() {
    return (
      <nav 
        className="Nav"
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: `transform 200ms linear`
        }}>
        <h1 className="Nav-header">Memoize</h1>
        <i className="fas fa-bars bars-active"></i>
        <Dropdown />
      </nav>
    );
  }
}

export default Nav;