import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
const currentColor = '#295B89';

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
