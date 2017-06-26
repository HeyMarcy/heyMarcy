import React from 'react';
import { Link } from 'react-router-dom';

import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';
import styleWork from './work-style.js';
import { samplesData } from './samplesData';
import ReactLogo from '../assets/ReactLogo';
import ExpoLogo from '../assets/ExpoLogo';
import PhoneLogo from '../assets/PhoneLogo';
import ResponsiveTagline from '../assets/ResponsiveTagline';
import LaptopTagline from '../assets/LaptopTagline';
import UXUITagline from '../assets/UXUITagline';

const Pipe = () => {
	return <li><span style={{ padding: '12px', opacity: '.5' }}>|</span></li>;
};

const FourSamples = props => {
	return (
		<div className={css(styleWork.flexWrapper)}>
			<div className={css(styleWork.spacer50)} />

			<Link to="/ios-app" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<div className={css(styleWork.iconWrapper)}>
						<PhoneLogo />
					</div>
					<div className={css(styleWork.spacer)} />
					<h3 className={css(styleWork.title)}>Stop Drop & Selfie</h3>
					<p>A realtime chat and photosharing app</p>
					<ul className={css(styleWork.listStyle)}>
						<li>React Native</li>
						<Pipe />
						<li>Expo</li>
						<Pipe />
						<li>Redux</li>
						<Pipe />
						<li>WebSockets</li>
					</ul>
				</div>
			</Link>

			<Link to="/Apprenda" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<div className={css(styleWork.iconWrapper)}>
						<ResponsiveTagline />
					</div>
					<div className={css(styleWork.spacer)} />
					<h3 className={css(styleWork.title)}>Apprenda Portugese</h3>
					<p>A language learing app</p>
					<ul className={css(styleWork.listStyle)}>
						<li>React</li>
						<Pipe />
						<li>Redux</li>
						<Pipe />
						<li>Router</li>
						<Pipe />
						<li>MongoDB</li>
						<Pipe />
						<li>Express</li>
					</ul>
				</div>
			</Link>

			<Link to="/Apprenda" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<div className={css(styleWork.iconWrapper)}>
						<LaptopTagline />
					</div>
					<div className={css(styleWork.spacer)} />
					<h3 className={css(styleWork.title)}>My Day Weather</h3>
					<p>A personal weather app</p>
					<ul className={css(styleWork.listStyle)}>
						<li>React</li>
						<Pipe />
						<li>Redux</li>
						<Pipe />
						<li>Router</li>
						<Pipe />
						<li>Web API</li>
					</ul>
				</div>
			</Link>

			<Link to="/Apprenda" className={css(styleWork.links)}>
				<div className={css(styleWork.quarter)}>
					<div className={css(styleWork.iconWrapper)}>
						<UXUITagline />
					</div>
					<div className={css(styleWork.spacer)} />
					<h3 className={css(styleWork.title)}>
						Interface and Interaction Design
					</h3>
					<p>Wireframes, User Journeys, Mockups and Prototypes</p>
					<ul className={css(styleWork.listStyle)}>
						<li>Sketch</li>
						<Pipe />
						<li>Illustrator</li>
						<Pipe />
						<li>Photoshop</li>
						<Pipe />
						<li>Axure</li>
						<Pipe />
						<li>Invision</li>
					</ul>
				</div>
			</Link>

		</div>
	);
};
export default FourSamples;
