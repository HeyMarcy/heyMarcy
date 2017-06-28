import React from 'react';
import { Link } from 'react-router-dom';

import { StyleSheet, css } from 'aphrodite';

const IosApp = props => {
	return (
		<div className={css(sampleStyle.page)}>
			<div className={css(sampleStyle.flexWrapper)}>
				<h3 className={css(sampleStyle.title)}>
					Stop, Drop & Selfie
				</h3>
				<div className={css(sampleStyle.phoneWrapper)} />
			</div>

		</div>
	);
};
export default IosApp;

const sampleStyle = StyleSheet.create({
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		paddingTop: '50px',
		overflow: 'hidden'
	},
	page: {
		position: 'relative',
		display: 'flex',
		'flex-direction': 'column',
		width: '100vw',
		height: '100vw',
		padding: '24px',
		background: 'linear-gradient(to bottom, #82addb 0%, #4077a8 50%)'
	},
	phoneWrapper: {
		position: 'absolute',
		right: '300px',
		bottom: '400px'
	},

	title: {
		margin: '1em 0 0 ',
		'justify-content': 'center',
		'font-size': '2em',
		'font-weight': '100',
		color: 'white'
	},
	listStyle: {
		'list-style': 'none',
		display: 'flex',
		'justify-content': 'center',
		margin: '2em 3em',
		padding: '0 3em'
	}
});
