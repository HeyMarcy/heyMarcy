import React from 'react';
import { Link } from 'react-router-dom';
import laptop from './detailAssets/MacbookAir.png';

import { StyleSheet, css } from 'aphrodite';
import styleDetails from './details-style.js';

const MyDay = props => {
	return (
		<div className={css(styleDetails.page)}>

			<div className={css(styleDetails.wrapper)}>
				<div className={css(styleDetails.myDaywrap)}>

					<h1 className={css(styleDetails.title)}>MyDay Weather App</h1>
					<h4>A Personal Weather App</h4>
					<p>
						A weather app displaying local temp, wind direction and speed.The
						background color and luminosity indicates the time of day.{' '}
					</p>
					<ul>
						<li>React</li>
						<li>Redux</li>
						<li>Ajax</li>
					</ul>
					<div className={css(styleDetails.btnWrap)}>
						<a href="https://d2cm4bwmfzat27.cloudfront.net/">
							<button className={css(styleDetails.btn)}>
								Visit Project
							</button>
						</a>
						<a href="https://github.com/HeyMarcy/myDay-weatherApp/">
							<button className={css(styleDetails.btn)}>
								Github Repo
							</button>
						</a>
					</div>

				</div>

			</div>
			<img src={laptop} className={css(styleDetails.myDayImage)} />

		</div>
	);
};
export default MyDay;
