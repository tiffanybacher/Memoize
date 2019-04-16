import React, { Component } from 'react';
import Dropdown from '../components/Dropdown';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
      showDropdown: false
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

  handleClick = () => {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  }

  hideDropdown = () => {
    this.setState({
      showDropdown: false
    })
  }

  render() {
    if (this.state.showDropdown) {
      var dropdown = <Dropdown 
        showDropdown={this.state.showDropdown}
        hideDropdown={this.hideDropdown} />
    }

    return (
      <nav 
        className="Nav"
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: `transform 200ms linear` 
        }} >
        <h1 className="Nav-header">Memoize</h1>
        <i 
          className={this.state.showDropdown 
          ? "fas fa-bars bars-active"
          : "fas fa-bars"}
          onClick={this.handleClick}>
        </i>
        {dropdown}
      </nav>
    );
  }
}

export default Nav;