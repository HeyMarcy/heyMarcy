import React from 'react';
import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';
import { samplesData } from './samplesData';

const WorkSamples = props => {
	return (
		<div className={css(sampleStyle.flexWrapper)}>
			{props.data.map(item => {
				return (
					<div className={css(sampleStyle.quarter)}>
						{item.title}
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
