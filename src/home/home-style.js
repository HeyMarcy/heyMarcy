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
		'justify-content': 'center',
	},
	containerHero: {
		width:'50vw',
		display: 'flex',
		'flex-direction':'column',
		'padding-top':'5%',
		overflow: 'hidden',
		[screenSize.smartphone]: {
			width:'90vw',
			display: 'flex',
			'flex-direction':'column',
			'padding-top':'20%',
			overflow: 'hidden',

		},

	},
	heyThere: {
		margin: '5%',

		[screenSize.smartphoneLandscape]: {


	},
},
	p:{
		margin:'.25em auto'
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
		},
		[screenSize.smartphoneLandscape]: {

			fontSize: '1.25em',
			'font-weight': 100,
			display:'none'
	},
	},

	skyline: {
		width: '130%',
		position: 'absolute',
		bottom: '-3px',
		left: '-25%',
		[screenSize.smartphone]: {
			width: '345%',
			left: '-125%'
		},
		[screenSize.smartphoneLandscape]: {
			width: '120%',
			left: '-10%',
			bottom: '0px',
	},
		[screenSize.tablet]: {
			width: '210%',
			left: '-80%'
	 },
	},


});

export default styleHome;
