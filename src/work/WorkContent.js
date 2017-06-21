import React from 'react';
import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';

const quarterStyle = StyleSheet.create({
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		paddingTop: '50px',
		'justify-content': 'flex-start',
		overflow: 'hidden'
	}
});

const WorkContent = () =>
	<div className={css(quarterStyle.flexWrapper)}>
		<SamplePreview />
		<SamplePreview />
		<SamplePreview />
		<SamplePreview />
	</div>;
export default WorkContent;
