import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ChicagoSkyline from './ChicagoSky1';
import HeyThere from './HeyThere';
import { StyleSheet, css } from 'aphrodite';

import styles from './css/index.js';


class Home extends Component {
	constructor(props) {
		super(props);
		var now = new Date();
		this.state = {
			h: now.getHours()
		};
		setInterval(() => {
			var now = new Date();
			this.setState({
				h: now.getHours()
			});
		}, 1000);
	}

	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.containerHome)}>
					<div className={css(styles.containerFlexColumn)}>
						<HeyThere className={css(styles.heyThere)} />
						<p className={css(styles.tagline)}>
							I'm Marcy! And I live and work right here in Chicago.<br />
							Checkout some of my lastest projects:
						</p>
					</div>
					<ChicagoSkyline width="100%" fill="currentColor" className={css(styles.skyline)}/>
				</div>
			</div>
		);
	}
}

export default Home;
