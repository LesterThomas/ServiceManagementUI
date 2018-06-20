"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var ServiceSpecStore = require('../../stores/serviceSpecStore');
var ServiceSpecActions = require('../../actions/serviceSpecActions');
var ServiceSpecList = require('./serviceSpecList');

var ServiceSpecPage = React.createClass({
	getInitialState: function() {
		return {
			serviceSpecs: ServiceSpecStore.getAllServiceSpecs()
		};
	},

	componentWillMount: function() {
		ServiceSpecStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		ServiceSpecStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ serviceSpecs: ServiceSpecStore.getAllServiceSpecs() });
	},

	render: function() {
		return (
			<div>
				<h1>Service Specifications</h1>
				<ServiceSpecList serviceSpecs={this.state.serviceSpecs} />
			</div>
		);
	}
});

module.exports = ServiceSpecPage;