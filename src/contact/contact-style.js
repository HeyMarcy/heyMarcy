import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
const currentColor = '#295B89';
const screenSize = {
	smartphone: '@media only screen and (max-width: 479px)',
	smartphoneLandscape:
		'@media only screen and (min-device-width: 480px)and (max-device-width: 767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
	desktop: '@media only screen and (min-width: 992px)and (max-width: 1220px)',
	desktopXL: '@media only screen and (min-width: 1221px)'
};

const styleContact = StyleSheet.create({
	skyline: {
		position: 'absolute',
		overflow: 'hidden',
		width: '100vw',
		height: '50vh',
		background: 'url(/assets/Chicago.svg)'
	},
	container: {
		postition: 'relative',
		overflow: 'hidden',
		width: '100vw',
		width: '100vh'
	},
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
			padding: '3% 0 10% 0',
			overflow: 'hidden'
		},
		[screenSize.tablet]: {
			width: '62vw',
			height: '60vh',
			margin: '8vh auto 32vh'
		},
		[screenSize.desktop]: {
			width: '60vw',
			height: '60vh',
			margin: '10vh auto 30vh',
			display: 'flex',
			'flex-direction': 'column',
			overflow: 'hidden'
		},
		[screenSize.desktopXL]: {
			width: '60vw',
			height: '60vh',
			margin: '5vh auto 35vh'
		}
	},

	heyThere: {
		margin: '10% 5% 5%',
		'z-index': '20',

		[screenSize.smartphone]: {
			margin: '3% 8%'
		},

		[screenSize.smartphoneLandscape]: {
			padding: '0',
			margin: 'auto'
		},
		[screenSize.desktop]: {
			margin: '5% 20%  '
		},
		[screenSize.desktopXL]: {
			margin: '3% 23%  '
		}
	},
	heytagline: {
		fill: 'currentColor',
		mixBlendMode: 'multiply'
	},
	p: {
		margin: '.5em auto'
	},
	noWrap: {
		'white-space': 'nowrap'
	},
	tagline: {
		'font-family': 'proxima-nova, sans-serif',
		'font-style': 'normal',
		margin: 0,
		color: '#295B89',
		display: 'inline',
		textAlign: 'center',
		fontSize: '1.45em',
		lineHeight: '1.65',
		display: 'none',
		[screenSize.smartphone]: {
			fontSize: '1.125em',
			margin: '1.5em 3.25em',
			display: 'block'
		},
		[screenSize.smartphoneLandscape]: {
			display: 'none'
		},

		[screenSize.tablet]: {
			fontSize: '1.15em',
			margin: '2em 0',
			display: 'block'
		},

		[screenSize.desktop]: {
			display: 'block'
		},
		[screenSize.desktopXL]: {
			display: 'block'
		}
	},
	skylineWrapper: {
		overflow: 'hidden'
	},
	skyline: {
		width: '130%',
		position: 'absolute',
		bottom: '-20%',
		left: '-25%',

		[screenSize.smartphone]: {
			width: '357%',
			left: '-53%',
			bottom: '-21%'
		},
		[screenSize.smartphoneLandscape]: {
			width: '110%',
			left: '-5%'
		},
		[screenSize.tablet]: {
			width: '210%',
			left: '-80%'
		},
		[screenSize.desktopXL]: {
			width: '120%',
			left: '-17%',
			bottom: '-23%'
		}
	}
});

export default styleContact;
