import React, { Component } from 'react';
import ServiceSpecComponent from './ServiceSpecComponent';
import ServiceSpecStore from '../../stores/serviceSpecStore';

class ManageServiceSpecPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
		console.log('Initialising ManageServiceSpecPage');
	}

	componentWillMount() {
		var serviceSpecId = this.props.params.id; //from the path '/serviceSpec:id'
		if (serviceSpecId) {
			this.setState({serviceSpec: ServiceSpecStore.getServiceSpecById(serviceSpecId) });

		}
	}

	render() {
		console.log('Rendering ManageServiceSpecPage', this.state);
		return (
			<ServiceSpecComponent
				serviceSpec={this.state.serviceSpec} />
		);
	}
}

module.exports = ManageServiceSpecPage;