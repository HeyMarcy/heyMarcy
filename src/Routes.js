
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { CSSTransitionGroup } from 'react-transition-group'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';




class Fade extends Component {

    render() {
        return (
            <Route render={({location}) => (
                <CSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={200}
                >
                    {React.cloneElement(this.props.children, {location: location, key: location.key})}
                </CSSTransitionGroup>
            )}/>
        );
    }
}


class Routes extends Component {

    render() {
        return (
            <Router>
              <div >
                <Header />
                  <Fade>
                      <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route path="/work" component={Work}/>
                          <Route path="/contact" component={Contact}/>

                      </Switch>
                  </Fade>
              </div>
            </Router>
        );
    }
}


export default Routes;
