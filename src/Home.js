import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ChicagoSkyline from './assets/ChicagoSky1';
import HeyThere from './assets/HeyThere';
import { StyleSheet, css } from 'aphrodite';

import styles from './css/index.js';

class Home extends Component {
	render() {
		return (
			<div className={css(styles.container)} ref={c => (this.container = c)}>
				<div className={css(styles.containerHome)}>
					<div className={css(styles.containerFlexColumn)}>
						<HeyThere className={css(styles.heyThere)} />
						<p className={css(styles.tagline)}>
							I'm Marcy! And I live and work right here in Chicago.<br />
							Checkout some of my lastest projects:
						</p>
					</div>
					<ChicagoSkyline width="100%" fill="currentColor" />
				</div>
			</div>
		);
	}
}

export default Home;
