import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { samplesData } from './samplesData';

import FourSamples from './FourSamples';

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
