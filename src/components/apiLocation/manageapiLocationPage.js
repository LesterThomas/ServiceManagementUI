import React, { Component } from 'react';
import APILocationForm from './apiLocationForm';
import apiLocationAction from '../../actions/apiLocationAction';
import apiLocationStore from '../../stores/apiLocationStore';
import toastr from 'toastr';

class ManageapiLocationPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			apiLocation: apiLocationStore.getapiLocation(),
			errors: {},
			dirty: false
		};
		console.log('Initialising API Location', this.state);
	}

	componentWillMount() {
		this.setState({apiLocation: apiLocationStore.getapiLocation()});
		apiLocationStore.addChangeListener(this._onChange.bind(this));
	}

	//Clean up when this component is unmounted
	componentWillUnmount() {
		apiLocationStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange() {
		this.setState({ apiLocation: apiLocationStore.getapiLocation()});
	}

	setapiLocationState(event) {
		console.log('Updating API Location', event.target.value);

		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.apiLocation[field] = value;
		return this.setState({apiLocation: this.state.apiLocation});
	}

	apiLocationFormIsValid() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		this.setState({errors: this.state.errors});
		return formIsValid;
	}

	saveapiLocation(event) {
		event.preventDefault();

		if (!this.apiLocationFormIsValid()) {
			return;
		}

		apiLocationAction.updateapiLocation(this.state.apiLocation);
		
		this.setState({dirty: false});
		toastr.success('API Location saved.');
	}

	render() { 
		console.log('Rendering API Location', this.state);
		return (
			<div>
				<br />				
				<APILocationForm 
					apiLocation={this.state.apiLocation}
					onChange={this.setapiLocationState.bind(this)} 
					onSave={this.saveapiLocation.bind(this)}
					errors={this.state.errors} />
			</div>
		);
	}
}

module.exports = ManageapiLocationPage;