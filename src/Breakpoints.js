import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
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

const styles = StyleSheet.create({
	page: {
		position: 'absolute',
		bottom: '25px',
		right: '50px',
		'z-index': '1000',
		background: '#ffffff',
		padding: '.25em .5em'
	},
	xs: {
		fontSize: '16px',
		display: 'none',
		[screenSize.smartphoneXS]: {
			display: 'inline'
		}
	},
	s: {
		fontSize: '16px',
		display: 'none',
		[screenSize.smartphone]: {
			display: 'inline'
		}
	},
	lndscp: {
		fontSize: '16px',
		display: 'none',
		[screenSize.smartphoneLandscape]: {
			display: 'inline'
		}
	},
	tab: {
		fontSize: '16px',
		display: 'none',
		[screenSize.tablet]: {
			display: 'inline'
		}
	},
	d: {
		fontSize: '16px',
		display: 'none',
		[screenSize.desktop]: {
			display: 'inline'
		}
	},
	xl: {
		fontSize: '16px',
		display: 'none',
		[screenSize.desktopXL]: {
			display: 'inline'
		}
	}
});

const Breakpoints = props => {
	return (
		<div className={css(styles.page)}>
			<p className={css(styles.xs)}>XS</p>
			<p className={css(styles.s)}>S</p>
			<p className={css(styles.lndscp)}>lndscp</p>
			<p className={css(styles.tab)}>tab</p>
			<p className={css(styles.d)}>d</p>
			<p className={css(styles.xl)}>xl</p>
		</div>
	);
};
export default Breakpoints;
