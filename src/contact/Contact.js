import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import SayHey from './assets/SayHey';
import { StyleSheet, css } from 'aphrodite';
import ChicagoSkyline from './assets/ChicagoSkyline';

import styleContact from './contact-style.js';
import styles from '../css/index.js';

class Home extends Component {
	render() {
		return (
			<div className={css(styles.links, styleContact.containerHome)}>

				<div className={css(styleContact.containerHero)}>
					<SayHey className={css(styleContact.sayHey)} />
					<div className={css(styleContact.tagline)}>
						<p className={css(styleContact.p)}>
							Github:{' '}
							<a
								className={css(styleContact.link)}
								href="github.com/HeyMarcy"
								target="_blank"
							>
								github.com/HeyMarcy
							</a>
						</p>
						<p className={css(styleContact.p)}>
							LinkedIn:{' '}
							<a
								className={css(styleContact.link)}
								href="https://www.linkedin.com/in/heymarcy/"
								target="_blank"
							>
								linkedin.com/in/heymarcy
							</a>
						</p>
						<p className={css(styleContact.p)}>
							Email:{' '}
							<a
								className={css(styleContact.link)}
								href="mailto:marcy.montross@gmail.com"
								target="_blank"
							>
								marcy.montross@gmail.com
							</a>
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
