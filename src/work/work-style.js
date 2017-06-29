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

const styleWork = StyleSheet.create({
	noWrap: {
		'white-space': 'nowrap'
	},
	links: {
		color: 'currentColor',
		'text-decoration': 'none'
	},

	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		height: '100vh',
		padding: '9vh 2vw 2vh',
		'justify-content': 'space-around',

		overflow: 'hidden',
		background: '#82addb',
		[screenSize.smartphoneLandscape]: {
			padding: '12.5vh 2vw 1vh'
		},
		[screenSize.tablet]: {
			padding: '8vh 2vw 2vh'
		},
		[screenSize.desktop]: {}
	},

	logoStyle: {
		display: 'none',
		[screenSize.smartphone]: {
			width: '30vw'
		}
	},

	quarter: {
		textAlign: 'center',
		display: 'flex',
		'flex-direction': 'column',
		'justify-content': 'space-around',
		padding: '1em .8em',
		background: 'rgba(255,255,255,.5)',
		borderRadius: '10px',
		transition: 'all 200ms ease-in',
		transform: 'scale(1)',

		':hover': {
			background: 'rgba(255,255,255,1)',
			boxShadow: ' 0px 0px 20px rgba(0,0,0,.5)',
			zIndex: 2,
			transition: 'all 200ms ease-in',
			transform: 'scale(1.04)'
		},
		//xs & s breakpoint
		width: '45vw',
		height: '42.5vh',
		[screenSize.smartphoneLandscape]: {
			width: '45vw',
			height: '37.5vh'
		}
	},

	title: {
		margin: 0,
		'margin-bottom': '.25em',
		'justify-content': 'center',
		'font-size': '1.2em',
		'font-weight': '500',
		[screenSize.smartphone]: {
			'font-size': '1.125em'
		},
		[screenSize.smartphoneLandscape]: {
			'font-size': '1.125em',
			'font-weight': '500'
		},
		[screenSize.tablet]: {
			'font-size': '1.8em'
		},
		[screenSize.desktop]: {
			'font-size': '2.2em'
		},
		[screenSize.desktopXL]: {
			'font-size': '2.25em',
			'font-weight': '300'
		}
	},
	description: {
		margin: 0,
		'font-weight': '300',
		'font-size': '1em',
		[screenSize.smartphone]: {
			'font-size': '.9em'
		},
		[screenSize.smartphoneLandscape]: {
			'font-weight': '300',
			'font-size': '1em'
		},
		[screenSize.tablet]: {
			'font-size': '1.125em'
		},
		[screenSize.desktop]: {
			'font-size': '1.125em'
		},
		[screenSize.desktopXL]: {
			'font-size': '1.5em'
		}
	},
	IconTag: {
		width: '44px',
		margin: '0 auto',
		[screenSize.smartphoneXS]: {
			display: 'none'
		},
		[screenSize.smartphoneLandscape]: {
			display: 'none'
		},
		[screenSize.tablet]: {
			width: '10vw'
		},
		[screenSize.desktop]: {
			width: '8vw'
		},
		[screenSize.desktopXL]: {
			width: '8vw'
		}
	},
	logoTag: {
		[screenSize.smartphone]: {}
	},
	listStyle: {
		color: 'currentColor',
		textAlign: 'center',
		'text-transform': 'uppercase',

		'list-style': 'none',
		'font-size': '.85em',
		'line-height': '1.5em',

		margin: '.5em auto',
		padding: '0',
		[screenSize.smartphone]: {
			'line-height': '.9em',
			'line-height': '1.5em'
		},
		[screenSize.smartphoneLandscape]: {
			display: 'flex',
			'justify-content': 'center',
			'font-size': '.7em',
			'text-transform': 'none'
		},
		[screenSize.tablet]: {
			'font-size': '1em',
			'line-height': '1.7em'
		},
		[screenSize.desktop]: {
			display: 'flex',
			'font-size': '1em',
			display: 'flex',
			'justify-content': 'center'
		},
		[screenSize.desktopXL]: {
			display: 'flex',
			'font-size': '1.125em',
			'justify-content': 'center'
		}
	},
	pipe: {
		padding: '12px',
		opacity: '.5',
		display: 'none',
		[screenSize.smartphone]: {
			display: 'none'
		},
		[screenSize.smartphoneLandscape]: {
			display: 'inline',
			padding: '5px'
		},
		[screenSize.desktop]: {
			display: 'inline'
		},

		[screenSize.desktopXL]: {
			display: 'inline'
		}
	}
});

export default styleWork;
//
// [screenSize.smartphoneLandscape]: {
// 	margin: 0,
// 	width: '42.5vw',
// 	height: '28vh',
// 	'justify-content': 'space-between'
// },
// [screenSize.tablet]: {
// 	width: '40vw',
// 	height: '38vh',
// 	padding: '1em 1em'
// },
// [screenSize.desktop]: {
// 	width: '43vw',
// 	height: '33vh',
// 	margin: '10px',
// 	padding: '2em .8em'
// },
// [screenSize.desktopXL]: {
// 	width: '45vw',
// 	height: '34vh',
// 	margin: '12px',
// 	padding: '2em .8em'
// }
