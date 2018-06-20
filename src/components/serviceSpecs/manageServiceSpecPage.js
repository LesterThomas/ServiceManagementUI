"use strict";

var React = require('react');
var Router = require('react-router');
var ServiceSpecForm = require('./serviceSpecForm');
var ServiceSpecActions = require('../../actions/serviceSpecActions');
var ServiceSpecStore = require('../../stores/serviceSpecStore');
var toastr = require('toastr');

var ManageServiceSpecPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if (component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		return {
			serviceSpec: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var serviceSpecId = this.props.params.id; //from the path '/serviceSpec:id'
		if (serviceSpecId) {
			this.setState({serviceSpec: ServiceSpecStore.getServiceSpecById(serviceSpecId) });
		}
	},

	setServiceSpecState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.serviceSpec[field] = value;
		return this.setState({serviceSpec: this.state.serviceSpec});
	},

	serviceSpecFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.serviceSpec.firstName.length < 3) {
			this.state.errors.firstName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}

		if (this.state.serviceSpec.lastName.length < 3) {
			this.state.errors.lastName = 'Last name must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveServiceSpec: function(event) {
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
	},

	render: function() {
		return (
			<ServiceSpecForm
				serviceSpec={this.state.serviceSpec}
				onChange={this.setServiceSpecState}
				onSave={this.saveServiceSpec}
				errors={this.state.errors} />
		);
	}
});

module.exports = ManageServiceSpecPage;