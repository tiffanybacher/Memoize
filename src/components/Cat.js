import React, { Component } from 'react';

class Cat extends Component {
  render() {
    return (
      <div className="cat-banner">
        <div className="main">
          <span className="stand"></span>
          <div className="cat">
            <div className="body"></div>
            <div className="head">
              <div className="ear"></div>
              <div className="ear"></div>
            </div>
            <div className="face">
              <div className="nose"></div>
              <div className="whisker-container">
                <div className="whisker"></div>
                <div className="whisker"></div>
              </div>
              <div className="whisker-container">
                <div className="whisker"></div>
                <div className="whisker"></div>
              </div>
            </div>
            <div className="tail-container">
              <div className="tail">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail">
                        <div className="tail">
                          <div className="tail"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Cat;

// HTML by Anastasia Goodwin on Code Pen
