import React from 'react';
import { Link } from 'react-router-dom';
import apprenda1 from './detailAssets/apprenda1.png';

import { StyleSheet, css } from 'aphrodite';
import styleDetails from './details-style.js';

const Apprenda = props => {
	return (
		<div className={css(styleDetails.page)}>

			<div className={css(styleDetails.wrapper)}>
				<div className={css(styleDetails.innerwrap)}>
					<h1 className={css(styleDetails.title)}>Apprenda Portugese</h1>
					<h4>A Language Learning App</h4>
					<p>
						Featuring a spaced repetiton algorithm to aid in
						vocabulary retention.
					</p>
					<ul>
						<li> HTML / CSS / JavaScript</li>
						<li>Google oAuth</li>
						<li>React & Redux</li>
						<li>Node & Express</li>
						<li>MongoDB & Mongoose</li>
					</ul>
					<div className={css(styleDetails.btnWrap)}>
						<a href="https://calm-depths-14672.herokuapp.com/">
							<button className={css(styleDetails.btn)}>Visit Project</button>
						</a>
						<a href="https://github.com/HeyMarcy/aprenda_app">
							<button className={css(styleDetails.btn)}>Github Repo</button>
						</a>
					</div>

				</div>
				<div className={css(styleDetails.imgwrap)}>
					<img src={apprenda1} className={css(styleDetails.appImage)} />
				</div>
			</div>

		</div>
	);
};
export default Apprenda;
// <img
// 	src={apprenda1}
// 	className={css(styleDetails.appImage)}
// 	alt="image of Apprenda app"
// />
