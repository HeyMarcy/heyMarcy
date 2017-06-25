import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeyThere from './assets/HeyThere';
import { StyleSheet, css } from 'aphrodite';
import Chicago from './assets/Chicago.svg';

import styleHome from './home-style.js';
import styles from '../css/index.js';

class Home extends Component {
	render() {
		return (
			<div >
				<Link to="/work" className={css(styles.links, styleHome.containerHome)}>
				<div className={css(styleHome.containerHero)} >
				<HeyThere className={css(styleHome.heyThere)} />
						<div className={css(styleHome.tagline)}>
							<p className={css(styleHome.p)}>
								I&#39;m Marcy, and
								I live and work right here in Chicago.
							</p>
							<p className={css(styleHome.p)}>
								Checkout some of my <span className={css(styleHome.noOrphan)}>lastest projects.
								</span>
							</p>
						</div>
						</div>
				</Link>
				<img
					src={Chicago}
					alt="Chicago Skyline"
					className={css(styleHome.skyline)}
				/>
			</div>
		);
	}
}

export default Home;

/// TODO: link isn't affecting the tagline
