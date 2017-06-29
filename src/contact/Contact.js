import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeyThere from './assets/HeyThere';
import { StyleSheet, css } from 'aphrodite';
import ChicagoSkyline from './assets/ChicagoSkyline';

import styleContact from './contact-style.js';
import styles from '../css/index.js';

class Home extends Component {
	render() {
		return (
			<div>

				<div className={css(styleContact.containerHero)}>
					<HeyThere className={css(styleContact.heyThere)} />
					<div className={css(styleContact.tagline)}>
						<p className={css(styleContact.p)}>
							I&#39;m Marcy, and
							I live and work right here in Chicago.
						</p>
						<p className={css(styleContact.p)}>
							Checkout some of my{' '}
							<span className={css(styleContact.noWrap)}>
								lastest projects.
							</span>
						</p>
					</div>
				</div>

				<ChicagoSkyline />
			</div>
		);
	}
}

export default Home;

/// TODO: link isn't affecting the tagline
