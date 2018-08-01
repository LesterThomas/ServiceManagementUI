import React, { Component } from 'react';
import Router from 'react-router';
import ServiceSpecForm from './serviceSpecForm';
import ServiceSpecActions from '../../actions/serviceSpecActions';
import ServiceSpecStore from '../../stores/serviceSpecStore';
import toastr from 'toastr';

class ManageServiceSpecPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			serviceSpec: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
		console.log('Initialising API Location', this.state);
	}

	componentWillMount() {
		var serviceSpecId = this.props.params.id; //from the path '/serviceSpec:id'
		if (serviceSpecId) {
			this.setState({serviceSpec: ServiceSpecStore.getServiceSpecById(serviceSpecId) });
		}
	}

	setServiceSpecState(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.serviceSpec[field] = value;
		return this.setState({serviceSpec: this.state.serviceSpec});
	}

	serviceSpecFormIsValid() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		this.setState({errors: this.state.errors});
		return formIsValid;
	}

	saveServiceSpec(event) {
		event.preventDefault();

		if (!this.serviceSpecFormIsValid()) {
			return;
		}

		if (this.state.serviceSpec.id) {
			ServiceSpecActions.updateServiceSpec(this.state.serviceSpec);
		} else {
			ServiceSpecActions.createServiceSpec(this.state.serviceSpec);
		}
		
		this.setState({dirty: false});
		toastr.success('ServiceSpec saved.');
		this.transitionTo('serviceSpecs');
	}

	render() {
		return (
			<ServiceSpecForm
				serviceSpec={this.state.serviceSpec}
				onChange={this.setServiceSpecState}
				onSave={this.saveServiceSpec}
				errors={this.state.errors} />
		);
	}
}

module.exports = ManageServiceSpecPage;