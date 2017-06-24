import React from 'react';
import { Link } from 'react-router-dom';

import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';
import { samplesData } from './samplesData';
import ReactLogo from '../assets/ReactLogo';
import ExpoLogo from '../assets/ExpoLogo';
import PhoneLogo from '../assets/PhoneLogo';
import PhoneBig from '../assets/PhoneBig';
import ResponsiveTagline from '../assets/ResponsiveTagline';
import LaptopTagline from '../assets/LaptopTagline';
import UXUITagline from '../assets/UXUITagline';

const Pipe = () => {
	return <li><span style={{ padding: '12px', opacity: '.5' }}>|</span></li>;
};

const IosApp = props => {
	return (
		<div className={css(sampleStyle.page)}>
			<div className={css(sampleStyle.flexWrapper)}>
				<h3 className={css(sampleStyle.title)}>
					Stop, Drop & Selfie
				</h3>
				<div className={css(sampleStyle.phoneWrapper)}>
					<PhoneBig />
				</div>
			</div>

		</div>
	);
};
export default IosApp;

const sampleStyle = StyleSheet.create({
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		paddingTop: '50px',
		overflow: 'hidden'
	},
	page: {
		position: 'relative',
		display: 'flex',
		'flex-direction': 'column',
		width: '100vw',
		height: '100vw',
		padding: '24px',
		background: 'linear-gradient(to bottom, #82addb 0%, #4077a8 50%)'
	},
	phoneWrapper: {
		position: 'absolute',
		right: '300px',
		bottom: '400px'
	},
	iconWrapper: {
		display: 'flex',
		'justify-content': 'center',
		margin: '.5em auto 1em ',
		height: '120px'
	},

	iconStyle: {
		'align-self': 'center'
	},
	logoWrapper: {
		height: '50px',
		width: '50px'
	},
	logoStyle: {
		':hover': { fill: 'darkslateblue' }
	},

	title: {
		margin: '1em 0 0 ',
		'justify-content': 'center',
		'font-size': '2em',
		'font-weight': '100',
		color: 'white'
	},
	listStyle: {
		'list-style': 'none',
		display: 'flex',
		'justify-content': 'center',
		margin: '2em 3em',
		padding: '0 3em'
	}
});
