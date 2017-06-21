import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styles from './css/index.js';
import './index.css';
import Fade from './Fade';

import Home from './Home';
import Work from './work/WorkPage';
import Contact from './Contact';
import Header from './Header';

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	var now = new Date();
	// 	this.state = {
	// 		h: now.getHours()
	// 	};
	// 	setInterval(() => {
	// 		var now = new Date();
	// 		this.setState({
	// 			h: now.getHours()
	// 		});
	// 	}, 1000);
	// }
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Fade>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/work" component={Work} />
							<Route path="/contact" component={Contact} />

						</Switch>
					</Fade>
				</div>
			</Router>
		);
	}
}

export default App;
