import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import appleiOSLogo from '../assets/appleios.png';
import reactLogo from '../assets/react.png';
import expoLogo from '../assets/expo.png';

const sampleStyle = StyleSheet.create({
	containerFlex: {
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
		justifyContent: 'space-between'
	},
	quarter: {
		width: '43vw',
		padding: '24px',
		background: 'rgba(255,255,255,.5)',
		borderRadius: '10px',
		margin: '15px',
		height: '40vh',
		transition: 'all 200ms ease-in',
		transform: 'scale(1)',

		':hover': {
			background: 'rgba(255,255,255,1)',
			boxShadow: ' 0px 0px 20px rgba(0,0,0,.5)',
			zIndex: 2,
			transition: 'all 200ms ease-in',
			transform: 'scale(1.04)'
		}
	}
});

const SamplePreview = () =>
	<div className={css(sampleStyle.quarter)}>
		<div className={css(sampleStyle.container)}>

			<h2>Project Type</h2>
			<h2>A real-time chat and photosharing app</h2>
			<div className={css(sampleStyle.containerFlex)}>
				<img src={reactLogo} alt={'React logo'} />
				<img src={appleiOSLogo} alt={'apple iOS logo'} />
				<img src={expoLogo} alt={'Expo logo'} />

			</div>

		</div>
	</div>;

export default SamplePreview;
