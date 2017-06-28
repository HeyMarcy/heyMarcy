import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeyThere from './assets/HeyThere';
import { StyleSheet, css } from 'aphrodite';
import ChicagoSkyline from './assets/ChicagoSkyline';

import styleHome from './home-style.js';
import styles from '../css/index.js';

class Home extends Component {
	render() {
		return (
			<div>
				<Link to="/work" className={css(styles.links, styleHome.containerHome)}>
					<div className={css(styleHome.containerHero)}>
						<HeyThere className={css(styleHome.heyThere)} />
						<div className={css(styleHome.tagline)}>
							<p className={css(styleHome.p)}>
								I&#39;m Marcy, and
								I live and work right here in Chicago.
							</p>
							<p className={css(styleHome.p)}>
								Checkout some of my{' '}
								<span className={css(styleHome.noWrap)}>
									lastest projects.
								</span>
							</p>
						</div>
					</div>
				</Link>
				<ChicagoSkyline />
			</div>
		);
	}
}

export default Home;

/// TODO: link isn't affecting the tagline
