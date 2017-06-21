import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  App: {
    textAlign: 'center'
  },

  page: {
      position: 'absolute';
      height: '100%';
      width: '100%';
      display: 'flex';
      align-items: 'center';
      justify-content: 'center';
      transition: 'all 0.5s ease-in';
  },
  a: {
      color: #fff;
  },
  page1: {
      backgroundColor: '#222';
  },
  page2: {
      backgroundColor: '#444';
  },
  animationEnter: {
      top: '-100%';
  },
  animationEnterActive: {
      top: 0;
  },
  animationLeave: {
      top: 0;
  },
  animationLeaveActive: {
      top: '100%';
})


import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Page1 = () => {
  return (
      <div className={css(styles.page, styles.page1)} >
        <Link to="/page2">Go to Page 2</Link>
      </div>
    )
};

const Page2 = () => {
  return (
      <div lassName={css(styles.page, styles.page2)}>
        <Link to="/page1">Go to Page 1</Link>
      </div>
    )
};

class Container extends Component {
  render() {
    var child = React.cloneElement( React.Children.only( this.props.children ), {
          key: Math.random()
        });
    return (
        <ReactCSSTransitionGroup
          transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }
          transitionName="animation" component="div" className="holder">
          { child }
        </ReactCSSTransitionGroup>
    )
  }
}
