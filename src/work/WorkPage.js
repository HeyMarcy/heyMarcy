import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { samplesData } from './samplesData';

import WorkSamples from './WorkSamples';

import { StyleSheet, css } from 'aphrodite';

class Work extends Component {
	render() {
		return (
			<div>
				<WorkSamples data={samplesData} />
			</div>
		);
	}
}
export default Work;
