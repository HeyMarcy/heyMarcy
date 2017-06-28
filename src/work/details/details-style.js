import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
const currentColor = '#295B89';
const screenSize = {
	smartphoneXS: '@media only screen and (max-width: 369px)',
	smartphone:
		'@media only screen and (min-width: 370px) and (max-width: 479px)',
	smartphone:
		'@media only screen and (min-width: 370px) and (max-width: 479px)',
	smartphoneLandscape:
		'@media only screen and (min-width: 480px) and (max-width: 767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
	desktop: '@media only screen and (min-width: 992px)and (max-width: 1220px)',
	desktopXL: '@media only screen and (min-width: 1221px)'
};

// page: {
// 	display: 'flex',
// 	width: '100vw',
// 	height: '100vw',
// 	padding: '24px',
// 	background:
// 		'linear-gradient(to bottom, #82addb 0%, #4077a8 50%, #346897 100%)'
// },
// page: {
// 	display: 'flex',
// 	width: '100vw',
// 	height: '100vw',
// 	padding: '24px',
// 	background: 'linear-gradient(to bottom, #82addb 0%, #4077a8 50%)'
// }

const styleDetails = StyleSheet.create({
	noWrap: {
		'white-space': 'nowrap'
	},
	links: {
		color: 'currentColor',
		'text-decoration': 'none'
	},
	page: {
		display: 'flex',
		'flex-direction': 'column',
		width: '100vw',
		height: '100vh',

		'justify-content': 'center',
		background:
			'linear-gradient(to bottom, #82addb 0%, #346897 50%, #014372 100%)'
	},
	wrapper: {
		display: 'flex',
		margin: 'auto',
		'flex-direction': 'row',
		position: 'relative',
		width: '80vw'
	},
	innerwrap: {
		color: 'white',
		display: 'flex',
		width: '50vw',
		'justify-content': 'space-around',
		'flex-direction': 'column'
	},
	myDaywrap: {
		color: 'white',
		display: 'flex',
		width: '32vw',
		'justify-content': 'space-around',
		'flex-direction': 'column'
	},
	imgwrap: {
		color: 'white',
		display: 'flex',
		'justify-content': 'space-around',
		'flex-direction': 'column'
	},
	title: {
		color: 'white',
		'font-family': 'proxima-nova-condensed, sans-serif',
		'font-style': 'normal',
		'font-weight': '100',
		'line-height': '.9',
		margin: 0,

		'font-size': '4em'
	},
	appImage: {
		position: 'absolute',
		height: '88vh',
		width: 'auto',
		right: '12%',
		bottom: '-50%'
	},
	myDayTitle: {
		'align-self': 'center'
	},
	myDayImage: {
		position: 'absolute',
		height: 'auto',
		width: '116vw',
		right: '-35%',
		bottom: '-13%'
	},
	btnWrap: {
		width: '100%',
		display: 'flex',
		'justify-content': 'flex-start'
	},
	btn: {
		display: 'inline-block',
		'background-color': 'rgba(255, 255, 255, 0)',
		color: '#fff',
		'border-color': 'rgba(255, 255, 255, .5)',
		'border-width': ' 1px',
		'border-radius': '3px',
		padding: '1em',
		'font-size': '1rem',
		'letter-spacing': '.1rem',
		'font-weight': '100',
		margin: '50px 50px 0 0'
	}
});

export default styleDetails;

// appImage: {
// 	position: 'absolute',
// 	bottom: '5vh',
// 	right: '10vw',
// 	width: '320px',
// 	height: 'auto'
// }
