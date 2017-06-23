import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { samplesData } from './samplesData';

import FourSamples from './FourSamples';

import { StyleSheet, css } from 'aphrodite';

class Work extends Component {
	render() {
		return (
			<div>
				<FourSamples />

			</div>
		);
	}
}
export default Work;
