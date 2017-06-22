import React, { Component } from 'react';
import SamplePreview from './SamplePreview';
import fakeItem from './fakeItem';

class WorkSample extends Component {
	componentDidMount() {
		const id = this.props.match.params.id;
	}
	render() {
		return <SamplePreview item={fakeItem} />;
	}
}

export default WorkSample;
