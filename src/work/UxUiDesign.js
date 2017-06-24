import React from 'react';
import { Link } from 'react-router-dom';

import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';
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

const UxUiDesign = props => {
	return (
		<div className={css(sampleStyle.page)}>
			<h3 className={css(sampleStyle.title)}>Apprenda Portugese</h3>

		</div>
	);
};
export default UxUiDesign;

const sampleStyle = StyleSheet.create({
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		paddingTop: '50px',
		overflow: 'hidden'
	},
	page: {
		display: 'flex',
		'flex-direction': 'column',
		width: '100vw',
		height: '100vw',
		padding: '24px',
		background: 'blue',
		background: 'linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)'
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
		'font-weight': '100'
	},
	listStyle: {
		'list-style': 'none',
		display: 'flex',
		'flex-wrap': 'wrap',
		'justify-content': 'center',
		margin: '2em',
		padding: '0'
	}
});
