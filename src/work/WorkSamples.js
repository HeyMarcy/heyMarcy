import React from 'react';
import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';
import { samplesData } from './samplesData';
import ReactLogo from '../assets/ReactLogo'
import ExpoLogo from '../assets/ExpoLogo';
import PhoneLogo from '../assets/PhoneLogo'


const WorkSamples = props => {
	return (
		<div className={css(sampleStyle.flexWrapper)}>
			{props.data.map(item => {
				return (
					<div className={css(sampleStyle.quarter)}>
						<PhoneLogo />
						{item.title}
							<div className={css(sampleStyle.logoWrapper)}>
							<ReactLogo
							className={css(sampleStyle.logoStyle)}/>
							</div>

					</div>
				);
			})}
		</div>
	);
};
export default WorkSamples;

const sampleStyle = StyleSheet.create({
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		paddingTop: '50px',
		'justify-content': 'center',
		overflow: 'hidden'
	},
	logoWrapper: {

		height:'50px',
		width: '50px',
	},
	logoStyle: {
		':hover': { fill: 'darkslateblue' }

	},
	quarter: {
		width: '42vw',
		padding: '24px',
		background: 'rgba(255,255,255,.5)',
		borderRadius: '10px',
		margin: '15px',
		height: '36vh',
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
