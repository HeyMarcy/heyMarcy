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

const styles = StyleSheet.create({
	links: {
		color: 'currentColor',
		'text-decoration': 'none'
	},

	skygradient: {
		color: currentColor,
		background: 'linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)',
		width: '100vw',
		height: '100vh'
	}
});

export default styles;
