import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
const currentColor = '#295B89';
const screenSize = {
	smartphone: '@media only screen and (max-width: 479px)',
	smartphoneLandscape:
		'@media only screen and (min-width: 480px) and (max-width: 767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
	desktop: '@media only screen and (min-width: 992px)and (max-width: 1220px)',
	desktopXL: '@media only screen and (min-width: 1221px)'
};

const styleHome = StyleSheet.create({
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
			padding: '8% '
		},
		[screenSize.desktop]: {
			width: '60vw',
			display: 'flex',
			'flex-direction': 'column',
			padding: '5% 0 0',
			overflow: 'hidden'
		},
		[screenSize.desktopXL]: {
			width: '60vw'
		}
	},

	heyThere: {
		margin: '10% 5% 5%',
		'z-index': '20',

		[screenSize.smartphone]: {
			margin: '3% 8%'
		},

		[screenSize.smartphoneLandscape]: {
			padding: '0 3%'
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
		lineHeight: '1.65',
		[screenSize.smartphone]: {
			fontSize: '1.125em',
			margin: '1.5em 3.25em',
			'font-weight': '200'
		},
		[screenSize.smartphoneLandscape]: {
			fontSize: '1em',
			margin: ' 0',
			'font-weight': '200'
		},
		[screenSize.tablet]: {
			fontSize: '1.15em',
			margin: '2em 0',
			'font-weight': '200'
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

export default styleHome;
