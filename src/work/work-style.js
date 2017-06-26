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

const styleWork = StyleSheet.create({
	links: {
		color: 'currentColor',
		'text-decoration': 'none'
	},
	spacer50: {
		display: 'flex',
		height: '50px'
	},
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		height: '100vh',
		'justify-content': 'center',
		overflow: 'hidden'
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
	quarter: {
		textAlign: 'center',
		display: 'flex',
		'flex-direction': 'column',
		'justify-content': 'center',

		padding: '10px',
		background: 'rgba(255,255,255,.5)',
		borderRadius: '10px',
		margin: '15px',
		transition: 'all 200ms ease-in',
		transform: 'scale(1)',

		':hover': {
			background: 'rgba(255,255,255,1)',
			boxShadow: ' 0px 0px 20px rgba(0,0,0,.5)',
			zIndex: 2,
			transition: 'all 200ms ease-in',
			transform: 'scale(1.04)'
		},
		[screenSize.smartphone]: {
			width: '80vw'
		},

		[screenSize.tablet]: {
			width: '80vw'
		},
		[screenSize.desktop]: {
			width: '40vw'
		},
		[screenSize.desktopXL]: {
			width: '40vw'
		}
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
		'justify-content': 'center',
		margin: '2em 3em',
		padding: '0 3em'
	}
});

export default styleWork;
