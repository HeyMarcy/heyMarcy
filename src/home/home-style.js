import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
const currentColor = '#295B89';
const screenSize = {
	smartphone: '@media only screen and (max-width: 479px)',
	smartphoneLandscape:
		'@media only screen and (min-width: 480px) and (max-width: 767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
	desktop: '@media only screen and (min-width: 992px)'
};

const styleHome = StyleSheet.create({
	containerHome: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		overflow: 'hidden',
		'justify-content': 'center'
	},
	containerHero: {
		width: '50vw',
		display: 'flex',
		'flex-direction': 'column',
		padding: '5% 0 0 0',
		overflow: 'hidden',
		[screenSize.smartphone]: {
			width: '90vw',
			display: 'flex',
			'flex-direction': 'column',
			'padding-top': '20%',
			overflow: 'hidden'
		},
		[screenSize.smartphoneLandscape]: {
			width: '60vw',
			display: 'flex',
			'flex-direction': 'column',
			padding: '0 0 10% 0',
			overflow: 'hidden'
		},
		[screenSize.tablet]: {}
	},
	heyThere: {
		margin: '5%',
		'z-index': '20',

		[screenSize.smartphoneLandscape]: {
			'margin-top': '80px'
		}
	},
	p: {
		margin: '.25em auto'
	},
	noOrphan: {
		'white-space': 'pre'
	},
	tagline: {
		'font-family': 'proxima-nova, sans-serif',
		'font-style': 'normal',
		'font-weight': '100',
		margin: 0,
		color: '#295B89',
		display: 'inline',
		textAlign: 'center',
		fontSize: '1.45em',
		lineHeight: '1.5',
		[screenSize.smartphone]: {
			fontSize: '1.25em',
			margin: '1em'
		},
		[screenSize.smartphoneLandscape]: {
			fontSize: '1.25em',
			'font-weight': 100,
			display: 'none'
		}
	},

	skyline: {
		width: '130%',
		position: 'absolute',
		bottom: '-3px',
		left: '-25%',
		[screenSize.smartphone]: {
			width: '350%',
			left: '-50%'
		},
		[screenSize.smartphoneLandscape]: {
			width: '110%',
			left: '-5%',
			bottom: '-10px'
		},
		[screenSize.tablet]: {
			width: '210%',
			left: '-80%'
		}
	}
});

export default styleHome;
