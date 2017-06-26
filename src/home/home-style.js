import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
const currentColor = '#295B89';
const screenSize = {
	smartphone: '@media only screen and (max-width: 479px)',
	smartphoneLandscape:
		'@media only screen and (min-width: 480px) and (max-width: 767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
	desktop: '@media only screen and (min-width: 992px)',
	desktopXL: '@media only screen and (min-width: 1220px)'
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
		width: '60vw',
		display: 'flex',
		'flex-direction': 'column',
		padding: '5% 5% 0',
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
		[screenSize.tablet]: {
			width: '65vw',

			padding: '5% 8% 0'
		},

		[screenSize.desktop]: {
			width: '60vw',
			display: 'flex',
			'flex-direction': 'column',
			padding: '5% 5% 0',
			overflow: 'hidden'
		},
		[screenSize.desktopXL]: {
			width: '45vw'
		}
	},

	heyThere: {
		margin: '10% 5% 5%',
		'z-index': '20',

		[screenSize.smartphone]: {
			margin: '2%'
		}
	},
	heytagline: {
		fill: 'currentColor',
		mixBlendMode: 'multiply'
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
			margin: '1em',
			'font-weight': '200'
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
		bottom: '-20%',
		left: '-25%',
		[screenSize.smartphone]: {
			width: '360%',
			left: '-52%',
			bottom: '-20%'
		},
		[screenSize.smartphoneLandscape]: {
			width: '110%',
			left: '-5%'
		},
		[screenSize.tablet]: {
			width: '210%',
			left: '-80%'
		}
	}
});

export default styleHome;
