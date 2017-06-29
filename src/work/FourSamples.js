import React from 'react';
import { Link } from 'react-router-dom';

import { StyleSheet, css } from 'aphrodite';
import styleWork from './work-style.js';
import { samplesData } from './samplesData';
import ReactLogo from '../assets/ReactLogo';
import ExpoLogo from '../assets/ExpoLogo';
import PhoneLogo from './assets/PhoneLogo';
import ResponsiveIcon from './assets/ResponsiveIcon';
// import LaptopIcon from './assets/LaptopIcon';
import UXicon from './assets/UXicon';

const Pipe = () => {
	return <li><span className={css(styleWork.pipe)}>|</span></li>;
};

const FourSamples = props => {
	return (
		<div className={css(styleWork.flexWrapper)}>

			<Link to="/ios-app" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>

					<PhoneLogo className={css(styleWork.IconTag)} />

					<h3 className={css(styleWork.title)}>
						Stop, Drop <span className={css(styleWork.noWrap)}>& Selfie</span>
					</h3>
					<p className={css(styleWork.description)}>
						A realtime chat and{' '}
						<span className={css(styleWork.noWrap)}>photo-sharing app</span>
					</p>
					<ul className={css(styleWork.listStyle)}>
						<li>React Native</li>

						<Pipe />
						<li>Redux</li>
						<Pipe />
						<li>Websockets</li>
					</ul>
				</div>
			</Link>

			<Link to="/MyDay" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<ResponsiveIcon />
					<h3 className={css(styleWork.title)}>My Day Weather</h3>
					<p className={css(styleWork.description)}>
						A personal{' '}
						<span className={css(styleWork.noWrap)}>weather app</span>
					</p>
					<ul className={css(styleWork.listStyle)}>
						<li>React</li>
						<Pipe />
						<li>Redux</li>
						<Pipe />
						<li>React Router</li>
						<Pipe />
						<li>Web API</li>
					</ul>
				</div>
			</Link>

			<Link to="/Apprenda" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<ResponsiveIcon />
					<h3 className={css(styleWork.title)}>Apprenda</h3>
					<p className={css(styleWork.description)}>
						A Portugese language{' '}
						<span className={css(styleWork.noWrap)}>learing app</span>
					</p>
					<ul className={css(styleWork.listStyle)}>
						<li>React</li>
						<Pipe />
						<li>Redux</li>
						<Pipe />
						<li>MondgoDB</li>
						<Pipe />
						<li>Express</li>
					</ul>
				</div>
			</Link>

			<Link to="/UxUiDesign" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<UXicon />
					<h3 className={css(styleWork.title)}>
						UX & UI Design
					</h3>
					<p className={css(styleWork.description)}>
						Wireframes, Mockups and Prototypes
					</p>
					<ul className={css(styleWork.listStyle)}>
						<li>Sketch</li>
						<Pipe />
						<li>Adobe CC</li>
						<Pipe />
						<li>Invision</li>
					</ul>
				</div>
			</Link>

		</div>
	);
};
export default FourSamples;
