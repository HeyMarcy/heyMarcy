import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	containerHome: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		justifyContent: 'flex-end',
		margin: 0
	},
	containerVH100: {
		width: '100vw',
		height: '100vh',

		flexDirection: 'column',
		overflow: 'hidden',
		justifyContent: 'center'
	},
	containerFlexColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},

	container: {
		width: '100%',
		postition: 'absolute',
		top: 0,
		margin: 0
	},
	tagline: {
		color: 'currentColor',
		mixBlendMode: 'multiply',
		display: 'inline',
		textAlign: 'center',
		fontSize: '1.125em',
		lineHeight: '1.65'
	},
	skygradient: {
		color: '#7072ab',
		background: 'linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)',
		width: '100vw',
		height: '100vh'
	},
	heyThere: {
		width: '40%',
		margin: '1em auto 1.75em'
	},
	small: {
		'@media (max-width: 600px)': {
			backgroundColor: 'red'
		}
	}
});

export default styles;
