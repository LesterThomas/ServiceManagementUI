import React, { Component } from 'react';
import ServiceSpecList from './serviceSpecList';
import ServiceSpecStore from '../../stores/serviceSpecStore';

class ServiceSpecPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			serviceSpecs: ServiceSpecStore.getAllServiceSpecs()
		};
		console.log('Initialising API Location', this.state);
	}

	componentWillMount() {
		ServiceSpecStore.addChangeListener(this._onChange);
	}

	//Clean up when this component is unmounted
	componentWillUnmount() {
		ServiceSpecStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState({ serviceSpecs: ServiceSpecStore.getAllServiceSpecs() });
	}

	render() {
		return (
			<div>
				<h1>Service Specifications</h1>
				<ServiceSpecList serviceSpecs={this.state.serviceSpecs} />
			</div>
		);
	}
}


module.exports = ServiceSpecPage;