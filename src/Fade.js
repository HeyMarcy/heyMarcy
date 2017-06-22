import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Fade extends Component {
	render() {
		return (
			<Route
				render={({ location }) =>
					<CSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
						{React.cloneElement(this.props.children, {
							location: location,
							key: location.key
						})}
					</CSSTransitionGroup>}
			/>
		);
	}
}

export default Fade;
