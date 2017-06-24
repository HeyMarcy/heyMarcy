import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StyleSheet, css } from 'aphrodite';
import styles from './css/index.js';

import { CSSTransitionGroup } from 'react-transition-group';
import Fade from './Fade';

// ** Screens ********
import Home from './Home';
import Work from './work/WorkPage';
import Contact from './Contact';
import Header from './Header';
import MyDay from './work/MyDay';
import UxUiDesign from './work/UxUiDesign';
import Apprenda from './work/Apprenda';
import IosApp from './work/IosApp';

class App extends Component {
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
							<Route path="/ios-app" component={IosApp} />
							<Route path="/apprenda" component={Apprenda} />
							<Route path="/ux-ui-design" component={UxUiDesign} />
							<Route path="/myday" component={MyDay} />
						</Switch>
					</Fade>
				</div>
			</Router>
		);
	}
}

export default App;
